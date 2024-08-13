import jsonData from "../assets/data.json";
import { Product } from "../typescript/product";

export const getProductBySlug = (
  slug: string | undefined
): Product | undefined => {
  return jsonData.find((product) => product.slug === slug);
};
