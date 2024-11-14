import React, { useEffect, useState } from "react";
import { Product } from "../../typescript/product";
import dataService from "../../utils/DataService";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

const WithLayout = <P extends object>(Component: React.ComponentType<P>) => {
  const Layout: React.FC<P> = (props: P) => {
    // State for storing categories, loading, and error status
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
        const data = await dataService.getUniqueCategories();
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

    // Render the layout with Navbar, the main content, and Footer
    return (
      <div
        className="            
          min-h-screen
          flex
          flex-col
          overflow-hidden
"
      >
        <Navbar categories={categories} />
        <main className="content-container">
          <Component {...props} />
        </main>
        <Footer categories={categories} />
      </div>
    );
  };

  return Layout;
};

export default WithLayout;
