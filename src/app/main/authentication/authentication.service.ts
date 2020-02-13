import { Inject, Injectable } from '@angular/core';
import { AuthService } from 'ngx-auth';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TokenStorageService } from 'app/main/authentication/token-storage.service';
import { API_BASE_URL } from 'app/constants';

interface Tokens {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService implements AuthService {
    private interruptedUrl: string;

    constructor(
        @Inject(API_BASE_URL) private apiBaseUrl: string,
        private http: HttpClient,
        private tokenStorage: TokenStorageService,
    ) {
    }

    public isAuthorized(): Observable<boolean> {
        return this.tokenStorage
            .getAccessToken()
            .pipe(map(token => !!token));
    }

    public getAccessToken(): Observable<string> {
        return this.tokenStorage.getAccessToken();
    }

    public refreshToken(): Observable<any> {
        return this.tokenStorage
            .getRefreshToken()
            .pipe(
                switchMap((token: string) => {
                    return this.http.post(`${this.apiBaseUrl}/token/refresh`, { refresh_token: token });
                }),
                tap((tokens: Tokens) => this.storeTokens(tokens)),
                catchError((err) => {
                    this.logout();

                    return throwError(err);
                }),
            );
    }

    public refreshShouldHappen(response: HttpErrorResponse): boolean {
        return response.status === 401;
    }

    public verifyRefreshToken(req: HttpRequest<any>): boolean {
        return req.url.endsWith('token/refresh');
    }

    public skipRequest(req: HttpRequest<any>): boolean {
        return true;
    }

    public getInterruptedUrl(): string {
        return this.interruptedUrl;
    }

    public setInterruptedUrl(url: string): void {
        this.interruptedUrl = url;
    }

    public login(credentials): Observable<any> {
        return this.http.post(`${this.apiBaseUrl}/auth/login`, credentials)
            .pipe(
                tap((tokens: Tokens) => this.storeTokens(tokens)),
                catchError(() => {
                    return of(false);
                }),
            );
    }

    public logout(): void {
        this.tokenStorage.clear();
        location.reload();
    }

    private storeTokens(tokens: Tokens): void {
        this.tokenStorage
            .setAccessToken(tokens.access_token)
            .setRefreshToken(tokens.refresh_token);
    }
}
