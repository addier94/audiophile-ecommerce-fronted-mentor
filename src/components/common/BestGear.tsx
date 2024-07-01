import clsx from "clsx";

export const BestGear = ({ className }: { className?: string }) => {
  return (
    <article
      className={clsx(
        `
        h-[698px]
        sm:h-[633px]
        flex
        lg:h-[588px]
        flex-col
        lg:flex-row-reverse
      `,
        className
      )}
    >
      <section
        className="
          flex-1
        "
      >
        <picture
          className="
            block
            h-full
            relative
            rounded-md
            overflow-hidden
          "
        >
          <img
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
            src="/src/assets/shared/mobile/image-best-gear.jpg"
            alt="Best Gear"
          />
        </picture>
      </section>
      <section
        className="
          flex-1
        "
      >
        <div
          className="
          h-full
          flex
          flex-col
          justify-evenly
          sm:mx-8
          lg:mx-0
          lg:w-[445px]
          lg:justify-center
          lg:gap-6
          "
        >
          <h3
            className="
            text-h4
            uppercase
            text-center
            sm:text-h2
            lg:text-left
          "
          >
            Bringing you the<span className="text-primary"> Best </span>
            Audio Gear
          </h3>
          <p
            className="
          text-body 
          text-black/50 
          text-center
          lg:text-left
        "
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>
    </article>
  );
};
