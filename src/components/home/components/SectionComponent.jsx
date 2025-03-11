import React from 'react';

const SectionComponent = ( {subheading, heading, text} ) => {
    return (
        <div className='xui-text-center'>
            <p className='xui-lg-font-sz-110 xui-font-sz-85 xui-font-w-400 xui-text-uppercase'>{subheading}</p>
            <h3 className='xui-text-capitalize xui-lg-font-sz-200 xui-font-sz-130 xui-font-w-500 xui-mt-1 xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto'>{heading}</h3>
            {text ? <p className='xui-font-sz-95 xui-line-height-1-half xui-mt-1 xui-lg-w-fluid-60 xui-w-fluid-100 xui-mx-auto'>{text}</p> : ''}
        </div>
    );
};

export default SectionComponent;