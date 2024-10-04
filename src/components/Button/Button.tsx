'use client';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="bg-red-600 text-white" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
