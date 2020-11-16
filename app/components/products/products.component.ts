import { Component, OnInit } from '@angular/core';
import{ sampleProducts } from '../data/products'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



  constructor() { }
  public gridView: any[] = sampleProducts;
  ngOnInit(): void {
  }


}
