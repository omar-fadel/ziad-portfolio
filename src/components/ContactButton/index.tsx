'use client';
import Link from 'next/link';

const ContactButton: React.FC = () => {
  return (
    <Link
      href={'/contact'}
      className="flex h-16 max-w-[20rem] items-center justify-center rounded bg-red-500 px-6 uppercase text-white"
    >
      <p className="text-[1.5rem] font-bold">CONTACT</p>
    </Link>
  );
};

export default ContactButton;
