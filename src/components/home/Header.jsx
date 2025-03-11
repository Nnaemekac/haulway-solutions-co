import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { useEffect, useState, useRef } from 'react';
import HeaderSlider from './components/HeaderSlider';
import HeaderImage1 from '../../assets/images/home/header-image1.jpg';
import HeaderImage2 from '../../assets/images/home/header-image2.jpg';
import HeaderImage3 from '../../assets/images/home/header-image3.jpg';
import HeaderImage4 from '../../assets/images/home/header-image4.jpg';
// import Circle from '../../assets/images/home/circle.png';
import Pattern from '../../assets/images/home/pattern.png';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from '@carbon/icons-react';
import Button from '../../components/Button';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesData, setSlidesData] = useState([]); // Store slide data here
  const headerSwiperInstance = useRef(null);
  const headerSliderInstance = useRef(null); // Reference for HeaderSlider
  const CustomPagination = ({ slideCount, onBulletClick }) => {
    const bullets = Array.from({ length: slideCount }).map((_, index) => (
      <div key={index} className={`custom-bullet xui-h-fluid-100 xui-bg-white ${activeIndex === index ? 'active-bullet' : ''}`} onClick={() => onBulletClick(index)}></div>
    ));
    const bulletNumber = `0${activeIndex + 1}`;

    return (
      <>
      <div className='xui-d-flex xui-pr-5'>
        <div className="chevrons xui-w-120 xui-d-flex xui-flex ai-center xui-flex-jc-space-between">
          <button disabled={activeIndex === 0} className={`prev-arrow ${activeIndex === 0 ? 'xui-opacity-1' : 'xui-opacity-7'}`} onClick={handlePrevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button disabled={activeIndex === slidesData.length - 1} className={`next-arrow ${activeIndex === slidesData.length - 1 ? 'xui-opacity-1' : 'xui-opacity-7'}`} onClick={handleNextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div className='xui-d-flex xui-flex-ai-center' style={{ width: "calc(100% - 120px)" }}>
          <div style={{ width: "calc(100% - 20px)" }} className="custom-pagination xui-d-flex xui-flex-ai-center xui-px-half xui-h-2">{bullets}</div>
          <div className='xui-w-20 xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-font-sz-120'>{bulletNumber}</div>
        </div>
      </div>
      </>
    );
  };

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
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };

  const handleHeaderSliderChange = (index) => {
    setActiveIndex(index);
    if (headerSwiperInstance.current) {
      headerSwiperInstance.current.slideTo(index);
    }
    if (headerSliderInstance.current) {
      headerSliderInstance.current.slideTo(index); // Sync HeaderSlider
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      const homeHeading = document.querySelector('.home-heading');
      if (homeHeading) {
        if (activeIndex === 0) {
          homeHeading.classList.add('scroll-up');
        } else {
          homeHeading.classList.remove('scroll-up');
        }
      }
    }, 4); // Delay the query to ensure DOM is rendered
  
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [activeIndex]);
  
  const handleSlideChange = (swiper) => {
    const Heading = document.querySelector('.home-heading');
    const Heading2 = document.querySelector('.home-heading2');
    const Heading3 = document.querySelector('.home-heading3');
    
    setActiveIndex(swiper.activeIndex); // Update active index
  
    // Check each element before accessing its classList
    if (swiper.activeIndex === 0 && Heading) {
      Heading.classList.add('scroll-up');
      if (Heading2) Heading2.classList.remove('scroll-up');
      if (Heading3) Heading3.classList.remove('scroll-up');
    } else if (swiper.activeIndex === 1 && Heading2) {
      Heading2.classList.add('scroll-up');
      if (Heading) Heading.classList.remove('scroll-up');
      if (Heading3) Heading3.classList.remove('scroll-up');
    } else if (swiper.activeIndex === 2 && Heading3) {
      Heading3.classList.add('scroll-up');
      if (Heading) Heading.classList.remove('scroll-up');
      if (Heading2) Heading2.classList.remove('scroll-up');
    } else if (swiper.activeIndex === 3) {
      if (Heading) Heading.classList.remove('scroll-up');
      if (Heading2) Heading2.classList.remove('scroll-up');
      if (Heading3) Heading3.classList.remove('scroll-up');
    } else {
      if (Heading) Heading.classList.remove('scroll-up'); // Remove the animation class for other slides
    }
  };
  

  // Handle arrow clicks for navigation
  const handlePrevSlide = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : slidesData.length - 1;
    handleHeaderSliderChange(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = activeIndex < slidesData.length - 1 ? activeIndex + 1 : 0;
    handleHeaderSliderChange(newIndex);
  };

  // Set initial slides data on mount
  useEffect(() => {
    const initialSlidesData = [
      {
        image: HeaderImage1,
        heading: 
        <div className='home-heading xui-h-fluid-100 xui-pos-relative'>
          <div className=''>
            <h1 className="xui-font-sz-400 xui-lg-d-inline xui-d-none xui-font-w-400 xui-flex-ai-center header-heading">
              Welcome To <br /> Grascope <img className="xui-img-250 xui-d-inline-block" src={Pattern} alt="" /> Industries
            </h1>
            <h1 className="xui-font-sz-180 xui-lg-d-none xui-d-inline xui-lg-w-fluid-90 xui-w-fluid-100 xui-font-w-500 xui-flex-ai-center header-heading">
              Welcome To Grascope <br /> <img className="xui-lg-img-250 xui-img-100 xui-d-inline-block" src={Pattern} alt="" /> Industries
            </h1>
          </div>
          
          <p className='xui-lg-font-sz-110 xui-font-sz-100 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7 header-paragraph'>Grascope is a UK-registered outsourcing company that delivers fully managed Nigerian teams, combining UK excellence with cost-effective, reliable staffing solutions to drive operational success and significant savings.</p>
          <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1'>
            <Link to='about' className='header-btn1 padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half'>
                <p className='xui-lg-font-sz-95 xui-font-sz-70'>Get Started</p>
                <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#159B48"} /></span>
            </Link>
            <Link to='about' className='header-btn2 padding-[0.6rem_0.6rem_0.6rem_1.2rem] xui-text-white xui-bdr-white xui-bdr-w-1 xui-bdr-s-solid xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half'>
                <p className='xui-lg-font-sz-95 xui-font-sz-70'>Learn More</p>
                <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#159B48"} /></span>
            </Link>
            {/* <Button url="about" customClass="header-btn1" text="Get started" svgColor="#159B48" />
            <Button url="about" customClass="header-btn2 xui-bdr-white xui-bdr-w-1 xui-bdr-s-solid" isButton2={true} text="Learn more" /> */}
          </div>
          <p className='xui-lg-font-sz-100 xui-lg-mt-6 xui-mt-8 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-40 xui-w-fluid-100 xui-opacity-7 xui-pos-absolute' style={{"bottom": "0", "left": "0"}}>Built on trust and excellence, we fuse UK standards with dynamic Nigerian talent to deliver game-changing outsourcing solutions that drive growth and reduce costs.</p>
        </div>,
      },
      {
        image: HeaderImage2,
        heading: 
        <div className='home-heading2 xui-h-fluid-100 xui-pos-relative'>
          <p className='xui-lg-font-sz-110 xui-font-sz-100 xui-opacity-9 header2-sub-heading'>BPO Services</p>
          <h1 className='xui-lg-font-sz-400 xui-font-sz-180 xui-font-sz-180 xui-lg-w-fluid-60 xui-w-fluid-100 xui-font-w-500 header2-heading'>Elevate Efficiency with Premier BPO Services.</h1>
          <p className='xui-lg-font-sz-110 xui-font-sz-100 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7 header2-paragraph'>Transform your operations, reduce costs, and drive growth with our comprehensive outsourcing solutions designed for modern businesses.</p>
          {/* <Button url="bpo/solutions" customStyle={{"backgroundColor": "#159b48"}} svgColor="#FFF" customClass="header2-btn xui-mt-1" text="Learn more" /> */}
          <Link to='about' className='header2-btn padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2'>
              <p className='xui-lg-font-sz-95 xui-font-sz-70'>Learn More</p>
              <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center bg-[#159B48] xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#FFF"} /></span>
          </Link>
          <p className='xui-lg-font-sz-100 xui-lg-mt-6 xui-mt-8 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-30 xui-w-fluid-100 xui-opacity-7 xui-pos-absolute' style={{"bottom": "0", "left": "0"}}>Experience enhanced efficiency, scalability, and agile support that positions your business for lasting competitive advantage.</p>
        </div>,
      },
      {
        image: HeaderImage3,
        heading: 
        <div className='home-heading3 xui-h-fluid-100 xui-pos-relative'>
          <p className='xui-lg-font-sz-110 xui-font-sz-100 xui-opacity-9 header3-sub-heading'>IT Services</p>
          <h1 className='xui-lg-font-sz-400 xui-font-sz-180 xui-font-sz-180 xui-lg-w-fluid-70 xui-w-fluid-100 xui-font-w-500 header3-heading'>Innovative IT Services for Modern Enterprises</h1>
          <p className='xui-lg-font-sz-110 xui-font-sz-100 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7 header3-paragraph'>Empower your organization with integrated, future-ready IT solutions that deliver excellence.</p>
          {/* <Button url="bpo/solutions" customStyle={{"backgroundColor": "#159b48"}} svgColor="#FFF" customClass="header3-btn xui-mt-1" text="Learn more" /> */}
          <Link to='about' className='header3-btn padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2'>
              <p className='xui-lg-font-sz-95 xui-font-sz-70'>Learn More</p>
              <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center bg-[#159B48] xui-bdr-rad-circle xui-w-35 xui-h-35'><ArrowRight color={"#FFF"} /></span>
          </Link>
          <p className='xui-lg-font-sz-100 xui-lg-mt-6 xui-mt-8 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-35 xui-w-fluid-100 xui-opacity-7 xui-pos-absolute' style={{"bottom": "0", "left": "0"}}>Experience seamless integration, proactive support, and advanced technology that boost productivity, secure operations, and sustain competitive growth.</p>
        </div>,
      },
    ];
    setSlidesData(initialSlidesData); // Initialize slidesData
  }, []);

  return (
    <div >
      {/* Swiper */}
      <Swiper
          onSwiper={(swiper) => {
            headerSwiperInstance.current = swiper;
          }}
          modules={[Autoplay, EffectFade]}
          direction="horizontal"
          speed={400}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={true}
          // effect='fade'
          onSlideChange={(swiper) => { 
            handleSlideChange(swiper);
            setActiveIndex(swiper.activeIndex);
          }}
          breakpoints={breakpoints}
          className="header-swiper"
          simulateTouch={false}
          touchStartPreventDefault={false}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="xui-bg-sz-cover xui-bg-pos-center xui-h-fluid-100" style={{ backgroundImage: `url('${slide.image}')` }}>
                <div className="xui-overlay-1 xui-overflow-hidden xui-lg-pt-8 xui-pb-3 xui-pt-7 xui-w-fluid-100 xui-h-fluid-100">
                  <div className='xui-lg-px-4 xui-px-1-half xui-h-fluid-100'>
                    {slide.heading}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* HeaderSlider and Pagination positioned after paragraph */}
        <div className='header-slider xui-z-index-1 xui-text-white xui-overflow-x-hidden xui-lg-d-block xui-d-none'>
            <CustomPagination slideCount={slidesData.length} onBulletClick={(index) => headerSwiperInstance.current?.slideTo(index)} />
            <div className='xui-mt-1'>
              <HeaderSlider ref={headerSliderInstance} onSlideChange={handleHeaderSliderChange} />
            </div>
        </div>
    </div>

  );
}
