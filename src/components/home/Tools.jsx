import SectionComponent from './components/SectionComponent';
import ROI from "../../assets/images/home/roi.png";
import EmployeeBackgroundChecks from "../../assets/images/home/employee-background-checks.png";
import { Link } from 'react-router-dom';

const Tools = () => {
    return (
        <section className='xui-py-3 xui-container'>
            <SectionComponent subheading='TOOLS' heading='Explore Our Free Hiring Tools' text='Discover powerful hiring tools designed to help you find the right talent—fast, easy, and completely free.' />
            <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-4 xui-mt-3'>
                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className='xui-bdr-rad-1 bg-[#1E1E1E]'>
                    <img src={ROI} className='xui-w-fluid-100 xui-h-300' style={{borderRadius: '1rem 1rem 0 0'}} alt="" />
                    <div className='xui-pt-1-half xui-px-1-half xui-pb-2'>
                        <h3 className='xui-lg-font-sz-200 xui-font-sz-110 xui-lg-w-fluid-70 xui-w-fluid-100 xui-font-w-500'>Return on Investment (ROI) Calculator</h3>
                        <Link to={'/roi/calculator'} className='xui-text-white xui-d-inline-block xui-mt-4 xui-font-sz-110'>Get started</Link>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500" className='xui-bdr-rad-1 bg-[#1E1E1E]'>
                    <img src={EmployeeBackgroundChecks} className='xui-w-fluid-100 xui-h-300' style={{borderRadius: '1rem 1rem 0 0'}} alt="" />
                    <div className='xui-pt-1-half xui-px-1-half xui-pb-2'>
                        <h3 className='xui-lg-font-sz-200 xui-font-sz-110 xui-lg-w-fluid-70 xui-w-fluid-100 xui-font-w-500'>Employee Background Checks</h3>
                        <Link className='xui-text-white xui-d-inline-block xui-mt-4 xui-font-sz-110'>Get started</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;