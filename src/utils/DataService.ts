// src/utils/DataService.ts
import { helpers } from "../utils/helpers";
import { Product } from "../typescript/product";

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

      // Process data to create a unique set of categories
      const allCategories = new Map<string, Product>();
      for (const product of jsonData) {
        allCategories.set(helpers.slug(product.category), product);
      }

      this.cachedData = Array.from(allCategories.values());
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

  // Get unique category names for filtering
  public async getCategoryNames(): Promise<string[]> {
    const data = await this.fetchData();
    const categoryNames = new Set(data.map((product) => product.category));
    return Array.from(categoryNames);
  }

  // Get a product by slug
  public async getProductBySlug(slug: string): Promise<Product | undefined> {
    const data = await this.fetchData();
    return data.find((product) => product.slug === slug);
  }
}

// Create a single instance of the service
const dataService = new DataService();
export default dataService;
