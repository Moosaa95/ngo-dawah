import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FocusValues from '@/components/FocusValues';
import Programs from '@/components/Programs';
import Organogram from '@/components/Organogram';
import Team from '@/components/Team';
import Offices from '@/components/Offices';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <FocusValues />
        <Programs />
        <Organogram />
        <Team />
        <Offices />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
