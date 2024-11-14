import { useParams } from "react-router-dom";

import { Header } from "../../components/common/Header";
import { ProductItem } from "../../components/common/Product/ProductItem";
import Container from "../../components/common/Container";
import { BestGear } from "../../components/common/BestGear";
import { CategoriesList } from "../../components/common/Navbar/CategoriesList";
import { useEffect, useState } from "react";
import dataService from "../../utils/DataService";
import { Product } from "../../typescript/product";

export const CategoryName = () => {
  const [categoryProducts, setCategoryProducts] = useState<Product[] | null>(
    null,
  );
  const [uniqueCategories, setUniqueCategories] = useState<Product[] | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { category_name } = useParams();

  useEffect(() => {
    if (!category_name) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const [products, categories] = await Promise.all([
          dataService.getProductsByCategory(category_name),
          dataService.getUniqueCategories(),
        ]);

        setCategoryProducts(products);
        setUniqueCategories(categories);
      } catch (err) {
        setError("Semething went wrong, Please try again.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category_name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!categoryProducts || categoryProducts.length === 0)
    return <div>No products found</div>;

  return (
    <article
      className="
      flex-grow
    "
    >
      <Header name={category_name} />
      <Container
        className="
        flex
        flex-col
        gap-16
        py-16
      "
      >
        {categoryProducts &&
          categoryProducts.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              className={index % 2 === 1 ? "lg:flex-row-reverse" : ""}
            />
          ))}
        <CategoriesList categories={uniqueCategories} />
        <BestGear />
      </Container>
    </article>
  );
};
