import { Injectable } from '@angular/core';
import { product_ex } from 'src/data';
import { Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAll():Product[]{
    return product_ex;
  }
}
