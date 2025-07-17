import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Results from './components/Results';
import WorkingProcess from './components/WorkingProcess';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Results />
      <WorkingProcess />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
