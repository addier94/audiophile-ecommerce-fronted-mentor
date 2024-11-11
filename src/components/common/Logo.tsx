import clsx from "clsx";
import { Link } from "react-router-dom";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link to="/">
      <img
        className={clsx("cursor-pointer", className)}
        src="/assets/shared/desktop/logo.svg"
        alt="Logo"
      />
    </Link>
  );
};
