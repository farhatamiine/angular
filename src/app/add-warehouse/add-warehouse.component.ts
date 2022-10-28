import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-warehouse',
    templateUrl: './add-warehouse.component.html',
    styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {
    addWarehouse: FormGroup;

    constructor(private fb: FormBuilder) {
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
        this.addWarehouse = this.fb.group({
            name: ['', Validators.required ],
            address: new FormControl('', Validators.compose([
                Validators.required,
                Validators.min(10),
                Validators.max(30),
            ])),
            telephone: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')
            ])),
            responsable: ['', Validators.required ],
            ville: ['', Validators.required ],
        });


    }

}
