import GridTile from '../GridTile';
import './projects-grid.css';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-9 gap-16 p-20">
      <GridTile className="col-span-3 row-span-2">
        <h1 className="mx-6 text-center uppercase">High</h1>
      </GridTile>
      <div
        id="transmition"
        className="relative col-span-1 row-span-2 h-[540px] rounded bg-black"
      >
        <video
          className="h-full w-full"
          autoPlay
          width={322}
          height={560}
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
      </div>
      <GridTile className="col-span-4 row-span-2">
        <h1 className="mx-6 text-center uppercase">Saudi women’s day</h1>
      </GridTile>
      <GridTile className="col-span-2 row-span-1">
        <h1 className="mx-6 text-center uppercase">Dream Forset</h1>
      </GridTile>
      <GridTile className="col-span-2 row-span-1">
        <h1 className="mx-6 text-center uppercase">JKK</h1>
      </GridTile>
      <GridTile className="col-span-4 row-span-2">
        <h1 className="mx-6 text-center uppercase">Sneakers</h1>
      </GridTile>
      <GridTile className="col-start-1 col-end-3 row-start-8 row-end-10">
        <h1 className="mx-6 text-center uppercase">Spider man</h1>
      </GridTile>
      <GridTile className="col-start-3 col-end-5 row-start-8 row-end-10">
        <h1 className="mx-6 text-center uppercase">Heavenly</h1>
      </GridTile>
    </div>
  );
};

export default ProjectsGrid;
