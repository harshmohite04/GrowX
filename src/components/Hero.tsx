import ManImage from '../assets/Image2.png'
import BgImage from "../assets/Background.png"
const Hero = () => (
  <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-10 md:py-16 bg-black min-h-[60vh]" style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="w-full md:w-1/2 max-w-xl text-center md:text-left mt-8 md:mt-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Creative Digital Marketing Agency</h1>
      <p className="text-base sm:text-lg text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className="bg-green-400 text-black px-6 py-3 rounded font-semibold hover:bg-green-300 transition w-full sm:w-auto">Get Started</button>
    </div>
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <img src={ManImage} className='w-3/4 sm:w-2/3 md:w-full h-auto max-h-[350px] object-contain' alt="" />
    </div>
  </section>
);

export default Hero; 