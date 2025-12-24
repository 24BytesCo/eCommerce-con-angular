export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // Formato fecha ISO
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string; // Formato fecha ISO
  updatedAt: string; // Formato fecha ISO
  barcode: string;
  qrCode: string;
}

export interface ProductApiFake {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string; // Opcional: no está presente en frutas o carnes
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface ProductsResponse {
  products: ProductApiFake[];
  total: number;
  skip: number;
  limit: number;
}
