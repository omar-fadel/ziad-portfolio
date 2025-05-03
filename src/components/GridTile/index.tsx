'use client';
import Link from 'next/link';
import { useState } from 'react';

interface GridTileProps {
  children: React.ReactNode;
  HoveredComponent?: React.ReactNode;
  className?: string;
  link: string;
}

const GridTile: React.FC<GridTileProps> = ({
  className,
  children,
  HoveredComponent,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded bg-slate-300 ${className}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={link}>
        {!isHovered || !HoveredComponent ? children : null}
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            isHovered && HoveredComponent ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
        >
          {HoveredComponent}
        </div>
      </Link>
    </div>
  );
};

export default GridTile;
