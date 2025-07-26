import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
