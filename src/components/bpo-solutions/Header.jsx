import React, { useEffect, useRef, useState } from "react";
import HeaderPattern from "../../assets/images/header-pattern.png";
import Packages from "./Packages";

const Header = () => {

  const sliderText = [
    {
      heading: "Customer Support",
      paragraph:
        "Deliver exceptional service to your customers around the clock, while significantly reducing overhead and operational costs.",
    },
    {
      heading: "Technical Support",
      paragraph:
        "Resolve technical issues quickly and efficiently with dedicated teams, ensuring minimal downtime and reduced support expenses.",
    },
    {
      heading: "Data Entry & Management",
      paragraph:
        "Keep your data organized and accurate at a fraction of the cost of managing it in-house, freeing up resources for other priorities.",
    },
    {
      heading: "HR & Payroll Services",
      paragraph:
        "Streamline your HR processes and payroll management while saving on staffing, compliance, and administrative costs.",
    },
    {
      heading: "Back Office Support",
      paragraph:
        "Enhance your operational efficiency by outsourcing routine administrative tasks, allowing you to focus on core business activities.",
    },
    {
      heading: "Finance & Accounting",
      paragraph:
        "Ensure accurate financial reporting, budgeting, and bookkeeping with cost-effective outsourced services that improve your financial oversight.",
    },
    {
      heading: "IT Helpdesk Services",
      paragraph:
        "Provide reliable, round-the-clock IT support to your users, reducing internal staffing needs and maintaining technical stability.",
    },
    {
      heading: "Sales & Lead Generation",
      paragraph:
        "Drive revenue growth by leveraging experienced outsourced teams to handle sales and lead generation without the high cost of in-house teams.",
    },
    {
      heading: "Content Moderation",
      paragraph:
        "Protect your online presence by outsourcing content review and moderation, ensuring real-time, cost-effective monitoring and compliance.",
    },
    {
      heading: "Marketing Support",
      paragraph:
        "Expand your marketing efforts with skilled outsourced teams that manage campaigns, SEO, and social media, all at a reduced cost.",
    },
    {
      heading: "Supply Chain Management",
      paragraph:
        "Optimize your supply chain operations by outsourcing inventory management, logistics, and distribution, ensuring efficiency and cost savings.",
    },
    {
      heading: "Legal Process Outsourcing (LPO)",
      paragraph:
        "Access legal support for document review, contract management, and compliance at a lower cost than in-house legal teams.",
    },
    {
      heading: "Research & Analytics",
      paragraph:
        "Gain insights and data-driven decisions through outsourced research and analytics, helping you stay competitive without heavy internal investment.",
    },
    {
      heading: "Telemarketing Services",
      paragraph:
        "Reach more customers through targeted telemarketing campaigns, increasing sales and brand awareness without the burden of internal staffing.",
    },
    {
      heading: "Healthcare BPO",
      paragraph:
        "Improve patient care and streamline administrative processes by outsourcing medical billing, coding, and claims management.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Using useRef to store interval ID

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderText.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
  };

  useEffect(() => {
    resetInterval(); // Start the interval when the component mounts

    return () => clearInterval(intervalRef.current); // Clear the interval on component unmount
  }, [sliderText.length]);

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderText.length - 1 ? 0 : prevIndex + 1
    );
    resetInterval(); // Reset interval on manual slide change
  };

  // Function to go to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderText.length - 1 : prevIndex - 1
    );
    resetInterval(); // Reset interval on manual slide change
  };

  return (
    <>
        <div className='xui-pt-3 xui-text-center'>
            <span className='xui-d-inline-block xui-py-1 xui-px-1-half xui-bdr-white xui-bdr-s-solid xui-bdr-w-1 xui-bdr-rad-2'>Our BPO Solutions</span>
            <div className="slider-container">
                {sliderText.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentIndex ? "active" : "inactive" }`}>
                        <h1 className="xui-lg-font-sz-250 xui-font-sz-160 xui-font-w-normal xui-mt-1">
                            {slide.heading}
                        </h1>
                        <p className="xui-lg-font-sz-110 xui-font-sz-100 xui-opacity-8 xui-line-height-1-half xui-mt-1 xui-mx-auto xui-lg-w-fluid-75 xui-w-fluid-100">
                            {slide.paragraph}
                        </p>
                    </div>
                ))}
                
            </div>
        </div>
    </>
    
  );
};

export default Header;
