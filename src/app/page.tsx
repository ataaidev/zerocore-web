import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <main className="flex-grow">
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
