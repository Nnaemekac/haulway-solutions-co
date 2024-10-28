import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronRight, ChevronUp } from '@carbon/icons-react';
import Package1 from "../../assets/images/bpo-packages/package1.jpg";
import Package2 from "../../assets/images/bpo-packages/package2.jpg";
import Package3 from "../../assets/images/bpo-packages/package3.jpg";
import Package4 from "../../assets/images/bpo-packages/package4.jpg";
import Button from "../../components/Button";

const BPOSolutions = () => {

    const bpoSolutions = [
        {
            image: Package1,
            heading: "Startup Essentials Package",
            paragraph: "For small businesses and startups looking to streamline basic operations and IT support.",
            price: <h3 className="xui-m-none"><span className="xui-font-w-600 xui-font-sz-120">£2,000</span> /<span className="xui-font-w-normal xui-font-sz-100">month</span></h3>,
            linkURL: "package/1"
        },
          {
            image: Package2,
            heading: "Growth Support Package",
            paragraph: "For growing businesses needing more comprehensive operational and technical support.",
            price: <h3 className="xui-m-none"><span className="xui-font-w-600 xui-font-sz-120">£4,000</span> /<span className="xui-font-w-normal xui-font-sz-100">month</span></h3>,
            linkURL: "package/2"
        },
          {
            image: Package3,
            heading: "Established Business Package",
            paragraph: "For established companies requiring full-service BPO and robust IT solutions.",
            price: <h3 className="xui-m-none"><span className="xui-font-w-600 xui-font-sz-120">£7,500</span> /<span className="xui-font-w-normal xui-font-sz-100">month</span></h3>,
            linkURL: "package/3"
        },
          {
            image: Package4,
            heading: "Enterprise Solution Package",
            paragraph: "For large organizations requiring customized BPO and advanced IT services.",
            price: <h3 className="xui-m-none xui-font-w-600 xui-font-sz-120">Custom Pricing</h3>,
            linkURL: "package/4"
          },
    ];
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
    <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container'>
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
        <div className="xui-py-3">
            <h3 className="xui-font-sz-120 xui-font-w-normal xui-mt-1 xui-lg-d-inline-block xui-d-none">Our BPO Packages</h3>
            <div className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-lg-d-none">
              <span className='xui-d-inline-block xui-py-1 xui-px-1-half xui-bdr-white xui-bdr-s-solid xui-bdr-w-1 xui-bdr-rad-2 xui-font-sz-100'>Our BPO Packages</span>
            </div>
            <div className="xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-1 xui-mt-1">
                {bpoSolutions.map((bpo, index) => (
                    <div key={index} className="xui-bg-sz-cover bpo-package-holder xui-bg-pos-center xui-bdr-rad-half" style={{"backgroundImage": `url('${bpo.image}')`}}>
                        <div className="xui-overlay-2 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-space-between">
                            <h3 className="xui-lg-font-sz-130 xui-font-sz-110 xui-lg-w-fluid-90 xui-w-fluid-100 xui-font-w-normal xui-m-none">
                                {bpo.heading}
                            </h3>
                            <p className="xui-lg-font-sz-110 xui-font-sz-100 xui-opacity-8 xui-line-height-1-half xui-mt-1 xui-lg-w-fluid-90 xui-w-fluid-100">
                                {bpo.paragraph}
                            </p>
                            <div className="xui-mt-7">
                                {bpo.price}
                                <Button url={bpo.linkURL} customStyle={{"backgroundColor": "#159b48"}} svgColor="#FFF" customClass="xui-mt-1" text="Learn more" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default BPOSolutions;
