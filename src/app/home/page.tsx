import { useEffect, useState } from "react";
import { BestGear } from "../../components/common/BestGear";
import Container from "../../components/common/Container";
import { CategoriesList } from "../../components/common/Navbar/CategoriesList";
import { Header } from "./__components/Header";
import { Product1 } from "./__components/Product1";
import { Product2 } from "./__components/Product2";
import { Product3 } from "./__components/Product3";
import { Product } from "../../typescript/product";
import dataService from "../../utils/DataService";

export const Home = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch allProducts data when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to fetch allProducts data from the service
  const fetchCategories = async () => {
    try {
      const [productData, categoryData] = await Promise.all([
        dataService.getAllData(),
        dataService.getUniqueCategories(),
      ]);

      setAllProducts(productData);
      setUniqueCategories(categoryData);
    } catch (err) {
      setError("Failed to load data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <main>
        <Header />
        <Container>
          <CategoriesList
            categories={uniqueCategories}
            className="
            py-8
            sm:py-12
          "
          />
          <Product1 product={allProducts[5]} />
          <Product2 product={allProducts[4]} />
          <Product3 product={allProducts[0]} />
          <BestGear className="py-24" />
        </Container>
      </main>
    </>
  );
};
