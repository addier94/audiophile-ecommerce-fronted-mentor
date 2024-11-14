import { Product } from "../../../typescript/product";
import Container from "../Container";
import { Logo } from "../Logo";
import { NavItem } from "../Navbar/NavItem";

interface FooterProps {
  categories: Product[];
}
export const Footer = ({ categories }: FooterProps) => {
  return (
    <footer
      className="
        bg-secondary
        h-[654px]
        sm:h-[400px]
        lg:h-[365px]
        px-5
        py-4

        sm:px-10
        lg:px-0
      "
    >
      <Container
        className="
          grid
          grid-cols-12
          h-full
        "
      >
        <figure
          className="
            col-span-12
            row-span-1
            lg:col-span-6
            relative

            flex
            items-center
            justify-center
            sm:justify-start

            after:absolute
            after:content-[''] 
            after:w-[101px]
            after:h-1
            after:bg-primary
            after:left-1/2
            after:-translate-x-1/2
            after:-top-4
            after:sm:left-[73px]
          "
        >
          <Logo />
        </figure>
        <NavItem
          categories={categories}
          className="
            col-span-12
            row-span-1
            lg:col-span-6
            flex
            flex-col
            gap-4
            items-center
            justify-center
            lg:justify-end
            sm:gap-10
            sm:flex-row
            sm:justify-start
          "
        />
        <p
          className="
            col-span-12
            row-span-1
            lg:col-span-6

            text-body
            text-white/50
            flex
            items-center
            text-center
            sm:text-left
          "
        >
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p
          className="
          col-span-12
          row-span-1
          sm:col-span-6
          lg:col-span-12

          text-body
          text-white/50
          flex
          items-center
          justify-center
          text-center
          sm:justify-start
          sm:text-left
        "
        >
          Copyright 2021. All Rights Reserved
        </p>
        <ul
          className="
          col-span-12
          sm:col-span-6

          lg:col-start-7
          lg:col-end-13
          lg:row-start-2
          lg:row-end-3

          flex
          justify-center
          items-center
          lg:items-end
          sm:justify-end
          lg:pb-8
        "
        >
          <SocialNetworks />
        </ul>
      </Container>
    </footer>
  );
};

const SocialNetworks = () => {
  return (
    <div
      className="
        h-[24px]         
        flex
        justify-center
        gap-5"
    >
      <img src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook Icon" />
      <img src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter Icon" />
      <img
        src="/assets/shared/desktop/icon-instagram.svg"
        alt="Instagram Icon"
      />
    </div>
  );
};
