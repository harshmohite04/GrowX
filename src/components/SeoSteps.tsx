


const steps = [
    {
      title: 'WEBSITE AUDIT & ANALYSIS',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'Keyword & Research',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'On - Page Optimisation',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'Content Creation & Optimisation',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'Content Creation & Optimisation',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'Link Building',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'Monitoring & Reporting',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
  ];
function SeoSteps() {
  return (
    <div className="">

    <div className="flex flex-col md:flex-row md:items-center w-full max-w-3xl mb-8">
        <div className="bg-green-400 text-black font-extrabold text-lg md:text-2xl px-4 py-2 rounded-t-xl md:rounded-t-xl md:rounded-l-xl md:rounded-tr-none text-center md:text-left w-full md:w-auto md:min-w-[320px] shadow-lg tracking-wide">
          How We Work: SEO Processes
        </div>
        <div className="bg-[#23242a] text-white text-sm md:text-base px-4 py-2 rounded-b-xl md:rounded-b-none md:rounded-r-xl md:rounded-tl-none text-center md:text-left w-full shadow">
          Step by Step Process of Seo Working
        </div>
      </div>
      {/* Steps */}
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        {steps.map((step, idx) => (
            <div
            key={idx}
            className="flex flex-row items-start gap-4 bg-[#23242a] rounded-2xl p-5 md:p-7 shadow-lg border border-[#23242a] transition-transform duration-200 hover:scale-[1.025] hover:border-green-400 group relative overflow-hidden"
            >
            {/* Decorative gradient bar on left for desktop */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-400/80 to-green-400/10 rounded-l-2xl" />
            <div className="flex-shrink-0 z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-300 flex items-center justify-center text-black font-extrabold text-2xl md:text-3xl shadow-xl border-4 border-black group-hover:border-green-400 transition-all">
                {String(idx + 1).padStart(2, '0')}
              </div>
            </div>
            <div className="flex-1 z-10">
              <div className="text-white font-extrabold text-lg md:text-2xl mb-1 tracking-wide group-hover:text-green-400 transition-colors">
                {step.title}
              </div>
              <div className="text-gray-300 text-sm md:text-base leading-relaxed opacity-90">
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>

  )
}

export default SeoSteps
