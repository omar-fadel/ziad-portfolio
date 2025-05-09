import Image from 'next/image';

import Banner from '@/components/Banner/Banner';
import Container from '@/components/Container';
import ProjectVideoGrid from '@/components/ProjectVideoGrid';
import ProjectTile from '@/components/ProjectTile';
import projectsProps from '@/components/Projects';

export default function High() {
  return (
    <>
      <Banner videoName="high" id="High" />
      <Container className="flex flex-col gap-32">
        <div className="flex flex-col items-center gap-32">
          <h1 className="w-full">
            <span className="text-black">H</span>
            <span className="text-pink-900">I</span>
            <span className="text-pink-700">G</span>
            <span className="text-pink-500">H</span>
          </h1>
          <p className="w-full font-bold">Personal Project.</p>
          <p>
            Expanding my style and{' '}
            <span className="font-bold">trying new art directions</span> to more
            explore and diversify my abilities.
          </p>
        </div>
      </Container>
      <Container>
        <Image
          src={'/images/high.png'}
          className="mb-32"
          width={4096}
          height={2306}
          alt="high"
        />
      </Container>
      <Container className="flex flex-col gap-32">
        <h2 className="md:text-12xl text-6xl uppercase">
          What in the name of <span className="text-pink-600">mushrooms</span>{' '}
          is happening?
        </h2>
        <p className="max-w-screen 12 text-center text-4xl">
          Couldn’t tell you if I wanted to, just some{' '}
          <span className="font-bold">inspired abstract art</span>
          where I am testing my abilities.
        </p>
      </Container>
      <Container className="p-16">
        <ProjectVideoGrid
          top={{ name: 'highTop', type: 'image' }}
          left={{ name: 'highLeft', type: 'image' }}
          right={{ name: 'highRight', type: 'image' }}
          bottom={{ name: 'highBottom', type: 'video' }}
        />
      </Container>
      <div className="flex flex-col items-center justify-center gap-12 pb-16 text-center">
        <h4>There is more.</h4>
        <div className="flex flex-wrap items-center justify-center gap-12 px-12">
          <ProjectTile {...projectsProps['transmition']} />
          <ProjectTile {...projectsProps['heavenly']} />
          <ProjectTile {...projectsProps['dreamForest']} />
        </div>
      </div>
    </>
  );
}
