import React from 'react';
import HeaderPattern from "../assets/images/header-pattern.png";
import { Link } from 'react-router-dom';
import ArrowRight from '../components/custom-svg-icons/ArrowRight';

const NotFound = () => {
    return (
        <>
            <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container xui-bg-pos-top' style={{backgroundImage: `url('${HeaderPattern}')`, backgroundRepeat: 'no-repeat'}}>
                <div className='xui-py-3 xui-text-center'>
                    <span className='xui-d-inline-block xui-py-1 xui-px-1-half xui-bdr-white xui-bdr-s-solid xui-bdr-w-1 xui-bdr-rad-2 xui-lg-font-sz-95 xui-font-sz-85'>Not Found</span>
                    <h1 className='xui-lg-font-sz-250 xui-font-sz-180 xui-font-w-normal xui-mt-1'>Sorry! This Page Does Not Exist</h1>
                    <Link to={'/'} className='padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2'>
                        <p className='xui-font-sz-95'>Back to Home</p>
                        <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'>
                            <ArrowRight color={"#141416"} />
                        </span>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default NotFound;