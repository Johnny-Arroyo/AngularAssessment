import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent {
  product$!: Observable<Product | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.productService.getProductById(id);
  }
}
