import jsonData from "../assets/data.json";
import { Product } from "../typescript/product";
import { helpers } from "../utils/helpers";

export const getNavList = () => {
  const allCategories = new Map();
  for (const product of jsonData) {
    allCategories.set(helpers.slug(product.category), product);
  }

  const categories: Product[] = [];

  for (const product of allCategories.values()) {
    categories.push(product);
  }

  return categories;
};
