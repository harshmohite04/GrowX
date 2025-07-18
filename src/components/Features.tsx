const brands = [
  {
    name: 'Allianz',
    logo: (
      <span className="text-blue-500 font-bold text-lg flex items-center gap-1">
        Allianz
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#2563eb" strokeWidth="2" /></svg>
      </span>
    ),
  },
  {
    name: 'CHASE',
    logo: (
      <span className="text-blue-500 font-bold text-lg flex items-center gap-1">
        CHASE
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" stroke="#2563eb" strokeWidth="2" /></svg>
      </span>
    ),
  },
  {
    name: 'The New York Times',
    logo: (
      <span className="font-serif text-white text-lg">The New York Times</span>
    ),
  },
  {
    name: 'LinkedIn',
    logo: (
      <span className="text-white font-bold text-lg flex items-center gap-1">
        Linked
        <span className="bg-blue-600 text-white px-1 rounded">in</span>
      </span>
    ),
  },
];

const Features = () => (
  <section className="px-2 sm:px-8 py-6 sm:py-8" style={{backgroundColor:'#111'}}>
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
      <span className="text-white text-base sm:text-lg font-semibold border-b-2 border-white pb-1">Featured in</span>
      <span className="text-gray-500 text-base sm:text-lg font-semibold">|</span>
      <span className="text-gray-500 text-base sm:text-lg font-semibold">Our Clients</span>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full justify-items-center">
      {brands.map((brand, idx) => (
        <div key={idx} className="bg-[#181818] rounded-lg w-36 sm:w-60 h-16 sm:h-24 flex items-center justify-center shadow border border-[#222]">
          {brand.logo}
        </div>
      ))}
    </div>
  </section>
);

export default Features; 