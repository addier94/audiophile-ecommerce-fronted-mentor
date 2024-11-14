import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import { Product } from "../../../typescript/product";

interface Product1Props {
  product: Product;
}

export const Product1 = ({ product }: Product1Props) => {
  const navigate = useNavigate();

  return (
    <article
      className=" 
        h-[600px] 
        sm:h-[720px] 
        lg:h-[560px] 
        bg-primary 
        flex flex-col 
        items-center 
        lg:flex-row 
        mb-4 
        rounded-md 
        overflow-hidden "
    >
      <section
        className="
        flex-1 
        relative 
        w-full 
        h-full"
      >
        <div
          className="
            w-[272px] 
            h-[307px]
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/3

            sm:w-[397px]
            sm:h-[437px]

            lg:left-[58%]
            lg:-translate-y-[15%]
            lg:w-[610px]
            lg:h-[693px]

            after:absolute
            after:bg-no-repeat
            after:bg-contain
            after:content-[']
            after:bg-center
            after:bg-[url('/assets/home/desktop/pattern-circles.svg')]
            after:top-[-84%]
            after:left-[-120%]
            after:w-[340%]
            after:h-[280%]
            lg:after:top-[-20%]
            lg:after:left-[-76%]
            lg:after:w-[250%]
            lg:after:h-[190%]
        "
        >
          <img
            className="
              relative
              z-10
              w-full
            "
            src={product.categoryImage.png}
          />
        </div>
      </section>
      <section
        className="
        flex-1
        z-10
      "
      >
        <div
          className="
          flex
          flex-col
          justify-evenly
          sm:justify-between
          max-w-[349px]
          h-[303px]
          px-7
          -mt-6
          sm:mt-0
          sm:px-0

          lg:w-[349px]
          lg:h-[303px]
          lg:mx-auto
        "
        >
          <h2
            className="
            text-white
            text-h2
            lg:text-h1
            text-center
            lg:text-start
            uppercase
          "
          >
            {product.name}
          </h2>
          <p
            className="
            text-white/75
            text-body
            text-center
            lg:text-start
            lg:ml-0
          "
          >
            {product.description}
          </p>
          <Button
            onClick={() => navigate(`/product/${product.id}`)}
            variant="success"
            className="mx-auto lg:ml-0"
          >
            See Product
          </Button>
        </div>
      </section>
    </article>
  );
};
