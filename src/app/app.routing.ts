import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {AddWarehouseComponent} from './add-warehouse/add-warehouse.component';
import {DriverComponent} from './driver/driver.component';
import {AddDriverComponent} from './add-driver/add-driver.component';
import {FacturesComponent} from './factures/factures.component';
import {AdministrationsComponent} from './administrations/administrations.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            }, {
                path: 'components',
                loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
            }, {
                path: 'gestion-colis',
                loadChildren: () => import('./colis/colis.module').then(m => m.ColisModule)
            }, {
                path: 'warehouses',
                component: WarehouseComponent,
            }, {
                path: 'warehouse/add-warehouse',
                component: AddWarehouseComponent,
            }, {
                path: 'drivers',
                component: DriverComponent,
            }, {
                path: 'drivers/add-driver',
                component: AddDriverComponent,
            },
            {
                path: 'package',
                loadChildren: () => import('./package/package.module').then(m => m.PackageModule)
            },
            {
                path: 'factures',
                component: FacturesComponent,
            },
            {
                path: 'administrations',
                component: AdministrationsComponent,
            },
            {
                path: '',
                loadChildren: () => import('./userpage/user.module').then(m => m.UserModule)
            }, {
                path: '',
                loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
            }
        ]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
        }]
    }
];
