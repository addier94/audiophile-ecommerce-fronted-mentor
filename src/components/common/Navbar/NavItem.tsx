import clsx from "clsx";

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
      <li>
        <a
          className="
            duration-150
            hover:text-primary
          "
          href="#"
        >
          HOME
        </a>
      </li>
      <li>
        <a
          className="
              duration-150
            hover:text-primary
          "
          href="#"
        >
          HEADPHONES
        </a>
      </li>
      <li>
        <a
          className="
              duration-150
            hover:text-primary
          "
          href="#"
        >
          SPEAKERS
        </a>
      </li>
      <li>
        <a
          className="
            duration-150
          hover:text-primary
          "
          href="#"
        >
          EARPHONES
        </a>
      </li>
    </>
  );
};
