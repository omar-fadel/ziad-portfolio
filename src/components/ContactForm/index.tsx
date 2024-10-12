'use client';

import { FormEvent, useState } from 'react';

import Input from '../Input';
import Button from '../Button/Button';
import Slider from '../Slider';

interface ContactData {
  name: string;
  email: string;
  company: string;
  message: string;
  budget: number;
}
const ContactForm: React.FC = () => {
  const [data, setData] = useState<ContactData>({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: 0,
  });

  const handleChangeData =
    (key: keyof ContactData) => (value: string | number) => {
      setData((prev) => ({ ...prev, [key]: value }));
    };

  const handleSubmit = (event?: FormEvent) => {
    event?.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 py-32">
      <Input
        value={data.name}
        onChange={handleChangeData('name')}
        label="Your Name"
      />
      <Input
        value={data.email}
        onChange={handleChangeData('email')}
        label="Email"
      />
      <Input
        value={data.company}
        onChange={handleChangeData('company')}
        label="Company"
      />
      <Input
        label="Message"
        isTextArea
        value={data.message}
        onChange={handleChangeData('message')}
      />
      <Slider
        label={`Budget: $${data.budget}`}
        value={data.budget}
        onChange={handleChangeData('budget')}
      />
      <Button onClick={handleSubmit}>Send</Button>
    </form>
  );
};

export default ContactForm;
