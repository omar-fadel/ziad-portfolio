import Container from '@/components/Container';
import GridTile from '@/components/GridTile';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Container className="grid">
        <video
          className="z-0 col-start-1 row-start-1"
          autoPlay
          width={1440}
          height={680}
          muted
          loop
          id="reel"
        >
          <source src="/videos/Reel.mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-10 col-start-1 row-start-1">
          <Header />
          <h2 className="mx-12 mt-20 w-full px-8 text-6xl uppercase text-white tablet:w-2/5 tablet:text-8xl">
            getting 2d animation done for{' '}
            <span className="underline">gaming studios & writers.</span>
          </h2>
        </div>
        <p className="px-64 py-32">
          Finally! You have found me. Now you can get your animation done
          professionally and on a budget. See my full portfolio →
        </p>
        <div className="grid grid-cols-4 grid-rows-9 gap-20 p-20">
          <GridTile className="col-start-1 col-end-4 row-start-1 row-end-3">
            <h1 className="text-center uppercase">High</h1>
          </GridTile>
          <GridTile className="col-start-4 col-end-4 row-start-1 row-end-3">
            <video
              className="h-full w-full"
              autoPlay
              width={322}
              height={588}
              muted
              loop
              id="transmition"
            >
              <source src="/videos/Transmition.mp4" />
              Your browser does not support the video tag.
            </video>
          </GridTile>
          <GridTile className="col-start-1 col-end-5 row-start-3 row-end-5">
            <h1 className="text-center uppercase">Saudi women’s day</h1>
          </GridTile>
          <GridTile className="col-start-1 col-end-3 row-start-5 row-end-6">
            <h1 className="text-center uppercase">Dream Forset</h1>
          </GridTile>
          <GridTile className="col-start-3 col-end-5 row-start-5 row-end-6">
            <h1 className="text-center uppercase">JKK</h1>
          </GridTile>
          <GridTile className="col-start-1 col-end-5 row-start-6 row-end-8">
            <h1 className="text-center uppercase">Sneakers</h1>
          </GridTile>
          <GridTile className="col-start-1 col-end-3 row-start-8 row-end-10">
            <h1 className="text-center uppercase">Spider man</h1>
          </GridTile>
          <GridTile className="col-start-3 col-end-5 row-start-8 row-end-10">
            <h1 className="text-center uppercase">Heavenly</h1>
          </GridTile>
        </div>
      </Container>
    </>
  );
}
