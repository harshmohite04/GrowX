
function SocailMediaWorks() {
  return (
    <div className="w-full flex flex-col items-center px-2 py-10 bg-black">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl mb-4">
        <div className="bg-green-400 text-black font-bold text-lg sm:text-xl px-4 py-2 rounded-t-lg sm:rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-center sm:text-left w-full sm:w-auto sm:min-w-[220px] shadow">
          How We Work:
        </div>
        <div className="bg-[#23242a] text-white text-base sm:text-lg px-4 py-2 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:rounded-tl-none text-center sm:text-left w-full shadow font-mono font-semibold tracking-wide">
          Social Media Marketing
        </div>
      </div>
      {/* CTA Bar */}
      <div className="bg-green-400 text-black font-bold text-base sm:text-lg px-6 py-2 rounded-lg mb-2 text-center w-fit mx-auto shadow">
        Turn Scrolls Into Sales with Strategic Social Media.
      </div>
      {/* Info Bar */}
      <div className="bg-[#23242a] text-white text-sm sm:text-base px-6 py-3 rounded-2xl mb-8 text-center w-full max-w-2xl font-medium shadow">
        <span className="text-green-400 font-bold">GrowX</span>'s Social Media Marketing transforms attention into action—building loyal communities & boosting engagement across every platform.
      </div>
      {/* 2x2 Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Card 1 */}
        <div className="border border-green-400 rounded-2xl p-7 flex flex-col items-start min-h-[170px] bg-[#18191e] w-full">
          <div className="mb-3 flex gap-2 text-xl text-white">
            <span><i className="fab fa-facebook-f" /></span>
            <span><i className="fab fa-instagram" /></span>
            <span><i className="fab fa-linkedin-in" /></span>
          </div>
          <div className="text-green-400 font-bold text-lg mb-1">Platform Strategy</div>
          <div className="text-white text-sm">Custom content plans tailored for Instagram, LinkedIn, X, and more</div>
        </div>
        {/* Card 2 */}
        <div className="border border-green-400 rounded-2xl p-7 flex flex-col items-start min-h-[170px] bg-[#18191e] w-full">
          <div className="mb-3 text-xl text-green-400">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="text-green-400 font-bold text-lg mb-1">Performance-Driven</div>
          <div className="text-white text-sm">Real-time optimization for reach, engagement, and leads</div>
        </div>
        {/* Card 3 */}
        <div className="border border-green-400 rounded-2xl p-7 flex flex-col items-start min-h-[170px] bg-[#18191e] w-full">
          <div className="mb-3 text-xl text-green-400">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 17v-6m0 0V7m0 4h4m-4 0H8" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
          </div>
          <div className="text-green-400 font-bold text-lg mb-1">Creative & Copy That Clicks</div>
          <div className="text-white text-sm">High-converting creatives designed for scroll-stopping</div>
        </div>
        {/* Card 4 */}
        <div className="border border-green-400 rounded-2xl p-7 flex flex-col items-start min-h-[170px] bg-[#18191e] w-full">
          <div className="mb-3 text-xl text-green-400">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8V6a5 5 0 00-10 0v2M5 8h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z" strokeWidth="2"/><path d="M8 12h.01M16 12h.01" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <div className="text-green-400 font-bold text-lg mb-1">Community Building</div>
          <div className="text-white text-sm">Authentic interaction that grows trust and brand love</div>
        </div>
      </div>
    </div>
  )
}

export default SocailMediaWorks
