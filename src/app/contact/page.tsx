import ContactForm from '@/components/ContactForm';
import Container from '@/components/Container';

export default function Contact() {
  return (
    <Container className="pt-58 flex flex-col pb-32">
      <h1 className="pt-64">
        I AM <br /> LISTENING
      </h1>
      <p>Please fill out this form, or send me an email.</p>
      <ContactForm />
    </Container>
  );
}
