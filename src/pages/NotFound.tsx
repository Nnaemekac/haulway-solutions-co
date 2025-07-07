import { Link } from 'react-router-dom';
import { ArrowRight } from '@carbon/icons-react';

const NotFound = () => {
    return (
        <>
            <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
                <div className='py-[3rem] text-center'>
                    <span className='inline-block py-[1rem] px-[1.5rem] border border-white rounded-[2rem] lg:text-[95%] text-[85%]'>Not Found</span>
                    <h1 className='lg:text-[250%] text-[180%] mt-[1rem]'>Sorry! This Page Does Not Exist</h1>
                    <Link to={'/'} className='rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem] mt-[2rem]'>
                        <p className='text-[95%]'>Back to Home</p>
                        <span className='flex justify-center items-center bg-white rounded-full w-[35px] h-[35px]'>
                            <ArrowRight color={"#141416"} />
                        </span>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default NotFound;