import clsx from "clsx";
import Button from "../Button";

export const ProductItem = ({ className }: { className?: string }) => {
  return (
    <article
      className={clsx(
        `
        h-[724px]
        sm:h-[706px]
        lg:h-[560px]
        flex
        flex-col
        gap-6
        lg:flex-row
      `,
        className
      )}
    >
      <section
        className="
          flex-1
        "
      >
        <figure
          className="
            w-full
            h-full
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
          />
        </figure>
      </section>
      <section
        className="
            flex-1
            lg:flex 
            lg:items-center
            lg:justify-end
          "
      >
        <div
          className="
              h-full
              flex
              flex-col
              justify-between
              lg:w-[445px]
              lg:h-[343px]
            "
        >
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
          <h4
            className="
              uppercase
              text-h4
              text-center
              lg:text-left
              sm:text-h2
            "
          >
            xx99 Mark II Headphones
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
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <div className="text-center lg:text-left">
            <Button variant="primary">See Product</Button>
          </div>
        </div>
      </section>
    </article>
  );
};

const ResponseImage = ({ className }: { className: string }) => {
  return (
    <>
      <img
        src="/src/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
        alt=""
        className={clsx(
          `
            sm:hidden
          `,
          className
        )}
      />
      <img
        src="/src/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg"
        alt=""
        className={clsx(
          `
            hidden 
            sm:block
            lg:hidden
          `,
          className
        )}
      />
      <img
        src="/src/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
        alt=""
        className={clsx(
          `
            hidden 
            lg:block
          `,
          className
        )}
      />
    </>
  );
};
