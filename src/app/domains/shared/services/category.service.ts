import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CategoryApiFake } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<CategoryApiFake[]>(
      `https://dummyjson.com/products/categories`,
    );
  }
}
