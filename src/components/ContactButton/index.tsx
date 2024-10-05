'use client';
import { useCallback } from 'react';

const ContactButton: React.FC = () => {
  const handleClickContactButton = useCallback(() => {
    console.log('Contact button clicked');
  }, []);
  return (
    <button
      className="h-16 rounded bg-red-500 px-6 uppercase text-white"
      onClick={handleClickContactButton}
    >
      CONTACT
    </button>
  );
};

export default ContactButton;
