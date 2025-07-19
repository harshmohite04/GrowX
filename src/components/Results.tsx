import Image5 from '../assets/Image5.svg'

const Results = () => (
  <section id="results" className="px-2 sm:px-8 py-8 sm:py-12 bg-black">
    {/* Heading */}
    <div className="flex items-center gap-2 mb-6">
      <span className="bg-green-400 text-black text-lg sm:text-2xl 2xl:text-4xl font-bold px-4 py-1 rounded-lg">REAL RESULTS WITH</span>
      <span className="bg-[#191A23] flex items-center 2xl:text-4xl rounded-lg px-4 py-1 text-lg sm:text-2xl font-bold">
        <span className="text-white">Grow</span><span className="text-green-400 ml-1">X</span>
      </span>
    </div>
    {/* Speech bubble and watering can */}
    <div className="relative justify-end mb-4 min-h-[120px] hidden md:flex">
      <div className="absolute right-0 -top-28 md:-top-15 2xl:-top-40 flex flex-col items-end z-20">
        {/* Watering can SVG */}
        <img src={Image5} alt="Watering Can" className="w-24  sm:w-32 md:w-80 2xl:w-120 mb-2" />
        {/* Speech bubble */}
        
      </div>
    </div>
    {/* Results cards */}
    <div className="bg-[#3DD47E] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-6 items-stretch">
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-black font-semibold text-base sm:text-lg mb-6">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
        <button className="bg-[#191A23] text-white rounded-lg px-5 py-2 flex items-center gap-2 font-medium text-sm hover:bg-black transition w-fit">Learn more <span className="text-green-400 text-lg">→</span></button>
      </div>
      <div className="hidden md:block w-px bg-[#191A23] mx-2"></div>
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-black font-semibold text-base sm:text-lg mb-6">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
        <button className="bg-[#191A23] text-white rounded-lg px-5 py-2 flex items-center gap-2 font-medium text-sm hover:bg-black transition w-fit">Learn more <span className="text-green-400 text-lg">→</span></button>
      </div>
      <div className="hidden md:block w-px bg-[#191A23] mx-2"></div>
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-black font-semibold text-base sm:text-lg mb-6">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
        <button className="bg-[#191A23] text-white rounded-lg px-5 py-2 flex items-center gap-2 font-medium text-sm hover:bg-black transition w-fit">Learn more <span className="text-green-400 text-lg">→</span></button>
      </div>
    </div>
  </section>
);

export default Results; 