import { CategoriesList } from "./CategoriesList";

export const AsideNavbar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <article
      className={`
          absolute 
          left-0 
          top-[90px]
          w-full 
          duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
    >
      <CategoriesList className="px-7" />
    </article>
  );
};
