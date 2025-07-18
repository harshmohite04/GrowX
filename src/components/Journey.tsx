function Journey() {
  return (
    <section className="px-2 sm:px-8 py-8 sm:py-12 bg-black min-h-screen">
      {/* Top nav */}
      <div className="text-center text-xs text-gray-300 mb-2 tracking-widest">STATS  ABOUT COMPANY</div>
      {/* Heading and subtitle */}
      <div className="flex flex-col items-center mb-8">
        <span className="bg-green-400 text-black text-xl sm:text-2xl font-bold px-4 py-1 rounded-lg mb-2 shadow">OUR JOURNEY : The <span className="text-green-900">Grow</span><span className="text-green-600">X</span> Story</span>
        <div className="bg-[#181A23] text-white rounded-lg px-4 py-3 max-w-2xl text-center text-sm sm:text-base font-medium shadow">From a simple idea to a growing agency — here's how GrowX started, evolved, and continues to grow with purpose.</div>
      </div>
      {/* Timeline with vertical line */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-green-400/60 to-transparent z-0" style={{transform: 'translateX(-50%)'}} />
        <div className="flex flex-col gap-16">
          {/* Timeline items */}
          {[
            {
              side: 'left',
              title: 'The Idea Was Born',
              subtitle: 'Every great brand starts with a question.',
              desc: 'To uplift small and undiscovered businesses by giving them a strong digital and technical foundation — while also supporting mid-scale and large companies in scaling further. It started with a passion to make a difference in the real world — with real results.',
              date: 'JUNE 2025',
            },
            {
              side: 'right',
              title: 'The Launch of GrowX',
              subtitle: '',
              desc: 'With a lean, passionate team of 3 which had marketers and designers, GrowX officially launched as a digital marketing agency dedicated to fueling real business growth.',
              date: '5th JULY 2025',
            },
            {
              side: 'left',
              title: 'Welcomed Our First Client',
              subtitle: 'Where it all began : Bansal Coaching Classes On Board',
              desc: 'Our first client — Bansal Coaching Classes — trusted us to transform their online presence. We helped them build a stronger digital identity, drive local engagement, and attract more students through targeted campaigns.',
              date: 'MID JULY 2025',
            },
            {
              side: 'right',
              title: 'Welcoming AFOSOP',
              subtitle: 'Empowering India\'s First Research-Based SSB Institution',
              desc: 'AFOSOP (India\'s only research-based SSB training institution) brought in by word-of-mouth. GrowX\'s vision, strategy, and focus on lasting impact attracted a unique client. We helped them grow with a fresh digital approach, new channels, and a data-driven mindset, leading to more than elite success stories.',
              date: 'MID JULY 2025',
            },
            {
              side: 'left',
              title: 'Growing with Purpose',
              subtitle: 'More Clients. More Capabilities.',
              desc: 'We began building tailored strategies using automation, AI-powered content ideas, paid media, and performance campaigns — delivering measurable results for every client, no matter their size or sector.',
              date: 'MID JULY 2025',
            },
            {
              side: 'right',
              title: '-With YOU',
              subtitle: 'Would You Grow with GrowX?',
              desc: 'We\'re just getting started — and your brand could be part of this story. You\'re ready to grow smarter, bolder, and stronger in the digital world, and we\'re here to make it happen.',
              date: 'The Journey  Continues',
            },
          ].map((item, i) => (
            <div key={i} className={`relative flex flex-col sm:flex-row ${item.side === 'right' ? 'sm:flex-row-reverse' : ''} items-start sm:items-center gap-6 z-10`}> 
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center w-10 relative z-20" style={{order: item.side === 'right' ? 2 : 1}}>
                <div className="w-5 h-5 rounded-full bg-green-400 border-4 border-black shadow-lg" />
                {i !== 5 && <div className="flex-1 w-1 bg-gradient-to-b from-green-400/60 to-transparent" />}
              </div>
              {/* Card */}
              <div className={`flex-1 bg-[#181A23] rounded-2xl p-6 shadow-lg transition hover:scale-[1.025] hover:shadow-green-400/30 duration-300 border border-green-400/20`}> 
                <div className="text-green-400 font-bold mb-2 text-lg">{item.title}</div>
                {item.subtitle && <div className="font-semibold mb-1 text-white/90">{item.subtitle}</div>}
                <div className="text-gray-300 text-sm mb-2">{item.desc}</div>
              </div>
              {/* Date badge */}
              <div className={`flex flex-col items-center min-w-[120px] z-20 ${item.side === 'right' ? 'sm:items-end' : 'sm:items-start'}`} style={{order: item.side === 'right' ? 3 : 3}}>
                <span className="bg-green-400 text-black font-bold text-base sm:text-lg px-6 py-2 rounded-lg shadow border border-green-600/30 tracking-wide">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
