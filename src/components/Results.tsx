import React from 'react';

const Results = () => (
  <section id="results" className="px-8 py-12 bg-black">
    <h2 className="text-2xl font-bold mb-6 text-green-400">REAL RESULTS WITH <span className='text-white'>GrowX</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-lg p-6 text-white">
        <p className="mb-2">For a local restaurant, implemented targeted PPC campaign that resulted in a 65% increase in ROI.</p>
        <button className="text-green-400 hover:underline">Learn more</button>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 text-white">
        <p className="mb-2">For B2B software company, achieved 300% increase in qualified leads using inbound marketing.</p>
        <button className="text-green-400 hover:underline">Learn more</button>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 text-white">
        <p className="mb-2">For an e-commerce brand, increased website traffic and sales through SEO and content marketing.</p>
        <button className="text-green-400 hover:underline">Learn more</button>
      </div>
    </div>
  </section>
);

export default Results; 