import React from 'react';
import ManImage from '../assets/Image2.png'
import BgImage from "../assets/Background.png"
const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-black" style={{ backgroundImage: `url(${BgImage})` }}>
    <div className="max-w-xl" >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Creative Digital Marketing Agency</h1>
      <p className="text-lg text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className="bg-green-400 text-black px-6 py-3 rounded font-semibold hover:bg-green-300 transition">Get Started</button>
    </div>
    <div className="mt-10 md:mt-0 md:ml-12 flex-shrink-0">
        <img src={ManImage} className='w-full h-full' alt="" />
    </div>
  </section>
);

export default Hero; 