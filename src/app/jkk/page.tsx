import Banner from '@/components/Banner/Banner';
import Container from '@/components/Container';

export default function JKK() {
  return (
    <>
      <Container>
        <Banner videoName="jkk" id="JKK" />
      </Container>
      <Container className="flex flex-col gap-32 px-96 py-32">
        <div>
          <h1 className="font-black text-pink-600">JKK</h1>
          <h2>FAN</h2>
          <h2 className="uppercase">Animation</h2>
        </div>
        <div className="">
          <p>
            <span className="font-bold">Project:</span> Jujutsu Kaisen Fan
            Animation
          </p>
          <p>
            <span className="font-bold">Client:</span> Jemia Silva
          </p>
        </div>
        <p>
          A commission project for a{' '}
          <span className="font-bold">Jujutsu Kaisen</span> Fan Animation. I
          wanted to{' '}
          <span className="font-bold">bring the Mappa Studio spirit</span> to
          this project.
        </p>
        <div>
          <p className="font-bold">My Role:</p>
          <ul className="list-item">
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
      </Container>
    </>
  );
}
