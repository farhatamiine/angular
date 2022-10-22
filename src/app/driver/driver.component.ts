import {Component, OnInit} from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
    selector: 'app-driver',
    templateUrl: './driver.component.html',
    styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
    drivers = [
        {value: 'transporteurs-en-ligne', viewValue: 'Transporteurs en ligne'},
        {value: 'transporteurs-archive', viewValue: 'Transporteurs Archivés'},
    ];

    public tableData1: TableData;

    constructor() {
    }

    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Nom Prénom', 'Adresse', 'Ville', 'Mobile', 'Compte', 'Actions'],
            dataRows: [
                ['Jhon Doe', '393 route d\'eljadida oasis', 'Paris', '069805420', 'Someone', 'btn-round'],
            ]
        };
    }

}
