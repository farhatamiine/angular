import {Component, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-all-colis',
    templateUrl: './all-colis.component.html',
    styleUrls: ['./all-colis.component.css']
})


export class AllColisComponent implements OnInit {

    public tableData1: TableData;
    addShipment = '/add-shipment';
    showFilter = false;
    modalOption: NgbModalOptions = {}; // not null!
    closeResult = '';
    people = [
        {value: 'Ahmed-0', viewValue: 'Ahmed'},
        {value: 'Mohammed-1', viewValue: 'Mohammed'},
        {value: 'Karim-2', viewValue: 'Karim'},
        {value: 'Omar-3', viewValue: 'Omar'},
        {value: 'Ousama-4', viewValue: 'Ousama'},
        {value: 'Hamza-5', viewValue: 'Hamza'},
        {value: 'Badr-6', viewValue: 'Badr'},
    ];

    triCenter = [
        {value: 'centre-1', viewValue: 'Centre 1'},
        {value: 'centre-2', viewValue: 'Centre 2'},
        {value: 'centre-3', viewValue: 'Centre 3'},
        {value: 'centre-4', viewValue: 'Centre 4'},
    ];
    constructor(private modalService: NgbModal, private router: Router) {
    }


    open(content) {
        console.log(content);

        this.modalService.open(content, this.modalOption);
    }


    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Numéro', 'N° expédition', 'Statut', 'Date d\'enlèvement', 'Point d\'enlèvement', 'Date d\'expiration', 'Client', 'Livraison', 'Vendeur', 'Point relais', 'Actions'],
            dataRows: [
                ['20', '202209110020', ' Non recupere', '24-09-2022 12:00', 'centretri001-Ngaoundéré-Djérem', '08-10-2022 12:00', 'client_AA v_A', 'point relais', 'eric', 'Kawtar Shop', 'btn-round'],
            ]
        };
    }

    toggleFilter(): void {
        this.showFilter = !this.showFilter;
        console.log(this.showFilter);
    }

    redirectToShipment() {
       this.router.navigateByUrl('add-shipment').then(r => console.log(r));
    }
}
