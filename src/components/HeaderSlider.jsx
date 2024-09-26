import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useEffect, useRef, forwardRef } from 'react';
import HeaderImage1 from '../assets/images/header-image1.jpg';
import HeaderImage2 from '../assets/images/header-image2.jpg';
import HeaderImage3 from '../assets/images/header-image3.jpg';
import HeaderImage4 from '../assets/images/header-image4.jpg';

function HeaderSlider({ onSlideChange }, ref) {
  const swiperInstance = useRef(null);
  const slidesData = [
    {
      image: HeaderImage1,
      heading: "Who we are",
      paragraph: "Welcome to Grascope industries",
    },
    {
      image: HeaderImage2,
      heading: "Our Solutions",
      paragraph: "Agrotech Solutions",
    },
    {
      image: HeaderImage3,
      heading: "Our Solutions",
      paragraph: "Custom software solutions",
    },
    {
      image: HeaderImage4,
      heading: "Our Solutions",
      paragraph: "E-commerce solutions",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperInstance.current = swiper;
        if (ref) {
          ref.current = swiper; // Store swiper instance in ref for external control
        }
      }}
      modules={[Autoplay]}
      direction="horizontal"
      speed={500}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={true}
      className="header-swiper2 xui-w-400 xui-pr-8 xui-mt-1-half"
      onSlideChange={(swiper) => onSlideChange(swiper.activeIndex, slidesData)}  // Pass slidesData to Home
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="xui-p-1 glass-bg xui-bdr-rad-1 xui-text-white xui-d-flex xui-flex-ai-center">
            <img className="xui-w-150 xui-h-100 xui-bdr-rad-1" src={slide.image} alt={`Slide ${index}`} />
            <div className="xui-p-1" style={{ width: 'calc(100% - 150px)' }}>
              <p className="xui-w-fluid-100 xui-opacity-7 xui-font-sz-90 xui-line-height-1-half">{slide.heading}</p>
              <h3 className='xui-font-sz-100 xui-font-w-normal'>{slide.paragraph}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default forwardRef(HeaderSlider);
