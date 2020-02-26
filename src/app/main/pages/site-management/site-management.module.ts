import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { SiteManagementComponent } from 'app/main/pages/site-management/site-management.component';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatRippleModule, MatTableModule } from '@angular/material';

const routes = [
    {
        path: '',
        component: SiteManagementComponent,
        children: [],
    },
];

@NgModule({
    declarations: [
        SiteManagementComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatRippleModule,
    ],
})
export class SiteManagementModule {
}
