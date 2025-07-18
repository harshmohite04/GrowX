import React from "react";
import type { JSX } from "react";
import Track from "../assets/Track.png"
import Icon1 from "../assets/Icon1.png"
import Icon from "../assets/Icon.png"
import Email from "../assets/Email.png"
import Social from "../assets/Social.png"

const services = [
  {
    title: "Search engine",
    subtitle: "optimization",
    bg: "bg-[#191A23]",
    text: "text-green-400",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="6" fill="#3DD47E"/><path d="M16 20h8M20 16v8" stroke="#111" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    arrowColor: "text-[#191A23]",
    learnColor: "text-white",
    pillBg: "bg-green-400 text-black",
    pillText: "Search engine optimization",
    illustration: null,
  },
  {
    title: "Social Media",
    subtitle: "Marketing",
    bg: "bg-[#3DD47E]",
    text: "text-black",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="6" fill="#fff"/><path d="M20 16v8M16 20h8" stroke="#3DD47E" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Social Media Marketing",
    illustration: null,
  },
  {
    title: "Website & APP",
    subtitle: "Design & Development",
    bg: "bg-[#191A23]",
    text: "text-black",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="4" fill="#fff"/><rect x="16" y="28" width="8" height="2" rx="1" fill="#3DD47E"/></svg>
    ),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Website & APP Design & Development",
    illustration: null,
    heading: (
      <div className="absolute inset-0 flex flex-col justify-center items-start p-5">
        <h2 className="font-serif font-bold text-white text-2xl sm:text-3xl md:text-2xl lg:text-2xl leading-tight text-left">
          Our Digital<br/>Marketing Expertise
        </h2>
      </div>
    ),
  },
  {
    title: "Pay-per-click",
    subtitle: "advertising(PPC)",
    bg: "bg-[#3DD47E]",
    text: "text-black",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#fff" fillOpacity="0.2"/><path d="M18 10v10" stroke="#111" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="10" r="2" fill="#111"/><path d="M24 18c0 3.314-2.686 6-6 6s-6-2.686-6-6" stroke="#111" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Pay-per-click advertising(PPC)",
    illustration: (
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none"><rect x="5" y="10" width="40" height="25" rx="3" fill="#fff" stroke="#111" strokeWidth="1.5"/><path d="M20 25l5 5 10-10" stroke="#3DD47E" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Email",
    subtitle: "Marketing",
    bg: "bg-[#3DD47E]",
    text: "text-green-400",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="12" width="24" height="16" rx="4" fill="#3DD47E"/><path d="M8 12l12 10 12-10" stroke="#111" strokeWidth="2"/></svg>
    ),
    arrowColor: "text-[#191A23]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Email Marketing",
    illustration: null,
  },
  {
    title: "Content",
    subtitle: "Creation",
    bg: "bg-[#191A23]",
    text: "text-black",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="6" fill="#fff"/><rect x="14" y="14" width="12" height="12" rx="2" fill="#3DD47E"/></svg>
    ),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-green-400 text-black",
    pillText: "Content Creation",
    illustration: null,
  },
  {
    title: "Analytics and",
    subtitle: "Tracking",
    bg: "bg-[#3DD47E]",
    text: "text-green-400",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="6" fill="#3DD47E"/><path d="M16 24v-8M20 28V12M24 20v-4" stroke="#111" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    arrowColor: "text-[#191A23]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Analytics and Tracking",
    illustration: null,
  },
    {
    title: "Website & APP",
    subtitle: "Design & Development",
    bg: "bg-[#191A23]",
    text: "text-black",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="4" fill="#fff"/><rect x="16" y="28" width="8" height="2" rx="1" fill="#3DD47E"/></svg>
    ),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-green-400 text-black",
    pillText: "Website & APP Development",
    illustration: null,
    
  },
];

type ServiceType = {
  title: string;
  subtitle: string;
  bg: string;
  text: string;
  icon: JSX.Element;
  arrowColor: string;
  learnColor: string;
  pillBg: string;
  pillText: string;
  illustration?: JSX.Element | null;
  heading?: JSX.Element;
};

function ServiceCard({ service }: { service: ServiceType & { heading?: JSX.Element } }) {
  return (
    <div className={`relative rounded-2xl p-5 flex flex-col justify-between min-h-[180px] h-full shadow-lg overflow-hidden ${service.bg}`}>  
      {/* Heading for the third card */}
      {service.heading ? (
        service.heading
      ) : (
        <>
          {/* Top-right icon */}
          <div className="absolute top-4 right-4">{service.icon}</div>
          {/* Main content */}
          <div className="flex flex-col gap-2 items-start">
            <span className={`inline-block rounded-lg px-2 py-1 font-bold text-base sm:text-lg mb-1 ${service.pillBg}`}>{service.pillText}</span>
          </div>
          {/* Illustration if present */}
          {service.illustration && (
            <div className="absolute right-4 bottom-20 sm:bottom-24">
              {service.illustration}
            </div>
          )}
          {/* Bottom row: arrow and Learn more */}
          <div className="flex items-center gap-3 mt-8 sm:mt-12">
            <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white">
              {/* Arrow icon */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="M9 14h10M15 10l4 4-4 4" stroke="#3DD47E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className={`text-lg sm:text-2xl font-medium whitespace-nowrap ${service.learnColor}`}>Learn more</span>
          </div>
        </>
      )}
    </div>
  );
}

const Services = () => (
  <section id="services" className="px-2 sm:px-4 py-8 sm:py-12 bg-[#111] flex flex-col items-center border border-[#18191C] rounded-xl mx-2 sm:mx-4 my-6 sm:my-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
      {services.map((service, idx) => (
        <ServiceCard key={idx} service={service} />
      ))}
    </div>
  </section>
);

export default Services; 