import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';

import HeaderImage1 from '../../assets/images/home/header-image1.jpg';
import HeaderImage2 from '../../assets/images/home/header-image2.jpg';
import HeaderImage3 from '../../assets/images/home/header-image3.jpg';
import { Link } from 'react-router-dom';
import ArrowRight from '../custom-svg-icons/ArrowRight';
import { ChevronLeft, ChevronRight } from '@carbon/icons-react';

const slides = [
  { 
    id: 1, 
    image: HeaderImage1, 
    mainContent: {
      homeHeading: 'home-heading',
      customAnimationClassParagraph: 'header-paragraph',
      customAnimationClassTitle: 'header-heading',
      title: <><span className='xui-font-sz-55'>Welcome To</span> <br /> <span className='xui-font-w-600 xui-font-sz-150' style={{letterSpacing: window.innerWidth < 768 ? '.7rem' : '2.5rem',}}>Grascope</span></>,
      buttons: 
      <>
        <div className='xui-lg-d-flex xui-d-grid xui-grid-col-1 xui-flex-ai-center xui-grid-gap-1 xui-mt-1'>
          <Link to='roi/calculator' className='header-btn1 padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-grid-gap-1-half'>
              <p className='xui-lg-font-sz-95 xui-font-sz-90'>Calculate your savings</p>
              <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#159B48"} /></span>
          </Link>
          <Link to='about' className='header-btn2 padding-[0.6rem_0.6rem_0.6rem_1.2rem] xui-text-white xui-bdr-white xui-bdr-w-1 xui-bdr-s-solid xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-jc-space-between xui-flex-ai-center xui-grid-gap-1-half'>
              <p className='xui-lg-font-sz-95 xui-font-sz-90'>Learn More</p>
              <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#159B48"} /></span>
          </Link>
        </div>
      </>,
      description: 'Grascope is a UK-registered outsourcing company that delivers fully managed Nigerian teams, combining UK excellence with cost-effective, reliable staffing solutions to drive operational success and significant savings.',
      subDescription: 'Built on trust and excellence, we fuse UK standards with dynamic Nigerian talent to deliver game-changing outsourcing solutions that drive growth and reduce costs.',
    },
    thumbContent: {
      label: 'Who we are',
      extraInfo: 'Welcome to Grascope industries',
    },
  },
  { 
    id: 2, 
    image: HeaderImage2, 
    mainContent: {
      homeHeading: 'home-heading2',
      customAnimationClassSubTitle: 'header2-sub-heading',
      customAnimationClassTitle: 'header2-heading',
      customAnimationClassParagraph: 'header2-paragraph',
      subtitle: 'BPO Services',
      title: 'Elevate Efficiency with Premier BPO Services.',
      description: 'Transform your operations, reduce costs, and drive growth with our comprehensive outsourcing solutions designed for modern businesses.',
      subDescription: 'Experience enhanced efficiency, scalability, and agile support that positions your business for lasting competitive advantage.',
      buttons: 
      <>
        <Link to='about' className='header2-btn padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2'>
            <p className='xui-lg-font-sz-95 xui-font-sz-70'>Learn More</p>
            <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center bg-[#159B48] xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#FFF"} /></span>
        </Link>
      </>,
    },
    thumbContent: {
      label: 'BPO Services',
      extraInfo: 'Premier BPO Services',
    },
  },
  { 
    id: 3, 
    image: HeaderImage3, 
    mainContent: {
      homeHeading: 'home-heading3',
      customAnimationClassSubTitle: 'header3-sub-heading',
      customAnimationClassTitle: 'header3-heading',
      customAnimationClassParagraph: 'header3-paragraph',
      subtitle: 'IT Services',
      title: 'Innovative IT Services for Modern Enterprises',
      description: 'Empower your organization with integrated, future-ready IT solutions that deliver excellence.',
      subDescription: 'Experience seamless integration, proactive support, and advanced technology that boost productivity, secure operations, and sustain competitive growth.',
      buttons: 
      <>
        <Link to='about' className='header3-btn padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2'>
            <p className='xui-lg-font-sz-95 xui-font-sz-70'>Learn More</p>
            <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center bg-[#159B48] xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#FFF"} /></span>
        </Link>
      </>,
    },
    thumbContent: {
      label: 'IT Services',
      extraInfo: 'For Modern Enterprises',
    },
  },
];

const Header = () => {
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (mainSwiperRef.current) mainSwiperRef.current.slideNext();
  };
  const handlePrev = () => {
    if (mainSwiperRef.current) mainSwiperRef.current.slidePrev();
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.home-heading')?.classList.toggle('scroll-up', activeIndex === 0);
    }, 4); // Ensure DOM is rendered
  
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [activeIndex]);
  

  const handleSlideChange = (swiper) => {
    const headings = [
      document.querySelector('.home-heading'),
      document.querySelector('.home-heading2'),
      document.querySelector('.home-heading3'),
    ];
  
    setActiveIndex(swiper.realIndex); // Update active index
  
    // Loop through headings and toggle 'scroll-up' class
    headings.forEach((heading, index) => {
      if (heading) {
        heading.classList.toggle('scroll-up', swiper.realIndex === index);
      }
    });
  };
  

  return (
    <div className="swiper-container">
      {/* Navigation Controls */}
      <div className='xui-lg-d-flex xui-d-none xui-flex-ai-center custom-swiper-navigation'>
        <div className='w-[120px] xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
        <button disabled={activeIndex === 0} className={`bg-[transparent] xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bdr-white xui-bdr-s-solid xui-bdr-w-1 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-cursor-pointer ${activeIndex === 0 ? 'xui-opacity-4 xui-cursor-not-allowed' : ''}`} onClick={handlePrev}>
          <ChevronLeft size={20} color='#FFF' />
        </button>
        <button disabled={activeIndex === slides.length - 1} className={`bg-[transparent] xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bdr-white xui-bdr-s-solid xui-bdr-w-1 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-cursor-pointer ${activeIndex === slides.length - 1 ? 'xui-opacity-4 xui-cursor-not-allowed' : ''}`} onClick={handleNext}>
          <ChevronRight size={20} color='#FFF' />
        </button>
        </div>
        <div style={{width: 'calc(100% - 120px)'}} className='xui-pl-half'>
          <div className='xui-d-flex xui-flex-ai-center'>
            <div style={{width: 'calc(100% - 50px)', height: '3px'}} className='bg-[#73737380] xui-pos-relative'>
              <div className='xui-bg-white' style={{width: '33.3%', height: '100%', position: 'absolute', left: `${(activeIndex * (100 / slides.length))}%`, transition: 'left 0.3s ease-in-out' }} ></div>
            </div>
            <h3 className='xui-w-50 xui-pl-half xui-font-sz-110 xui-font-w-500'>{String(activeIndex + 1).padStart(2, '0')}</h3>
          </div>
        </div>
      </div>
      {/* Main Swiper */}
      <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1} loop={true} autoplay={{ delay: 8000, disableOnInteraction: false }} onSwiper={(swiper) => (mainSwiperRef.current = swiper)} onSlideChange={(swiper) => {handleSlideChange(swiper); setActiveIndex(swiper.realIndex); thumbSwiperRef.current?.slideToLoop(swiper.realIndex); }} className="main-swiper">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`slide-content xui-container xui-bg-sz-cover xui-bg-pos-bottom ${slide.mainContent.homeHeading}`} style={{ backgroundImage: `url(${slide.image})` }}>
              <p className={`xui-lg-font-sz-85 xui-font-sz-100 xui-opacity-9 ${slide.mainContent.customAnimationClassSubTitle}`}>{slide.mainContent.subtitle}</p>
              {/* <>{slide.mainContent.title}</> */}
              <h1 className={`xui-lg-font-sz-400 xui-font-sz-220 ${slide.mainContent.customAnimationClassTitle === 'header-heading' ? 'xui-w-fluid-100' : 'xui-lg-w-fluid-60'} xui-w-fluid-100 xui-font-w-500 ${slide.mainContent.customAnimationClassTitle}`}>{slide.mainContent.title}</h1>
              <p className={`xui-lg-font-sz-95 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 ${slide.mainContent.customAnimationClassParagraph}`}>{slide.mainContent.description}</p>
              <>{slide.mainContent.buttons}</>
              <p className='xui-lg-font-sz-95 xui-lg-mt-3 xui-mt-7 xui-font-sz-90 xui-line-height-1-half xui-lg-w-fluid-40 xui-w-fluid-100'>{slide.mainContent.subDescription}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Swiper */}
      <Swiper modules={[Autoplay]} slidesPerView={1.5} spaceBetween={10} loop={true} autoplay={{ delay: 8000, disableOnInteraction: false }} onSwiper={(swiper) => (thumbSwiperRef.current = swiper)} className="thumb-swiper" >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} onClick={() => mainSwiperRef.current?.slideToLoop(index)}>
            {/* <div className="thumb-item" style={{ backgroundImage: `url(${slide.image})` }}>
              <span>{slide.thumbContent.label}</span>
            </div> */}
            <div className="xui-p-1 white-gradient xui-bdr-rad-1 xui-text-white xui-d-flex xui-flex-ai-center">
              <img className="xui-w-150 xui-h-100 xui-bdr-rad-1" src={slide.image} alt={`Slide ${index}`} />
              <div className="xui-p-1" style={{ width: 'calc(100% - 150px)' }}>
                <p className="xui-w-fluid-100 xui-opacity-7 xui-font-sz-85 xui-line-height-1-half">{slide.thumbContent.label}</p>
                <h3 className='xui-font-sz-120 xui-font-w-500'>{slide.thumbContent.extraInfo}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
