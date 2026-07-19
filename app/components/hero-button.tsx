// components/HeroButton.tsx

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type HeroButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function HeroButton({
  children,
  className,
  ...props
}: HeroButtonProps) {
  return (
    <button
      className={clsx(
        "font-sans font-bold text-lg bg-transparent border-none p-0 m-0 cursor-pointer",
        "hover:opacity-80 transition-opacity duration-200",
        "focus:outline-none text-[36px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}