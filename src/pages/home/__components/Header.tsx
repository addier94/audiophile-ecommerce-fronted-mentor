import Button from "../../../components/common/Button";

export const Header = () => {
  return (
    <>
      <header
        className="
          h-[600px]
          sm:h-[729px]
          -mt-[90px]
          bg-black/90
          relative
          z-0
        "
      >
        <div
          className="
          w-full
          h-full

          flex
          items-center
          justify-center

          after:content after:absolute after:inset-0 after:bg-black/50 after:z-20
          max-w-screen-lg
          lg:flex-row-reverse
          px-4
          lg:mx-auto
          lg:justify-between
          lg:overflow-hidden
        "
        >
          <img
            className="
              z-10
              absolute 
              h-full
              lg:static 
              lg:h-[110%]
              lg:-mt-10
            "
            src="/src/assets/home/mobile/image-header.jpg"
            alt="Header Image"
          />
          <article
            className="
                w-[328px]
                h-[290px]
                sm:w-[400px]
                sm:h-[346px]
                flex
                flex-col
                items-center
                justify-between
                mt-20
                relative
                z-30
                lg:items-start
              "
          >
            <section
              className="
                text-center
                lg:text-left
              "
            >
              <p
                className="
                  text-white/50
                  text-overline
                  mb-4
                "
              >
                NEW PRODUCT
              </p>
              <h2
                className="
                  text-white
                  text-h3
                  sm:text-h1
                "
              >
                xxx99 MARK II HEADPHONES
              </h2>
            </section>
            <p
              className="
                text-white/75
                sm:px-3
                lg:pl-0
                lg:pr-6
                text-center
                lg:text-left
                text-body
              "
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button variant="primary">See Product</Button>
          </article>
        </div>
      </header>
    </>
  );
};
