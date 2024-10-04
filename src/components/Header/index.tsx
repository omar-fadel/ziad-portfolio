'use client';

import Image from 'next/image';

import Button from '../Button/Button';

const Header: React.FC = () => {
  const handleClickContact = () => {
    console.log('Contact clicked');
  };

  return (
    <header className="flex justify-between p-6">
      <Image width={43} height={53} alt="logo" src="/images/logo.png" />
      <Button onClick={handleClickContact}>CONTACT</Button>
    </header>
  );
};

export default Header;
