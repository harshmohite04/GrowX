import React from 'react'

const offerSteps = [
  {
    title: 'Performance Dashboards',
    desc: 'Custom dashboards that consolidate campaign performance across platforms (social, email, SEO, ads) in real time.',
  },
  {
    title: 'KPI Monitoring & Alerts',
    desc: 'We track your key performance indicators (KPIs) with email alerts to detect dips or spikes the moment they happen.',
  },
  {
    title: 'Conversion Path Analysis',
    desc: 'Understand how users engage — from first click to final conversion — and optimize the journey with clarity.',
  },
  {
    title: 'Data-Driven Recommendations',
    desc: 'We deliver actionable insights, not just reports — from headline tweaks to targeting strategies.',
  },
];

const whyGrowX = [
  {
    title: 'Data That Drives Decisions',
    desc: 'We don’t guess — we analyze every click, scroll, and bounce to make data-backed moves.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400 mx-auto"><rect x="4" y="7" width="16" height="13" rx="2" strokeWidth="2"/><circle cx="12" cy="11" r="3" strokeWidth="2"/></svg>
    ),
  },
  {
    title: 'Platform-Agnostic Reporting',
    desc: 'From GA4 to Meta, HubSpot to custom CRM dashboards — we integrate where your data lives.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400 mx-auto"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: 'Always-On Optimization',
    desc: 'Continuous improvement through A/B testing, real-time tracking, and performance tuning.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400 mx-auto"><path d="M17 8V6a5 5 0 00-10 0v2M5 8h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z" strokeWidth="2"/><path d="M8 12h.01M16 12h.01" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Predictive Insights for Proactive Growth',
    desc: 'We go beyond reporting the past — our analytics forecast future trends so you can act ahead of the curve.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400 mx-auto"><path d="M12 17v-6m0 0V7m0 4h4m-4 0H8" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
    ),
  },
];

function AnalyticalTrackingWorks() {
  return (
    <div className="w-full flex flex-col items-center px-2 py-10 bg-black">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl mb-4">
        <div className="bg-green-400 text-black font-bold text-lg sm:text-xl px-4 py-2 rounded-t-lg sm:rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-center sm:text-left w-full sm:w-auto sm:min-w-[220px] shadow">
          How We Work:
        </div>
        <div className="bg-[#23242a] text-white text-base sm:text-lg px-4 py-2 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:rounded-tl-none text-center sm:text-left w-full shadow font-mono font-semibold tracking-wide">
          Analytics & Tracking
        </div>
      </div>
      {/* CTA Bar */}
      <div className="bg-green-400 text-black font-bold text-base sm:text-lg px-6 py-2 rounded-lg mb-2 text-center w-fit mx-auto shadow">
        Turn Insights Into Impact
      </div>
      {/* Info Bar */}
      <div className="bg-[#23242a] text-white text-sm sm:text-base px-6 py-3 rounded-2xl mb-8 text-center w-full max-w-2xl font-medium shadow">
        We turn data into action — identifying what works, what doesn’t, and how to continually optimize every campaign and asset.
      </div>
      {/* What We Offer */}
      <div className="w-full max-w-2xl mb-4">
        <div className="bg-green-400 text-black font-bold text-lg px-4 py-2 rounded-lg w-fit mb-6 shadow">What We Offer:</div>
        <div className="flex flex-col gap-6">
          {offerSteps.map((step, idx) => (
            <div key={idx} className="flex flex-row items-center gap-6 bg-[#23242a] rounded-3xl p-6 shadow border border-[#23242a]">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center text-black font-bold text-2xl shadow-lg">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-white font-bold text-xl mb-1 tracking-wide">{step.title}</div>
                <div className="text-gray-300 text-sm md:text-base leading-relaxed">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Why GrowX for Analytics? */}
      <div className="w-full max-w-3xl mt-10">
        <div className="bg-green-400 text-black font-bold text-lg px-4 py-2 rounded-lg w-fit mb-6 shadow">Why GrowX for Analytics?</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyGrowX.map((item, idx) => (
            <div key={idx} className="bg-[#23242a] rounded-2xl p-7 flex flex-col items-center min-h-[140px] w-full border border-green-400 text-center shadow">
              <div className="mb-3 text-xl text-green-400">{item.icon}</div>
              <div className="text-white text-base font-semibold mb-1">{item.title}</div>
              <div className="text-gray-300 text-xs md:text-sm mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnalyticalTrackingWorks
