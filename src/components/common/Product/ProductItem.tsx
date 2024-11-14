import clsx from "clsx";
import Button from "../Button";
import { Image, Product } from "../../../typescript/product";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
  className?: string;
  product: Product;
}

export const ProductItem = ({ className, product }: ProductItemProps) => {
  const navigate = useNavigate();

  return (
    <article
      className={clsx(
        `
        max-h-[724px]
        lg:h-[560px]
        flex
        flex-col
        gap-5
        lg:flex-row
        lg:justify-between
      `,
        className,
      )}
    >
      <section>
        <figure
          className="
            w-full
            h-[352px]
            lg:h-[560px]
            lg:w-[540px]
            rounded-md 
            overflow-hidden
            relative
            bg-gray-light
          "
        >
          <ResponseImage
            className="
                absolute
                w-full
                h-full
                object-contain
              "
            image={product.image}
          />
        </figure>
      </section>
      <section
        className="
            flex 
            items-end
            lg:items-center
          "
      >
        <div
          className={`
            flex
            flex-col
            gap-5
            justify-between
            lg:w-[445px]
          `}
        >
          {product.new && (
            <p
              className="
                text-overline
                uppercase
                text-center
                lg:text-left
                text-primary
              "
            >
              new Product
            </p>
          )}
          <h4
            className="
              uppercase
              text-h4
              text-center
              lg:text-left
              sm:text-h2
            "
          >
            {product.name}
          </h4>
          <p
            className="
              text-body
              text-black/50
              text-center
              sm:px-28
              lg:text-left
              lg:px-0
            "
          >
            {product.description}
          </p>
          <div className="text-center lg:text-left">
            <Button
              onClick={() => navigate(`/product/${product.id}`)}
              variant="primary"
            >
              See Product
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

interface ResponseImageProps {
  className?: string;
  image: Image;
}
const ResponseImage = ({ className, image }: ResponseImageProps) => {
  return (
    <>
      <img
        src={image.mobile}
        alt=""
        className={clsx(
          `
            sm:hidden
          `,
          className,
        )}
      />
      <img
        src={image.tablet}
        alt=""
        className={clsx(
          `
            hidden 
            sm:block
            lg:hidden
          `,
          className,
        )}
      />
      <img
        src={image.desktop}
        alt=""
        className={clsx(
          `
            hidden 
            lg:block
          `,
          className,
        )}
      />
    </>
  );
};
