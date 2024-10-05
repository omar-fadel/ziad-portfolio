import Image from 'next/image';

interface ItemProps {
  type: 'video' | 'image';
  name: string;
  width: number;
  height: number;
  className?: string;
}

interface ProjectVideoGridProps {
  left: Partial<ItemProps>;
  right: Partial<ItemProps>;
  top: Partial<ItemProps>;
  bottom: Partial<ItemProps>;
}

const Item: React.FC<ItemProps> = ({
  type,
  name,
  width,
  height,
  className,
}) => {
  return type === 'video' ? (
    <video
      autoPlay
      width={width}
      height={height}
      muted
      loop
      id={name}
      className={className}
    >
      <source src={`/videos/${name}.mp4`} type="video/mp4" />
    </video>
  ) : (
    <Image
      width={width}
      height={height}
      className={className}
      alt={name}
      src={`/images/${name}.png`}
    />
  );
};

const ProjectVideoGrid: React.FC<ProjectVideoGridProps> = ({
  bottom,
  left,
  right,
  top,
}) => {
  return (
    <div className="grid-row-5 grid grid-cols-2 gap-6">
      <Item
        name={top.name!}
        type={top.type ?? 'image'}
        height={591}
        width={1280}
        className="col-span-2 row-span-2"
      />
      <Item
        name={left.name!}
        type={left.type ?? 'image'}
        width={627}
        height={282}
        className="col-span-1 row-span-1"
      />
      <Item
        name={right.name!}
        type={right.type ?? 'image'}
        width={627}
        height={282}
        className="col-span-1 row-span-1"
      />
      <Item
        name={bottom.name!}
        type={bottom.type ?? 'image'}
        height={591}
        width={1280}
        className="col-span-2 row-span-2"
      />
    </div>
  );
};

export default ProjectVideoGrid;
