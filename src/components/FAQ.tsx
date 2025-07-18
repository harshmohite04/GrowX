import { useState } from 'react';

const faqs = [
  {
    q: "Why is digital marketing important for my business?",
    a: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    q: "How can digital marketing help improve my website's visibility?",
    a: "Digital marketing strategies such as SEO, content marketing, and social media can increase your website's visibility in search engines and attract more visitors.",
  },
  {
    q: "How long does it take to see results from digital marketing efforts?",
    a: "Results can vary, but most businesses start seeing significant improvements within 3-6 months of consistent digital marketing efforts.",
  },
  {
    q: "How do you measure the success of digital marketing campaigns?",
    a: "We use key performance indicators (KPIs) such as traffic, leads, conversions, and ROI to measure the success of digital marketing campaigns.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="faq" className="px-2 sm:px-8 py-8 sm:py-12 bg-green-400 rounded-2xl mx-2 sm:mx-4 my-6 sm:my-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left: Heading, description, buttons */}
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Digital Marketing FAQs</h2>
          <p className="text-black text-sm sm:text-base mb-6 max-w-md">As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.</p>
          <div className="flex gap-4 mb-4">
            <button className="bg-black text-white font-semibold rounded-full px-6 py-2 text-sm hover:bg-gray-900 transition">More Questions</button>
            <a href="#contact" className="text-black font-semibold underline underline-offset-2 self-center">Contact Us</a>
          </div>
        </div>
        {/* Right: Accordion */}
        <div className="flex-1 w-full max-w-xl">
          <div className="rounded-lg overflow-hidden bg-[#181A23]">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className={`border-b border-[#333] last:border-b-0`}> 
                  <button
                    className={`w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none ${isOpen ? 'bg-[#181A23]' : 'bg-[#181A23]'}`}
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  >
                    <span className={`font-semibold text-base sm:text-lg ${isOpen ? 'text-white' : 'text-green-400'}`}>{faq.q}</span>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${isOpen ? 'border-white' : 'border-green-400'} text-2xl font-bold ${isOpen ? 'text-white' : 'text-green-400'}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-0 bg-[#181A23]">
                      <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 