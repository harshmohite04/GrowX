
const steps = [
  {
    title: 'Platform Audit & Strategy',
    desc: 'Evaluate your current presence and align with platform trends',
  },
  {
    title: 'Content Calendar Creation',
    desc: 'Structured planning for regular, relevant posting',
  },
  {
    title: 'Graphic & Copy Design',
    desc: 'Custom visuals and captions crafted for engagement',
  },
  {
    title: 'Publishing & Scheduling',
    desc: 'Streamlined tools and AI-enhanced posting strategies',
  },
  {
    title: 'Analytics & Reporting',
    desc: 'Track performance and scale what works',
  },
];

function SocialMediaSteps() {
  return (
    <div className="w-full min-h-fit bg-black flex flex-col items-center px-2 py-10">
      {/* Header */}
      <div className="flex flex-row items-center w-full max-w-2xl mb-8">
        <div className="bg-green-400 text-black font-bold text-lg px-4 py-2 rounded-t-lg rounded-l-lg rounded-tr-none text-center w-fit shadow">
          WHY TO CHOOSE
        </div>
        <div className="bg-[#23242a] text-white text-lg px-4 py-2 rounded-b-lg rounded-r-lg rounded-tl-none text-center w-fit shadow font-mono font-semibold tracking-wide ml-2">
          GrowX
        </div>
      </div>
      {/* Steps */}
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

export default SocialMediaSteps
