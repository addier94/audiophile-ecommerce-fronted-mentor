import { Logo } from "../Logo";
import { BarMenu } from "./BarMenu";
import { CartIcon } from "./CartIcon";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  return (
    <div className="h-[90px] relative z-50 ">
      <nav className="h-full flex justify-between border-b-[1px] border-b-white/20 items-center max-w-screen-lg px-4 lg:mx-auto">
        <section className="flex items-center gap-8 lg:gap-0">
          <BarMenu />
          <Logo className="hidden sm:block" />
        </section>

        <section className="flex items-center gap-8 lg:gap-0">
          <Logo className="sm:hidden" />
          <NavItem
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
