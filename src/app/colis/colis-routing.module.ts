import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllColisComponent} from './all-colis/all-colis.component';
import {AddShipmentComponent} from './add-shipment/add-shipment.component';
import {AddSellerComponent} from './add-seller/add-seller.component';
import {VendeursComponent} from './vendeurs/vendeurs.component';
import {RelayComponent} from './relay/relay.component';
import {AddRelayComponent} from './add-relay/add-relay.component';
import {ClientsComponent} from './clients/clients.component';
import {AddClientsComponent} from './add-clients/add-clients.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'shipment',
                component: AllColisComponent
            },
            {
                path: 'add-shipment',
                component: AddShipmentComponent
            },
            {
                path: 'seller',
                component: VendeursComponent
            },
            {
                path: 'add-seller',
                component: AddSellerComponent
            }, {
                path: 'relay',
                component: RelayComponent
            },
            {
                path: 'add-relais',
                component: AddRelayComponent
            }, {
                path: 'customers',
                component: ClientsComponent
            },
            {
                path: 'add-customer',
                component: AddClientsComponent
            }, ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ColisRoutingModule {
}
