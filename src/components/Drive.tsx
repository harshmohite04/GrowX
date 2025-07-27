
const cardData = [
  {
    title: "People’s First",
    desc: "Clients and their audience are central to every campaign we design",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400">
        <rect x="4" y="7" width="16" height="13" rx="2" strokeWidth="2"/>
        <circle cx="12" cy="11" r="3" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Agility Always",
    desc: "We pivot fast, adapt trends, and ship faster than traditional agencies.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400">
        <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Creative With Purpose",
    desc: "Design and content that inspire — and convert.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400">
        <path d="M12 17v-6m0 0V7m0 4h4m-4 0H8" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Transparent Partnership",
    desc: "Clarity, communication, and shared growth are in our DNA.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400">
        <path d="M17 8V6a5 5 0 00-10 0v2M5 8h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z" strokeWidth="2"/>
        <path d="M8 12h.01M16 12h.01" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const Drive = () => {
  return (
    <div className="flex flex-col items-center w-full px-2 py-12 bg-gradient-to-b from-black via-[#101112] to-black">
      {/* Header */}
      <div className="bg-green-400 text-black font-extrabold text-2xl sm:text-3xl md:text-4xl px-4 sm:px-8 py-3 rounded-t-2xl mb-2 text-center w-fit mx-auto tracking-wide shadow-lg">
        What Drives Us at GrowX
      </div>
      <div className="bg-[#23242a] text-white text-base sm:text-lg md:text-xl px-4 sm:px-8 py-4 rounded-b-2xl mb-8 sm:mb-10 text-center w-full max-w-2xl font-medium shadow">
        At the core of everything we do is our belief in innovation, impact, and people
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl mb-10">
        {cardData.map((card) => (
          <div
            key={card.title}
            className="border border-green-400 rounded-2xl p-6 sm:p-8 flex flex-col items-center min-h-[180px] sm:min-h-[200px] bg-[#18191e] w-full transition-transform duration-200 hover:scale-105 hover:shadow-green-400/30 hover:shadow-lg group"
          >
            <div className="mb-4 flex items-center justify-center">
              <span className="bg-green-900/20 rounded-full p-3 flex items-center justify-center group-hover:bg-green-400/30 transition-colors duration-200">
                {card.icon}
              </span>
            </div>
            <div className="text-green-400 font-bold text-lg sm:text-xl mb-2 text-center tracking-tight">{card.title}</div>
            <div className="text-white text-sm sm:text-base text-center opacity-90">{card.desc}</div>
          </div>
        ))}
      </div>
      {/* Divider */}
      <div className="w-full max-w-4xl h-0.5 bg-gradient-to-r from-green-400/30 via-transparent to-green-400/30 mb-10" />
      {/* Call to Action Section */}
      <div className="w-full max-w-4xl bg-gradient-to-br from-[#23242a] via-[#23242a] to-[#1a1b20] rounded-3xl flex flex-col items-center px-4 sm:px-6 py-8 sm:py-10 mt-2 shadow-lg">
        <div className="bg-green-400 text-black font-extrabold text-xl sm:text-2xl md:text-3xl px-4 sm:px-8 py-2 sm:py-3 rounded-lg mb-4 sm:mb-5 text-center w-fit mx-auto tracking-wide shadow">
          Let’s Create Something Powerful
        </div>
        <div className="text-white text-center text-base sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 leading-relaxed">
          Whether you’re just starting or scaling fast,<br />
          <span className="font-bold text-green-400">GrowX</span> is here to make your brand impossible to ignore
        </div>
        <button className="bg-green-400 text-black font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-green-300 hover:scale-105 transition-all text-base sm:text-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400">
          Get Started With <span className="bg-black text-green-400 px-2 sm:px-3 py-1 rounded ml-2 font-bold">GrowX</span>
        </button>
      </div>
    </div>
  );
};

export default Drive;
