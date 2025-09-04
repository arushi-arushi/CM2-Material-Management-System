import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'item-entry-popup',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'forget',
    loadComponent: () => import('./forget/forget.page').then( m => m.ForgetPage)
  },
  {
    path: 'header',
    loadComponent: () => import('./header/header.page').then( m => m.HeaderPage)
  },
  {
    path: 'stock-entry',
    loadComponent: () => import('./stock-entry/stock-entry.page').then( m => m.StockEntryPage)
  },
  {
    path: 'sidebar',
    loadComponent: () => import('./sidebar/sidebar.page').then( m => m.SidebarPage)
  },
  {
    path: 'item-entry-popup',
    loadComponent: () => import('./item-entry-popup/item-entry-popup.page').then( m => m.ItemEntryPopupPage)
  },
];
