import Button from "../../../components/common/Button";

export const Product1 = () => {
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
            w-[172px] 
            h-[207px]
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2

            sm:w-[197px]
            sm:h-[237px]

            lg:left-[58%]
            lg:-translate-y-[41%]
            lg:w-[410px]
            lg:h-[493px]

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
            src="/assets/home/mobile/image-speaker-zx9.png"
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
          "
          >
            ZX9 <br />
            SPEAKER
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
            Upgrade to premium speakers that are phenomenally built to devliver
            truly remarkable sound.
          </p>
          <Button variant="success" className="mx-auto lg:ml-0">
            See Product
          </Button>
        </div>
      </section>
    </article>
  );
};
