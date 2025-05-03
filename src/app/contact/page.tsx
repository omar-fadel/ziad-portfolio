import ContactForm from '@/components/ContactForm';
import Container from '@/components/Container';

export default function Contact() {
  return (
    <Container className="pt-58 flex flex-col px-4 pb-32">
      <h1 className="md:text-12xl pt-64 text-center text-8xl">
        I AM <br /> LISTENING
      </h1>
      <p className="text-center text-4xl">
        Please fill out this form, or send me an email.
      </p>
      <ContactForm />
    </Container>
  );
}
