import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "success" | "info";
};

const baseStyles = "font-bold uppercase transition-all w-40 h-12 text-[13px]";

const variantStyles: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-accent-light",
  secondary: "border-2 border-black text-black hover:bg-black hover:text-white",
  success: "text-white bg-black hover:bg-gray",
  info: "text-[13px] text-black/50 hover:text-primary",
};

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
