// components/Navbar.tsx

import Link from "next/link";
import FloatingButton from "./floating-button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="font-sans text-xl font-bold">
          OliverMunn
        </Link>
        <div className="flex gap-4 font-mono">
            <Link href="" className="flex"><p className="flex items-center text-[15px] pr-2 text-greyText">01</p><p className="text-[20px] text-greyText">Projects</p></Link>
            <Link href="" className="flex"><p className="flex items-center text-[15px] pr-2 text-greyText">01</p><p className="text-[20px] text-greyText">Projects</p></Link>
            <Link href="" className="flex"><p className="flex items-center text-[15px] pr-2 text-greyText">01</p><p className="text-[20px] text-greyText">Projects</p></Link>

        </div>


        <div className="flex items-center gap-8 font-sans font-semibold justify-end">
          <Link href="#about" className="hover:opacity-70 transition-opacity text-greyText">
            View CV
          </Link>

          <FloatingButton className="hover:opacity-70 transition-opacity border-border focus:ring-border/50 hover:border-border hover:bg-border/10">
            Get in Touch
          </FloatingButton>
        </div>
      </div>
    </nav>
  );
}