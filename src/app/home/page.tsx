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
  const [categories, setCategories] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories data when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to fetch categories data from the service
  const fetchCategories = async () => {
    try {
      const data = await dataService.getAllData();
      setCategories(data);
    } catch (err) {
      setError("Failed to load categories");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Display loading or error message if necessary
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <main>
        <Header />
        <Container>
          <CategoriesList
            categories={categories}
            className="
            py-8
            sm:py-12
          "
          />
          {/* <Product1 /> */}
          <Product2 />
          <Product3 />
          {/* <BestGear className="py-24" /> */}
        </Container>
      </main>
    </>
  );
};
