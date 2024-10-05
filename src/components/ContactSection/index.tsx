import Image from 'next/image';

import ContactButton from '../ContactButton';

const ContactSection = () => {
  return (
    <div className="mb-16 grid grid-cols-2 grid-rows-1 p-16">
      <div className="col-span-1">
        <Image
          src={'/images/ziad.png'}
          width={566}
          height={566}
          className="h-full w-full"
          alt="ziad picture"
        />
      </div>
      <div className="col-span flex flex-col justify-center gap-6 px-16">
        <p className="font-code text-8xl font-black">Feel free to reach out</p>
        <ContactButton />
      </div>
    </div>
  );
};

export default ContactSection;
