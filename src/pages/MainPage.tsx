import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Results from '../components/Results';
import WorkingProcess from '../components/WorkingProcess';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
function MainPage() {
    return (
        <div>
            <Hero />
            <Features />
            <Services />
            <WhyChooseUs />
            <Results />
            {/* <Journey /> */}
            <WorkingProcess />
            <FAQ />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default MainPage
