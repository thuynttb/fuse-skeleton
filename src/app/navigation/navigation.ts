import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        translate: 'NAV.DASHBOARD',
        type: 'item',
        icon: 'dashboard',
        url: '/dashboard',
    },
    {
        id: 'site-management',
        title: 'Site Management',
        translate: 'NAV.SITE_MANAGEMENT',
        type: 'item',
        icon: 'business',
        url: '/site-management',
    },
    {
        id: 'equipment_list',
        title: 'Equipment List',
        translate: 'NAV.EQUIPMENT_LIST',
        type: 'item',
        icon: 'business',
        url: '/equipment-list',
    },

    // {
    //     id: 'applications',
    //     title: 'Applications',
    //     translate: 'NAV.APPLICATIONS',
    //     type: 'group',
    //     children: [
    //         {
    //             id: 'site-management',
    //             title: 'Site Management',
    //             translate: 'NAV.SITE_MANAGEMENT.TITLE',
    //             type: 'item',
    //             icon: 'business',
    //             url: '/site-management',
    //         },
    //     ],
    // },
];
