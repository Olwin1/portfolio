// components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="font-sans text-xl font-bold">
          OliverMunn
        </Link>

        <div className="flex items-center gap-8 font-sans font-semibold justify-end">
          <Link href="#about" className="hover:opacity-70 transition-opacity">
            About
          </Link>

          <Link href="#projects" className="hover:opacity-70 transition-opacity">
            Projects
          </Link>

          <Link href="#contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}