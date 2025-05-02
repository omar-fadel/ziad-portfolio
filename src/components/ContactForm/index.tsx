'use client';

import { FormEvent, useEffect, useState } from 'react';

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
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const submittedInStorage = localStorage.getItem('submitted');
    setSubmitted(submittedInStorage === 'true');
  }, []);

  const handleChangeData =
    (key: keyof ContactData) => (value: string | number) => {
      setData((prev) => ({ ...prev, [key]: value }));
    };

  const handleSubmit = (event?: FormEvent) => {
    event?.preventDefault();
    if (!data.name || !data.email || !data.company || !data.message) {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    }
    setLoading(true);
    fetch('/api', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true);
        localStorage.setItem('submitted', 'true');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div
        className={`fixed left-[80%] top-10 w-fit rounded-lg bg-red-500 p-4 text-4xl text-white ${
          showSnackbar ? 'opacity-100' : 'opacity-0'
        } z-50 transition-opacity duration-300`}
      >
        Please fill all the form
      </div>
      {submitted ? (
        <div className="flex flex-col gap-6 py-32 text-center">
          <h1>Thank you!</h1>
          <Button onClick={() => setSubmitted(false)}>
            Send another message
          </Button>
        </div>
      ) : (
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
          {loading ? null : <Button onClick={handleSubmit}>Send</Button>}
        </form>
      )}
    </>
  );
};

export default ContactForm;
