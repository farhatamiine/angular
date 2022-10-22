import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColisRoutingModule } from './colis-routing.module';
import { AllColisComponent } from './all-colis/all-colis.component';
import { AddShipmentComponent } from './add-shipment/add-shipment.component';
import {MaterialModule} from '../app.module';
import { VendeursComponent } from './vendeurs/vendeurs.component';
import { AddSellerComponent } from './add-seller/add-seller.component';
import { RelayComponent } from './relay/relay.component';
import { AddRelayComponent } from './add-relay/add-relay.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientsComponent } from './add-clients/add-clients.component';



@NgModule({
  declarations: [
    AllColisComponent,
    AddShipmentComponent,
    VendeursComponent,
    AddSellerComponent,
    RelayComponent,
    AddRelayComponent,
    ClientsComponent,
    AddClientsComponent
  ],
  imports: [
    CommonModule,
    ColisRoutingModule,
    MaterialModule
  ]
})
export class ColisModule { }
