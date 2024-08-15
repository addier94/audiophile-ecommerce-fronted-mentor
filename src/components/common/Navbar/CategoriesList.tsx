import clsx from "clsx";
import Button from "../Button";
import { getNavList } from "../../../actions/getNavList";
import { useNavigate } from "react-router-dom";

interface CategoriesListProps {
  closeMenu: () => void;
  className?: string;
}

export const CategoriesList = ({
  className,
  closeMenu,
}: CategoriesListProps) => {
  const navList = getNavList();
  const navigate = useNavigate();

  const goTo = (path: string) => {
    closeMenu();
    navigate(path);
  };

  return (
    <nav
      className={clsx(
        `
        bg-white
        w-full
        h-full
        rounded-br-lg
        rounded-bl-lg
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
        {navList.map((nav) => (
          <li
            key={nav.id}
            className="
              w-full
              h-[217px]
              flex
              relative
            "
          >
            <img
              src={nav.categoryImage.png}
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
              <span className="font-bold text-[15px] uppercase">
                {nav.category}
              </span>
              <div
                onClick={() => goTo(`/category/${nav.category}`)}
                className="flex gap-2 items-center"
              >
                <Button variant="info" className="w-auto h-auto">
                  Shop
                </Button>
                <img
                  src="/src/assets/shared/desktop/icon-arrow-right.svg"
                  alt="arrow right icon"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
