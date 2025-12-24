import { Injectable, computed, signal } from '@angular/core';
import { ProductApiFake } from '@shared/models/product-fake.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<ProductApiFake[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  addToCart(product: ProductApiFake) {
    this.cart.update((state) => [...state, product]);
  }
}
