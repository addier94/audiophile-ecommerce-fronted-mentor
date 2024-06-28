import clsx from "clsx";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <img
      className={clsx("cursor-pointer", className)}
      src="/src/assets/shared/desktop/logo.svg"
      alt="Logo"
    />
  );
};
