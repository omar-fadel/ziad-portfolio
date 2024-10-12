'use client';
import React, { ReactNode } from 'react';
import './project-tile.css';
import Link from 'next/link';
import Image from 'next/image';

export interface ProjectTileProps {
  title: ReactNode[];
  background: string;
  project: 'client' | 'personal';
  link: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  background,
  project,
  link,
}) => {
  return (
    <Link
      href={link}
      className="projectTile relative h-[36rem] w-[36rem] overflow-hidden rounded-lg border-[1px] border-slate-500"
    >
      <div className="absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%] text-center uppercase">
        {title}
      </div>
      <div
        id="projectType"
        className="absolute bottom-[-5rem] left-[50%] z-10 w-fit translate-x-[-50%] rounded"
      >
        <p className="relative z-10 h-full w-full px-6 py-4 text-4xl font-bold text-white">
          View Project
        </p>
      </div>
      <div className="absolute right-[16px] top-[16px] z-10">
        <Image
          src={`/icons/${project}.png`}
          width={45}
          height={45}
          alt={project}
        />
      </div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/backgrounds/${background}.png)`,
        }}
      />
    </Link>
  );
};

export default ProjectTile;
