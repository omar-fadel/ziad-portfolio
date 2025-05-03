'use client';

import { ReactNode, useEffect, useRef } from 'react';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;

    return () => {
      if (video) {
        video.currentTime = 0;
      }
    };
  }, []);

  return (
    <Container className="relative grid">
      <video
        ref={videoRef}
        className="z-0 col-start-1 row-start-1 h-full w-full object-cover"
        autoPlay
        style={{ height, width }}
        loop
        muted
        controls
        id={id}
      >
        <source src={`/videos/${videoName}.mp4`} />
        Your browser does not support the video tag.
      </video>
      <div className="absolute left-0 right-0 top-0 z-10">
        <Header />
      </div>
      <div className="pointer-events-none z-10 col-start-1 row-start-1 flex flex-col">
        {children}
      </div>
    </Container>
  );
};

export default Banner;
