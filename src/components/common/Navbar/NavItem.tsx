import clsx from "clsx";
import { Link } from "react-router-dom";
import { helpers } from "../../../utils/helpers";

interface Link {
  id: number;
  name: string;
}

const links: Link[] = [
  {
    id: 2,
    name: "Headphones",
  },
  {
    id: 3,
    name: "Speakers",
  },
  {
    id: 4,
    name: "Earphones",
  },
];

export const NavItem = ({ className }: { className: string }) => {
  return (
    <ul
      className={clsx(
        className,
        `
          text-white 
          list-none 
          text-subtitle
        `
      )}
    >
      <NavItemLink />
    </ul>
  );
};

const NavItemLink = () => {
  return (
    <>
      <Link
        className="
        duration-150
        uppercase
        hover:text-primary
      "
        to="/"
      >
        Home
      </Link>
      {links.map((item) => (
        <Link
          key={item.id}
          className="
            duration-150
            uppercase
            hover:text-primary
          "
          to={`/category/${helpers.slug(item.name)}`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};
