import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Articles from './sections/Articles';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <div className="inset-0 bg-grain pointer-events-none z-50 fixed" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}