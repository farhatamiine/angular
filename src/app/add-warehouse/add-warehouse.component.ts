import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-warehouse',
    templateUrl: './add-warehouse.component.html',
    styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

    constructor() {
    }

    cities = [
        {value: 'paris-0', viewValue: 'Paris'},
        {value: 'miami-1', viewValue: 'Miami'},
        {value: 'bucharest-2', viewValue: 'Bucharest'},
        {value: 'new-york-3', viewValue: 'New York'},
        {value: 'london-4', viewValue: 'London'},
        {value: 'barcelona-5', viewValue: 'Barcelona'},
        {value: 'moscow-6', viewValue: 'Moscow'},
    ];

    ngOnInit(): void {
    }

}
