import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    text: `"We have been working with GrowX for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend GrowX to any company looking to grow their online presence."`,
    name: 'Rushikesh Dagade',
    title: 'Marketing Director at Bansal Coaching Classes',
    color: 'text-green-400',
  },
  {
    text: `"GrowX helped us revamp our digital marketing strategy. Their expertise in SEO and paid ads brought us more qualified leads than ever before. The communication was excellent and the results speak for themselves!"`,
    name: 'Colonel Ganesh Babu',
    title: 'Marketing Director at XYZ Pvt Ltd',
    color: 'text-cyan-400',
  },
  {
    text: `"Thanks to GrowX, our social media engagement and brand awareness have skyrocketed. The team is creative, data-driven, and always available for support. We are thrilled with the partnership!"`,
    name: 'Priya Sharma',
    title: 'Head of Marketing at ABC Corp',
    color: 'text-pink-400',
  },
];

type TestimonialType = {
  text: string;
  name: string;
  title: string;
  color: string;
};

type TestimonialCardProps = {
  testimonial: TestimonialType;
  highlight: boolean;
  onClick?: () => void;
  isClickable?: boolean;
};

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide effect
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [idx]);

  // Handle dot/click navigation
  const goTo = (i: number) => setIdx(i);

  return (
    <section className="px-2 sm:px-8 py-8 sm:py-12 bg-black">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 text-black text-xl sm:text-2xl font-bold px-4 py-1 rounded-lg">Testimonials</span>
        <span className="bg-[#191A23] text-white text-xs sm:text-sm rounded px-3 py-1 font-medium max-w-xs truncate">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</span>
      </div>
      {/* Carousel */}
      <div className="relative bg-[#181A23] rounded-3xl p-6 sm:p-2 mt-8 flex flex-col items-center min-h-[340px] shadow-lg">
        {/* Carousel inner */}
        <div className="flex w-full overflow-x-hidden justify-center items-center transition-all duration-500 ease-in-out p-10">
          {/* Left partial card (for effect) */}
          <div className="hidden lg:flex flex-1 justify-end pr-4 opacity-40 scale-95 transition-all duration-500">
            <TestimonialCard testimonial={testimonials[(idx + testimonials.length - 1) % testimonials.length]} highlight={false} onClick={() => goTo((idx + testimonials.length - 1) % testimonials.length)} isClickable />
          </div>
          {/* Main card */}
          <div className="flex-1 max-w-xl mx-auto z-10">
            <TestimonialCard testimonial={testimonials[idx]} highlight={true} />
          </div>
          {/* Right partial card (for effect) */}
          <div className="hidden lg:flex flex-1 justify-start pl-4 opacity-40 scale-95 transition-all duration-500">
            <TestimonialCard testimonial={testimonials[(idx + 1) % testimonials.length]} highlight={false} onClick={() => goTo((idx + 1) % testimonials.length)} isClickable />
          </div>
        </div>
        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="text-2xl text-gray-400 hover:text-green-400 transition"
            onClick={() => setIdx((idx + testimonials.length - 1) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          {/* Dots */}
          <div className="flex gap-1">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full border-2 ${i === idx ? 'bg-green-400 border-green-400 scale-125' : 'bg-white border-white'} inline-block transition-all duration-300`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="text-2xl text-gray-400 hover:text-green-400 transition"
            onClick={() => setIdx((idx + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, highlight, onClick, isClickable }: TestimonialCardProps) {
  return (
    <div
      className={`relative border ${highlight ? 'border-green-400' : 'border-[#333]'} rounded-2xl p-6 min-h-[220px] flex flex-col justify-between cursor-pointer transition-all duration-300 ${isClickable ? 'hover:border-green-400 hover:shadow-lg' : ''}`}
      onClick={isClickable ? onClick : undefined}
      style={isClickable ? { cursor: 'pointer' } : {}}
    >
      <div className="text-white text-base sm:text-lg mb-4">
        {testimonial.text}
      </div>
      {/* Bubble pointer */}
      <div className="absolute left-10 -bottom-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-400" />
      <div className="mt-6">
        <div className={`font-bold ${testimonial.color}`}>{testimonial.name}</div>
        <div className="text-white text-xs sm:text-sm opacity-80">{testimonial.title}</div>
        {/* Star rating */}
        <div className="flex gap-1 mt-2">
          <span className="text-green-400 text-lg">★</span>
          <span className="text-white text-lg">★</span>
          <span className="text-white text-lg">★</span>
          <span className="text-white text-lg">★</span>
          <span className="text-white text-lg">★</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
