import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductModel} from '../models/product.model';
import {ProductService} from '../services/product.service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router'; // Importer CommonModule

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],

 // Ajoutez CommonModule ici
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'] // Correction du champ styleUrls
})
export class ProductsListComponent {
  products: ProductModel[];

  constructor(private productService : ProductService) {
    this.products = productService.productsList();
  }
  deleteProduct(product :ProductModel){
    this.productService.deleteProduct(product);
  }
}
