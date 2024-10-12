import Link from 'next/link';

import Container from '@/components/Container';
import Banner from '@/components/Banner/Banner';
import ProjectsGrid from '@/components/ProjectsGrid/ProjectsGrid';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Banner id="reel" videoName="Reel">
        <div className="flex flex-1 items-center overflow-hidden">
          <h2 className="mx-12 mt-20 w-full px-8 text-6xl uppercase text-white tablet:w-2/5 tablet:text-8xl">
            getting 2d animation done for{' '}
            <span className="underline">gaming studios & writers.</span>
          </h2>
        </div>
      </Banner>
      <Container className="flex flex-col">
        <p className="px-64 py-32">
          Finally! You have found me. Now you can get your animation done
          professionally and on a budget. See my full{' '}
          <Link
            className="text-slate-400 hover:text-red-700"
            href={'/projects'}
          >
            portfolio →
          </Link>
        </p>
        <ProjectsGrid />
        <ContactSection />
      </Container>
    </>
  );
}
