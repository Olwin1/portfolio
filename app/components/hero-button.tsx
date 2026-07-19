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
        "group inline-flex items-center font-sans font-bold text-[36px] cursor-pointer bg-transparent border-none p-0 m-0 focus:outline-none",
        className,
      )}
      {...props}
    >
      {/* Animated dash */}
      <span
        className="
            mr-0
            h-[2px]
            w-0
            bg-[linear-gradient(to_right,var(--color-accent)_0%,var(--color-accent)_80%,transparent_100%)]
            transition-all
            duration-800
            ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:mr-0
            group-hover:w-4
        "
      />

      {/* Text */}
      <span
        className="
          text-foreground
          transition-all
          duration-300
          ease-out
          group-hover:translate-x-2
          group-hover:text-accent
        "
      >
        {children}
      </span>
    </button>
  );
}
