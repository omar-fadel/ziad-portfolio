'use client';

import Image from 'next/image';

import ContactButton from '../ContactButton';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between p-6">
      <Image width={43} height={53} alt="logo" src="/images/logo.png" />
      <ContactButton />
    </header>
  );
};

export default Header;
