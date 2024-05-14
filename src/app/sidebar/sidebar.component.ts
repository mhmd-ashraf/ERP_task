import { Component } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/organizations', title: 'Organizations',  icon: 'design_app', class: '' },
    { path: '/organization-sheets', title: 'Organization Sheets',  icon:'education_atom', class: '' },
    { path: '/inventory', title: 'Inventory',  icon:'location_map-big', class: '' },
    { path: '/catalog', title: 'Catalog',  icon:'ui-1_bell-53', class: '' },

    { path: '/sku', title: 'SKU',  icon:'users_single-02', class: '' },
    { path: '/sku-tracking', title: 'SKU tracking',  icon:'design_bullet-list-67', class: '' },
    { path: '/ordering-invoices', title: 'Ordering/Invoices',  icon:'text_caps-small', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // menuItems!: any[];
  menuItems: RouteInfo[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      return  window.innerWidth > 991;
  };

  // isSidebarOpen: boolean = false;

  // toggleSidebar() {
  //   this.isSidebarOpen = !this.isSidebarOpen;
  // }
}
