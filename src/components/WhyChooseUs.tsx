import Image3 from '../assets/Image3.svg';
import Image4 from '../assets/Image4.svg'
const WhyChooseUs = () => (
  <>
    <section id="why-choose" className="px-2 sm:px-8 py-8 sm:py-12 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <span className="bg-green-400 text-black text-xl sm:text-2xl font-bold px-4 py-1 rounded-lg">WHY TO CHOOSE</span>
        <span className="bg-[#191A23] flex items-center rounded-lg px-4 py-1 text-xl sm:text-2xl font-bold">
          <span className="text-white">Grow</span><span className="text-green-400 ml-1">X</span>
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
        {/* Left: Custom SVG */}
        <div className="flex-1 flex justify-center items-center min-h-[340px] md:min-h-[400px]">
          <img src={Image3} alt="GrowX Illustration" className="w-full max-w-xs md:max-w-md h-auto object-contain" />
        </div>
        {/* Right: Text content */}
        <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Why should you<br/>choose <span className="text-green-400">GrowX</span></h3>
          <p className="text-gray-300 text-sm sm:text-base mb-6">Because you don't need just more clicks – you need real growth. <span className="font-bold text-white">At <span className="text-green-400">GrowX</span></span>, we turn digital noise into measurable results.</p>
          <button className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-300 transition text-base">Contact us</button>
        </div>
      </div>
    </section>
    {/* CTA Section Below */}
    <section className="mt-6 px-2 sm:px-8">
      <div className="bg-[#181A23] rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 gap-6">
        <div className="flex-1 min-w-0">
          <h2 className="text-green-400 text-2xl sm:text-3xl font-bold mb-3">Let's make things happen</h2>
          <p className="text-white text-sm sm:text-base mb-5 max-w-2xl">Contact us today to discover how <span className="font-bold text-white">Grow<span className="text-green-400">X</span></span> can help your business thrive online — from powerful digital marketing to stunning websites, intuitive mobile apps, and impactful brochures that tell your brand story the right way. Let's build, grow, and succeed — together.</p>
          <button className="bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-300 transition text-base">Get your free proposal</button>
        </div>
        <div className="flex-1 flex justify-center items-center w-full max-w-xs">
          {/* Add your illustration or image here */}
          <img src={Image4} alt="GrowX Illustration" className="w-full max-w-xs md:max-w-md h-auto object-contain" />
        </div>
      </div>
    </section>
  </>
);

export default WhyChooseUs; 