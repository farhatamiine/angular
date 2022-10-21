import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllColisComponent } from './all-colis/all-colis.component';

const routes: Routes = [
  {
        path: '',
        children: [{
            path: 'shipment',
            component: AllColisComponent
        }, ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColisRoutingModule { }
