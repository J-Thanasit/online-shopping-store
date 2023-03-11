import { Injectable } from '@angular/core';
import { product_ex } from 'src/data';
import { Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  public getAll():Product[]{
    return product_ex;
  }

  public getAllProductBySearch(searchTerm:string){
    return this.getAll().filter(products => products.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  public getProductById(productId:string):Product{
    return this.getAll().find(products => products.id == productId) ?? new Product();
  }
}
