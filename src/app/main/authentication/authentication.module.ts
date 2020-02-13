import { NgModule } from '@angular/core';
import { AUTH_SERVICE, AuthModule, PROTECTED_FALLBACK_PAGE_URI, PUBLIC_FALLBACK_PAGE_URI } from 'ngx-auth';
import { LoginModule } from 'app/main/authentication/login/login.module';
import { AuthenticationService } from 'app/main/authentication/authentication.service';

export function factory(authenticationService: AuthenticationService): AuthenticationService {
    return authenticationService;
}

@NgModule({
    declarations: [],
    imports: [
        AuthModule,
        LoginModule,
    ],
    providers: [
        {
            provide: PROTECTED_FALLBACK_PAGE_URI,
            useValue: '/',
        },
        {
            provide: PUBLIC_FALLBACK_PAGE_URI,
            useValue: '/auth/login',
        },
        {
            provide: AUTH_SERVICE,
            deps: [AuthenticationService],
            useFactory: factory,
        },
    ],
})
export class AuthenticationModule {
}
