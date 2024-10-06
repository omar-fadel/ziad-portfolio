import Image from 'next/image';

import Banner from '@/components/Banner/Banner';
import Container from '@/components/Container';
import ProjectVideoGrid from '@/components/ProjectVideoGrid';

export default function Sneackers() {
  return (
    <>
      <Banner videoName="sneakers" id="Sneakers" />
      <Container className="flex flex-col gap-32 px-96 py-32">
        <h1 className="uppercase text-orange-600">Sneakers</h1>
        <p className="font-bold">Personal Project</p>
        <p>
          Trying a couple of new things in my animations.
          <span className="font-bold text-orange-600">
            Different color palettes
          </span>
          , <span className="font-bold">2D background animation</span> and
          <span className="font-bold">mixing 2D with 3D.</span>
        </p>
      </Container>
      <Container>
        <Image
          src={'/images/sneakers.png'}
          width={4096}
          height={2300}
          alt="sneakers"
        />
      </Container>
      <Container className="flex flex-col gap-32 px-96 py-32">
        <h2 className="uppercase">
          Because <span className="text-orange-600">why not?</span>
        </h2>
        <p>
          This sneaker 3D model was online and it was free! So, I thought{' '}
          <span className="font-bold">
            why not create a seamless mix between 2D and 3D
          </span>{' '}
          animation and explore new areas within my niche.
        </p>
      </Container>
      <Container className="p-16">
        <ProjectVideoGrid
          top={{ name: 'sneakersTop', type: 'image' }}
          left={{ name: 'sneakersLeft', type: 'image' }}
          right={{ name: 'sneakersRight', type: 'image' }}
          bottom={{ name: 'sneakersBottom', type: 'image' }}
        />
      </Container>
    </>
  );
}
