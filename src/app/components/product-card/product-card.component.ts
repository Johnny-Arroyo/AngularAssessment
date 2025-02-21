import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productClicked = new EventEmitter<void>();

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/products', this.product.id]);
    // Optionally, you can still emit an event if needed:
    this.productClicked.emit();
  }
}


