import React from 'react';


import Track from "../assets/Track.png"
import Icon1 from "../assets/Icon1.png"
import Icon from "../assets/Icon.png"
import Email from "../assets/Email.png"
const Services = () => (
  <section id="services" className="px-4 py-12 bg-[#111] flex flex-col items-center border border-[#18191C] rounded-xl mx-4 my-8">
    <div className="flex items-center gap-4 mb-4 w-full">
      <span className="bg-green-400 text-black text-2xl font-bold px-4 py-1 rounded">Services</span>
      <span className="bg-[#18191C] text-white px-4 py-2 rounded-full text-sm font-medium">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-6">



      <div className="bg-[#191A23] rounded-xl p-5 flex  justify-between h-40 shadow-lg text-white text-center">

        <div className="h-full justify-between">

          <div className="w-11/12">
            <div className="font-semibold w-11/12 text-lg bg-[#3DD47E] text-black rounded-lg">Search engine </div>
            <div className="font-semibold w-10/12 text-lg mb-2 bg-[#3DD47E] text-black rounded-lg">optimization</div>
          </div>
          <div className="flex mt-5">
            <img src={Icon} alt="" />
            <div className="text-center self-center ml-2 font-semibold text-xl ">Learn more</div>
          </div>
        </div>
        <div className="justify-center items-center text-center self-center">
          <img src={Icon1} alt="" />
        </div>
      </div>




      <div className="bg-[#3DD47E] rounded-xl p-5 flex flex-col justify-between h-40 shadow-lg text-white text-center">
        <div className="font-semibold text-lg mb-2">Service Card</div>
        <div className="text-gray-400">Put your content here</div>
      </div>
      <div className="bg-[#191A23] rounded-xl p-5 flex flex-col justify-between h-40 shadow-lg text-white text-center">
        <div className="font-semibold text-lg mb-2">Service Card</div>
        <div className="text-gray-400">Put your content here</div>
      </div>
      <div className="bg-[#3DD47E] rounded-xl p-5 flex flex-col justify-between h-40 shadow-lg text-white text-center">
        <div className="font-semibold text-lg mb-2">Service Card</div>
        <div className="text-gray-400">Put your content here</div>
      </div>
      <div className="bg-[#3DD47E] rounded-xl p-5 flex flex-col justify-between h-40 shadow-lg text-white text-center">
        <div className="font-semibold text-lg mb-2">Service Card</div>
        <div className="text-gray-400">Put your content here</div>
      </div>







      <div className="bg-[#191A23] rounded-xl p-5 flex  justify-between h-40 shadow-lg text-white text-center">

        <div className="h-full justify-between">

          <div className="w-11/12">
            <div className="font-semibold w-6/12 text-lg bg-[#3DD47E] text-black rounded-lg">Email</div>
            <div className="font-semibold w-10/12 text-lg mb-2 bg-[#3DD47E] text-black rounded-lg">Marketing</div>
          </div>
          <div className="flex mt-5">
            <img src={Icon} alt="" />
            <div className="text-center self-center ml-2 font-semibold text-xl ">Learn more</div>
          </div>
        </div>
        <div className="justify-center items-center text-center self-center">
          <img src={Email} alt="" />
        </div>
      </div>







      <div className="bg-[#3DD47E] rounded-xl p-5 flex flex-col justify-between h-40 shadow-lg text-white text-center">
        <div className="font-semibold text-lg mb-2">Service Card</div>
        <div className="text-gray-400">Put your content here</div>
      </div>







      <div className="bg-[#191A23] rounded-xl p-5 flex  justify-between h-40 shadow-lg text-white text-center">

        <div className="h-full justify-between">

          <div className="w-11/12">
            <div className="font-semibold w-11/12 text-lg bg-[#3DD47E] text-black rounded-lg">Analytics and</div>
            <div className="font-semibold w-8/12 text-lg mb-2 bg-[#3DD47E] text-black rounded-lg">Tracking</div>
          </div>
          <div className="flex mt-5">
            <img src={Icon} alt="" />
            <div className="text-center self-center ml-2 font-semibold text-xl ">Learn more</div>
          </div>
        </div>
        <div className="justify-center items-center text-center self-center">
          <img src={Track} alt="" />
        </div>
      </div>


      
    </div>
  </section>
);

export default Services; 