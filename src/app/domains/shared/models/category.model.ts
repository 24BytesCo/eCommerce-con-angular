export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface CategoryApiFake {
  slug: string;
  name: string;
  url: string;
}

// Como el JSON raíz es un array directo:
export type CategoriesResponse = CategoryApiFake[];
