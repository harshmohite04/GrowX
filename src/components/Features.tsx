import React from 'react';

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
  <section className="px-8 py-8" style={{backgroundColor:'#111'}}>
    <div className="flex items-center gap-4 mb-6">
      <span className="text-white text-lg font-semibold border-b-2 border-white pb-1">Featured in</span>
      <span className="text-gray-500 text-lg font-semibold">|</span>
      <span className="text-gray-500 text-lg font-semibold">Our Clients</span>
    </div>
    <div className="flex gap-6 flex-wrap">
      {brands.map((brand, idx) => (
        <div key={idx} className="bg-[#181818] rounded-lg w-60 h-24 flex items-center justify-center shadow border border-[#222]">
          {brand.logo}
        </div>
      ))}
    </div>
  </section>
);

export default Features; 