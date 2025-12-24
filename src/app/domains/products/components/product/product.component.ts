import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { ProductApiFake } from '@shared/models/product-fake.model';

@Component({
  selector: 'app-product',
  imports: [CommonModule, TimeAgoPipe, RouterLinkWithHref, NgOptimizedImage],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input({ required: true }) product!: ProductApiFake;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
