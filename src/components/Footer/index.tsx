import Image from 'next/image';
import Link from 'next/link';

import ContactButton from '../ContactButton';
import Container from '../Container';

const Footer = () => {
  return (
    <Container className="border-t-8 border-t-slate-600 px-16 py-36">
      <footer className="grid grid-cols-3 grid-rows-1 gap-40">
        <article className="col-span-1 flex flex-col gap-4">
          <h3>Feel free to reach out</h3>
          <ContactButton />
        </article>
        <article className="col-span-1 flex flex-col gap-2">
          <h3>here’s everything</h3>
          <Link href={'/'}>
            <h3 className="hover:cursor-pointer hover:text-red-700">Home</h3>
          </Link>
          <Link href={'/projects'}>
            <h3 className="hover:cursor-pointer hover:text-red-700">
              Projects
            </h3>
          </Link>
          <Link href={'/contact'}>
            <h3 className="hover:cursor-pointer hover:text-red-700">Contact</h3>
          </Link>
        </article>
        <article className="col-span flex flex-col gap-2">
          <h3>And More...</h3>
          <div className="flex items-center gap-4">
            <Image
              src={'/icons/instagram.png'}
              alt="instagram"
              width={21}
              height={21}
            />
            <Link
              href={
                'https://www.instagram.com/ziadmagdyanimationz?igsh=cXI4bmQ1N21wb2Jh'
              }
              target="_blank"
            >
              <h3 className="hover:cursor-pointer hover:text-red-700">
                Instagram
              </h3>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={'/icons/email.png'}
              alt="email"
              width={21}
              height={21}
            />
            <Link href={'mailto:Ziad.magdy.a1@gmail.com'}>
              <h3 className="hover:cursor-pointer hover:text-red-700">Email</h3>
            </Link>
          </div>
        </article>
      </footer>
    </Container>
  );
};

export default Footer;
