import { ArrowRight } from '@carbon/icons-react';
import Header from '../components/about/Header';
import Identity from '../components/about/Identity';

const About = () => {
    return (
        <>
            <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
                <Header />
                <section className='pt-[4rem] pb-[1rem]'>
                    <div className=" px-[2rem] py-[8rem] relative z-[1] h-[700px]">
                        <div className='max-w-[500px] w-full mx-auto text-center'>
                            <h3 className='text-[220%]'>Innovating Beyond Boundaries Redefining Industry Excellence</h3>
                            <a href='/' className="rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[2.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem] mt-[2rem]">
                                <p className="text-[95%]">View Brochure</p>
                                <span className="flex justify-center items-center bg-[#159B48] rounded-full w-[35px] h-[35px]">
                                <ArrowRight color={"#FFF"} />
                                </span>
                            </a>
                        </div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-[3rem] mt-[4rem] px-[4rem]'>
                            <div>
                                <h3 className='text-[350%] font-[600]'>5y+</h3>
                                <p className='font-medium text-[150%]'>Industrial experience</p>
                            </div>
                            <div>
                                <h3 className='text-[350%] font-[600]'>30+</h3>
                                <p className='font-medium text-[150%]'>Serving companies</p>
                            </div>
                            <div>
                                <h3 className='text-[350%] font-[600]'>100+</h3>
                                <p className='font-medium text-[150%]'>In-house experts</p>
                            </div>
                        </div>
                        <img src="/static/trapezoid.svg" className='w-full h-full absolute top-[0] left-[0] -z-[1]' />
                    </div>
                </section>
                
                <Identity />
            </section>
        </>
    );
};

export default About;