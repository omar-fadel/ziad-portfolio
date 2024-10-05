interface TextBannerProps {
  color: 'beige' | 'forest';
  coloredNode: React.ReactNode;
  blackNode: React.ReactNode;
}

const TextBanner: React.FC<TextBannerProps> = ({
  blackNode,
  color,
  coloredNode,
}) => {
  return (
    <h1 className="py-32">
      {blackNode}
      <br />
      <span className={`text-${color}`}>{coloredNode}</span>
    </h1>
  );
};

export default TextBanner;
