import { ChevronLeft, ChevronRight } from '@carbon/icons-react';
import { useEffect, useRef, useState } from 'react';

interface Slide {
  heading: string;
  paragraph: string;
}

const slides: Slide[] = [
  {
    heading: 'Customer Support',
    paragraph:
      'Deliver exceptional service to your customers around the clock, while significantly reducing overhead and operational costs.',
  },
  {
    heading: 'Technical Support',
    paragraph:
      'Resolve technical issues quickly and efficiently with dedicated teams, ensuring minimal downtime and reduced support expenses.',
  },
  {
    heading: 'Data Entry & Management',
    paragraph:
      'Keep your data organized and accurate at a fraction of the cost of managing it in-house, freeing up resources for other priorities.',
  },
  {
    heading: 'HR & Payroll Services',
    paragraph:
      'Streamline your HR processes and payroll management while saving on staffing, compliance, and administrative costs.',
  },
  {
    heading: 'Back Office Support',
    paragraph:
      'Enhance your operational efficiency by outsourcing routine administrative tasks, allowing you to focus on core business activities.',
  },
  {
    heading: 'Finance & Accounting',
    paragraph:
      'Ensure accurate financial reporting, budgeting, and bookkeeping with cost-effective outsourced services that improve your financial oversight.',
  },
  {
    heading: 'IT Helpdesk Services',
    paragraph:
      'Provide reliable, round-the-clock IT support to your users, reducing internal staffing needs and maintaining technical stability.',
  },
  {
    heading: 'Sales & Lead Generation',
    paragraph:
      'Drive revenue growth by leveraging experienced outsourced teams to handle sales and lead generation without the high cost of in-house teams.',
  },
  {
    heading: 'Content Moderation',
    paragraph:
      'Protect your online presence by outsourcing content review and moderation, ensuring real-time, cost-effective monitoring and compliance.',
  },
  {
    heading: 'Marketing Support',
    paragraph:
      'Expand your marketing efforts with skilled outsourced teams that manage campaigns, SEO, and social media, all at a reduced cost.',
  },
  {
    heading: 'Supply Chain Management',
    paragraph:
      'Optimize your supply chain operations by outsourcing inventory management, logistics, and distribution, ensuring efficiency and cost savings.',
  },
  {
    heading: 'Legal Process Outsourcing (LPO)',
    paragraph:
      'Access legal support for document review, contract management, and compliance at a lower cost than in-house legal teams.',
  },
  {
    heading: 'Research & Analytics',
    paragraph:
      'Gain insights and data-driven decisions through outsourced research and analytics, helping you stay competitive without heavy internal investment.',
  },
  {
    heading: 'Telemarketing Services',
    paragraph:
      'Reach more customers through targeted telemarketing campaigns, increasing sales and brand awareness without the burden of internal staffing.',
  },
  {
    heading: 'Healthcare BPO',
    paragraph:
      'Improve patient care and streamline administrative processes by outsourcing medical billing, coding, and claims management.',
  },
];

const BPOHeaderSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    startAutoPlay();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoPlay();
  };

  return (
    <div className="pt-[3rem] text-center">
      <span className="inline-block py-[1rem] px-[1.5rem] border border-white rounded-[2rem] lg:text-[95%] text-[85%]">
        Our BPO Solutions
      </span>
      <div className="bpo-slider-container relative overflow-hidden">
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`slide ${
                index === currentIndex ? 'active' : 'inactive'
                }`}
            >
                <h1 className="lg:text-[250%] text-[160%] font-normal lg:mt-[1rem] mt-[0]">
                {slide.heading}
                </h1>
                <p className="lg:text-[95%] text-[85%] opacity-[.8] leading-[1.5rem] mt-[1rem] mx-auto lg:w-[75%] w-full">
                {slide.paragraph}
                </p>
            </div>
            ))}

        {/* Optional manual nav */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
          aria-label="Previous Slide"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          aria-label="Next Slide"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BPOHeaderSlider;
