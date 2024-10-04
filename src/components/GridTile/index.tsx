interface GridTileProps {
  children: React.ReactNode;
  className?: string;
}

const GridTile: React.FC<GridTileProps> = ({ className, children }) => {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded bg-slate-400 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridTile;
