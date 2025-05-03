'use client';

import Image from 'next/image';
import Link from 'next/link';

import ContactButton from '../ContactButton';

const Header: React.FC = () => {
  return (
    <header className="z-10 flex justify-between p-6">
      <Link href="/">
        <Image width={43} height={53} alt="logo" src="/images/logo.png" />
      </Link>
      <ContactButton />
    </header>
  );
};

export default Header;
