import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { AuthenticationModule } from 'app/main/authentication/authentication.module';
import { API_BASE_URL } from 'app/constants';
import { environment } from 'environments/environment';
import { PagesModule } from 'app/main/pages/pages.module';
import { registerLocaleData } from '@angular/common';
import japanese from '@angular/common/locales/ja';
import { japanesePaginatorIntl } from 'app/main/common/paginator-intl';
import { MatPaginatorIntl } from '@angular/material';

registerLocaleData(japanese, 'ja');

const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: 'sample',
    },
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        AuthenticationModule,
        PagesModule,
    ],
    bootstrap: [
        AppComponent,
    ],
    providers: [
        { provide: API_BASE_URL, useValue: environment.api.baseUrl },
        { provide: LOCALE_ID, useValue: 'ja' },
        { provide: MatPaginatorIntl, useValue: japanesePaginatorIntl() },
    ],
})
export class AppModule {
}
