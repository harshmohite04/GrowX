import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-b border-gray-800 bg-[#0d0d0d] relative z-20">
      <div className="text-center flex flex-col items-center">
        <div className="flex justify-center self-center ">
          <div className="text-2xl font-bold text-white">Grow</div>
          <div className="text-2xl font-bold text-green-400">X</div>
        </div>
        <div className="text-sm font-bold text-green-400">Tech & Marketing</div>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white text-sm">
        <li><a href="#services" className="hover:text-green-400">About Us</a></li>
        <li><a href="#why-choose" className="hover:text-green-400">Services</a></li>
        <li><a href="#results" className="hover:text-green-400">Use Cases</a></li>
        <li><a href="#process" className="hover:text-green-400">Lastest Work</a></li>
        <li><a href="#faq" className="hover:text-green-400">Testmonials</a></li>
      </ul>
      <button className="hidden md:block bg-green-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-300 transition">Contact For Quaotation</button>
      {/* Hamburger Icon */}
      <button className="md:hidden flex flex-col justify-center items-center ml-4" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0d0d0d] border-b border-gray-800 flex flex-col items-center py-4 md:hidden animate-fade-in z-30">
          <ul className="flex flex-col gap-4 text-white text-base w-full items-center">
            <li><a href="#services" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li><a href="#why-choose" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#results" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Use Cases</a></li>
            <li><a href="#process" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Lastest Work</a></li>
            <li><a href="#faq" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Testmonials</a></li>
          </ul>
          <button className="mt-4 bg-green-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-300 transition w-11/12" onClick={() => setMenuOpen(false)}>Contact For Quaotation</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 