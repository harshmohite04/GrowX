
const Footer = () => (
  <footer className="px-8 py-8 bg-black border-t border-gray-800 text-gray-400 text-sm mt-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <span className="font-bold text-green-400">GrowX</span> &copy; {new Date().getFullYear()} All rights reserved.
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-green-400">About</a>
        <a href="#" className="hover:text-green-400">Services</a>
        <a href="#" className="hover:text-green-400">Contact</a>
        <a href="#" className="hover:text-green-400">Privacy Policy</a>
      </div>
      <div>
        <button className="bg-green-400 text-black px-4 py-2 rounded font-semibold hover:bg-green-300 transition">Subscribe Newsletter</button>
      </div>
    </div>
  </footer>
);

export default Footer; 