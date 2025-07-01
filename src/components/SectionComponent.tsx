import React from 'react';

interface SectionProps {
  subheading: string;
  heading: string;
  /** Make text optional with `?` */
  text?: string;
}

const SectionComponent: React.FC<SectionProps> = ({ subheading, heading, text }) => (
  <div className="text-center">
    <p
      data-aos="fade-up"
      data-aos-duration="1000"
      className="lg:text-[110%] text-[85%] font-[400] uppercase"
    >
      {subheading}
    </p>

    <h3
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      className="capitalize lg:text-[200%] text-[130%] font-medium mt-[1rem] lg:w-[50%] w-full mx-auto"
    >
      {heading}
    </h3>

    {text && (
      <p
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500"
        className="text-[95%] leading-[1.5rem] mt-[1rem] lg:w-[60%] w-full mx-auto"
      >
        {text}
      </p>
    )}
  </div>
);

export default SectionComponent;
