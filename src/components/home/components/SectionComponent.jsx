import React from 'react';

const SectionComponent = ( {subheading, heading} ) => {
    return (
        <div className='xui-text-center'>
            <p className='xui-font-sz-110 XUI-FONT-W-400'>{subheading}</p>
            <h3 className='xui-font-sz-200 xui-font-w-500 xui-mt-1 xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto'>{heading}</h3>
        </div>
    );
};

export default SectionComponent;