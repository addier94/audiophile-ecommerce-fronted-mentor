import clsx from "clsx";
import { Product } from "../../../typescript/product";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  className?: string;
  categories: Product[];
}

const css = `
  duration-150
  uppercase
  hover:text-primary
`;

export const NavItem = ({ className, categories }: NavItemProps) => {
  return (
    <ul
      className={clsx(
        className,
        `
          text-white 
          list-none 
          text-subtitle
        `,
      )}
    >
      <NavLink
        className={({ isActive }) => clsx(css, isActive && "text-primary")}
        to="/"
      >
        Home
      </NavLink>
      {categories &&
        categories.map((product) => (
          <NavItemLink key={product.id} {...product} />
        ))}
    </ul>
  );
};

const NavItemLink = ({ category }: Product) => {
  return (
    <li>
      <NavLink
        to={`/products/${category}`}
        className={({ isActive }) => clsx(css, isActive && "text-primary")}
      >
        {category}
      </NavLink>
    </li>
  );
};
