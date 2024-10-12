import Image from 'next/image';

import Banner from '@/components/Banner/Banner';
import Container from '@/components/Container';
import ProjectTile from '@/components/ProjectTile';
import projectsProps from '@/components/Projects';

export default function Transmition() {
  return (
    <>
      <Banner videoName="transmition" id="transmition" />
      <Container className="flex flex-col gap-32 px-96 py-32">
        <h1>TRANSMITION</h1>
        <div>
          <p>
            <span className="font-bold">Project:</span> Transmission
          </p>
          <p>
            <span className="font-bold">Client:</span> Storiaverse
          </p>
        </div>
        <p>
          In a dystopian world,{' '}
          <span className="font-bold">
            nano-tattoos have infected the majority of the population
          </span>
          , plunging humanity into a dark reality.
        </p>
        <p>
          Will be Evelyn be able to save everyone?
          <br /> Check out the trailer to know more about the story!
        </p>
        <p>The art style is inspired by “cyberpunk edgerunner”</p>
        <div>
          <p className="font-bold">My Role:</p>
          <ul className="list-item pl-12">
            <li>
              <p>- Storyboard</p>
            </li>
            <li>
              <p>- Charachter design</p>
            </li>
            <li>
              <p>- Animation</p>
            </li>
            <li>
              <p>- 3D design</p>
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <Image
          src={'/images/transmition.png'}
          width={4096}
          height={2304}
          alt="transmition"
        />
      </Container>
      <Container className="flex flex-col gap-32 px-96 py-32">
        <h2>Character Design</h2>
        <p>
          Evylen is a <span className="font-bold">bold character</span>, a bit
          sad, and does not give a f*ck.
        </p>
      </Container>
      <Container className="flex flex-col items-center gap-16 pb-32">
        <div className="grid grid-cols-2 grid-rows-2">
          <Image
            src={'/images/transmitionLeft.png'}
            width={674}
            height={880}
            alt="transmitionLeft"
            className="col-span-1 row-span-2"
          />
          <Image
            src="/images/transmitionRight.png"
            width={674}
            height={880}
            alt="transmitionRight"
            className="col-span-1 row-span-2"
          />
          <div className="col-span-2 row-span-1 flex w-full justify-center">
            <Image
              src="/images/transmitionBottom.png"
              width={1118}
              height={714}
              alt="transmitionBottom"
            />
          </div>
        </div>
        <h2 className="text-center uppercase">3D Modeling</h2>
        <div className="grid max-w-[1016px] grid-cols-3 grid-rows-2 gap-6">
          <div className="col-span-2 row-span-2 flex justify-center">
            <Image
              src="/images/modelingLeft.png"
              width={833}
              height={998}
              alt="modelingLeft"
              className=""
            />
          </div>
          <div className="col-span-1 row-span-1 flex justify-center">
            <Image
              src={'/images/modelingRight.png'}
              width={395}
              height={489}
              alt="modeling right"
            />
          </div>
          <div className="col-span-1 row-span-1 flex justify-center">
            <Image
              src={'/images/modelingRightBottom.png'}
              width={395}
              height={489}
              alt="modeling right bottom"
            />
          </div>
        </div>
        <h2 className="text-center uppercase">Rough Animation</h2>
        <div className="grid grid-cols-2 grid-rows-1 gap-6">
          <video
            className="col-span-1"
            autoPlay
            width={630}
            height={596}
            muted
            loop
            id="rough-left"
          >
            <source src="/videos/roughLeft.mp4" type="video/mp4" />
          </video>
          <video
            className="col-span-1"
            autoPlay
            width={630}
            height={596}
            muted
            loop
            id="rough-right"
          >
            <source src="/videos/roughRight.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>
      <Container
        background="black"
        className="flex flex-col items-center gap-16 p-16"
      >
        <h2 className="uppercase text-white">
          we Welcome you into the darkness.
        </h2>
        <div className="grid grid-cols-3 grid-rows-1 gap-6">
          <Image
            src={'/images/darknessLeft.png'}
            width={383}
            height={682}
            alt="darknessLeft"
            className="col-span-1"
          />
          <Image
            src={'/images/darknessMiddle.png'}
            width={383}
            height={682}
            alt="darknessMiddle"
            className="col-span-1"
          />
          <Image
            src={'/images/darknessRight.png'}
            width={383}
            height={682}
            alt="darknessRight"
            className="col-span-1"
          />
        </div>
      </Container>
      <Container className="flex flex-col gap-16 p-16">
        <div className="-mb-6 grid max-w-[1060px] grid-cols-3 gap-6">
          <Image
            src={'/images/cityLeft.png'}
            width={383}
            height={682}
            alt="cityLeft"
          />
          <Image
            src={'/images/cityMiddle.png'}
            width={599}
            height={1068}
            alt="cityMiddle"
          />
          <Image
            src={'/images/cityRight.png'}
            width={383}
            height={682}
            alt="cityRight"
          />
        </div>
        <div className="-mb-6 grid max-w-[1060px] grid-cols-2 gap-6">
          <Image
            src={'/images/trainLeft.png'}
            width={630}
            height={1026}
            alt="trainLeft"
          />
          <Image
            src={'/images/trainRight.png'}
            width={630}
            height={1026}
            alt="trainRight"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid max-w-[1060px] grid-cols-3 grid-rows-1 gap-6">
          <Image
            src={'/images/trainBottomLeft.png'}
            width={413}
            height={682}
            alt="trainBottomLeft"
            className="col-span-1 row-span-1"
          />
          <Image
            src={'/images/trainBottomMiddle.png'}
            width={413}
            height={682}
            alt="trainBottomMiddle"
            className="col-span-1 row-span-1"
          />
          <Image
            src={'/images/trainBottomRight.png'}
            width={413}
            height={682}
            alt="trainBottomRight"
            className="col-span-1 row-span-1"
          />
        </div>
      </Container>
      <Container className="grid px-32 py-32">
        <Image
          src={'/images/transmitionLogo.png'}
          width={1022}
          height={216}
          className="h-full w-full"
          alt="logo"
        />
      </Container>
      <div className="flex flex-col items-center justify-center gap-12 pb-16">
        <h2>There is more.</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 px-12">
          <ProjectTile {...projectsProps['swd']} />
          <ProjectTile {...projectsProps['spiderman']} />
          <ProjectTile {...projectsProps['dreamForest']} />
        </div>
      </div>
    </>
  );
}
