import React from 'react';
import AboutIcon1 from '../components/custom-svg-icons/AboutIcon1';
import AboutImage from "../assets/images/about-image.jpg";
import AboutIcon2 from '../components/custom-svg-icons/AboutIcon2';
import AboutIcon3 from '../components/custom-svg-icons/AboutIcon3';
import AboutIcon4 from '../components/custom-svg-icons/AboutIcon4';
import AboutIcon5 from '../components/custom-svg-icons/AboutIcon5';

const About = () => {
    const initialData = [
        {
          icon: <AboutIcon1 />,
          heading: "Innovative Solutions",
          paragraph: "Delivering advanced tools and strategies for business growth."
        },
        {
          icon: <AboutIcon2 />,
          heading: "Industry Expertise",
          paragraph: "A team of specialists committed to driving success."
        },
        {
          icon: <AboutIcon3 />,
          heading: "Tailored Services",
          paragraph: "Customized solutions to meet unique business needs."
        },
        {
          icon: <AboutIcon4 />,
          heading: "Operational Efficiency",
          paragraph: "Streamlining processes for maximum productivity."
        },
        {
          icon: <AboutIcon5 />,
          heading: "Sustainable Growth",
          paragraph: "Fostering long-term success across diverse sectors."
        },
    ];
    return (
        <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container'>
            <div className='xui-row'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <h1 className='xui-lg-font-sz-200 xui-font-sz-180 xui-font-w-normal xui-line-height-3'>Driving growth <br/> through innovative solutions and expert insights for business operation optimization</h1>
                </div>
                <div className='xui-lg-col-6 xui-col-12 xui-lg-pl-2 xui-pl-none'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-80 xui-line-height-1-half xui-lg-w-fluid-80 xui-ml-auto xui-opacity-8 xui-w-fluid-100'>Grascope Industries. Ltd utilizes advanced innovation and specialized expertise to deliver tailored solutions that improve operational efficiency, foster sustainable growth, and empower businesses across various sectors.</p>
                </div>
            </div>
            <div className='xui-row xui-mt-3-half about-holder'>
                <div className='xui-lg-col-4 xui-col-12 xui-lg-d-block xui-d-grid xui-grid-col-1 xui-grid-gap-1'>
                    {initialData.map((data, index) => (
                        <div key={index} className="xui-d-flex xui-mt-1">
                            <div className={`anonymous-img ${index === initialData.length - 1 ? 'no-before' : ''} xui-pos-relative`}>
                                <div className="xui-d-flex xui-pos-relative xui-z-index-1 xui-flex-ai-center xui-flex-jc-center xui-w-40 xui-h-40 xui-bdr-rad-circle">
                                    {data.icon}
                                    <div class="overlay xui-bdr-rad-circle"></div>
                                </div>
                            </div>
                            <div style={{ "width": "calc(100% - 40px)" }} className={`xui-pl-1 xui-lg-mb-3 xui-mb-none`}>
                                <h3 className='xui-font-w-normal xui-lg-font-sz-150 xui-font-sz-120'>{data.heading}</h3>
                                <p className='xui-lg-font-sz-90 xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-mt-1'>{data.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='xui-lg-col-8 xui-col-12 xui-lg-pl-1 xui-pl-none xui-pos-relative'>
                    <img className='xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-1 xui-pos-sticky' src={AboutImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;