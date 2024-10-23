import React, { useState } from "react";
import ITImage1 from "../assets/images/it-image1.jpg";
import ITImage2 from "../assets/images/it-image2.jpg";
import ITImage3 from "../assets/images/it-image3.jpg";
import ITImage4 from "../assets/images/it-image4.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from '@carbon/icons-react';

const ITServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
        image: ITImage1,
        heading: "Information Technology Support",
        paragraph: "Offering comprehensive IT support to ensure your systems run smoothly, minimize downtime, and optimize performance, allowing your business to focus on growth and innovation."
      },
      {
        image: ITImage2,
        heading: "MOBILE APP Development",
        paragraph: "Designing and developing intuitive, high-performance mobile applications tailored to meet your business needs, enhance user engagement, and drive digital growth."
      },
      {
        image: ITImage3,
        heading: "WEBSITE Development",
        paragraph: "Crafting customized, user-friendly websites that enhance your online presence, drive engagement, and deliver a seamless digital experience for your audience."
      },
      {
        image: ITImage4,
        heading: "CUSTOM SOFTWARE  Development",
        paragraph: "Creating bespoke software solutions that align with your specific business requirements, enhance operational efficiency, and foster innovation for sustained growth."
      },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container'>
        <div className='xui-py-3 xui-text-center'>
            <span className='xui-d-inline-block xui-py-1 xui-px-1-half xui-bdr-white xui-bdr-s-solid xui-bdr-w-1 xui-bdr-rad-2'>IT Services</span>
            <h1 className='xui-lg-font-sz-250 xui-font-sz-180 xui-font-w-normal xui-mt-1'>Our IT Services</h1>
            <p className='xui-lg-font-sz-90 xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-mt-1 xui-mx-auto xui-lg-w-fluid-75 xui-w-fluid-100'>Providing businesses with reliable, scalable, and secure IT services designed to enhance operational efficiency, drive innovation, and ensure seamless performance.</p>
        </div>
        <div className="image-container">
            {images.map((image, index) => (
                <div
                key={index}
                className={`image ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleClick(index)}
                >
                <img src={image.image} alt={image.alt} title={image.alt} />
                <div className="content-container xui-w-fluid-100 xui-pos-absolute">
                    <span className="xui-lg-font-sz-160 xui-font-sz-105">{image.heading}</span>
                    <span className="xui-lg-font-sz-90 xui-font-sz-60 xui-line-height-1-half xui-lg-w-fluid-70 xui-w-fluid-100">{image.paragraph}</span>
                    <span>
                        <Link to='/contact' class="custom-svg-box xui-text-dc-none xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-bdr-rad-1-half xui-grid-gap-1-half">
                            <p className='xui-lg-font-sz-90 xui-font-sz-80'>CONTACT US</p>
                            <div className='xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <ChevronRight size={19.5} color='#FFF'/>
                            </div>
                            <div class="overlay xui-bdr-rad-2">
                            
                            </div>
                        </Link>
                    </span>
                </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default ITServices;
