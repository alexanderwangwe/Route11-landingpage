"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void; // Optional for non-interactive buttons
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 font-bold text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {children}
    </button>
  );
};
