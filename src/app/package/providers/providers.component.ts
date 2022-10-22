import {Component, OnInit} from '@angular/core';


declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-providers',
    templateUrl: './providers.component.html',
    styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

    providers = [
        {value: 'fournisseurs-en-ligne', viewValue: 'Fournisseurs en ligne'},
        {value: 'fournisseurs-archive', viewValue: 'Fournisseurs Archivés'},
    ];

    public tableData1: TableData;


    constructor() {
    }


    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Nom', 'Adresse', 'Ville', 'Mobile', 'Actions'],
            dataRows: [
                ['Shop Andalous', '393 route d\'eljadida oasis', 'Ngaoundéré-Djérem', '05450588', 'btn-round'],
            ]
        };
    }

}
