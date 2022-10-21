import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColisRoutingModule } from './colis-routing.module';
import { AllColisComponent } from './all-colis/all-colis.component';
import { AddShipmentComponent } from './add-shipment/add-shipment.component';
import {MaterialModule} from '../app.module';



@NgModule({
  declarations: [
    AllColisComponent,
    AddShipmentComponent
  ],
  imports: [
    CommonModule,
    ColisRoutingModule,
    MaterialModule
  ]
})
export class ColisModule { }
