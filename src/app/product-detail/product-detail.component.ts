import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from 'src/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  product: Product | undefined;

  ngOnInit(): void {
    let paramUrl = this.router.snapshot.paramMap;
    let id = Number(paramUrl.get('productId'));
    this.product = products.find((item) => item.id === id);
  }
}
