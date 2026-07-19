// components/FloatingButton.tsx
"use client";
import { ButtonHTMLAttributes, useState } from "react";

type FloatingButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function FloatingButton({
  children,
  className = "",
  ...props
}: FloatingButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 13;
    const moveY = (y / rect.height - 0.5) * 13;

    setPosition({
      x: moveX,
      y: moveY,
    });
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }
  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className={`
        ${className}
        inline-flex items-center justify-center
        rounded-lg
        border border-accent
        px-6 py-3
        font-sans font-semibold
        text-foreground
        transition-transform duration-300 ease-out
        hover:shadow-lg
        hover:bg-accent/10
        hover:border-accent
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-accent/50
      `}
      {...props}
    >
      {children}
    </button>
  );
}
