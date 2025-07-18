import { useState } from 'react';

const Contact = () => {
  const [tab, setTab] = useState('hi');
  return (
    <section id="contact" className="px-2 sm:px-8 py-8 sm:py-12 flex flex-col items-center">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-10">
          <span className="bg-green-400 text-black text-2xl sm:text-3xl font-bold px-4 py-1 rounded-lg">Contact Us</span>
          <span className="bg-[#191A23] text-white text-xs sm:text-sm rounded px-3 py-1 font-medium max-w-xs ml-0 sm:ml-2">Connect with Us: Let's Discuss Your Digital Marketing Needs</span>
        </div>
      <div className="w-full max-w-4xl bg-green-400 rounded-3xl p-6 sm:p-12 flex flex-col gap-8">
        {/* Heading and subtitle */}
        
        {/* Tab switcher */}
        <div className="flex gap-6 items-center mb-2">
          <button
            className={`flex items-center gap-2 ${tab === 'hi' ? 'text-black' : 'text-[#191A23]'} font-semibold`}
            onClick={() => setTab('hi')}
          >
            <span className={`w-5 h-5 rounded-full border-2 ${tab === 'hi' ? 'border-black' : 'border-[#191A23]'} flex items-center justify-center`}>{tab === 'hi' && <span className="w-3 h-3 bg-black rounded-full block" />}</span>
            Say Hi
          </button>
          <button
            className={`flex items-center gap-2 ${tab === 'quote' ? 'text-black' : 'text-[#191A23]'} font-semibold`}
            onClick={() => setTab('quote')}
          >
            <span className={`w-5 h-5 rounded-full border-2 ${tab === 'quote' ? 'border-black' : 'border-[#191A23]'} flex items-center justify-center`}>{tab === 'quote' && <span className="w-3 h-3 bg-black rounded-full block" />}</span>
            Get a Quote
          </button>
        </div>
        {/* Form */}
        <form className="w-full max-w-2xl flex flex-col gap-6">
          <div>
            <label className="block text-black text-sm font-semibold mb-1">Name</label>
            <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-[#181A23] text-white placeholder-gray-400 text-base focus:outline-none" />
          </div>
          <div>
            <label className="block text-black text-sm font-semibold mb-1">Email*</label>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-[#181A23] text-white placeholder-gray-400 text-base focus:outline-none" />
          </div>
          <div>
            <label className="block text-black text-sm font-semibold mb-1">Message*</label>
            <textarea placeholder="Message" className="w-full px-4 py-3 rounded-lg bg-[#181A23] text-white placeholder-gray-400 min-h-[100px] text-base focus:outline-none" />
          </div>
          <button type="submit" className="bg-[#181A23] text-white px-4 py-3 rounded-lg font-semibold hover:bg-black transition text-base mt-2">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 