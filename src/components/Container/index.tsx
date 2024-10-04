import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className="flex w-screen justify-center">
      <div className={`max-w-screen-desktop ${className}`}>{children}</div>
    </section>
  );
};

export default Container;
