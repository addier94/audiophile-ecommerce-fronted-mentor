import { Logo } from "../Logo";

export const Navbar = () => {
  return (
    <header className="bg-black h-[90px] px-4">
      <nav className="h-full flex justify-between items-center max-w-screen-lg lg:mx-auto">
        <section className="flex gap-8 lg:gap-0">
          <button className="lg:hidden">
            <img
              src="/src/assets/shared/tablet/icon-hamburger.svg"
              alt="Hamburger icon"
            />
          </button>
          <Logo className="hidden sm:block" />
        </section>

        <section className="flex items-center gap-8 lg:gap-0">
          <Logo className="sm:hidden" />
          <ul className="hidden lg:flex text-white list-none gap-9 text-[13px] font-bold">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">HEADPHONES</a>
            </li>
            <li>
              <a href="#">SPEAKERS</a>
            </li>
            <li>
              <a href="#">EARPHONES</a>
            </li>
          </ul>
        </section>

        <aside>
          <img
            src="/src/assets/shared/desktop/icon-cart.svg"
            alt="Cart Icon"
            className="cursor-pointer"
          />
        </aside>
      </nav>
    </header>
  );
};
