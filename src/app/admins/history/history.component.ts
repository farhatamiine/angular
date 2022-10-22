import {Component, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
    public tableData1: TableData;
    myDate = formatDate(new Date(), 'dd/MM/yyyy', 'en');

    constructor() {

    }

    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Date', 'Account', 'Profile', 'Change', 'Url', 'Item', 'details'],
            dataRows: [
                ['22/02/2022', 'Andrew Mike', 'Admin', '2022', 'www.google.com', 'Item1', 'Remove item 1'],
            ]
        };
    }

}
