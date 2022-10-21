import {Component, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
    showFilter = false;
    closeResult: string;

    constructor(private modalService: NgbModal) {
    }


    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
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

}
