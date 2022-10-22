import {Component, OnInit} from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-warehouse',
    templateUrl: './warehouse.component.html',
    styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

    constructor() {
    }

    public tableData1: TableData;

    warehouses = [
        {value: 'depot-disponible', viewValue: 'depot disponible'},
        {value: 'depot-archive', viewValue: 'depot archive'},
    ];

    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Nom', 'Adresse', 'Ville', 'Responsable', 'Actions'],
            dataRows: [
                ['Jhon Doe', '393 route d\'eljadida oasis', 'Paris', 'Someone', 'btn-round'],
            ]
        };
    }

}
