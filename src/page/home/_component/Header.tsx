export const Header = () => {
  return (
    <>
      <header
        className="
          h-[600px]
          sm:h-[729px]
          -mt-[90px]
          bg-black-main
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
                sm:w-[379px]
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
              <h3
                className="
                  text-white/50
                  tracking-[10px]
                  text-[14px]
                  mb-4
                "
              >
                NEW PRODUCT
              </h3>
              <h1
                className="
                  text-white
                  font-bold
                  text-[36px]
                  leading-10
                  sm:leading-[3.5rem]
                  sm:text-[56px]
                "
              >
                xxx99 MARK II HEADPHONES
              </h1>
            </section>
            <p
              className="
                text-[15px]
                text-white/75
                text-center
                font-medium
                sm:px-1
                lg:text-left
              "
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button
              className="
              text-white
              text-[13px]
              font-bold
              bg-yellow-main
              py-4
              px-9
            "
            >
              SEE PRODUCT
            </button>
          </article>
        </div>
      </header>
    </>
  );
};