import Banner from '@/components/Banner/Banner';
import Container from '@/components/Container';
import ProjectVideoGrid from '@/components/ProjectVideoGrid';
import TextBanner from '@/components/TextBanner';
import Image from 'next/image';

export default function df() {
  return (
    <>
      <Banner id="Dream Forest" videoName="dreamForest" />
      <Container className="flex flex-col items-center gap-16 py-16">
        <TextBanner blackNode="DREAM" color="forest" coloredNode="FOREST" />
        <div className="w-full px-64">
          <p>
            <span className="font-bold">Project:</span> Dream Forest
          </p>
          <p>
            <span className="font-bold">Client:</span> Wonder Studio
          </p>
        </div>
        <p className="px-64">
          For this project, the primary goal is to provide{' '}
          <span className="font-bold">more details in the closeup shots</span>{' '}
          and the <span className="font-bold">work more with animals</span>{' '}
          rather than humans. It was really fun.
        </p>
        <div className="w-full px-64">
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
        <Image
          src={'/images/birds.png'}
          width={4096}
          height={2304}
          alt="birds"
        />
        <div className="px-64">
          <h2 className="text-forest">GREEN.</h2>
          <h2>EVERYWHERE.</h2>
          <p>
            The project is{' '}
            <span className="font-bold">inspiring and colorful</span> in many
            ways. Really soothing working on all the green nature colors.
          </p>
        </div>
        <ProjectVideoGrid
          top={{ name: 'df-top', type: 'image' }}
          left={{ name: 'df-left', type: 'image' }}
          right={{ name: 'df-right', type: 'image' }}
          bottom={{ name: 'df-bottom', type: 'image' }}
        />
      </Container>
    </>
  );
}
