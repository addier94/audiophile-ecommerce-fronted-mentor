import { useEffect } from "react";
import { CategoriesList } from "./CategoriesList";

interface AsideNavbarProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const AsideNavbar = ({ isOpen, closeMenu }: AsideNavbarProps) => {
  useEffect(() => {
    const body = document.body;

    const toggleClasses = (add: boolean) => {
      const method = add ? "add" : "remove";
      body.classList[method](
        "z-10",
        "relative",
        "before:content-['']",
        "before:fixed",
        "before:inset-0",
        "before:bg-black/70",
        "before:z-10"
      );
    };

    toggleClasses(isOpen);

    return () => {
      toggleClasses(false);
    };
  }, [isOpen]);

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
      <CategoriesList className="px-6 py-8" closeMenu={closeMenu} />
    </article>
  );
};
