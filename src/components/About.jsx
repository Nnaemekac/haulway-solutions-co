
import CountUp from 'react-countup';

export default function About(){
    return(
        <>
            <section className=" xui-container xui-lg-py-7 xui-py-2">
                <div className='xui-row'>
                    <div className='xui-lg-col-7 xui-col-12'>
                        <p className='xui-font-sz-80'>Who we are</p>
                        <h1 className="xui-lg-font-sz-350 xui-font-sz-250 font-spaceGrotesk">We always prioritize quality and collaboration</h1>
                        <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Founded in 1996, We are the longest running technology incubator. We have created over 150 companies with more than 45 IPOs and acquisitions.</p>
                    </div>
                    <div className='xui-lg-col-5 xui-col-12 xui-lg-mt-none xui-mt-1'>
                        <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-lg-grid-gap-1 xui-grid-gap-3">
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={50} duration={9} delay={1}/>+</h3>
                                <p className="xui-mt-1 xui-lg-font-sz-100 xui-lg-font-sz-180 xui-font-sz-120 xui-opacity-6">Member(s)</p>
                            </div>
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={400} duration={9} delay={1}/>+</h3>
                                <p className="xui-mt-1 xui-lg-font-sz-100 xui-lg-font-sz-180 xui-font-sz-120 xui-opacity-6">Projects completed</p>
                            </div>
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={12} duration={9} delay={1}/></h3>
                                <p className="xui-mt-1 xui-lg-font-sz-100 xui-lg-font-sz-180 xui-font-sz-120 xui-opacity-6">Total companies</p>
                            </div>
                            <div className="xui-text-center">
                                <h3 className="xui-lg-font-sz-300 xui-font-sz-200"><CountUp start={0} end={7} duration={9} delay={1}/> Years</h3>
                                <p className="xui-mt-1 xui-lg-font-sz-100 xui-lg-font-sz-180 xui-font-sz-120 xui-opacity-6">Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}