import type { JSX } from 'react';

const stats = [
  { value: '120+', label: 'Brands Elevated' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '250K+', label: 'Campaigns Delivered' },
  { value: '10x', label: 'Average ROI' },
];
const Stats =(): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#101112] to-[#191A23] text-white font-sans">
    {/* Hero Section */}
    <section className="bg-gradient-to-tr from-[#3DD47E] to-[#1CBF63] rounded-3xl m-4 p-6 sm:p-10 flex flex-col items-center justify-center shadow-xl">
      <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-4 tracking-wide text-center drop-shadow-lg">POWERING AMBITIONS, FUELING GROWTH</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl">
        {/* Card with chart and logo */}
        <div className="bg-[#191A23] rounded-2xl p-8 flex flex-col items-center justify-center min-w-[220px] min-h-[200px] w-full md:w-1/2 max-w-xs shadow-lg mb-6 md:mb-0">
          {/* Chart Icon */}
          <div className="mb-4">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="12" fill="#111"/><rect x="16" y="34" width="5" height="10" rx="2.5" fill="#3DD47E"/><rect x="26" y="24" width="5" height="20" rx="2.5" fill="#3DD47E"/><rect x="36" y="14" width="5" height="30" rx="2.5" fill="#3DD47E"/><path d="M16 44h25" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          {/* GrowX Logo/Text */}
          <div className="flex items-center gap-1 mb-2">
            <span className="text-white text-3xl font-extrabold tracking-tight">Grow</span>
            <span className="text-[#3DD47E] text-3xl font-extrabold italic tracking-tight">X</span>
          </div>
          {/* Gauge Icon */}
          <div className="mt-2">
            <svg width="56" height="28" viewBox="0 0 56 28" fill="none"><path d="M4 24a24 24 0 0 1 48 0" stroke="#fff" strokeWidth="2.5"/><path d="M28 24v-10" stroke="#3DD47E" strokeWidth="2.5"/><path d="M28 24l10-5" stroke="#F9C846" strokeWidth="2.5"/><path d="M28 24l-10-5" stroke="#F94A46" strokeWidth="2.5"/></svg>
          </div>
        </div>
        {/* Description */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
          <div className="text-[#6EE7B7] text-lg font-semibold mb-2 tracking-wide">Frame 427321...</div>
          <p className="text-white text-lg leading-relaxed font-medium drop-shadow-sm">
            At <span className="font-extrabold text-[#3DD47E]">GrowX</span>, we empower brands to thrive in the digital era through impactful storytelling, targeted strategies, and intelligent technology. We don’t just market — we elevate, we connect, and we scale.
          </p>
        </div>
      </div>
    </section>

    {/* Numbers/Stats Section */}
    <section className="mt-12 flex flex-col items-center px-2">
      <div className="mb-3">
        <span className="bg-green-400 text-black font-bold text-xl px-6 py-2 rounded-lg shadow-md">Numbers that Define Our Impact</span>
      </div>
      <div className="bg-[#191A23] text-white text-center text-base px-8 py-4 rounded-2xl max-w-2xl mb-8 shadow-md">
        A look at the data behind our <span className="text-green-400 font-bold">SUCCESS — MILESTONES</span> that fuel our mission to deliver real, measurable outcomes.
      </div>
      {/* Stat Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#3DD47E] to-[#1CBF63] rounded-2xl min-h-[120px] flex flex-col items-center justify-center p-8 text-black font-extrabold text-2xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-green-300/40 border border-transparent hover:border-green-400"
          >
            <span className="text-4xl mb-2 font-extrabold drop-shadow-md">{stat.value}</span>
            <span className="text-base font-semibold text-black/80 text-center">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
  )
}

export default Stats
