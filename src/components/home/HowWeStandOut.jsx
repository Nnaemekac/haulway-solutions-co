import React, { useState } from "react";
import { PopupModal } from "react-calendly";
import SectionComponent from "./components/SectionComponent";
import { Link } from "react-router-dom";
import ArrowRight from "../custom-svg-icons/ArrowRight";
import Shield from "../custom-svg-icons/Shield";
import Clock from "../custom-svg-icons/Clock";
import HashNode from "../custom-svg-icons/HashNode";
import RockyLinux from "../custom-svg-icons/RockyLinux";

const HowWeStandOut = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='xui-py-3 xui-container'>
            <SectionComponent subheading='HOW WE STAND OUT' heading='We deliver structured workforce solutions—no freelancers.' />
            <div className='xui-mt-3 xui-row'>
                <div className='xui-lg-col-5 xui-col-12'>
                    <p className='xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100'>
                        Unlike remote freelancing, our teams work in person at a secure workspace, ensuring compliance & comprehensive workforce supervision, which translates to consistent, high-quality performance.
                    </p>
                    
                    {/* Calendly Button */}
                    <button onClick={(e) => {e.preventDefault(); setIsOpen(true); }} className='padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2'>
                        <p className='xui-font-sz-95'>Book a Call Today</p>
                        <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'>
                            <ArrowRight color={"#141416"} />
                        </span>
                    </button>

                    {/* Calendly PopupModal */}
                    <PopupModal url="https://calendly.com/grascope" onModalClose={() => setIsOpen(false)} open={isOpen} rootElement={document.getElementById("root")} />
                </div>

                <div className='xui-lg-col-7 xui-col-12 xui-lg-mt-none xui-mt-2'>
                    <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1'>
                        <div className='xui-pt-1 xui-px-1 xui-pb-2 xui-bdr-rad-1 gradient-btn'>
                            <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                                <span className='xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center gradient-btn'>
                                    <Shield />
                                </span>
                                <h3 className='xui-font-sz-110 xui-font-w-500'>Legal Protection:</h3>
                            </div>
                            <p className='xui-font-sz-95 xui-line-height-1-half xui-mt-1'>
                                As a UK-registered business with a DUNS number, we offer robust legal protection and peace of mind through our comprehensive compliance standards.
                            </p>
                        </div>

                        <div className='xui-pt-1 xui-px-1 xui-pb-2 xui-bdr-rad-1 gradient-btn'>
                            <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                                <span className='xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center gradient-btn'>
                                    <Clock />
                                </span>
                                <h3 className='xui-font-sz-110 xui-font-w-500'>24/7 Support</h3>
                            </div>
                            <p className='xui-font-sz-95 xui-line-height-1-half xui-mt-1'>
                                With 24/7 support and dedicated account managers, we deliver real-time updates and performance tracking to keep you informed every step of the way.
                            </p>
                        </div>

                        <div className='xui-pt-1 xui-px-1 xui-pb-2 xui-bdr-rad-1 gradient-btn'>
                            <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                                <span className='xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center gradient-btn'>
                                    <HashNode />
                                </span>
                                <h3 className='xui-font-sz-110 xui-font-w-500'>Better Pricing</h3>
                            </div>
                            <p className='xui-font-sz-95 xui-line-height-1-half xui-mt-1'>
                                Save up to 60% on staffing costs while benefiting from our streamlined team management and dedicated support services.
                            </p>
                        </div>

                        <div className='xui-pt-1 xui-px-1 xui-pb-2 xui-bdr-rad-1 gradient-btn'>
                            <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                                <span className='xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center gradient-btn'>
                                    <RockyLinux />
                                </span>
                                <h3 className='xui-font-sz-110 xui-font-w-500'>Fully Supervised Staff</h3>
                            </div>
                            <p className='xui-font-sz-95 xui-line-height-1-half xui-mt-1'>
                                We maintain an in-person workforce with structured management for accountability, seamless coordination, and exceptional performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeStandOut;
