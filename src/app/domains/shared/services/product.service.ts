import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  ProductApiFake,
  ProductsResponse,
} from '@shared/models/product-fake.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts(category_name?: string) {
    if (category_name) {
      const url = new URL(
        `https://dummyjson.com/products/category/${category_name}`,
      );
      return this.http.get<ProductsResponse>(url.toString()).pipe();
    }
    const url = new URL(`https://dummyjson.com/products`);
    return this.http.get<ProductsResponse>(url.toString()).pipe();
  }

  getOne(id: string) {
    console.log('id', id);

    return this.http.get<ProductApiFake>(
      `https://dummyjson.com/products/${id}`,
    );
  }
}
