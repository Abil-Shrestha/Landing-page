
import React from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => {
  return (
    <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2">
      <a
        href={href}
        onClick={onClick}
        className={cn(
          "text-sm font-medium transition-colors duration-200 tracking-tight",
          isActive ? "text-primary" : "text-primary/60 hover:text-primary"
        )}
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;
