import clsx from "clsx";
import Button from "../Button";

export const CategoriesList = ({ className }: { className: string }) => {
  return (
    <nav
      className={clsx(
        `
        bg-white
        w-full
        h-full
        rounded-br-lg
        rounded-bl-lg
        py-8
        sm:py-12
        `,
        className
      )}
    >
      <ul
        className="
        h-[683px]
        sm:h-[217px]
        flex
        flex-col
        sm:flex-row
        sm:gap-2
        justify-between
      "
      >
        <article
          className="
          w-full
          h-[217px]
          flex
          relative
        "
        >
          <img
            src="/src/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphones"
            className="w-[148px] absolute top-0 left-2/4 -translate-x-2/4"
          />
          <div
            className="
            bg-gray-light
            h-[165px]
            flex
            self-end
            flex-col
            pt-20
            justify-center
            items-center
            py-5
            gap-[10px]
            w-full
            rounded-md
          "
          >
            <span className="font-bold text-[15px]">HEADPHONES</span>
            <p className="flex gap-2 items-center">
              <Button variant="info" className="w-auto h-auto">
                Shop
              </Button>
              <img
                src="/src/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right icon"
              />
            </p>
          </div>
        </article>
        <article
          className="
          w-full
          h-[217px]
          flex
          relative
        "
        >
          <img
            src="/src/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="headphones"
            className="w-[156px] absolute top-0 left-2/4 -translate-x-2/4"
          />
          <div
            className="
            bg-gray-light
            h-[165px]
            flex
            self-end
            flex-col
            pt-20
            justify-center
            items-center
            py-5
            gap-[10px]
            w-full
            border-md
          "
          >
            <span className="font-bold text-[15px]">SPEAKERS</span>
            <p className="flex gap-2 items-center">
              <Button variant="info" className="w-auto h-auto">
                Shop
              </Button>
              <img
                src="/src/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right icon"
              />
            </p>
          </div>
        </article>
        <article
          className="
          w-full
          h-[217px]
          flex
          relative
        "
        >
          <img
            src="/src/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="headphones"
            className="w-[172px] absolute top-0 left-2/4 -translate-x-2/4"
          />
          <div
            className="
            bg-gray-light
            h-[165px]
            flex
            self-end
            flex-col
            pt-20
            justify-center
            items-center
            py-5
            gap-[10px]
            w-full
            border-md
          "
          >
            <span className="font-bold text-[15px]">EARPHONES</span>
            <p className="flex gap-2 items-center">
              <Button variant="info" className="w-auto h-auto">
                Shop
              </Button>
              <img
                src="/src/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right icon"
              />
            </p>
          </div>
        </article>
      </ul>
    </nav>
  );
};
