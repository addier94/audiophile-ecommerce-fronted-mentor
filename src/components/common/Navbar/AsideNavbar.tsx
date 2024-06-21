export const AsideNavbar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav
      className={`
        absolute 
        left-0 
        top-[90px]
        w-full 
        py-6
        px-5
        duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
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
        <button
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
            bg-gray-main
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
              <span className="text-[13px] font-bold text-gray2-main">
                SHOP
              </span>
              <img
                src="/src/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right icon"
              />
            </p>
          </div>
        </button>
        <button
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
            bg-gray-main
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
              <span className="text-[13px] font-bold text-gray2-main">
                SHOP
              </span>
              <img
                src="/src/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right icon"
              />
            </p>
          </div>
        </button>
        <button
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
            bg-gray-main
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
              <span className="text-[13px] font-bold text-gray2-main">
                SHOP
              </span>
              <img
                src="/src/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow right icon"
              />
            </p>
          </div>
        </button>
      </ul>
    </nav>
  );
};
