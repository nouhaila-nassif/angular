import { Injectable } from '@angular/core';

import {ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[];

  constructor() {
    this.products = [
      { productId: 1, productName: "Cheese", productPrice: 34.00, dateCreation: new Date() },
      { productId: 2, productName: "Bread", productPrice: 3.00, dateCreation: new Date() },
      { productId: 3, productName: "Milk", productPrice: 7.00, dateCreation: new Date() }
    ];
  }
  productsList():ProductModel[]{
    return this.products;
  }
  addProduct(newProduct :ProductModel)
  {
    this.products.push(newProduct);
  }



}
