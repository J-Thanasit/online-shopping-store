import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit{

  products:Product[] = [];
  constructor(private productSV:ProductService){
    this.products = productSV.getAll();
  }

  ngOnInit(): void {
  }
}
