import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/main/authentication/authentication.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    failed: boolean;
    loading = false;

    constructor(
        private fuseConfigService: FuseConfigService,
        private formBuilder: FormBuilder,
        private fuseProgressBarService: FuseProgressBarService,
        private router: Router,
        private authService: AuthenticationService,
    ) {
        this.fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                toolbar: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    login(): void {
        const credentials = this.loginForm.value;

        this.fuseProgressBarService.show();
        this.failed = false;
        this.loading = true;

        this.authService.login(credentials)
            .pipe(
                finalize(() => {
                    this.fuseProgressBarService.hide();
                    this.loading = false;
                }),
            )
            .subscribe((result) => {
                if (!result) {
                    this.failed = true;

                    return;
                }

                this.router.navigate(['/']);
        });
    }
}
