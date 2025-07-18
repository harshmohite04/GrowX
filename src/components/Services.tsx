import type { JSX } from "react";
import SocailMediaMarketing from '../assets/socialMediaMarketing.svg'
import WebDevApp from '../assets/WebDevApp1.svg'
import PayAsPerClick from '../assets/PayAsPerClick.svg'
import EmailMarketing from '../assets/EmailMarketing.svg'
import ContentCreation from '../assets/ContentCreation.svg'
import AnalyticsTracking from '../assets/AnalyticsTracking.svg'
const services = [
  {
    title: "Search engine",
    subtitle: "optimization",
    bg: "bg-[#191A23]",
    text: "text-green-400",
    icon: (
null
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
      // <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="6" fill="#fff"/><path d="M20 16v8M16 20h8" stroke="#3DD47E" strokeWidth="2" strokeLinecap="round"/></svg>
      null
    ),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Social Media Marketing",
    illustration: <img src={SocailMediaMarketing} alt="" />,
  },
  {
    title: "Website & APP",
    subtitle: "Design & Development",
    bg: "bg-[#191A23]",
    text: "text-black",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="4" fill="#fff" /><rect x="16" y="28" width="8" height="2" rx="1" fill="#3DD47E" /></svg>
    ),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Website & APP Design & Development",
    illustration: null,
    heading: (
      <div className="absolute inset-0 flex flex-col justify-center items-start p-5">
        <h2 className="font-serif font-bold text-white text-2xl sm:text-3xl md:text-2xl lg:text-2xl leading-tight text-left">
          Our Digital<br />Marketing Expertise
        </h2>
      </div>
    ),
  },
  {
    title: "Pay-per-click",
    subtitle: "advertising(PPC)",
    bg: "bg-[#3DD47E]",
    text: "text-black",
    icon: (null),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Pay-per-click advertising(PPC)",
    illustration: (
      <img src={PayAsPerClick} alt="" />
    ),
  },
  {
    title: "Email",
    subtitle: "Marketing",
    bg: "bg-[#3DD47E]",
    text: "text-green-400",
    icon: (
      null),
    arrowColor: "text-[#191A23]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Email Marketing",
    illustration:
      <img src={EmailMarketing} alt="" />,
  },
  {
    title: "Content",
    subtitle: "Creation",
    bg: "bg-[#191A23]",
    text: "text-black",
    icon: (
      null),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-green-400 text-black",
    pillText: "Content Creation",
    illustration: <img src={ContentCreation} alt="" />,
  },
  {
    title: "Analytics and",
    subtitle: "Tracking",
    bg: "bg-[#3DD47E]",
    text: "text-green-400",
    icon: (
      null),
    arrowColor: "text-[#191A23]",
    learnColor: "text-white",
    pillBg: "bg-white text-black",
    pillText: "Analytics and Tracking",
    illustration: <img src={AnalyticsTracking} alt="" />,
  },
  {
    title: "Website & APP",
    subtitle: "Design & Development",
    bg: "bg-[#191A23]",
    text: "text-black",
    icon: (
      null),
    arrowColor: "text-[#3DD47E]",
    learnColor: "text-white",
    pillBg: "bg-green-400 text-black",
    pillText: "Website & APP Development",
    illustration:

      <img src={WebDevApp} alt="" />,

  },
];

type ServiceType = {
  title: string;
  subtitle: string;
  bg: string;
  text: string;
  icon: JSX.Element | null;
  arrowColor: string;
  learnColor: string;
  pillBg: string;
  pillText: string;
  illustration?: JSX.Element | null;
  heading?: JSX.Element;
};

function ServiceCard({ service }: { service: ServiceType & { heading?: JSX.Element } }) {
  // Determine if the card is green
  const isGreen = service.bg.includes('bg-[#3DD47E]');
  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col justify-between min-h-[220px] h-full shadow-lg overflow-hidden ${service.bg} transition-all duration-300 hover:scale-105 hover:shadow-green-400/30 border border-transparent hover:border-green-400 group focus:outline-none focus:ring-4 focus:ring-green-400/40 ${isGreen ? 'hover:bg-black' : ''}`}
      tabIndex={0}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="700"
    >
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
            <div className="absolute right-4 bottom-20 sm:bottom-15">
              {service.illustration}
            </div>
          )}
          {/* Bottom row: arrow and Learn more */}
          <div className="flex items-center gap-3 mt-8 sm:mt-12">
            <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white transition-transform duration-300 group-hover:translate-x-2">
              {/* Arrow icon */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff" /><path d="M9 14h10M15 10l4 4-4 4" stroke="#3DD47E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className={`text-lg sm:text-2xl font-medium whitespace-nowrap ${service.learnColor} transition-colors duration-200 group-hover:text-green-400`}>
              Learn more
            </span>
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