import React from 'react';

const SectionComponent = ( {subheading, heading, text} ) => {
    return (
        <div className='xui-text-center'>
            <p data-aos="fade-up" data-aos-duration="1000" className='xui-lg-font-sz-110 xui-font-sz-85 xui-font-w-400 xui-text-uppercase'>{subheading}</p>
            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className='xui-text-capitalize xui-lg-font-sz-200 xui-font-sz-130 xui-font-w-500 xui-mt-1 xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto'>{heading}</h3>
            {text ? <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className='xui-font-sz-95 xui-line-height-1-half xui-mt-1 xui-lg-w-fluid-60 xui-w-fluid-100 xui-mx-auto'>{text}</p> : ''}
        </div>
    );
};

export default SectionComponent;