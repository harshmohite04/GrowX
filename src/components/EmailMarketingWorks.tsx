
const offerSteps = [
  {
    title: 'Personalized Email Sequences',
    desc: 'Deliver the right message at the right time with tailored automations based on user behavior and lifecycle stage.',
  },
  {
    title: 'High-Converting Copywriting',
    desc: 'Subject lines that speak curiosity. Body content that sells. CTAs that convert.',
  },
  {
    title: 'Segmentation & Targeting',
    desc: 'Group your audience by interest, activity, or funnel stage to maximize engagement.',
  },
  {
    title: 'A/B Testing & Optimization',
    desc: 'We continuously test subject lines, send times, and content to improve open and click rates.',
  },
];

const whyGrowX = [
  {
    title: 'Proven email frameworks that align with your funnel',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400 mx-auto"><rect x="4" y="7" width="16" height="13" rx="2" strokeWidth="2"/><circle cx="12" cy="11" r="3" strokeWidth="2"/></svg>
    ),
  },
  {
    title: 'CRM & platform integration support (Mailchimp, Klaviyo, HubSpot, etc.)',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400 mx-auto"><rect x="4" y="7" width="16" height="13" rx="2" strokeWidth="2"/><text x="12" y="17" textAnchor="middle" fontSize="8" fill="currentColor">CRM</text></svg>
    ),
  },
  {
    title: 'Lead nurturing strategies that move contacts from cold to conversion.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400 mx-auto"><path d="M12 17v-6m0 0V7m0 4h4m-4 0H8" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
    ),
  },
];

function EmailMarketingWorks() {
  return (
    <div className="w-full flex flex-col items-center px-2 py-10 bg-black">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl mb-4">
        <div className="bg-green-400 text-black font-bold text-lg sm:text-xl px-4 py-2 rounded-t-lg sm:rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-center sm:text-left w-full sm:w-auto sm:min-w-[220px] shadow">
          How We Work:
        </div>
        <div className="bg-[#23242a] text-white text-base sm:text-lg px-4 py-2 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:rounded-tl-none text-center sm:text-left w-full shadow font-mono font-semibold tracking-wide">
          Email Marketing
        </div>
      </div>
      {/* CTA Bar */}
      <div className="bg-green-400 text-black font-bold text-base sm:text-lg px-6 py-2 rounded-lg mb-2 text-center w-fit mx-auto shadow">
        Email Marketing That Nurtures & Converts
      </div>
      {/* Info Bar */}
      <div className="bg-[#23242a] text-white text-sm sm:text-base px-6 py-3 rounded-2xl mb-8 text-center w-full max-w-2xl font-medium shadow">
        Build Lasting Relationships with Smart Email Campaigns<br/>
        We create targeted, value-driven email journeys that nurture leads, build brand loyalty, and drive action.
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
      {/* Why GrowX for Email Marketing */}
      <div className="w-full max-w-2xl mt-10">
        <div className="bg-green-400 text-black font-bold text-lg px-4 py-2 rounded-lg w-fit mb-6 shadow">Why GrowX for Email Marketing?</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {whyGrowX.map((item, idx) => (
            <div key={idx} className="bg-[#23242a] rounded-2xl p-7 flex flex-col items-center min-h-[120px] w-full border border-green-400 text-center shadow">
              <div className="mb-3 text-xl text-green-400">{item.icon}</div>
              <div className="text-white text-base font-semibold mb-1">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmailMarketingWorks