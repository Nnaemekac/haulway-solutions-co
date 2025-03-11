import React, { useState } from 'react';
import SectionComponent from '../home/components/SectionComponent';

const Identity = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <section className='xui-py-3'>
            <SectionComponent subheading='Our Identity' heading='delivering excellence, and driving growth every step of the way.' />
            <div className='xui-row xui-mt-3'>
                <div className='xui-lg-col-5 xui-col-12'>
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" className=''>
                        <div onClick={() => handleTabClick(0)} className={'xui-d-inline-flex xui-cursor-pointer xui-flex-ai-self-end xui-grid-gap-1 xui-pb-1-half bdr-bottom-width-[1px] bdr-bottom-style-[solid] bdr-bottom-color-[#737373] ' + (activeTab === 0 ? 'xui-text-white' : 'active-identity')}>
                            <span className='xui-font-sz-150 xui-font-w-500'>01.</span>
                            <div>
                                <h3 className='xui-lg-font-sz-300 xui-font-sz-200 xui-m-none xui-font-w-500'>Our Story</h3>
                            </div>
                        </div>
                        <div onClick={() => handleTabClick(1)} className={'xui-d-inline-flex xui-cursor-pointer xui-flex-ai-self-end xui-grid-gap-1 xui-py-1-half bdr-bottom-width-[1px] bdr-bottom-style-[solid] bdr-bottom-color-[#737373] ' + (activeTab === 1 ? 'xui-text-white' : 'active-identity')}>
                            <span className='xui-font-sz-150 xui-font-w-500'>02.</span>
                            <div>
                                <h3 className='xui-lg-font-sz-300 xui-font-sz-200 xui-m-none xui-font-w-500'>Our Mission</h3>
                            </div>
                        </div>
                        <div onClick={() => handleTabClick(2)} className={'xui-d-inline-flex xui-cursor-pointer xui-flex-ai-self-end xui-grid-gap-1 xui-py-1-half bdr-bottom-width-[1px] bdr-bottom-style-[solid] bdr-bottom-color-[#737373] ' + (activeTab === 2 ? 'xui-text-white' : 'active-identity')}>
                            <span className='xui-font-sz-150 xui-font-w-500'>03.</span>
                            <div>
                                <h3 className='xui-lg-font-sz-300 xui-font-sz-200 xui-m-none xui-font-w-500'>Our Identity</h3>
                            </div>
                        </div>
                        <div onClick={() => handleTabClick(3)} className={'xui-d-inline-flex xui-cursor-pointer xui-flex-ai-self-end xui-grid-gap-1 xui-py-1-half bdr-bottom-width-[1px] bdr-bottom-style-[solid] bdr-bottom-color-[#737373] ' + (activeTab === 3 ? 'xui-text-white' : 'active-identity')}>
                            <span className='xui-font-sz-150 xui-font-w-500'>04.</span>
                            <div>
                                <h3 className='xui-lg-font-sz-300 xui-font-sz-200 xui-m-none xui-font-w-500'>Our Approach</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xui-lg-col-7 xui-col-12 xui-lg-pl-1 xui-pl-none xui-lg-mt-none xui-mt-2'>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className='xui-px-1-half xui-pt-1 xui-pb-3 bg-gradient2 xui-bdr-rad-1 xui-lg-max-h-500 xui-h-fluid-100 xui-max-h-800'>
                        {activeTab === 0 && 
                            <>
                                <h3 className='xui-font-sz-160 xui-font-w-500 xui-lg-w-fluid-80 xui-w-fluid-100'>Every Groundbreaking Solution Begins With a Spark Of An Idea.</h3>
                                <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-2'>Grascope Industries was founded to act as an idea lab, where creativity and innovation meet to reshape industries and create impactful solutions. Founded in Port Harcourt, Nigeria, we have grown into a trusted partner for companies in the UK, the USA, and beyond. Grascope has grown into a hub for transforming visions into actionable, scalable outcomes. We work across diverse industries, helping companies reach their goals by building the solutions they need to succeed.</p>
                                <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-2'>Not just your traditional service company—we are an innovation engineering platform that takes conceptual ideas and transforms them into executable, high-impact solutions across multiple industries.</p>
                            </>
                        }
                        {activeTab === 1 && 
                            <>
                                <h3 className='xui-font-sz-160 xui-font-w-500 xui-lg-w-fluid-80 xui-w-fluid-100'>Architecting Future Possibilities</h3>
                                <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-2'>We exist to bridge the gap between imagination and implementation. Our mission is to identify, refine, and develop breakthrough ideas that solve complex business and societal challenges.</p>
                            </>
                        }
                        {activeTab === 2 && 
                            <>
                                <h3 className='xui-font-sz-160 xui-font-w-500 xui-lg-w-fluid-80 xui-w-fluid-100'>What Sets Us Apart</h3>
                                <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-2'>Innovation and impact define us. Grascope Industries is built on values that inspire trust, collaboration, and excellence.</p>
                                <ul className='xui-pl-1 xui-mt-1'>
                                    <li className='xui-line-height-1-half'><span className='xui-font-w-600'>Commitment to Quality:</span>  Every project we undertake is driven by a passion for excellence and a commitment to exceeding expectations.</li>
                                    <li className='xui-mt-1 xui-line-height-1-half'><span className='xui-font-w-600'>Global Perspective, Local Expertise:</span>   We harness the best talent from West Africa, delivering solutions that meet international standards.</li>
                                    <li className='xui-mt-1 xui-line-height-1-half'><span className='xui-font-w-600'>Comprehensive Solutions:</span>  From outsourcing to IT services and coworking spaces, we offer a holistic approach to business success.</li>
                                    <li className='xui-mt-1 xui-line-height-1-half'><span className='xui-font-w-600'>Client-Centric Philosophy:</span>   Your goals are our goals. We work closely with you to understand and address your unique needs.</li>
                                </ul>
                            </>
                        }
                        {activeTab === 3 && 
                            <>
                                <h3 className='xui-font-sz-160 xui-font-w-500 xui-lg-w-fluid-80 xui-w-fluid-100'>Systematic Innovation Engineering</h3>
                                <p className='xui-font-sz-100 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-2'>Idea Transformation Framework:</p>
                                <ul className='xui-pl-1 xui-mt-1'>
                                    <li className='xui-line-height-1-half'><span className='xui-font-w-600'>Concept Validation:</span> Rigorous assessment of idea potential</li>
                                    <li className='xui-mt-1 xui-line-height-1-half'><span className='xui-font-w-600'>Strategic Design:</span> Architectural blueprinting of solutions.</li>
                                    <li className='xui-mt-1 xui-line-height-1-half'><span className='xui-font-w-600'>Technological Implementation:</span> Building scalable prototypes</li>
                                    <li className='xui-mt-1 xui-line-height-1-half'><span className='xui-font-w-600'>Market Integration:</span> Preparing innovations for real-world deployment</li>
                                </ul>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Identity;