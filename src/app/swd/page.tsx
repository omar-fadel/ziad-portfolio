import Image from 'next/image';

import Banner from '@/components/Banner/Banner';
import Container from '@/components/Container';
import HeroSection from '@/components/HeroSection';
import TextBanner from '@/components/TextBanner';
import ProjectTile from '@/components/ProjectTile';
import projectsProps from '@/components/Projects';

export default function SWD() {
  return (
    <>
      <Banner id="swd" videoName="Swd" height={810} />
      <Container className="flex flex-col items-center py-16">
        <TextBanner
          blackNode="Saudi"
          color="beige"
          coloredNode={
            <>
              Women&apos;s <br /> Day
            </>
          }
        />
        <div className="flex flex-col gap-24 px-[25%]">
          <div>
            <p>
              <span className="font-bold">Project:</span> Saudi Women&apos;s day
            </p>
            <p>
              <span className="font-bold">Client:</span> Wonder Studio
            </p>
          </div>
          <p>
            The project’s goal is to celebrate influential women in all fields
            and to empower women in Saudi Arabia to pursue their goals.
          </p>
          <p>
            So, <span className="font-bold">an anime inspired video</span> was
            the the{' '}
            <span className="font-bold">
              best option to create captivating visuals
            </span>{' '}
            and have flexible <span className="font-bold">complex scenes.</span>
          </p>
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
            </ul>
          </div>
          <div>
            <h2 className="text-center">MOODBOARD</h2>
            <p>
              Inspirations for character design styles, art direction, colors,
              illustration styles.
            </p>
          </div>
          <Image
            src={'/images/moodboard.png'}
            height={2945}
            width={4081}
            alt="moodboard"
          />
          <div>
            <h2 className="text-center uppercase">Animation</h2>
            <p>
              Storyboarding was done in 3d due to the complex nature of the
              animation and camera movements.
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-8">
            <video
              autoPlay
              width={1280}
              height={591}
              muted
              loop
              id={'animation'}
              className="col-span-2 row-span-2"
            >
              <source src="/videos/Animation.mp4" type="video/mp4" />
            </video>
            <video
              autoPlay
              width={629}
              height={290}
              muted
              loop
              id={'compare1'}
              className="col-span-1 row-span-1"
            >
              <source src="/videos/AnimationCompareOne.mp4" type="video/mp4" />
            </video>
            <video
              autoPlay
              width={629}
              height={290}
              muted
              loop
              id={'compare2'}
              className="col-span-1 row-span-1"
            >
              <source src="/videos/AnimationCompareTwo.mp4" type="video/mp4" />
            </video>
          </div>
          <h2 className="mb-24 text-center">
            MEET <span className="text-beige">OUR HEROES</span>
          </h2>
        </div>
        <div className="flex flex-col gap-16">
          <HeroSection
            header="Farah Jefry"
            subTitle="Top scorer in the 2020–2021 Champions Cup."
            imageName="Farah-jefery"
          />
          <HeroSection
            header="Yara Alhogbani"
            subTitle="Gold Medalist at ITF Women's World Tennis Tour and the Asian Games."
            imageName="yara"
          />
          <HeroSection
            header="Dalma Malhas"
            subTitle="The first Saudi female athlete to compete at the Summer Olympics."
            imageName="dalma"
          />
        </div>
      </Container>
      <Container
        background="black"
        className="flex flex-col items-center gap-16 p-16"
      >
        <h2 className="text-white">More stunning visuals.</h2>
        <Image
          src={'/images/visualsOne.png'}
          width={4092}
          height={2304}
          alt="visuals"
          className="rounded"
        />
        <Image
          src={'/images/visualsTwo.png'}
          width={4092}
          height={2304}
          alt="visuals"
          className="rounded"
        />
        <div className="grid grid-cols-3 justify-end">
          <h2 className="flex items-end text-white">
            From all of us women who never quit.
          </h2>
          <Image
            className="z-0 col-span-2 col-start-2"
            width={2249}
            height={2222}
            alt="tennis"
            src={'/images/tennis.png'}
          />
        </div>
      </Container>
      <Container className="flex flex-col items-center gap-16 p-16">
        <h2 className="uppercase">—Till we beat you again.</h2>
      </Container>
      <div className="flex flex-col items-center justify-center gap-12 pb-16">
        <h4>There is more.</h4>
        <div className="flex flex-wrap items-center justify-center gap-12 px-12">
          <ProjectTile {...projectsProps['high']} />
          <ProjectTile {...projectsProps['dreamForest']} />
          <ProjectTile {...projectsProps['spiderman']} />
        </div>
      </div>
    </>
  );
}
