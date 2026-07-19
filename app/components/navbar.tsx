// components/Navbar.tsx

import Link from "next/link";
import FloatingButton from "./floating-button";
import NavLink from "./navlink";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="font-sans text-xl font-bold">
          OliverMunn
        </Link>
        <div className="flex gap-8 font-mono">
        <NavLink href="#projects" number="01">
            Projects
        </NavLink>
        <NavLink href="#experience" number="02">
            Experience
        </NavLink>
        <NavLink href="#about" number="03">
            About
        </NavLink>
        </div>

        <div className="flex items-center gap-8 font-sans font-semibold justify-end">
          <Link
            href="#about"
            className="text-greyText hover:text-foreground transition-colors duration-300 ease-out"
          >
            View CV
          </Link>

          <FloatingButton className="hover:text-accent border-border hover:border-accent focus:ring-border/50 hover:focus:ring-accent/50 hover:border-accent hover:bg-transparent">
            Get in Touch
          </FloatingButton>
        </div>
      </div>
    </nav>
  );
}
