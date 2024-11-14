import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import { ProductDetail } from "../../components/common/Product/ProductDetail";
import { CategoriesList } from "../../components/common/Navbar/CategoriesList";
import { Product } from "../../typescript/product";
import dataService from "../../utils/DataService";

export const ProductId = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [uniqueCategories, setUniqueCategories] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setErrors] = useState<string | null>(null);

  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    if (!productId) {
      setErrors("Product ID is missing");
      return;
    }
    setLoading(true);
    try {
      const [productData, categoryData] = await Promise.all([
        dataService.getProductById(productId),
        dataService.getUniqueCategories(),
      ]);
      setProduct(productData);
      setUniqueCategories(categoryData);
    } catch (err) {
      setErrors("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Oops something went wrong</div>;

  return (
    <article className="flex-grow border-t-[90px] border-t-black -mt-[90px]">
      <Container>
        <Button
          className="w-auto h-auto mt-4"
          variant="info"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
        {product && <ProductDetail product={product} />}
        <CategoriesList categories={uniqueCategories} className="my-20" />
      </Container>
    </article>
  );
};
