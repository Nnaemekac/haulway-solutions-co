import React, { useEffect } from 'react';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
import ArrowRight from '../../../components/custom-svg-icons/ArrowRight';

const ContactCard = (props) => {
    const { heading, paragraph, isWhatsapp, isPhone, isEmail, image } = props;
    useEffect(() => {
        window.xuiScrollOnAnimation();
        window.xuiLazyLoadings();
    });
    return (
        <div className="xui-bg-sz-cover bpo-package-holder xui-bg-pos-center xui-bdr-rad-half" style={{"backgroundImage": `url('${image}')`}}>
            <div className="xui-overlay-2 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-space-between">
                <h3 className="xui-font-sz-150 xui-lg-w-fluid-90 xui-w-fluid-100 xui-font-w-normal xui-m-none">
                    {heading}
                </h3>
                <p className="xui-lg-font-sz-100 xui-font-sz-85 xui-opacity-8 xui-line-height-1-half xui-mt-1 xui-lg-w-fluid-90 xui-w-fluid-100">
                    {paragraph}
                </p>
                <div className="xui-mt-7">
                    <hr style={{"backgroundColor": "#FFF"}}/>
                    <div className='xui-mt-1'>
                        {isWhatsapp ? (
                            <Link to='https://wa.me/447441395374' target='_blank' className='padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half'>
                                <p className='xui-lg-font-sz-95 xui-font-sz-70'>Contact us</p>
                                <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#159B48"} /></span>
                            </Link>
                        ) : isPhone ? (
                            <Link to='tel:+447441395374' target='_blank' className='padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half'>
                                <p className='xui-lg-font-sz-95 xui-font-sz-70'>Contact us</p>
                                <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#159B48"} /></span>
                            </Link>
                        ) : isEmail ? (
                            <Link to='mailto:contact@grascope.com' target='_blank' className='padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half'>
                                <p className='xui-lg-font-sz-95 xui-font-sz-70'>Contact us</p>
                                <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#159B48"} /></span>
                            </Link>
                            
                        ) : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;