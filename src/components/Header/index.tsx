'use client';

import Image from 'next/image';
import Button from '../Button/Button';

interface HeaderProps {}

const Header: React.FC = () => {
  return (
    <header className="flex justify-between p-4">
      <Image width={43} height={53} alt="logo" src="/images/logo.png" />
      <Button>CONTACT</Button>
    </header>
  );
};

export default Header;
