import React from 'react';

const WhyChooseUs = () => (
  <section id="why-choose" className="px-8 py-12 bg-black border-b border-gray-800">
    <h2 className="text-2xl font-bold mb-6 text-green-400">WHY TO CHOOSE <span className='text-white'>GrowX</span></h2>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-48 h-48 bg-gray-800 rounded-xl flex items-center justify-center">
        <span className="text-6xl">🧑‍💼</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Why you should choose GrowX?</h3>
        <p className="text-gray-300">We provide creative, data-driven digital marketing solutions tailored to your business needs. Our team is dedicated to delivering real results and helping your business grow.</p>
        <button className="mt-4 bg-green-400 text-black px-4 py-2 rounded font-semibold hover:bg-green-300 transition">Learn More</button>
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 