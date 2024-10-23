import React, { useEffect } from 'react';
import Button from '../../../components/Button';

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
                    {isWhatsapp ? (
                        <Button url='https://wa.me/447441395374' customStyle={{"backgroundColor": "#159b48"}} svgColor="#FFF" customClass="xui-mt-1" text="Contact us" />
                    ) : isPhone ? (
                        <Button url='tel:+447441395374' customStyle={{"backgroundColor": "#159b48"}} svgColor="#FFF" customClass="xui-mt-1" text="Contact us" />
                    ) : isEmail ? (
                        <Button url='mailto:contact@grascope.com' customStyle={{"backgroundColor": "#159b48"}} svgColor="#FFF" customClass="xui-mt-1" text="Contact us" />
                    ) : ''}
                </div>
            </div>
        </div>
    );
};

export default ContactCard;