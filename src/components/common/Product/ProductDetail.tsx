import clsx from "clsx";
import Button from "../Button";
import { Image, OtherProduct, Product } from "../../../typescript/product";
import { useNavigate } from "react-router-dom";
import { ProductQty } from "./ProductQty";
import { helpers } from "../../../utils/helpers";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../features/cartSlice";
import { useProductQty } from "../../../hooks/useProductQty";

interface ProductItemProps {
  className?: string;
  product: Product;
}

export const ProductDetail = ({ product, className }: ProductItemProps) => {
  const navigate = useNavigate();

  return (
    <>
      <article
        className={clsx(
          "max-h-[724px] sm:h-[480px] lg:h-[560px] h-full flex gap-4 sm:gap-8 flex-col sm:flex-row lg:justify-between my-4",
          className,
        )}
      >
        <ProductImage image={product.image} />
        <SingleProduct product={product} navigate={navigate} />
      </article>
      <article className="flex flex-col gap-14 py-14 lg:flex-row">
        <ProductFeatures features={product.features} />
        <ProductIncludes includes={product.includes} />
      </article>
      <ProductGallery gallery={product.gallery} />
      <MayAlsoLike others={product.others} />
    </>
  );
};

const ProductImage = ({ image }: { image: Image }) => (
  <figure className="w-full h-[327px] sm:h-[480px] lg:h-[560px] lg:w-[540px] rounded-md overflow-hidden relative bg-gray-light">
    <ResponseImage
      className="absolute w-full h-full object-contain"
      image={image}
    />
  </figure>
);

const SingleProduct = ({
  product,
}: {
  product: Product;
  navigate: ReturnType<typeof useNavigate>;
}) => {
  const dispatch = useDispatch();

  const { productItem, incrementQty, decrementQty, handleChange } =
    useProductQty({
      id: product.id,
      image: product.image.mobile,
      name: product.name,
      price: product.price,
      totalPrice: product.price,
      quantity: 1,
    });

  return (
    <section className="flex items-center">
      <div className="flex gap-4 flex-col lg:w-[445px]">
        {product.new && (
          <p className="text-overline uppercase lg:text-left text-primary">
            new Product
          </p>
        )}
        <h4 className="uppercase text-h4 lg:text-left lg:text-h2">
          {product.name}
        </h4>
        <p className="text-body text-black/50 lg:text-left lg:px-0">
          {product.description}
        </p>
        <p className="text-h6">{helpers.formatMoney(productItem.totalPrice)}</p>
        <div className="flex gap-4 items-center">
          <ProductQty
            qty={productItem.quantity}
            incrementQty={incrementQty}
            decrementQty={decrementQty}
            handleChange={handleChange}
          />
          <Button
            onClick={() => dispatch(addItemToCart(productItem))}
            variant="primary"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProductFeatures = ({ features }: { features: string }) => {
  const featuresWithLineBreaks = features.replace(/\n/g, "<br />");

  return (
    <section>
      <h4 className="text-h5 uppercase mb-5">Features</h4>
      <p
        className="text-body text-black/50"
        dangerouslySetInnerHTML={{ __html: featuresWithLineBreaks }}
      ></p>
    </section>
  );
};

const ProductIncludes = ({
  includes,
}: {
  includes: { quantity: number; item: string }[];
}) => (
  <section className="sm:flex sm:justify-between sm:w-9/12 lg:block">
    <h4 className="text-h5 uppercase mb-5">In The Box</h4>
    <ul className="text-body text-black/50 flex flex-col">
      {includes.map((include, index) => (
        <li key={index} className="flex gap-6">
          <span className="text-primary font-bold">{include.quantity}x</span>
          <span>{include.item}</span>
        </li>
      ))}
    </ul>
  </section>
);

const ProductGallery = ({
  gallery,
}: {
  gallery: { first: Image; second: Image; third: Image };
}) => (
  <section className="grid gap-3 sm:h-[368px] lg:h-[592px] grid-cols-12 sm:auto-rows-fr">
    <ResponseImage
      className="rounded-md col-span-12 sm:col-span-5 w-full h-full object-cover"
      image={gallery.first}
    />
    <ResponseImage
      className="rounded-md col-span-12 sm:col-span-5 sm:row-start-2 w-full h-full object-cover"
      image={gallery.second}
    />
    <ResponseImage
      className="rounded-md col-span-12 sm:col-start-6 sm:row-start-1 sm:row-end-3 sm:col-span-7 w-full h-full object-cover"
      image={gallery.third}
    />
  </section>
);

const MayAlsoLike = ({ others }: { others: OtherProduct[] }) => {
  return (
    <div className="mt-20">
      <h4 className="text-h5 text-center uppercase">You may also like</h4>
      <section
        className="
          mt-10
          flex
          flex-col
          gap-10
          sm:flex-row
          sm:gap-4
        "
      >
        {others.length > 0 &&
          others.map((product, i) => (
            <article
              key={i}
              className="
                flex
          sm:flex-grow
                flex-col
                items-center
                gap-5
              "
            >
              <section className="flex gap-4 sm:h-[318px] w-full">
                <ResponseImage
                  className="rounded-md col-span-12 w-full h-full object-cover"
                  image={product.image}
                />
              </section>
              <section>
                <h5
                  className="
                  text-h5
                "
                >
                  xx 99 mark i
                </h5>
              </section>
              <Button variant="primary">See Product</Button>
            </article>
          ))}
      </section>
    </div>
  );
};

interface ResponseImageProps {
  className?: string;
  image: Image;
}

const ResponseImage = ({ className, image }: ResponseImageProps) => (
  <>
    <img src={image.mobile} alt="" className={clsx("sm:hidden", className)} />
    <img
      src={image.tablet}
      alt=""
      className={clsx("hidden sm:block lg:hidden", className)}
    />
    <img
      src={image.desktop}
      alt=""
      className={clsx("hidden lg:block", className)}
    />
  </>
);

export default ProductDetail;
