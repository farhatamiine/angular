import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-shipment',
    templateUrl: './add-shipment.component.html',
    styleUrls: ['./add-shipment.component.css']
})
export class AddShipmentComponent implements OnInit {

    constructor() {
    }

    people = [
        {value: 'Ahmed-0', viewValue: 'Ahmed'},
        {value: 'Mohammed-1', viewValue: 'Mohammed'},
        {value: 'Karim-2', viewValue: 'Karim'},
        {value: 'Omar-3', viewValue: 'Omar'},
        {value: 'Ousama-4', viewValue: 'Ousama'},
        {value: 'Hamza-5', viewValue: 'Hamza'},
        {value: 'Badr-6', viewValue: 'Badr'},
    ];

    livraison = [
        {value: 'Domicile-0', viewValue: 'Domicile'},
        {value: 'Point-Relais-1', viewValue: 'Point Relais'},

    ];

    triCenter = [
        {value: 'centre-1', viewValue: 'Centre 1'},
        {value: 'centre-2', viewValue: 'Centre 2'},
        {value: 'centre-3', viewValue: 'Centre 3'},
        {value: 'centre-4', viewValue: 'Centre 4'},
    ];
    ngOnInit(): void {
    }

}
