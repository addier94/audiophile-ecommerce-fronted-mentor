import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import { Product } from "../../../typescript/product";

interface Product2Props {
  product: Product;
}
export const Product2 = ({ product }: Product2Props) => {
  const navigate = useNavigate();
  return (
    <article
      className="
        h-[320px]
        relative
        w-full
        flex
        flex-col
        justify-center
        gap-8
        mb-4
        px-6
        lg:px-12
        rounded-md
        overflow-hidden
      "
    >
      <img
        className="absolute inset-0 h-full w-full object-cover -z-10 sm:hidden"
        src="/assets/home/mobile/image-speaker-zx7.jpg"
        alt="speaker image"
      />
      <img
        className="absolute inset-0 h-full w-full object-cover -z-10 hidden sm:block lg:hidden"
        src="/assets/home/tablet/image-speaker-zx7.jpg"
        alt="speaker image"
      />
      <img
        className="absolute inset-0 h-full w-full object-cover -z-10 sm:hidden lg:block"
        src="/assets/home/desktop/image-speaker-zx7.jpg"
        alt="speaker image"
      />
      <h4
        className="
        text-h4
        uppercase
      "
      >
        {product.name}
      </h4>
      <Button
        type="button"
        onClick={() => navigate(`/product/${product.id}`)}
        variant="secondary"
      >
        See Product
      </Button>
    </article>
  );
};
