import jsonData from "../assets/data.json";
import { Product } from "../typescript/product";

const getByCategory = (category: string): Product[] => {
  const filteredByCategory = jsonData.filter(
    (product) => product.category === category
  );
  return filteredByCategory;
};

export default getByCategory;
