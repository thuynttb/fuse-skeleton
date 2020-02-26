import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: 'site-management',
        loadChildren: () => import('./site-management/site-management.module').then(module => module.SiteManagementModule),
    },
    {
        path: 'equipment-list',
        loadChildren: () => import('./equipment-list/equipment-list.module').then(module => module.SiteManagementModule),
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
})
export class PagesModule {
}
