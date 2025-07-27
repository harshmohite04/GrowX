
const features = [
  {
    title: 'Strategy-Led Content',
    desc: 'Scalable content plans aligned with your brand, audience, and goals. Blog posts, videos, social media themes and more.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400"><path d="M12 17v-6m0 0V7m0 4h4m-4 0H8" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
    ),
  },
  {
    title: 'Copy that Converts',
    desc: 'Crisp, compelling, and value-driven copy—blogs, captions, and articles—designed for awareness, conversion, and SEO.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: 'Visual & Creative Excellence',
    desc: 'Engaging visuals, carousels, infographics, and more—tailored to your platforms + industry.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400"><path d="M17 8V6a5 5 0 00-10 0v2M5 8h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z" strokeWidth="2"/><path d="M8 12h.01M16 12h.01" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'SEO & Platform Optimization',
    desc: 'Every piece of content is optimized for search and platform best practices—blogs, Instagram, LinkedIn and more.',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400"><rect x="4" y="7" width="16" height="13" rx="2" strokeWidth="2"/><circle cx="12" cy="11" r="3" strokeWidth="2"/></svg>
    ),
  },
];

const steps = [
  {
    title: 'Audience Research & Content Planning',
    desc: 'Understand who you’re speaking to and what they’re looking for. We build content strategies backed by real insights.',
  },
  {
    title: 'Content Calendar Creation',
    desc: 'Plans, blogs, carousels, infographics, captions—we create across formats to match your audience’s preferences.',
  },
  {
    title: 'Visual + Copy Integration',
    desc: 'Harmonious design and copy that speak the same language—clear, cohesive, and on brand.',
  },
  {
    title: 'Timely Delivery & Batch Production',
    desc: 'Content delivered in advance, organized, and scalable—so your brand stays consistent and active.',
  },
  {
    title: 'Performance Tracking & Feedback Loop',
    desc: 'Measure what works. We refine content strategies with platform data, keeping you ahead of trends.',
  },
];

function ContentCreationWorks() {
  return (
    <div>
       <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl mb-4">
        <div className="bg-green-400 text-black font-bold text-lg sm:text-xl px-4 py-2 rounded-t-lg sm:rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-center sm:text-left w-full sm:w-auto sm:min-w-[220px] shadow">
          How We Work:
        </div>
        <div className="bg-[#23242a] text-white text-base sm:text-lg px-4 py-2 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:rounded-tl-none text-center sm:text-left w-full shadow font-mono font-semibold tracking-wide">
          Content Creation
        </div>
      </div>
      {/* CTA Bar */}
      <div className="bg-green-400 text-black font-bold text-base sm:text-lg px-6 py-2 rounded-lg mb-2 text-center w-fit mx-auto shadow">
        Power Your Brand With Strategic Content Creation
      </div>
      {/* Info Bar */}
      <div className="bg-[#23242a] text-white text-sm sm:text-base px-6 py-3 rounded-2xl mb-8 text-center w-full max-w-2xl font-medium shadow">
        From scroll-stopping creatives to SEO-optimized articles—<span className="text-green-400 font-bold">GrowX</span> crafts impactful content that fuels brand awareness, engagement, and conversion.
      </div>
      {/* 2x2 Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
        {features.map((feature, idx) => (
          <div key={idx} className="border border-green-400 rounded-2xl p-7 flex flex-col items-start min-h-[170px] bg-[#18191e] w-full">
            <div className="mb-3 text-xl text-green-400">{feature.icon}</div>
            <div className="text-green-400 font-bold text-lg mb-1">{feature.title}</div>
            <div className="text-white text-sm">{feature.desc}</div>
          </div>
        ))}
      </div>
      {/* Why to Choose Section */}
      <div className="flex flex-row items-center w-full max-w-2xl mb-8">
        <div className="bg-green-400 text-black font-bold text-lg px-4 py-2 rounded-t-lg rounded-l-lg rounded-tr-none text-center w-fit shadow">
          WHY TO CHOOSE
        </div>
        <div className="bg-[#23242a] text-white text-lg px-4 py-2 rounded-b-lg rounded-r-lg rounded-tl-none text-center w-fit shadow font-mono font-semibold tracking-wide ml-2">
          GrowX
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {steps.map((step, idx) => (
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
  )
}

export default ContentCreationWorks
