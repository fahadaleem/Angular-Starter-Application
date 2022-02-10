import { Component, OnInit } from '@angular/core';
import { products, Product } from 'src/products';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit {
  products: Product[] = products;

  constructor() {}

  ngOnInit(): void {}

  handleBuyNow(id: number): void {
    alert(`You have buy product with id number ${id}`);
  }
}
