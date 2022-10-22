import {Component, OnInit} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

// Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'dashboard'
}, {
    path: '/gestion-colis',
    title: 'Gestion Colis',
    type: 'sub',
    icontype: 'apps',
    collapse: 'gestion-colis',
    children: [
        {path: 'shipment', title: 'Collis', ab: 'C'},
        {path: 'seller', title: 'Vendeurs', ab: 'V'},
        {path: 'relay', title: 'Point de relais', ab: 'R'},
        {path: 'customers', title: 'Client', ab: 'CL'},
    ]
},
    {
        path: '/warehouses',
        title: 'Warehouse',
        type: 'link',
        icontype: 'warehouse'
    },
    {
        path: '/drivers',
        title: 'Drivers',
        type: 'link',
        icontype: 'local_shipping'
    },
    {
        path: '/package',
        title: 'Packages',
        type: 'sub',
        icontype: 'inventory_2',
        collapse: 'package',
        children: [
            {path: 'packages', title: 'Packages', ab: 'P'},
            {path: 'providers', title: 'Fourniseurs', ab: 'F'},
        ]
    },
    {
        path: '/factures',
        title: 'Factures',
        type: 'link',
        icontype: 'receipt_long'
    },
    {
        path: '/admins',
        title: 'Administration',
        type: 'sub',
        icontype: 'admin_panel_settings',
        collapse: 'admins',
        children: [
            {path: 'comptes', title: 'Comptes', ab: 'C'},
            {path: 'history', title: 'Historique', ab: 'HS'},
            {path: 'permission', title: 'Permission', ab: 'PM'},
        ]
    },
    {
        path: '/parametres',
        title: 'Parametres',
        type: 'link',
        icontype: 'settings'
    },

];

@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ps: any;

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }

    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }

    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
