import React from 'react';
import AboutImage from "../../assets/images/about/about-image.jpg";
import HeaderPattern from "../../assets/images/header-pattern.png";
import AITechnologySpark from '../custom-svg-icons/AITechnologySpark';
import IndustryExpertise from '../custom-svg-icons/IndustryExpertise';
import TapCart from '../custom-svg-icons/TapCart';
import Git from '../custom-svg-icons/Git';
import Growth from '../custom-svg-icons/Growth';
import Identity from './Identity';

const Header = () => {
    const initialData = [
        {
          icon: <AITechnologySpark />,
          heading: "Innovative Solutions",
          paragraph: "Delivering advanced tools and strategies for business growth.",
          animationDelay: '300'
        },
        {
          icon: <IndustryExpertise />,
          heading: "Industry Expertise",
          paragraph: "A team of specialists committed to driving success.",
          animationDelay: '500'
        },
        {
          icon: <TapCart />,
          heading: "Tailored Services",
          paragraph: "Customized solutions to meet unique business needs.",
          animationDelay: '700'
        },
        {
          icon: <Git />,
          heading: "Operational Efficiency",
          paragraph: "Streamlining processes for maximum productivity.",
          animationDelay: '900'
        },
        {
          icon: <Growth />,
          heading: "Sustainable Growth",
          paragraph: "Fostering long-term success across diverse sectors.",
          animationDelay: '1100'
        },
    ];
    return (
        <>
            <div className='xui-row'>
                <div data-aos="fade-right" data-aos-duration="1000" className='xui-lg-col-6 xui-col-12'>
                    <h1 className='xui-lg-font-sz-200 xui-font-sz-180 xui-font-w-normal xui-line-height-3 xui-lg-d-block xui-d-none'>Driving growth through innovative <br/> solutions and expert insights for business operation optimization</h1>
                    <h1 className='xui-lg-font-sz-200 xui-font-sz-180 xui-font-w-normal xui-line-height-3 xui-lg-d-none xui-d-block'>Driving growth <br/> through innovative solutions and expert insights for business operation optimization</h1>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" className='xui-lg-col-6 xui-col-12 xui-lg-pl-2 xui-pl-none xui-lg-mt-none xui-mt-1'>
                    <p className='xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-80 xui-ml-auto xui-opacity-8 xui-w-fluid-100'>Grascope Industries. Ltd utilizes advanced innovation and specialized expertise to deliver tailored solutions that improve operational efficiency, foster sustainable growth, and empower businesses across various sectors.</p>
                </div>
            </div>
            <div className='xui-py-2'>
                <img data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className='xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-1 xui-pos-sticky' src={AboutImage} alt="" />
            </div>
            <div className='xui-d-grid xui-lg-grid-col-5 xui-grid-col-1 xui-grid-gap-1'>
                {initialData.map((data, index) => (
                    <div data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay={data.animationDelay} key={index} className="xui-d-flex xui-mt-1">
                        <span className='xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center gradient-btn'>{data.icon}</span>
                        <div style={{ "width": "calc(100% - 40px)" }} className={`xui-pl-half`}>
                            <h3 className='xui-font-w-normal xui-font-sz-100'>{data.heading}</h3>
                            <p className='xui-lg-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-mt-half'>{data.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Header;