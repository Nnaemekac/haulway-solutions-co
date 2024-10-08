import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { useEffect, useState, useRef } from 'react';
import HeaderSlider from '../components/HeaderSlider';
import HeaderImage1 from '../assets/images/header-image1.jpg';
import HeaderImage2 from '../assets/images/header-image2.jpg';
import HeaderImage3 from '../assets/images/header-image3.jpg';
import HeaderImage4 from '../assets/images/header-image4.jpg';
import Circle from '../assets/images/circle.png';
import Pattern from '../assets/images/pattern.png';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from '@carbon/icons-react';

export default function Home() {
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

  useEffect(() => {
    AOS.init();
  }, [activeIndex]);

  const handleHeaderSliderChange = (index) => {
    setActiveIndex(index);
    if (headerSwiperInstance.current) {
      headerSwiperInstance.current.slideTo(index);
    }
    if (headerSliderInstance.current) {
      headerSliderInstance.current.slideTo(index); // Sync HeaderSlider
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
        <div className='home-heading'>
          <h1  className='xui-lg-font-sz-400 xui-font-sz-250 xui-lg-w-fluid-90 xui-w-fluid-100 xui-font-w-500 xui-d-flex xui-flex-ai-center'>Welcome To
          <p>Grascope <img className='xui-img-250 xui-d-inline-block' src={Pattern} alt="" /> Industries</p></h1>
          <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7'>At Grascope Industries, we drive innovation and excellence across various sectors. Focused on growth, sustainability, and client success, we deliver lasting solutions that meet the evolving needs of companies across various industries.</p>
          <div className='xui-d-flex xui-flex-ai-center xui-mt-1'>
            <Link class="custom-svg-box xui-text-dc-none xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-bdr-rad-1-half xui-grid-gap-1-half">
              <p className='xui-font-sz-90'>Get started</p>
              <span className='xui-w-35 xui-h-35 xui-bg-white xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                <ArrowRight size={19.5} color='#159B48'/>
              </span>
              <div class="overlay xui-bdr-rad-2">
              
              </div>
            </Link>
            <Link className='xui-d-inline-flex get-started learn-more xui-ml-1 xui-flex-ai-center xui-grid-gap-1-half xui-bdr-rad-2 xui-text-dc-none xui-text-white'>
              <p className='xui-font-sz-90'>Learn more</p>
              <span className='xui-w-35 xui-h-35 xui-bg-white xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                <ArrowRight size={19.5} color='#159B48'/>
              </span>
            </Link>
          </div>
          <p className='xui-lg-font-sz-100 xui-lg-mt-6 xui-mt-3 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-40 xui-w-fluid-100 xui-opacity-7'>Empowering businesses with innovative customer service, cutting-edge Agrotech, and streamlined e-commerce solutions, tailored to enhance growth and efficiency.</p>
        </div>,
      },
      {
        image: HeaderImage2,
        heading: 
        <>
          <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-9'>Our Solutions</p>
          <h1  className='xui-lg-font-sz-400 xui-font-sz-250 xui-lg-w-fluid-90 xui-w-fluid-100 xui-font-w-500'>AgroTech Solutions</h1>
          <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7'>Our AgroTech solutions harness the power of technology to revolutionize agriculture, enhancing productivity, sustainability, and resource management. We provide innovative tools and strategies that empower farmers and agribusinesses to achieve greater efficiency and long-term success.</p>
          <Link class="custom-svg-box xui-mt-1 xui-text-dc-none xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-bdr-rad-1-half xui-grid-gap-1-half">
            <p className='xui-font-sz-90'>Learn more</p>
            <span className='xui-w-35 xui-h-35 green xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
              <ArrowRight size={19.5} color='#FFF'/>
            </span>
            <div class="overlay xui-bdr-rad-2">
            
            </div>
          </Link>

          <p className='xui-lg-font-sz-100 xui-lg-mt-6 xui-mt-3 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7'>From advanced data analytics to precision farming tools, we provide innovative strategies that empower farmers and agribusinesses to achieve greater efficiency, optimize resources, and drive long-term success.</p>
        </>,
      },
      {
        image: HeaderImage3,
        heading: 
        <>
          <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-9'>Our Solutions</p>
          <h1  className='xui-lg-font-sz-400 xui-font-sz-250 xui-lg-w-fluid-90 xui-w-fluid-100 xui-font-w-500'>Custom Software Solutions</h1>
          <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7'>Our custom software solutions are designed to meet your unique business needs, offering scalable, efficient, and innovative systems that streamline operations and drive growth. We partner with you to create tailored solutions that enhance performance and deliver measurable results.</p>
          <Link class="custom-svg-box xui-mt-1 xui-text-dc-none xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-bdr-rad-1-half xui-grid-gap-1-half">
            <p className='xui-font-sz-90'>Learn more</p>
            <span className='xui-w-35 xui-h-35 green xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
              <ArrowRight size={19.5} color='#FFF'/>
            </span>
            <div class="overlay xui-bdr-rad-2">
            
            </div>
          </Link>
          <p className='xui-lg-font-sz-100 xui-lg-mt-6 xui-mt-3 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7'>By partnering closely with you, we develop tailored solutions that not only enhance performance but also deliver measurable, long-term results.</p>
        </>,
      },
      {
        image: HeaderImage4,
        heading: 
        <>
          <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-9'>Our Solutions</p>
          <h1  className='xui-lg-font-sz-400 xui-font-sz-250 xui-lg-w-fluid-90 xui-w-fluid-100 xui-font-w-500'>E-commerce Solution</h1>
          <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7'>Enhance your online business with our state-of-the-art e-commerce solutions. We deliver tailored strategies and technologies that refine user experience, streamline operations, and drive growth.</p>
          <Link class="custom-svg-box xui-mt-1 xui-text-dc-none xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-bdr-rad-1-half xui-grid-gap-1-half">
            <p className='xui-font-sz-90'>Learn more</p>
            <span className='xui-w-35 xui-h-35 green xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
              <ArrowRight size={19.5} color='#FFF'/>
            </span>
            <div class="overlay xui-bdr-rad-2">
            
            </div>
          </Link>
          <p className='xui-lg-font-sz-100 xui-lg-mt-6 xui-mt-3 xui-font-sz-90 xui-mt-1 xui-line-height-1-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-opacity-7'>From sophisticated platform design to seamless integration, our solutions ensure a powerful and effective online presence.</p>
        </>,
      },
    ];
    setSlidesData(initialSlidesData); // Initialize slidesData
  }, []);

  return (
    <div id='home' className='relative xui-h-fluid-100'>
      <div className="swiper-container-wrapper">
        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => {
            headerSwiperInstance.current = swiper;
          }}
          modules={[Autoplay, EffectFade]}
          direction="horizontal"
          speed={500}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={true}
          effect='fade'
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={breakpoints}
          className="header-swiper"
          simulateTouch={false}
          touchStartPreventDefault={false}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="xui-bg-sz-cover xui-bg-pos-center xui-h-fluid-100" style={{ backgroundImage: `url('${slide.image}')` }}>
                <div className="xui-overlay-1 xui-overflow-y-auto xui-lg-pt-8 xui-pb-3 xui-pt-7 xui-w-fluid-100 xui-h-fluid-100">
                  <div className='xui-lg-px-4 xui-px-1-half fade-up'>
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
            <div className='xui-py-1 xui-d-flex xui-flex-jc-flex-end xui-pr-4'>
              <img className='xui-img-60' src={Circle} alt="" />
            </div>
          </div>
      </div>
    </div>

  );
}
