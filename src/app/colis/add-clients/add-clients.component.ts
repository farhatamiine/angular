import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-clients',
    templateUrl: './add-clients.component.html',
    styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {
    cities = [
        {value: 'paris-0', viewValue: 'Paris'},
        {value: 'miami-1', viewValue: 'Miami'},
        {value: 'bucharest-2', viewValue: 'Bucharest'},
        {value: 'new-york-3', viewValue: 'New York'},
        {value: 'london-4', viewValue: 'London'},
        {value: 'barcelona-5', viewValue: 'Barcelona'},
        {value: 'moscow-6', viewValue: 'Moscow'},
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
