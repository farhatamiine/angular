import {Component, OnInit} from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-vendeurs',
    templateUrl: './vendeurs.component.html',
    styleUrls: ['./vendeurs.component.css']
})
export class VendeursComponent implements OnInit {

    public tableData1: TableData;
    sellers: [
        {value: 'vendeur-disponible-0', viewValue: 'Vendeurs Disponible'},
        {value: 'vendeur-archive-1', viewValue: 'Vendeurs Archives'},
    ];

    constructor() {
    }

    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Nom', 'RC', 'Statut', 'Adresse', 'Ville', 'Responsable', 'Compte', 'Actions'],
            dataRows: [
                ['Shop Andalous', '122333', '393 route d\'eljadida oasis', 'Ngaoundéré-Djérem', 'resp achat', 'Non inscrit', 'btn-round'],
            ]
        };
    }

}
