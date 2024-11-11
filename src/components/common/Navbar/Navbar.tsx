import { useState } from "react";
import { Logo } from "../Logo";
import { CartIcon } from "./CartIcon";
import { NavItem } from "./NavItem";
import { Product } from "../../../typescript/product";
import { AsideNavbar } from "./AsideNavbar";

interface NavbarProps {
  categories: Product[];
}

export const Navbar = ({ categories }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-[90px] relative z-50 ">
      <nav className="h-full flex justify-between border-b-[1px] border-b-white/20 items-center max-w-screen-lg px-4 lg:mx-auto">
        <section className="flex items-center gap-8 lg:gap-0">
          <img
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="Hamburger icon"
            className="lg:hidden cursor-pointer"
            onClick={toggleMenu}
          />
          <AsideNavbar
            isOpen={isMenuOpen}
            closeMenu={() => setIsMenuOpen(false)}
            categories={categories}
          />
          <Logo className="hidden sm:block" />
        </section>

        <section className="flex items-center gap-8 lg:gap-0">
          <Logo className="sm:hidden" />
          <NavItem
            categories={categories}
            className="
            hidden 
            lg:flex
            lg:gap-9
          "
          />
        </section>
        <CartIcon />
      </nav>
    </div>
  );
};
