'use client';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="h-20 rounded bg-red-600 px-6 text-white hover:cursor-pointer hover:bg-red-800"
      onClick={onClick}
    >
      <p className="font-code font-bold">{children}</p>
    </button>
  );
};

export default Button;
