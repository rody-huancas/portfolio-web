import { cn } from "@/libs/utils";
import { ReactNode } from "react";

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn("container mx-auto lg:px-16", className)}>{children}</div>;
};

export default Container;
