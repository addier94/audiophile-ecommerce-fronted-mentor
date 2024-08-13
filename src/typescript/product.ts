export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface CategoryImage {
  png: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IncludeItem {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: Image;
  second: Image;
  third: Image;
}

export interface OtherProduct {
  slug: string;
  name: string;
  image: Image;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: Gallery;
  others: OtherProduct[];
}
