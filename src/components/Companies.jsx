import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import animationData from "../assets/offer.json";
import Lottie from "lottie-react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HashLink } from 'react-router-hash-link';
import { Send, Shield, Star } from 'react-feather';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Blogs from './Blogs';
import { Link } from 'react-router-dom';

const Companies = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    };
    const images = ["https://idealab.com/images/companies/branch.png",
    "https://idealab.com/images/companies/branch.png" ,
    "https://idealab.com/images/companies/branch.png",
    "https://idealab.com/images/companies/branch.png",
    "https://idealab.com/images/companies/branch.png",
    "https://idealab.com/images/companies/branch.png",
    "https://idealab.com/images/companies/branch.png",
    "https://idealab.com/images/companies/branch.png",
    "https://idealab.com/images/companies/branch.png",
    "https://idealab.com/images/companies/branch.png",
    ];
    
  return (
    <>
        <div className="companies-section xui-w-fluid-100 xui-z-index--1">
            <section id='companies' className="xui-container xui-lg-d-block xui-d-none  xui-lg-py-4 xui-py-2">
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <h1 className="xui-lg-font-sz-200 xui-font-sz-150 companies-section-heading">Great Ideas. Great Companies</h1>
                    <p className='xui-font-sz-80 xui-line-height-1-half xui-lg-text-right xui-text-left xui-w-500 xui-opacity-8'>We believe that entrepreneurship can unlock human potential and make the world a better place. We look for big problems in the world that have technology solutions and test many ideas in parallel. When one shows great promise, we recruit a great team, spin it off into a company, and help them grow a successful business.</p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={breakpoints}
                    className="xui-pt-2"
                    >
                    <SwiperSlide>
                        <div className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-h-350" style={{backgroundImage: `url(https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980)`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 ">
                                <div className='xui-w-60 xui-h-60 xu-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle'>
                                    <img className='xui-img-100' src="https://www.idealab.com/images/companies/branch.png" alt="" />
                                </div>
                                <div>
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <p className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none">Ground-breaking solar technologies and why clean technology is a trillion dollar opportunity</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-h-350" style={{backgroundImage: `url(https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980)`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 ">
                                <div className='xui-w-60 xui-h-60 xu-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle'>
                                    <img className='xui-img-100' src="https://www.idealab.com/images/companies/branch.png" alt="" />
                                </div>
                                <div>
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <p className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none">Ground-breaking solar technologies and why clean technology is a trillion dollar opportunity</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-h-350" style={{backgroundImage: `url(https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980)`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 ">
                                <div className='xui-w-60 xui-h-60 xu-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle'>
                                    <img className='xui-img-100' src="https://www.idealab.com/images/companies/branch.png" alt="" />
                                </div>
                                <div>
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <p className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none">Ground-breaking solar technologies and why clean technology is a trillion dollar opportunity</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-h-350" style={{backgroundImage: `url(https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980)`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 ">
                                <div className='xui-w-60 xui-h-60 xu-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle'>
                                    <img className='xui-img-100' src="https://www.idealab.com/images/companies/branch.png" alt="" />
                                </div>
                                <div>
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <p className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none">Ground-breaking solar technologies and why clean technology is a trillion dollar opportunity</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-h-350" style={{backgroundImage: `url(https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980)`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 ">
                                <div className='xui-w-60 xui-h-60 xu-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle'>
                                    <img className='xui-img-100' src="https://www.idealab.com/images/companies/branch.png" alt="" />
                                </div>
                                <div>
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <p className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none">Ground-breaking solar technologies and why clean technology is a trillion dollar opportunity</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </section>
            <section id='companies' className="xui-container xui-lg-d-none xui-d-block  xui-lg-py-4 xui-py-2">
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <h1 className="xui-lg-font-sz-200 xui-font-sz-150 companies-section-heading">Great Ideas. Great Companies</h1>
                    <p className='xui-font-sz-80 xui-line-height-1-half xui-lg-text-right xui-text-left xui-w-500 xui-opacity-8'>We believe that entrepreneurship can unlock human potential and make the world a better place. We look for big problems in the world that have technology solutions and test many ideas in parallel. When one shows great promise, we recruit a great team, spin it off into a company, and help them grow a successful business.</p>
                </div>
                <div className='xui-d-grid xui-mt-2 xui-grid-col-2 xui-grid-gap-1'>
                    <div className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-h-200" style={{backgroundImage: `url(https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980)`}}>
                        <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 ">
                            <div className='xui-w-50 xui-h-50 xu-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle'>
                                <img className='xui-img-100' src="https://www.idealab.com/images/companies/branch.png" alt="" />
                            </div>
                            <div className="xui-p-1">
                                {/* <h1 className="xui-font-sz-100">Bill's blog goes behind the scenes at Idealab</h1> */}
                                <p className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none">A look at what it takes to bring ground-breaking companies to market</p>
                            </div>
                        </div>
                    </div>
                    <div className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-h-200" style={{backgroundImage: `url(https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980)`}}>
                        <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 ">
                            <div className='xui-w-50 xui-h-50 xu-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle'>
                                <img className='xui-img-100' src="https://www.idealab.com/images/companies/branch.png" alt="" />
                            </div>
                            <div className="xui-p-1">
                                {/* <h1 className="xui-font-sz-100">Bill's blog goes behind the scenes at Idealab</h1> */}
                                <p className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none">A look at what it takes to bring ground-breaking companies to market</p>
                            </div>
                        </div>
                    </div>
                    <div className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-h-200" style={{backgroundImage: `url(https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980)`}}>
                        <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 ">
                            <div className='xui-w-50 xui-h-50 xu-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle'>
                                <img className='xui-img-100' src="https://www.idealab.com/images/companies/branch.png" alt="" />
                            </div>
                            <div className="xui-p-1">
                                {/* <h1 className="xui-font-sz-100">Bill's blog goes behind the scenes at Idealab</h1> */}
                                <p className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none">A look at what it takes to bring ground-breaking companies to market</p>
                            </div>
                        </div>
                    </div>
                    <div className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-h-200" style={{backgroundImage: `url(https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980)`}}>
                        <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 ">
                            <div className='xui-w-50 xui-h-50 xu-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle'>
                                <img className='xui-img-100' src="https://www.idealab.com/images/companies/branch.png" alt="" />
                            </div>
                            <div className="xui-p-1">
                                {/* <h1 className="xui-font-sz-100">Bill's blog goes behind the scenes at Idealab</h1> */}
                                <p className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none">A look at what it takes to bring ground-breaking companies to market</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-flex-end xui-mt-2'>
                    <Link className='xui-font-sz-80 xui-text-dc-none ' to="/">See all</Link>
                </div>
            </section>

            <div id='offer' className="services-section xui-container  xui-lg-py-4 xui-py-2 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1">
                <div id="welcome" className=" xui-font-w-bold">
                    <h1 className="xui-lg-font-sz-350 xui-font-sz-250 font-spaceGrotesk">What We Offer</h1>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">we pride ourselves on delivering innovative solutions tailored to meet your unique needs. Our comprehensive suite of services spans from cutting-edge software engineering to creative design, providing end-to-end solutions that empower your business. </p>
                    <HashLink className="xui-bdr-rad-half xui-text-dc-none xui-font-sz-80 secondary xui-text-white xui-py-1 xui-d-inline-block xui-mt-1 xui-px-2" smooth to='#contact'>Contact us</HashLink>
                </div>
                <div className="">
                    <Lottie animationData={animationData} className="xui-h-300" />
                </div>
                <div>
                    <div className='xui-d-flex xui-p-1 xui-flex-ai-center offer'>
                        <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <Star size={24} strokeWidth={1.6} />
                        </div>
                        <div style={{"width": "calc(100% - 50px)"}}>
                            <h3 className="xui-font-sz-150 font-spaceGrotesk">Innovation Labs</h3>
                            <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Fuel your business with groundbreaking ideas through our innovation labs.</p>
                        </div>
                    </div>
                    <div className='xui-d-flex xui-mt-1 xui-p-1 xui-flex-ai-center offer'>
                        <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <Shield size={24} strokeWidth={1.6} />
                        </div>
                        <div style={{"width": "calc(100% - 50px)"}}>
                            <h3 className="xui-font-sz-150 font-spaceGrotesk">Digital Transformation</h3>
                            <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Bring your products to life with our product development expertise.</p>
                        </div>
                    </div>
                    <div className='xui-d-flex xui-flex-ai-center xui-mt-1 xui-p-1 offer'>
                        <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <Send size={24} strokeWidth={1.6} />
                        </div>
                        <div style={{"width": "calc(100% - 50px)"}}>
                            <h3 className="xui-font-sz-150 font-spaceGrotesk">Strategic Consulting</h3>
                            <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Navigate the complexities of the business landscape with our strategic consulting services.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='management' className="management-section xui-container  xui-lg-py-4 xui-py-2">
                <h1 className="xui-lg-font-sz-350 xui-font-sz-250 font-spaceGrotesk">Our Management</h1>
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-1 xui-mt-1'>
                    <div className='secondary-border xui-p-1 xui-bdr-rad-half'>
                        <div className='management-img'>
                            <img className='xui-h-250' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                        </div>
                        <h3 className='xui-font-sz-120'>Bill Gross</h3>
                        <p className='xui-font-sz-80 xui-opacity-8'>Chairman</p>
                    </div>
                    <div className='secondary-border xui-p-1 xui-bdr-rad-half'>
                        <div className='management-img'>
                            <img className='xui-h-250' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                        </div>
                        <h3 className='xui-font-sz-120'>Bill Gross</h3>
                        <p className='xui-font-sz-80 xui-opacity-8'>Chairman</p>
                    </div>
                    <div className='secondary-border xui-p-1 xui-bdr-rad-half'>
                        <div className='management-img'>
                            <img className='xui-h-250' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                        </div>
                        <h3 className='xui-font-sz-120'>Bill Gross</h3>
                        <p className='xui-font-sz-80 xui-opacity-8'>Chairman</p>
                    </div>
                    <div className='secondary-border xui-p-1 xui-bdr-rad-half'>
                        <div className='management-img'>
                            <img className='xui-h-250' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                        </div>
                        <h3 className='xui-font-sz-120'>Bill Gross</h3>
                        <p className='xui-font-sz-80 xui-opacity-8'>Chairman</p>
                    </div>
                    
                </div>
            </div>
            <Testimonial />
            <Blogs />
           <Contact />
        </div>
    </>
    
  )
}

export default Companies