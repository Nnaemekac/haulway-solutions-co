import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper'; 
import { Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from '@carbon/icons-react';

const slides = [
  { 
    id: 1, 
    image: './static/home/header-image1.jpg', 
    mainContent: {
      homeHeading: 'home-heading',
      customAnimationClassParagraph: 'header-paragraph',
      customAnimationClassTitle: 'header-heading',
      title: <><span className='text-[55%]'>Welcome To</span> <br /> <span className='font-bold text-[150%]' style={{letterSpacing: window.innerWidth < 768 ? '.7rem' : '2.5rem',}}>Grascope</span></>,
      buttons: 
      <>
        <div className='lg:flex grid grid-cols-1 items-center gap-[1rem] mt-[1rem]'>
          <Link to='roi/calculator' className='header-btn1 rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem]'>
              <p className='lg:text-[95%] text-[90%]'>Calculate your savings</p>
              <span className='flex justify-center items-center bg-white rounded-full w-[35px] h-[35px]'><ArrowRight color={"#159B48"} /></span>
          </Link>
          <Link to='about' className='header-btn2 py-[0.6rem] pr-[0.6rem] pl-[1.2rem] text-[#FFF] border border-white rounded-[2rem] no-underline inline-flex justify-center items-center gap-[1.5rem]'>
              <p className='lg:text-[95%] text-[90%]'>Learn More</p>
              <span className='flex justify-center items-center bg-white rounded-full w-[35px] h-[35px]'><ArrowRight color={"#159B48"} /></span>
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
    image: './static/home/header-image2.jpg', 
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
        <Link to='about' className='header2-btn rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem] mt-[2rem]'>
            <p className='lg:text-[95%] text-[70%]'>Learn More</p>
            <span className='flex justify-center items-center bg-[#159B48] rounded-full w-[35px] h-[35px]'><ArrowRight color={"#FFF"} /></span>
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
    image: './static/home/header-image3.jpg', 
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
        <Link to='about' className='header3-btn rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem] mt-[2rem]'>
            <p className='lg:text-[95%] text-[70%]'>Learn More</p>
            <span className='flex justify-center items-center bg-[#159B48] rounded-full w-[35px] h-[35px]'><ArrowRight color={"#FFF"} /></span>
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
  const mainSwiperRef   = useRef<SwiperType | null>(null);   // 👈 2. annotate
  const thumbSwiperRef  = useRef<SwiperType | null>(null);

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
  

  const handleSlideChange = (swiper: SwiperType) => {
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
      <div className='lg:flex hidden items-center custom-swiper-navigation'>
        <div className='w-[120px] flex items-center justify-between'>
        <button disabled={activeIndex === 0} className={`bg-[transparent] w-[40px] h-[40px] rounded-full border border-white flex justify-center items-center cursor-pointer ${activeIndex === 0 ? 'opacity-[.4] cursor-not-allowed' : ''}`} onClick={handlePrev}>
          <ChevronLeft size={20} color='#FFF' />
        </button>
        <button disabled={activeIndex === slides.length - 1} className={`bg-[transparent] w-[40px] h-[40px] rounded-full border border-white flex justify-center items-center cursor-pointer ${activeIndex === slides.length - 1 ? 'opacity-[.4] cursor-not-allowed' : ''}`} onClick={handleNext}>
          <ChevronRight size={20} color='#FFF' />
        </button>
        </div>
        <div style={{width: 'calc(100% - 120px)'}} className='pl-[.5rem]'>
          <div className='flex items-center'>
            <div style={{width: 'calc(100% - 50px)', height: '3px'}} className='bg-[#73737380] relative'>
              <div className='bg-white' style={{width: '33.3%', height: '100%', position: 'absolute', left: `${(activeIndex * (100 / slides.length))}%`, transition: 'left 0.3s ease-in-out' }} ></div>
            </div>
            <h3 className='w-[50px] pl-[.5rem] text-[110%] font-medium'>{String(activeIndex + 1).padStart(2, '0')}</h3>
          </div>
        </div>
      </div>
      {/* Main Swiper */}
      <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1} loop={true} autoplay={{ delay: 8000, disableOnInteraction: false }} onSwiper={(swiper) => (mainSwiperRef.current = swiper)} onSlideChange={(swiper) => {handleSlideChange(swiper); setActiveIndex(swiper.realIndex); thumbSwiperRef.current?.slideToLoop(swiper.realIndex); }} className="main-swiper">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`slide-content lg:px-[3rem] px-[1rem] bg-cover bg-bottom ${slide.mainContent.homeHeading}`} style={{ backgroundImage: `url(${slide.image})` }}>
              <p className={`lg:text-[85%] text-[100%] opacity-[.9] ${slide.mainContent.customAnimationClassSubTitle}`}>{slide.mainContent.subtitle}</p>
              {/* <>{slide.mainContent.title}</> */}
              <h1 className={`lg:text-[400%] text-[220%] ${slide.mainContent.customAnimationClassTitle === 'header-heading' ? 'w-full' : 'lg:w-[60%]'} w-full font-medium ${slide.mainContent.customAnimationClassTitle}`}>{slide.mainContent.title}</h1>
              <p className={`lg:text-[95%] text-[90%] mt-[1rem] leading-[1.5rem] lg:w-[50%] w-full ${slide.mainContent.customAnimationClassParagraph}`}>{slide.mainContent.description}</p>
              <>{slide.mainContent.buttons}</>
              <p className='lg:text-[95%] lg:mt-[3rem] mt-[7rem] text-[90%] leading-[1.5rem] lg:w-[40%] w-full'>{slide.mainContent.subDescription}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Swiper */}
      <Swiper modules={[Autoplay]} slidesPerView={1.5} spaceBetween={10} loop={true} autoplay={{ delay: 8000, disableOnInteraction: false }} onSwiper={(swiper) => (thumbSwiperRef.current = swiper)} className="thumb-swiper lg:block hidden" >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} onClick={() => mainSwiperRef.current?.slideToLoop(index)}>
            {/* <div className="thumb-item" style={{ backgroundImage: `url(${slide.image})` }}>
              <span>{slide.thumbContent.label}</span>
            </div> */}
            <div className="p-[1rem] backdrop-blur-[40px] blur(40px) shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] rounded-[1rem] text-[#FFF] flex items-center">
              <img className="w-[150px] h-[100px] rounded-[1rem]" src={slide.image} alt={`Slide ${index}`} />
              <div className="p-[1rem]" style={{ width: 'calc(100% - 150px)' }}>
                <p className="w-full opacity-[.7] text-[85%] leading-[1.5rem]">{slide.thumbContent.label}</p>
                <h3 className='text-[120%] font-medium'>{slide.thumbContent.extraInfo}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
