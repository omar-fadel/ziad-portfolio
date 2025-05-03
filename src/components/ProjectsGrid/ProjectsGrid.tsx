import Link from 'next/link';

import GridTile from '../GridTile';
import './projects-grid.css';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-12 gap-16 p-20">
      <GridTile
        className="col-span-4 row-span-2 bg-[url('/thumbnails/high.png')] bg-cover bg-center text-red-300 md:col-span-3"
        link="/high"
        HoveredComponent={
          <video
            width={200}
            height={540}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videos/high.mp4" />
            Your browser does not support the video tag.
          </video>
        }
      >
        <h1 className="mx-6 text-center uppercase">High</h1>
      </GridTile>
      <div
        id="transmition"
        className="relative col-span-4 row-span-2 h-[540px] rounded bg-black md:col-span-1"
      >
        <Link href="/transmition">
          <video
            className="h-full w-full"
            autoPlay
            width={1360}
            height={540}
            muted
            loop
            id="transmition"
          >
            <source src="/videos/Transmition.mp4" />
            Your browser does not support the video tag.
          </video>
          <div id="backdrop" className="absolute inset-0 bg-slate-400" />
          <p
            id="word"
            className="absolute left-[50%] top-[-60px] z-10 translate-x-[-50%] uppercase text-white"
          >
            Transmition
          </p>
        </Link>
      </div>
      <GridTile
        link="/swd"
        className="col-span-4 row-span-2 bg-[url('/thumbnails/womensday.png')] bg-cover bg-center"
        HoveredComponent={
          <video
            width={200}
            height={540}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videos/Swd.mp4" />
            Your browser does not support the video tag.
          </video>
        }
      >
        <h1 className="mx-6 text-center text-8xl uppercase md:text-[82px]">
          Saudi women’s day
        </h1>
      </GridTile>
      <GridTile
        link="/df"
        className="col-span-2 row-span-1 bg-[url('/thumbnails/dreamforest.png')] bg-cover bg-center text-white"
        HoveredComponent={
          <video
            width={1350}
            height={540}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videos/dreamForest.mp4" />
            Your browser does not support the video tag.
          </video>
        }
      >
        <h1 className="mx-6 text-center text-5xl uppercase md:text-[82px]">
          Dream Forest
        </h1>
      </GridTile>
      <GridTile
        className="col-span-2 row-span-1 bg-[url('/thumbnails/jkk.png')] bg-cover bg-center"
        link="/jkk"
        HoveredComponent={
          <video
            width={1350}
            height={540}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videos/jkk.mp4" />
            Your browser does not support the video tag.
          </video>
        }
      >
        <h1 className="mx-6 text-center text-8xl uppercase md:text-[82px]">
          JKK
        </h1>
      </GridTile>
      <GridTile
        className="col-span-4 row-span-2 bg-[url('/thumbnails/sneakers.png')] bg-cover bg-center text-white"
        link="/sneakers"
        HoveredComponent={
          <video
            width={1350}
            height={540}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videos/sneakers.mp4" />
            Your browser does not support the video tag.
          </video>
        }
      >
        <h1 className="mx-6 text-center text-8xl uppercase md:text-[82px]">
          Sneakers
        </h1>
      </GridTile>
      <GridTile
        className="col-span-4 row-span-2 bg-[url('/thumbnails/spiderman.png')] bg-cover bg-center text-white"
        link="/spiderman"
        HoveredComponent={
          <video
            width={1350}
            height={540}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videos/spiderman.mp4" />
            Your browser does not support the video tag.
          </video>
        }
      >
        <h1 className="mx-6 text-center text-8xl uppercase md:text-[82px]">
          Spiderman
        </h1>
      </GridTile>
      <GridTile
        link="/heavenly"
        className="col-start-1 col-end-5 row-start-8 row-end-10 bg-[url('/thumbnails/heavenly.png')] bg-cover bg-center text-white"
        HoveredComponent={
          <video
            width={1350}
            height={540}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videos/heavenly.mp4" />
            Your browser does not support the video tag.
          </video>
        }
      >
        <h1 className="mx-6 text-center text-6xl uppercase md:text-[82px]">
          Heavenly
        </h1>
      </GridTile>
    </div>
  );
};

export default ProjectsGrid;
