import { useState } from "react";
import { AsideNavbar } from "./AsideNavbar";

export const BarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <img
        src="/src/assets/shared/tablet/icon-hamburger.svg"
        alt="Hamburger icon"
        className="lg:hidden cursor-pointer"
        onClick={toggleMenu}
      />
      <AsideNavbar isOpen={isMenuOpen} />
    </>
  );
};
