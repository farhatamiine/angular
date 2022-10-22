import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-relay',
  templateUrl: './add-relay.component.html',
  styleUrls: ['./add-relay.component.css']
})
export class AddRelayComponent implements OnInit {

  constructor() { }
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
