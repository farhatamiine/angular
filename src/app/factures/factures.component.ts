import {Component, OnInit} from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-factures',
    templateUrl: './factures.component.html',
    styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {

    constructor() {
    }

    providers = [
        {value: 'Ahmed-0', viewValue: 'Ahmed'},
    ];
    public tableData1: TableData;

    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Vendeur', 'N° Facture', 'Mois', 'Montant Ht', 'Montant ttc', 'Actions'],
            dataRows: [
                ['Nabil Soufian', '1022-FC0046', '10-2022', '0 DH', '0 DH', 'btn-round'],
            ]
        };
    }

}
