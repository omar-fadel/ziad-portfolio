import Image from 'next/image';

import Banner from '@/components/Banner/Banner';
import Container from '@/components/Container';
import ProjectVideoGrid from '@/components/ProjectVideoGrid';
import ProjectTile from '@/components/ProjectTile';
import projectsProps from '@/components/Projects';

export default function Spiderman() {
  return (
    <>
      <Banner videoName="spiderman" id="Spiderman" />
      <Container className="flex flex-col gap-32 px-96 py-32">
        <h1 className="uppercase">
          Spider <span className="text-pink-700">man</span>
        </h1>
        <p className="font-bold">Personal Project</p>
        <p>
          Loved the freedom of experimenting with{' '}
          <span className="font-bold">sketchy look</span> and some{' '}
          <span className="font-bold">messy details.</span>
        </p>
      </Container>
      <Container>
        <Image
          src={'/images/spiderman.png'}
          width={4096}
          height={2300}
          alt="spiderman"
        />
      </Container>
      <Container className="flex flex-col gap-32 px-96 py-32">
        <h2 className="uppercase">
          I drew <span className="text-pink-700">messy!</span>
        </h2>
        <p>
          Did not worry about cleaning up at all,{' '}
          <span className="font-bold text-pink-700">
            that&apos;s the beauty in this movie.
          </span>{' '}
          You can just <span className="font-bold">go with your style</span> and
          it will work.
        </p>
      </Container>
      <Container className="p-16">
        <ProjectVideoGrid
          top={{ name: 'spidermanTop', type: 'image' }}
          left={{
            name: 'spidermanLeft',
            type: 'image',
          }}
          right={{ name: 'spidermanRight', type: 'image' }}
          bottom={{
            name: 'spidermanBottom',
            type: 'image',
          }}
        />
      </Container>
      <div className="flex flex-col items-center justify-center gap-12 pb-16">
        <h4>There is more.</h4>
        <div className="flex flex-wrap items-center justify-center gap-12 px-12">
          <ProjectTile {...projectsProps['jkk']} />
          <ProjectTile {...projectsProps['sneakers']} />
          <ProjectTile {...projectsProps['dreamForest']} />
        </div>
      </div>
    </>
  );
}
