// components/NavLink.tsx

import Link from "next/link";

type NavLinkProps = {
  number: string;
  children: React.ReactNode;
  href: string;
};

export default function NavLink({
  number,
  children,
  href,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className="
        flex
        relative
        w-fit
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[2px]
        after:w-full
        after:bg-accent
        after:origin-left
        after:scale-x-0
        after:transition-transform
        after:duration-300
        hover:after:scale-x-100
      "
    >
      <p className="flex items-center pr-2 text-[15px] text-greyText">
        {number}
      </p>

      <p className="text-[20px] text-greyText transition-colors hover:text-foreground">
        {children}
      </p>
    </Link>
  );
}