
const steps = [
  { title: 'Consultation', description: 'Initial discussion to understand your business, goals, and challenges.' },
  { title: 'Research and Strategy Development', description: 'In-depth research and strategy planning tailored to your needs.' },
  { title: 'Implementation', description: 'Executing the digital marketing plan with precision.' },
  { title: 'Monitoring and Optimization', description: 'Continuous monitoring and optimization for best results.' },
  { title: 'Reporting and Communication', description: 'Transparent reporting and regular communication.' },
  { title: 'Continual Improvement', description: 'Ongoing improvements to maximize your ROI.' },
];

const WorkingProcess = () => (
  <section id="process" className="px-8 py-12 bg-black border-b border-gray-800">
    <h2 className="text-2xl font-bold mb-6 text-white">Our Working Process</h2>
    <div className="space-y-4">
      {steps.map((step, idx) => (
        <div key={idx} className="bg-gray-800 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-green-400 text-black font-bold rounded-full mr-4">{String(idx + 1).padStart(2, '0')}</div>
          <div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WorkingProcess; 