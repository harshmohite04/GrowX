import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-b border-gray-800 bg-[#0d0d0d] shadow-lg transition-shadow duration-300">
      <div className="text-center flex flex-col items-center cursor-pointer group transition-transform duration-200 hover:scale-105">
        <div className="flex justify-center self-center ">
          <div className="text-2xl font-bold text-white transition-colors duration-200 group-hover:text-green-400">Grow</div>
          <div className="text-2xl font-bold text-green-400">X</div>
        </div>
        <div className="text-sm font-bold text-green-400">Tech & Marketing</div>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white text-sm">
        {[
          { label: "Home", href: "#services" },
          { label: "About Us", href: "#services" },
          { label: "Services", href: "#why-choose" },
          { label: "Use Cases", href: "#results" },
          { label: "Latest Work", href: "#process" },
          { label: "Testimonials", href: "#faq" },
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="relative hover:text-green-400 transition-colors duration-200 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:-bottom-1"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="hidden md:block bg-green-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-300 transition-transform duration-200 hover:scale-105 shadow" >Contact For Quotation</button>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center ml-4 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 top-0 w-full bg-[#0d0d0d] border-b border-gray-800 flex flex-col items-center py-4 z-40 transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
        style={{ boxShadow: menuOpen ? '0 8px 32px 0 rgba(0,0,0,0.2)' : 'none' }}
      >
        <ul className="flex flex-col gap-4 text-white text-base w-full items-center">
          {[
            { label: "About Us", href: "#services" },
            { label: "Services", href: "#why-choose" },
            { label: "Use Cases", href: "#results" },
            { label: "Latest Work", href: "#process" },
            { label: "Testimonials", href: "#faq" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block py-2 px-4 hover:text-green-400 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-green-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-300 transition w-11/12 shadow" onClick={() => setMenuOpen(false)}>
          Contact For Quotation
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 