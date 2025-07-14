import { Link } from 'react-router-dom';
import { FormkitInstagram, MDILinkedIn } from './icons';

const Footer = () => {

    return (
        <>
        <section className="lg:py-[3rem] py-[1rem] lg:px-[3rem] px-[1rem]">
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-[1rem] items-end'>
                <div>
                    <h1 className='haulway-heading-text lg:leading-[4.5rem] leading-[2.5rem] lg:text-[300%] text-[180%] font-medium'>
                        <p>PARTNER <span className='text-[#737373]'>WITH GRASCOPE</span> TODAY</p>
                    </h1>
                </div>
                {/* <form onSubmit={handleSubmit(sendEmail)} autoComplete="off" noValidate>
                    <div>
                        <p className='mt-[1rem] lg:text-[100%] text-[90%] font-medium'>Subscribe To Our Newsletter</p>
                        <div className="footer-input-email-holder main-footer-input mt-[1rem]">
                            <input {...register('email', {required: 'Please enter your email',pattern: {value: /^\S+@\S+$/i,message: 'Invalid email address'}})} type="email" name="email" id="email" placeholder="Your email address"/>
                            <button type="submit" disabled={isDisabled} className="footer-input-email-btn no-underline xui-font-sz-85 xui-mobile-font-sz-65 xui-m-half">{isDisabled ? 'Granting access...' : 'Subscribe'}</button>
                        </div>
                    </div>
                </form> */}
            </div>
            <div className='flex flex-wrap mt-[4rem] items-center'>
                <div className='lg:basis-7/12 basis-full'>
                    <p className='lg:text-[100%] text-[90%] font-medium'>CONTACT US</p>
                    
                    <p className='lg:text-[95%] text-[65%] font-light mt-[1rem]'>
                        <span className='mr-[.5rem] no-underline text-white'>contact@grascope.com</span> /
                        <span className='mx-[.5rem] no-underline text-white'>+234 818 293 1756</span> /
                        <span className='mx-[.5rem] no-underline text-white'>+44 7441359374</span>
                     </p>
                </div>
                <div className='lg:basis-5/12 basis-full pl-[0] lg:mt-[0] mt-[4rem]'>
                    <p className='lg:text-[100%] text-[90%] font-medium'>ADDRESS</p>
                    <p className='lg:text-[95%] text-[65%] font-light mt-[1rem] leading-[1.5rem]'>4, Iwowari Avenue, George Sekibo Road, Sasun Roundabout, Off Peter Odili Road, PortHarcourt, Nigeria.</p>
                </div>
            </div>
            <div className='flex flex-wrap mt-[4rem] items-center'>
                <div className='lg:basis-10/12 basis-full'>
                    <p className='lg:text-[100%] text-[90%] font-medium'>QUICK LINKS</p>
                    <p className='lg:text-[95%] text-[65%] font-light mt-[1rem]'>
                    <Link to='/' className='mr-[.5rem] no-underline text-white'>Home</Link> /
                     <Link to='about' className='mx-[.5rem] no-underline text-white'>About us</Link> /
                     <Link to='it-services' className='mx-[.5rem] no-underline text-white'>IT Services</Link> /
                     <Link to='bpo-solutions' className='mx-[.5rem] no-underline text-white'>BPO Solutions</Link> /
                     <Link to='stack-check' className='mx-[.5rem] no-underline text-white'>Stack Check</Link> /
                     <Link to='blogs' className='mx-[.5rem] no-underline text-white'>Blogs</Link>
                     </p>
                </div>

                <div className='lg:basis-2/12 basis-full lg:mt-[0] mt-[4rem] lg:text-right text-left'>
                    <p className='lg:text-[100%] text-[90%] font-medium'>FOLLOW US</p>
                    <div className='flex items-center lg:justify-end justify-start gap-[1rem] mt-[1rem]'>
                        <Link to='https://www.instagram.com/grascopeindustries?igsh=YjVtcHg4czRmOHFu'><FormkitInstagram /></Link>
                        <Link to='https://www.linkedin.com/company/grascope-industries-ltd/'><MDILinkedIn /></Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap mt-[4rem] items-center'>
                <a
              href="/Grascope Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-lg text-center bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] backdrop-blur-[53.080570220947266px] shadow-[0px_5.31px_31.85px_-3.98px_rgba(0,0,0,0.2)]"
            >
              View Our Brochure
            </a>
            </div>
            <div className='flex flex-wrap mt-[4rem] items-center'>
                <div className='lg:basis-10/12 basis-full'>
                    <p className='lg:text-[100%] text-[90%] font-medium'>RC NUMBERS</p>
                    <p className='lg:text-[95%] text-[60%] font-light mt-[1rem]'>
                        <span className='mr-[.5rem] text-white'>Grascope Industries UK LTD - 15589820  </span> 
                        <span className='green-text'>/</span>
                        <span className='mx-[.5rem] text-white'>Grascope Industries NIG LTD - 1479476  </span>
                     
                     </p>
                </div>
                <div className='lg:basis-2/12 basis-full lg:mt-[0] mt-[2rem] flex lg:justify-end justify-start'>
                    <p className=' lg:text-[95%] text-[60%] font-light flex items-center gap-[.5rem] flex-col justify-center '>FROM <br /> <Link className='inline-block' to='https://www.grascope.com/' target='_blank'><img className='max-w-[70px] w-full' src={'/static/logo-v2.png'} alt="" /></Link></p>
                </div>
            </div>

        </section>
        </>
    );
};

export default Footer;