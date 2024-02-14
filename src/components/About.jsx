
import CountUp from 'react-countup';

export default function About(){
    return(
        <>
            <section className=" xui-container xui-lg-py-7 xui-py-2">
                <div className='xui-row xui-flex-ai-center'>
                    <div className='xui-lg-col-7 xui-col-12'>
                        <p className='xui-font-sz-80'>Who we are</p>
                        <h1 className="xui-lg-font-sz-300 xui-font-sz-250 font-spaceGrotesk">Grascope Industries Ltd is a dynamic conglomerate</h1>
                        <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Dedicated to driving innovation and entrepreneurship across sectors. With a robust portfolio of companies under our wing, we're at the forefront of shaping industries and creating lasting impact.</p>
                    </div>
                    <div className='xui-lg-col-5 xui-col-12 xui-lg-mt-none xui-mt-1 xui-lg-pl-1-half xui-pl-none'>
                        <img className='xui-img-500 xui-h-400 xui-bdr-rad-1' src="https://img.freepik.com/free-photo/workaholics-businesspeople-brainstorming-financial-company-ideas-analyzing-strategy-paperwork-late-night-business-office-meeting-room_482257-2170.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                        {/* <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-lg-grid-gap-1 xui-grid-gap-3">
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={50} duration={9} delay={1}/>+</h3>
                                <p className="xui-mt-1  xui-lg-font-sz-150 xui-font-sz-120 xui-opacity-6">Member(s)</p>
                            </div>
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={400} duration={9} delay={1}/>+</h3>
                                <p className="xui-mt-1  xui-lg-font-sz-150 xui-font-sz-120 xui-opacity-6">Projects completed</p>
                            </div>
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={12} duration={9} delay={1}/></h3>
                                <p className="xui-mt-1  xui-lg-font-sz-150 xui-font-sz-120 xui-opacity-6">Total companies</p>
                            </div>
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={7} duration={9} delay={1}/> Years</h3>
                                <p className="xui-mt-1  xui-lg-font-sz-150 xui-font-sz-120 xui-opacity-6">Experience</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                
            </section>
            <section className=" xui-container xui-lg-py-7 xui-py-2">
                <div className='xui-row xui-flex-ai-center'>
                    <div className='xui-lg-col-5 xui-col-12'>
                        <img className='xui-img-500 xui-h-400 xui-bdr-rad-1' src="https://img.freepik.com/free-photo/industrial-designers-working-3d-model_23-2149370157.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                        {/* <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-lg-grid-gap-1 xui-grid-gap-3">
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={50} duration={9} delay={1}/>+</h3>
                                <p className="xui-mt-1  xui-lg-font-sz-150 xui-font-sz-120 xui-opacity-6">Member(s)</p>
                            </div>
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={400} duration={9} delay={1}/>+</h3>
                                <p className="xui-mt-1  xui-lg-font-sz-150 xui-font-sz-120 xui-opacity-6">Projects completed</p>
                            </div>
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={12} duration={9} delay={1}/></h3>
                                <p className="xui-mt-1  xui-lg-font-sz-150 xui-font-sz-120 xui-opacity-6">Total companies</p>
                            </div>
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={7} duration={9} delay={1}/> Years</h3>
                                <p className="xui-mt-1  xui-lg-font-sz-150 xui-font-sz-120 xui-opacity-6">Experience</p>
                            </div>
                        </div> */}
                    </div>
                    <div className='xui-lg-col-7 xui-col-12 xui-lg-mt-none xui-mt-1 xui-lg-pl-1-half xui-pl-none'>
                        <p className='xui-font-sz-80'>Our Vision</p>
                        <h1 className="xui-lg-font-sz-300 xui-font-sz-250 font-spaceGrotesk">Our vision is to be a catalyst for change</h1>
                        <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Fostering a culture of innovation and entrepreneurship that propels businesses and communities forward. Through strategic investments and visionary leadership, we strive to redefine what's possible and inspire others to do the same.</p>
                    </div>
                </div>
                
            </section>
        </>
    )
}