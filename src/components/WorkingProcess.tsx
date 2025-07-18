import { useState } from 'react';

const steps = [
  {
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    title: 'Strategy Development',
    description:
      'In-depth research and strategy planning tailored to your needs.',
  },
  {
    title: 'Implementation',
    description:
      'Executing the digital marketing plan with precision.',
  },
  {
    title: 'Monitoring and Optimization',
    description:
      'Continuous monitoring and optimization for best results.',
  },
  {
    title: 'Reporting and Communication',
    description:
      'Transparent reporting and regular communication.',
  },
  {
    title: 'Continual Improvement',
    description:
      'Ongoing improvements to maximize your ROI.',
  },
];

const WorkingProcess = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="process" className="px-2 sm:px-8 py-8 sm:py-12 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 text-black text-xl sm:text-2xl font-bold px-4 py-1 rounded-lg">Our Working Process</span>
        <span className="bg-[#191A23] text-white text-xs sm:text-sm rounded px-3 py-1 font-medium max-w-xs truncate">Step-by-Step Guide to Achieving Your Business Goals...</span>
      </div>
      <div className="space-y-4 mt-4">
        {steps.map((step, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'bg-[#3DD47E]' : 'bg-[#181A23]'} ${isOpen ? 'shadow-lg' : ''}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 focus:outline-none"
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-2xl font-bold ${isOpen ? 'text-white' : 'text-green-400'}`}>{String(idx + 1).padStart(2, '0')}</span>
                  <span className={`text-lg sm:text-xl font-bold ${isOpen ? 'text-white' : 'text-white'}`}>{step.title}</span>
                </div>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${isOpen ? 'border-white' : 'border-[#3DD47E]'} text-2xl font-bold ${isOpen ? 'text-white' : 'text-green-400'}`}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-5 pt-0 border-t border-black">
                  <p className="text-black text-sm sm:text-base font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkingProcess; 