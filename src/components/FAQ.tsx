import React from 'react';

const faqs = [
  { q: 'Why is digital marketing important for every business?', a: 'Digital marketing helps businesses reach a larger audience, increase brand awareness, and drive sales through online channels.' },
  { q: 'How long does it take to see results from digital marketing?', a: 'Results can vary, but most businesses start seeing significant improvements within 3-6 months.' },
  { q: 'How do you measure the success of digital marketing campaigns?', a: 'We use key performance indicators (KPIs) such as traffic, leads, conversions, and ROI to measure success.' },
];

const FAQ = () => (
  <section id="faq" className="px-8 py-12 bg-green-400 text-black rounded-lg mx-4 my-8">
    <h2 className="text-2xl font-bold mb-4">Digital Marketing FAQs</h2>
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white bg-opacity-10 rounded p-4">
          <h3 className="font-semibold">{faq.q}</h3>
          <p className="text-sm mt-2">{faq.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ; 