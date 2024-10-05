import { ReactNode } from 'react';

import Header from '../Header';
import Container from '../Container';

interface BannerProps {
  width?: number;
  height?: number;
  id: string;
  videoName: string;
  children?: ReactNode;
}

const Banner: React.FC<BannerProps> = ({
  height = 680,
  width = 1440,
  id,
  videoName,
  children,
}) => {
  return (
    <Container className="grid">
      <video
        className="z-0 col-start-1 row-start-1"
        autoPlay
        width={width}
        height={height}
        muted
        loop
        id={id}
      >
        <source src={`/videos/${videoName}.mp4`} />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 col-start-1 row-start-1 flex flex-col">
        <Header />
        {children}
      </div>
    </Container>
  );
};

export default Banner;
