import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className="max-w-screen flex justify-center">
      <div className={`flex max-w-screen-desktop ${className}`}>{children}</div>
    </section>
  );
};

export default Container;
