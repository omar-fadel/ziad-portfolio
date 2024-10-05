import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  background?: 'black';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  background,
}) => {
  return (
    <section className={`max-w-screen flex justify-center bg-${background}`}>
      <div className={`flex max-w-screen-desktop ${className}`}>{children}</div>
    </section>
  );
};

export default Container;
