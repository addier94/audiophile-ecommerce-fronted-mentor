export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Includes {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: Image;
  second: Image;
  third: Image;
}

export interface Other {
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
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Includes[];
  gallery: Gallery;
  others: Other[];
}
