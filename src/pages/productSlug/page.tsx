import { useNavigate, useParams } from "react-router-dom";
import { getProductBySlug } from "../../actions/getProductBySlug";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import { ProductDetail } from "../../components/common/Product/ProductDetail";
import { CategoriesList } from "../../components/common/Navbar/CategoriesList";

export const ProductSlug = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  const product = getProductBySlug(productSlug);
  if (!product) {
    navigate(-1); // Navigate back to the previus page
    return null; // Prevent rendering if the product is not found
  }

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
        <ProductDetail product={product} />
        <CategoriesList className="my-20" />
      </Container>
    </article>
  );
};
