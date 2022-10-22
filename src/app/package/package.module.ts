import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { PackagesComponent } from './packages/packages.component';
import { AddPackagesComponent } from './add-packages/add-packages.component';
import { ProvidersComponent } from './providers/providers.component';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import {MaterialModule} from '../app.module';


@NgModule({
  declarations: [
    PackagesComponent,
    AddPackagesComponent,
    ProvidersComponent,
    AddProvidersComponent
  ],
    imports: [
        CommonModule,
        PackageRoutingModule,
        MaterialModule
    ]
})
export class PackageModule { }
