
const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-8 py-4  border-b border-gray-800" style={{backgroundColor:"#0d0d0d"}}>
    <div className="text-center">
      <div className="flex justify-center self-center ">

      <div className="text-2xl font-bold text-white">Grow</div>
      <div className="text-2xl font-bold text-green-400">
      X</div>
      </div>
      <div className="text-sm font-bold text-green-400">Tech & Marketing</div>
      </div>
    <ul className="flex gap-6 text-white text-sm">
      <li><a href="#services" className="hover:text-green-400">About Us</a></li>
      <li><a href="#why-choose" className="hover:text-green-400">Services</a></li>
      <li><a href="#results" className="hover:text-green-400">Use Cases</a></li>
      <li><a href="#process" className="hover:text-green-400">Lastest Work</a></li>
      <li><a href="#faq" className="hover:text-green-400">Testmonials</a></li>
    </ul>
    <button className="bg-green-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-300 transition">Contact For Quaotation</button>
  </nav>
);

export default Navbar; 