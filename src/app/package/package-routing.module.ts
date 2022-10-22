import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllColisComponent} from '../colis/all-colis/all-colis.component';
import {AddShipmentComponent} from '../colis/add-shipment/add-shipment.component';
import {VendeursComponent} from '../colis/vendeurs/vendeurs.component';
import {AddSellerComponent} from '../colis/add-seller/add-seller.component';
import {RelayComponent} from '../colis/relay/relay.component';
import {AddRelayComponent} from '../colis/add-relay/add-relay.component';
import {ClientsComponent} from '../colis/clients/clients.component';
import {AddClientsComponent} from '../colis/add-clients/add-clients.component';
import {PackagesComponent} from './packages/packages.component';
import {AddPackagesComponent} from './add-packages/add-packages.component';
import {ProvidersComponent} from './providers/providers.component';
import {AddProvidersComponent} from './add-providers/add-providers.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'packages',
                component: PackagesComponent
            },
            {
                path: 'add-package',
                component: AddPackagesComponent
            },
            {
                path: 'providers',
                component: ProvidersComponent
            },
            {
                path: 'add-provider',
                component: AddProvidersComponent
            },],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PackageRoutingModule {
}
