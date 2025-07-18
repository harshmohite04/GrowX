const Footer = () => (
  <footer className="px-2 sm:px-8 py-8 bg-[#181A23] rounded-t-3xl mt-8 text-white">
    <div className="flex flex-col md:flex-row justify-between gap-8">
      {/* Left: Logo and contact info */}
      <div className="flex-1 min-w-[200px] flex flex-col gap-4">
        <div className="text-2xl font-bold">
          <span className="text-white">Grow</span><span className="text-green-400">X</span>
        </div>
        <button className="bg-green-400 text-black font-semibold rounded-md px-4 py-1 w-fit mb-2">Contact us:</button>
        <div className="text-gray-200 text-sm">
          <div>Email: <span className="text-white">info@<span className="text-green-400">GrowX</span>.com</span></div>
          <div>Phone: <span className="text-white">888-813-3849</span></div>
          <div>Address: 1234 Main St<br/>Moonstone City, Stardust State 12345</div>
        </div>
      </div>
      {/* Center: Nav links and social icons */}
      <div className="flex-1 min-w-[200px] flex flex-col gap-4 items-center md:items-start">
        <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-2">
          <a href="#" className="text-white hover:text-green-400 underline underline-offset-2">About us</a>
          <a href="#" className="text-white hover:text-green-400 underline underline-offset-2">Services</a>
          <a href="#" className="text-white hover:text-green-400 underline underline-offset-2">Latest Work</a>
          <a href="#" className="text-white hover:text-green-400 underline underline-offset-2">Use Cases</a>
          <a href="#" className="text-white hover:text-green-400 underline underline-offset-2">Pricing</a>
          <a href="#" className="text-white hover:text-green-400 underline underline-offset-2">Blog</a>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="#" className="hover:text-green-400" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
          <a href="#" className="hover:text-green-400" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.326-1.326z"/></svg>
          </a>
          <a href="#" className="hover:text-green-400" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
          </a>
        </div>
      </div>
      {/* Right: Newsletter */}
      <div className="flex-1 min-w-[250px] flex flex-col gap-4 items-center md:items-end">
        <form className="bg-[#22232A] rounded-xl p-4 flex gap-4 w-full max-w-md items-center">
          <input type="email" placeholder="Email" className="flex-1 px-4 py-2 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none" />
          <button type="submit" className="bg-green-400 text-black font-semibold rounded-lg px-6 py-2 hover:bg-green-300 transition">Subscribe to news</button>
        </form>
      </div>
    </div>
    <div className="border-t border-gray-600 my-6" />
    <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-2">
      <div>© 2025 <span className="text-green-400">GrowX</span>. All Rights Reserved.</div>
      <a href="#" className="underline underline-offset-2 hover:text-green-400">Privacy Policy</a>
    </div>
  </footer>
);

export default Footer; 