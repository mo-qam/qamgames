import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import Showcase from './sections/Showcase.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-night text-white">
      <Header />
      <main className="space-y-0">
        <Hero />
        <About />
  <Services />
  {/* Showcase hidden temporarily while there are no games to display */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
