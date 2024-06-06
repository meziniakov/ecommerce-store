export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  slug?: string;
  image?: string;
  billboardId?: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: number | bigint;
  isFeatured: boolean;
  size?: string;
  color?: string;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}
