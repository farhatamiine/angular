import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.css']
})
export class AddSellerComponent implements OnInit {
  cities = [
    {value: 'paris-0', viewValue: 'Paris'},
    {value: 'miami-1', viewValue: 'Miami'},
    {value: 'bucharest-2', viewValue: 'Bucharest'},
    {value: 'new-york-3', viewValue: 'New York'},
    {value: 'london-4', viewValue: 'London'},
    {value: 'barcelona-5', viewValue: 'Barcelona'},
    {value: 'moscow-6', viewValue: 'Moscow'},
  ];

  paimentMode = [
    {value: 'espèce-0', viewValue: 'espèce'},
    {value: 'chèque-0', viewValue: 'chèque'},
    {value: 'virement-0', viewValue: 'virement'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
