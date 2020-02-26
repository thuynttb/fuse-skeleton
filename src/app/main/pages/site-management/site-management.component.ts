import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-site-management',
    templateUrl: './site-management.component.html',
    styleUrls: ['./site-management.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class SiteManagementComponent implements OnInit {
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    displayedColumns = [
        'date',
        'name',
        'equipment',
        'preparation',
        'on_site',
        'cleanup',
        'preparing_next_time',
        'actions',
    ];

    constructor() {
        this.dataSource = new MatTableDataSource<any>([
            {
                date: new Date(),
                name: '現場 A',
                equipment: 100,
                preparation: 100,
                on_site: 100,
                cleanup: 100,
                preparing_next_time: 100,
            },
            {
                date: new Date(),
                name: '現場 B',
                equipment: 100,
                preparation: 100,
                on_site: 100,
                cleanup: 100,
                preparing_next_time: 100,
            },
            {
                date: new Date(),
                name: '現場 C',
                equipment: 100,
                preparation: 100,
                on_site: 100,
                cleanup: 100,
                preparing_next_time: 100,
            },
            {
                date: new Date(),
                name: '現場 D',
                equipment: 100,
                preparation: 100,
                on_site: 100,
                cleanup: 100,
                preparing_next_time: 100,
            },
            {
                date: new Date(),
                name: '現場 E',
                equipment: 100,
                preparation: 100,
                on_site: 100,
                cleanup: 100,
                preparing_next_time: 100,
            },
            {
                date: new Date(),
                name: '現場 F',
                equipment: 100,
                preparation: 100,
                on_site: 100,
                cleanup: 100,
                preparing_next_time: 100,
            },
            {
                date: new Date(),
                name: '現場 G',
                equipment: 100,
                preparation: 100,
                on_site: 100,
                cleanup: 100,
                preparing_next_time: 100,
            },
            {
                date: new Date(),
                name: '現場 H',
                equipment: 100,
                preparation: 100,
                on_site: 100,
                cleanup: 100,
                preparing_next_time: 100,
            },
            {
                date: new Date(),
                name: '現場 I',
                equipment: 100,
                preparation: 100,
                on_site: 100,
                cleanup: 100,
                preparing_next_time: 100,
            },
        ]);
    }

    ngOnInit(): void {
    }

}
