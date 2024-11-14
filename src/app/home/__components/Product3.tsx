import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import { Product } from "../../../typescript/product";

interface Product3Props {
  product: Product;
}

export const Product3 = ({ product }: Product3Props) => {
  const navigate = useNavigate();

  return (
    <article className=" h-[424px] sm:h-[320px] flex flex-col gap-4 sm:flex-row sm:gap-3 ">
      <section className=" flex-1 relative rounded-md overflow-hidden ">
        {" "}
        <ResponsiveImage />
      </section>
      <section
        className="
          flex-1
        "
      >
        <div
          className="
            h-full
            bg-gray-light
            px-6
            lg:px-14
            flex
            flex-col
            justify-center
            rounded-md
            gap-6
            sm:gap-8
          "
        >
          <h4
            className="
              text-h4
              uppercase
            "
          >
            {product.name}
          </h4>
          <Button
            onClick={() => navigate(`/product/${product.id}`)}
            variant="secondary"
          >
            See Product
          </Button>
        </div>
      </section>
    </article>
  );
};

const ResponsiveImage = () => {
  return (
    <>
      <img
        className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            sm:hidden
          "
        src="/assets/home/mobile/image-earphones-yx1.jpg"
        alt="earphones image"
      />
      <img
        className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            hidden
            sm:block
            lg:hidden
          "
        src="/assets/home/tablet/image-earphones-yx1.jpg"
        alt="earphones image"
      />
      <img
        className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            hidden
            lg:block
          "
        src="/assets/home/desktop/image-earphones-yx1.jpg"
        alt="earphones image"
      />
    </>
  );
};
