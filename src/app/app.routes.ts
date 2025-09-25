import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sale',
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
  {
    path: 'user',
    loadComponent: () => import('./user/user.page').then( m => m.UserPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  {
    path: 'sale',
    loadComponent: () => import('./sale/sale.page').then( m => m.SalePage)
  },
  {
    path: 'dasboard',
    loadComponent: () => import('./dasboard/dasboard.page').then( m => m.DasboardPage)
  },
  {
    path: 'user-type',
    loadComponent: () => import('./user-type/user-type.page').then( m => m.UserTypePage)
  },
  {
    path: 'item-multiple-popup',
    loadComponent: () => import('./item-multiple-popup/item-multiple-popup.page').then( m => m.ItemMultiplePopupPage)
  },
  {
    path: 'sale-return',
    loadComponent: () => import('./sale-return/sale-return.page').then( m => m.SaleReturnPage)
  },
  {
    path: 'sale-defective',
    loadComponent: () => import('./sale-defective/sale-defective.page').then( m => m.SaleDefectivePage)
  },
  {
    path: 'sale-report',
    loadComponent: () => import('./sale-report/sale-report.page').then( m => m.SaleReportPage)
  },
  {
    path: 'item-report',
    loadComponent: () => import('./item-report/item-report.page').then( m => m.ItemReportPage)
  },
  {
    path: 'item-bar-code',
    loadComponent: () => import('./item-bar-code/item-bar-code.page').then( m => m.ItemBarCodePage)
  },
  {
    path: 'item-sale-popup',
    loadComponent: () => import('./item-sale-popup/item-sale-popup.page').then( m => m.ItemSalePopupPage)
  },
];
