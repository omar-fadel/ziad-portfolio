import Image from 'next/image';

import Banner from '@/components/Banner/Banner';
import Container from '@/components/Container';
import ProjectVideoGrid from '@/components/ProjectVideoGrid';
import ProjectTile from '@/components/ProjectTile';
import projectsProps from '@/components/Projects';

export default function Heavenly() {
  return (
    <>
      <Banner videoName="heavenly" id="Heavenly" />
      <Container className="flex flex-col gap-32 px-96 py-32">
        <h1 className="uppercase text-beige">heavenly</h1>
        <p className="font-bold">Personal Project</p>
        <p>
          Trying a a new style with a heavenly, divine feeling. And a whole
          bunch of <span className="font-bold">volumetric lighting.</span>
        </p>
      </Container>
      <Container>
        <Image
          src={'/images/heavenly.png'}
          width={4096}
          height={2300}
          alt="heavenly"
        />
      </Container>
      <Container className="flex flex-col gap-32 px-96 py-32">
        <h2 className="uppercase">
          An <span className="text-beige">Angel</span> is born.
        </h2>
        <p>You read that right! This is how angels are born... I swear!</p>
      </Container>
      <Container className="p-16">
        <ProjectVideoGrid
          top={{ name: 'heavenlyTop', type: 'image' }}
          left={{ name: 'heavenlyLeft', type: 'image' }}
          right={{ name: 'heavenlyRight', type: 'image' }}
          bottom={{ name: 'heavenlyBottom', type: 'image' }}
        />
      </Container>
      <div className="flex flex-col items-center justify-center gap-12 pb-16">
        <h4>There is more.</h4>
        <div className="flex flex-wrap items-center justify-center gap-12 px-12">
          <ProjectTile {...projectsProps['swd']} />
          <ProjectTile {...projectsProps['spiderman']} />
          <ProjectTile {...projectsProps['transmition']} />
        </div>
      </div>
    </>
  );
}
