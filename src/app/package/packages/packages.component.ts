import {Component, OnInit} from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
    selector: 'app-packages',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {


    providers = [
        {value: 'Ahmed-0', viewValue: 'Ahmed'},
    ];

    constructor() {
    }

    public tableData1: TableData;

    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Ref.', 'Fournisseur', 'Point relais', 'Ville', 'Date', 'Actions'],
            dataRows: [
                ['2682880', 'Ahemd', 'Somewhere', 'Mohammedia', '22/10/2022', 'btn-round'],
            ]
        };
    }

}
