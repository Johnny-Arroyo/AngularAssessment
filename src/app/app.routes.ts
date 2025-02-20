import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent }, // ✅ Show product list
  { path: 'products/:id', component: ProductDetailComponent }, // ✅ Show product details
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // ✅ Redirect root to products
  { path: '**', redirectTo: '/products' } // ✅ Catch-all for invalid URLs
];
