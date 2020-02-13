import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TokenStorageService {

    constructor() {
    }

    public getAccessToken(): Observable<string> {
        const token = localStorage.getItem('accessToken') as string;

        return of(token);
    }

    public getRefreshToken(): Observable<string> {
        const token = localStorage.getItem('refreshToken') as string;

        return of(token);
    }

    public setAccessToken(token: string): TokenStorageService {
        localStorage.setItem('accessToken', token);

        return this;
    }

    public setRefreshToken(token: string): TokenStorageService {
        localStorage.setItem('refreshToken', token);

        return this;
    }

    public clear(): void {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
}
