import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "narrow" | "default" | "wide" | "full";
  withGuideLines?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  size = "default",
  withGuideLines = false,
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        withGuideLines && "relative border-x border-border-subtle",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
