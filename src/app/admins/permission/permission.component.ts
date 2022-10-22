import {Component, OnInit} from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-permission',
    templateUrl: './permission.component.html',
    styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
    public tableData1: TableData;
    profiles = [
        {value: 'admin-0', viewValue: 'Admin'},
        {value: 'manager-0', viewValue: 'Manager'},
    ];

    constructor() {
    }

    ngOnInit(): void {
        this.tableData1 = {
            headerRow: ['Resource name', 'None', 'Read', 'Write/Read'],
            dataRows: [
                ['Admin-John-Doe', 'false', 'true', 'true'],
                ['Manager-John-Doe', 'false', 'true', 'false'],
            ]
        };
    }

}
