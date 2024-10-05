import GridTile from '../GridTile';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-9 gap-20 p-20">
      <GridTile className="col-span-3 row-span-2">
        <h1 className="text-center uppercase">High</h1>
      </GridTile>
      <GridTile className="col-span-1 row-span-2 bg-black p-0">
        <video
          className="h-full w-full"
          autoPlay
          width={322}
          height={588}
          muted
          loop
          id="transmition"
        >
          <source src="/videos/Transmition.mp4" />
          Your browser does not support the video tag.
        </video>
      </GridTile>
      <GridTile className="col-span-4 row-span-2">
        <h1 className="text-center uppercase">Saudi women’s day</h1>
      </GridTile>
      <GridTile className="col-span-2 row-span-1">
        <h1 className="text-center uppercase">Dream Forset</h1>
      </GridTile>
      <GridTile className="col-span-2 row-span-1">
        <h1 className="text-center uppercase">JKK</h1>
      </GridTile>
      <GridTile className="col-span-4 row-span-2">
        <h1 className="text-center uppercase">Sneakers</h1>
      </GridTile>
      <GridTile className="col-start-1 col-end-3 row-start-8 row-end-10">
        <h1 className="text-center uppercase">Spider man</h1>
      </GridTile>
      <GridTile className="col-start-3 col-end-5 row-start-8 row-end-10">
        <h1 className="text-center uppercase">Heavenly</h1>
      </GridTile>
    </div>
  );
};

export default ProjectsGrid;
