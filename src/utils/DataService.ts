import { Product } from "../typescript/product";
import { helpers } from "./helpers";

class DataService {
  private cachedData: Product[] | null = null;

  // Fetch data from the JSON file and cache it
  private async fetchData(): Promise<Product[]> {
    if (this.cachedData) {
      return this.cachedData; // Return cached data if it exists
    }

    try {
      const response = await fetch("/assets/data.json");
      const jsonData: Product[] = await response.json();

      // Cache all products without filtering by category
      this.cachedData = jsonData;
      return this.cachedData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  // Retrieve all products
  public async getAllData(): Promise<Product[]> {
    return await this.fetchData();
  }

  // Get unique categories with properties
  public async getUniqueCategories(): Promise<Product[]> {
    const data = await this.fetchData();
    const uniqueCategoriesMap = new Map<string, Product>();

    data.forEach((product) => {
      const categoryKey = helpers.slug(product.category);
      if (!uniqueCategoriesMap.has(categoryKey)) {
        uniqueCategoriesMap.set(categoryKey, product);
      }
    });

    return Array.from(uniqueCategoriesMap.values());
  }

  // Retrieve products belonging to a specific category
  public async getProductsByCategory(category: string): Promise<Product[]> {
    const data = await this.fetchData();
    return data.filter((product) => product.category === category);
  }

  // Get unique category names for filtering
  public async getCategoryNames(): Promise<string[]> {
    const data = await this.fetchData();
    const categoryNames = new Set(data.map((product) => product.category));
    return Array.from(categoryNames);
  }

  // Get a product by slug
  public async getProductById(id: string): Promise<Product | undefined> {
    const data = await this.fetchData();
    return data.find((product) => product.id.toString() === id);
  }
}

// Create a single instance of the service
const dataService = new DataService();
export default dataService;
