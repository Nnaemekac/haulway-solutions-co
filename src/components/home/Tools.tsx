
import { Link } from "react-router-dom";
import SectionComponent from "../SectionComponent";

const Tools = () => {
    return (
        <section className='py-[3rem] lg:px-[3rem] px-[1rem]'>
            <SectionComponent subheading='TOOLS' heading='Explore Our Free Hiring Tools' text='Discover powerful hiring tools designed to help you find the right talent—fast, easy, and completely free.' />
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-[4rem] mt-[3rem]'>
                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="300" className='rounded-[1rem] bg-[#1E1E1E]'>
                    <img src={'/static/home/roi.png'} className='w-full h-[300px] rounded-t-[1rem] rounded-b-none' alt="" />
                    <div className='pt-[1.5rem] px-[1.5rem] pb-[2rem]'>
                        <h3 className='lg:text-[200%] text-[110%] lg:w-[70%] w-full font-medium'>Return on Investment (ROI) Calculator</h3>
                        <Link to={'/roi'} className='text-[#FFF] inline-block mt-[4rem] text-[110%] underline'>Get started</Link>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="500" className='rounded-[1rem] bg-[#1E1E1E]'>
                    <img src={'/static/home/employee-background-checks.png'} className='w-full h-[300px] rounded-t-[1rem] rounded-b-none' alt="" />
                    <div className='pt-[1.5rem] px-[1.5rem] pb-[2rem]'>
                        <h3 className='lg:text-[200%] text-[110%] lg:w-[70%] w-full font-medium'>Stack Check</h3>
                        <Link to={'/stack-check'} className='text-[#FFF] inline-block mt-[4rem] text-[110%] underline'>Get started</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;