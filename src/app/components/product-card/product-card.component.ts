import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from '../../models/product.model';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.hmtl',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productClicked = new EventEmitter<void>();

  onClick() {
    this.productClicked.emit();
  }
}

