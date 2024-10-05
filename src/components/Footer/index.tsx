import ContactButton from '../ContactButton';
import Container from '../Container';

const Footer = () => {
  return (
    <Container className="border-t-8 border-t-slate-600 px-16 py-36">
      <footer className="grid grid-cols-3 grid-rows-1 gap-40">
        <article className="col-span-1 flex flex-col gap-4">
          <h3>Feel free to reach out</h3>
          <ContactButton />
        </article>
        <article className="col-span-1 flex flex-col gap-2">
          <h3>here’s everything</h3>
          <h3>Home</h3>
          <h3>Projects</h3>
          <h3>Contact</h3>
        </article>
        <article className="col-span flex flex-col gap-2">
          <h3>And More...</h3>
          <h4>Instagram</h4>
          <h4>Email</h4>
        </article>
      </footer>
    </Container>
  );
};

export default Footer;
