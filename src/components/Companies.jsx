import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import animationSolution from "../assets/solutions.json";
import Lottie from "lottie-react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HashLink } from 'react-router-hash-link';
import { Send, Shield, Star } from 'react-feather';
import Testimonial from './Testimonial';
import Blogs from './Blogs';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Company1 from "../assets/images/company1.jpeg";
import Company2 from "../assets/images/company2.jpeg";
import Company3 from "../assets/images/company3.jpg";
import Company4 from "../assets/images/company4.jpeg";
import Company5 from "../assets/images/company5.jpeg";

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
            slidesPerView: 4,
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
            {/* <section id='solutions' className='solutions-section xui-container xui-lg-py-4 xui-py-2 '>
                <div id="welcome" className=" xui-font-w-bold">
                    <h1 className="xui-lg-font-sz-300 xui-text-center xui-font-sz-250 font-spaceGrotesk">Our Solutions</h1>
                    <p className='xui-opacity-6 xui-font-sz-80 xui-mt-1 xui-line-height-1-half xui-text-center'>In addition to our portfolio companies, we offer a range of solutions and services to support businesses of all sizes:</p>
                </div>
                <div className="xui-d-grid xui-lg-grid-col-3 xui-mt-3 xui-grid-col-1 xui-grid-gap-1">
                    <div>
                        <div className='xui-d-flex xui-p-1 xui-flex-ai-center offer'>
                            <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <Star size={24} strokeWidth={1.6} />
                            </div>
                            <div style={{"width": "calc(100% - 50px)"}}>
                                <h3 className="xui-font-sz-150 font-spaceGrotesk">Custom Software Solutions</h3>
                                <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Harness the power of tailored technology with our custom software solutions, designed to streamline your operations and drive efficiency.</p>
                            </div>
                        </div>
                        <div className='xui-d-flex xui-mt-1 xui-p-1 xui-flex-ai-center offer'>
                            <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <Shield size={24} strokeWidth={1.6} />
                            </div>
                            <div style={{"width": "calc(100% - 50px)"}}>
                                <h3 className="xui-font-sz-150 font-spaceGrotesk">Ideation and Application Building</h3>
                                <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">From concept to execution, we specialize in bringing ideas to life through innovative ideation and application building services.</p>
                            </div>
                        </div>
                        <div className='xui-d-flex xui-mt-1 xui-p-1 xui-flex-ai-center offer'>
                            <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <Shield size={24} strokeWidth={1.6} />
                            </div>
                            <div style={{"width": "calc(100% - 50px)"}}>
                                <h3 className="xui-font-sz-150 font-spaceGrotesk">Business Processing Outsourcing</h3>
                                <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Streamline your operations and focus on your core competencies by outsourcing non-core business functions to our experienced team, allowing you to reduce costs and increase productivity.</p>
                            </div>
                        </div>
                    
                    </div>
                    <div className="">
                        <Lottie animationData={animationSolution} className="xui-h-300" />
                    </div>
                    <div>
                        <div className='xui-d-flex xui-flex-ai-center xui-p-1 offer'>
                            <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <Send size={24} strokeWidth={1.6} />
                            </div>
                            <div style={{"width": "calc(100% - 50px)"}}>
                                <h3 className="xui-font-sz-150 font-spaceGrotesk">E-commerce Solutions</h3>
                                <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half"> Seamlessly transition into the digital marketplace with our custom e-commerce solutions, tailored to your unique business needs.</p>
                            </div>
                        </div>
                        <div className='xui-d-flex xui-flex-ai-center xui-mt-1 xui-p-1 offer'>
                            <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <Send size={24} strokeWidth={1.6} />
                            </div>
                            <div style={{"width": "calc(100% - 50px)"}}>
                                <h3 className="xui-font-sz-150 font-spaceGrotesk">Agrotech Solutions</h3>
                                <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Revolutionize your agricultural operations with our advanced Agrotech solutions, designed to enhance efficiency, productivity, and sustainability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id='companies' className="xui-container xui-lg-d-block xui-d-none  xui-lg-py-4 xui-py-2">
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <h1 className="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half companies-section-heading">Our Companies</h1>
                    <p className='xui-font-sz-80 xui-line-height-1-half xui-lg-text-right xui-text-left xui-w-300 xui-opacity-8'>Explore our portfolio of companies, each a rising star in its respective industry:</p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={breakpoints}
                    className="xui-pt-2"
                    >
                    <SwiperSlide>
                        <Link to="https://www.haulway.co" target='_blank' className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company5}')`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <h3 className='xui-font-sz-100'>Haulway</h3>
                                </div>
                                <div className="team-text-container">
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <LinesEllipsis
                                            text='Haulway is an international social commerce platform with a focus on a novel combination of social media and e-commerce.'
                                            maxLine='3'
                                            ellipsis='...'
                                            trimRight
                                            basedOn='letters'
                                            className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                        />
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company1}')`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <h3 className='xui-font-sz-100'>Sunflower pantry</h3>
                                </div>
                                <div className="team-text-container">
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <LinesEllipsis
                                            text='a dynamic platform offering a diverse range of food items, groceries, and farm produce, delivering convenience and freshness to your doorstep.'
                                            maxLine='3'
                                            ellipsis='...'
                                            trimRight
                                            basedOn='letters'
                                            className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                        />
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company2}')`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <h3 className='xui-font-sz-100'>Merkado Hub</h3>
                                </div>
                                <div className="team-text-container">
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <LinesEllipsis
                                            text='A comprehensive marketplace, supporting multiple vendors to fulfill all your online shopping desires.                                            '
                                            maxLine='3'
                                            ellipsis='...'
                                            trimRight
                                            basedOn='letters'
                                            className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                        />
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company3}')`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <h3 className='xui-font-sz-100'>Itsyourday</h3>
                                </div>
                                <div className="team-text-container">
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <LinesEllipsis
                                            text='A top-tier marketplace and vibrant social community tailored for seamless event management and planning, ensuring every occasion is unforgettable.'
                                            maxLine='3'
                                            ellipsis='...'
                                            trimRight
                                            basedOn='letters'
                                            className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                        />
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company4}')`}}>
                            <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <h3 className='xui-font-sz-100'>Amandu farms</h3>
                                </div>
                                <div className="team-text-container">
                                    {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                    <LinesEllipsis
                                            text='Transforming agriculture with cutting-edge Agrotech innovation, Amandu Farms leads the way in revolutionizing farming practices for enhanced efficiency and productivity.'
                                            maxLine='3'
                                            ellipsis='...'
                                            trimRight
                                            basedOn='letters'
                                            className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                        />
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    
                </Swiper>
            </section>

            <section id='companies-mobile' className="xui-container xui-lg-d-none xui-d-block  xui-lg-py-4 xui-py-2">
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <h1 className="xui-lg-font-sz-200 xui-font-sz-150 companies-section-heading">Our Companies</h1>
                    <p className='xui-font-sz-80 xui-line-height-1-half xui-lg-text-right xui-text-left xui-w-500 xui-opacity-8'>Explore our portfolio of companies, each a rising star in its respective industry:</p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={breakpoints}
                    className="xui-pt-2"
                    >
                    <SwiperSlide>
                        <div className='xui-d-grid xui-grid-col-2 xui-grid-gap-1'>
                            <Link to="https://www.haulway.co" target='_blank' className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company5}')`}}>
                                <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                    <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                        <h3 className='xui-font-sz-100'>Haulway</h3>
                                    </div>
                                    <div className="team-text-container">
                                        {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                        <LinesEllipsis
                                                text='Haulway is an international social commerce platform with a focus on a novel combination of social media and e-commerce.'
                                                maxLine='3'
                                                ellipsis='...'
                                                trimRight
                                                basedOn='letters'
                                                className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                            />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/" className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company1}')`}}>
                                <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                    <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                        <h3 className='xui-font-sz-100'>Sunflower pantry</h3>
                                    </div>
                                    <div className="team-text-container">
                                        {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                        <LinesEllipsis
                                                text='a dynamic platform offering a diverse range of food items, groceries, and farm produce, delivering convenience and freshness to your doorstep.'
                                                maxLine='3'
                                                ellipsis='...'
                                                trimRight
                                                basedOn='letters'
                                                className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                            />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/" className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company2}')`}}>
                                <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                    <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                        <h3 className='xui-font-sz-100'>Merkado Hub</h3>
                                    </div>
                                    <div className="team-text-container">
                                        {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                        <LinesEllipsis
                                                text='A comprehensive marketplace, supporting multiple vendors to fulfill all your online shopping desires.'
                                                maxLine='3'
                                                ellipsis='...'
                                                trimRight
                                                basedOn='letters'
                                                className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                            />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/" className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company3}')`}}>
                                <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                    <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                        <h3 className='xui-font-sz-100'>Itsyourday</h3>
                                    </div>
                                    <div className="team-text-container">
                                        {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                        <LinesEllipsis
                                                text='A top-tier marketplace and vibrant social community tailored for seamless event management and planning, ensuring every occasion is unforgettable.'
                                                maxLine='3'
                                                ellipsis='...'
                                                trimRight
                                                basedOn='letters'
                                                className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                            />
                                    </div>
                                </div>
                            </Link>
                            <Link to="/" className="team xui-bdr-rad-1 xui-bg-sz-cover xui-bg-pos-center xui-lg-h-250 xui-h-200" style={{backgroundImage: `url('${Company4}')`}}>
                                <div className="xui-overlay-1 xui-bdr-rad-1 xui-h-fluid-100 xui-p-1 xui-d-flex xui-flex-dir-column xui-flex-jc-flex-end xui-flex-jc-space-between xui-pos-relative">
                                    <div className='xui-py-half xui-bdr-rad-5 xui-px-1 company-logo xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                        <h3 className='xui-font-sz-100'>Amandu Farms</h3>
                                    </div>
                                    <div className="team-text-container">
                                        {/* <h1 className="xui-font-sz-150">Innovator Bill Gross presents at VERGE 16</h1> */}
                                        <LinesEllipsis
                                                text='Transforming agriculture with cutting-edge Agrotech innovation, Amandu Farms leads the way in revolutionizing farming practices for enhanced efficiency and productivity.'
                                                maxLine='3'
                                                ellipsis='...'
                                                trimRight
                                                basedOn='letters'
                                                className="xui-font-sz-80 xui-line-height-1-half xui-opacity-8 xui-lg-mt-1 xui-mt-none"
                                            />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                    </SwiperSlide>
                    
                </Swiper>
            </section>
     
            
            {/* <div id='management' className="management-section xui-container  xui-lg-py-4 xui-py-2">
                <h1 className="xui-lg-font-sz-300 xui-font-sz-250 font-spaceGrotesk">Our Management</h1>
                <div className='xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-1 xui-mt-1'>
                    <div className='secondary-border xui-p-1 xui-bdr-rad-half'>
                        <div className='management-img'>
                            <img className='xui-lg-h-250 xui-h-200' src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <h3 className='xui-font-sz-120'>Bill Gross</h3>
                        <p className='xui-font-sz-80 xui-opacity-8'>Chairman</p>
                    </div>
                    <div className='secondary-border xui-p-1 xui-bdr-rad-half'>
                        <div className='management-img'>
                            <img className='xui-lg-h-250 xui-h-200' src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <h3 className='xui-font-sz-120'>Bill Gross</h3>
                        <p className='xui-font-sz-80 xui-opacity-8'>Chairman</p>
                    </div>
                    <div className='secondary-border xui-p-1 xui-bdr-rad-half'>
                        <div className='management-img'>
                            <img className='xui-lg-h-250 xui-h-200' src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <h3 className='xui-font-sz-120'>Bill Gross</h3>
                        <p className='xui-font-sz-80 xui-opacity-8'>Chairman</p>
                    </div>
                    <div className='secondary-border xui-p-1 xui-bdr-rad-half'>
                        <div className='management-img'>
                            <img className='xui-lg-h-250 xui-h-200' src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <h3 className='xui-font-sz-120'>Bill Gross</h3>
                        <p className='xui-font-sz-80 xui-opacity-8'>Chairman</p>
                    </div>
                    
                </div>
            </div>
            <Testimonial />
            <Blogs /> */}
        </div>
    </>
    
  )
}

export default Companies