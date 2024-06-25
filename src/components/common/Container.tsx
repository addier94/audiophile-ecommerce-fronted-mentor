import React from "react";
import clsx from "clsx";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <article className={clsx("max-w-screen-lg mx-auto px-4", className)}>
      {children}
    </article>
  );
};

export default Container;
