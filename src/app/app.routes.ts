import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
//import { EditProductComponent } from './edit-product/edit-product.component';
//import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/productsList', pathMatch: 'full' }, // Redirection vers la liste des produits par défaut
  { path: 'productsList', component: ProductsListComponent },   // Route vers la liste des produits
  { path: 'add-product', component: AddProductComponent }   // Route pour ajouter un produit
//  { path: 'edit-product/:id', component: EditProductComponent }, // Route pour l'édition
  //{ path: '**', component: NotFoundComponent }
  // Route de secours pour les URLs non correspondantes (404)
];
