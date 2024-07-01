import React from "react";
import clsx from "clsx";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx("max-w-screen-lg mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
