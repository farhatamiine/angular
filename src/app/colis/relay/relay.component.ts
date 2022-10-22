import {Component, OnInit} from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
    selector: 'app-relay',
    templateUrl: './relay.component.html',
    styleUrls: ['./relay.component.css']
})
export class RelayComponent implements OnInit {
    public tableData1: TableData;


    constructor() {
    }

    relays = [
        {value: 'point-disponible', viewValue: 'Point de relais disponible'},
        {value: 'point-archive', viewValue: 'Point de relais archive'},
    ];

    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Nom', 'RC', 'Adresse', 'Ville', 'Responsable', 'Compte', 'Actions'],
            dataRows: [
                ['Relay 1', '122333', '393 route d\'eljadida oasis', 'Ville 1', 'Someone', 'Non Inscrit', 'btn-round'],
            ]
        };
    }

}
