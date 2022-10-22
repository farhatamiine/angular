import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComptesComponent} from './comptes/comptes.component';
import {HistoryComponent} from './history/history.component';
import {PermissionComponent} from './permission/permission.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'comptes',
                component: ComptesComponent
            },
            {
                path: 'history',
                component: HistoryComponent
            },
            {
                path: 'permission',
                component: PermissionComponent
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminsRoutingModule {
}
