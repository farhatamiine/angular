import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { ComptesComponent } from './comptes/comptes.component';
import {MaterialModule} from '../app.module';
import { HistoryComponent } from './history/history.component';
import { PermissionComponent } from './permission/permission.component';


@NgModule({
  declarations: [
    ComptesComponent,
    HistoryComponent,
    PermissionComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    MaterialModule
  ]
})
export class AdminsModule { }
