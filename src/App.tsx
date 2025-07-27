import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUsPage';
import SeoPage from './pages/SeoPage';
import SocialMediaPage from './pages/SocialMediaPage';
import ContentCreationPage from './pages/ContentCreationPage';
import EmailMarketingPage from './pages/EmailMarketingPage';  
import AnalyticalTrackingPage from './pages/Analytical&TrackingPage';
import ScrollToTop from './components/ScrollToTop';
// import WebDevPage from './pages/WebDevPage'; // Uncomment and create if needed
// import PpcPage from './pages/PpcPage'; // Uncomment and create if needed

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/seo" element={<SeoPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/content-creation" element={<ContentCreationPage />} />
          <Route path="/email-marketing" element={<EmailMarketingPage />} />
          <Route path="/analytics-tracking" element={<AnalyticalTrackingPage />} />
          {/* <Route path="/web-dev" element={<WebDevPage />} /> */}
          {/* <Route path="/ppc" element={<PpcPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
