import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }
  public tableData1: TableData;
  ngOnInit(): void {
    this.tableData1 = {
      headerRow: ['Nom Prenom', 'Adresse', 'Ville', 'Mobile', 'Email', 'Actions'],
      dataRows: [
        ['Jhon Doe', '393 route d\'eljadida oasis', 'Paris', '0690945082', 'example@mail.com', 'btn-round'],
      ]
    };
  }

}
