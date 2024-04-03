
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Testimonial(){

    return(
        <>
            <section className=" xui-container xui-lg-py-4 xui-py-2 xui-max-w-800 xui-mx-auto">
                <p className='xui-font-sz-80 xui-text-center'>Testimonial</p>
                <h1 className="xui-lg-font-sz-300 xui-text-center xui-font-sz-250 font-spaceGrotesk">Customers say</h1>
                <p className='xui-font-sz-80 xui-text-center'>Don't just trust our word! See what partners are saying about us</p>
                <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="testimonial-swiper"
                    >
                    <SwiperSlide>
                        <div className="testimonial">
                            <p className='xui-font-sz-100 xui-w-fluid-80 xui-font-w-medium xui-mx-auto xui-text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nesciunt"</p>
                            <div className='xui-d-flex xui-flex-ai-center xui-mt-4 xui-flex-jc-center'>
                                <img className='xui-w-50 xui-h-50 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                                <div className='testimonial-profile xui-pl-1'>
                                    <p className='xui-font-sz-100 xui-font-w-bold'>William Traynor</p>
                                    <p className='xui-font-sz-80 xui-mt-half xui-opacity-8'>CEO Founder at <span className='xui-font-w-bold'>Magdena Group</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p className='xui-font-sz-100 xui-w-fluid-80 xui-font-w-medium xui-mx-auto xui-text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nesciunt"</p>
                            <div className='xui-d-flex xui-flex-ai-center xui-mt-4 xui-flex-jc-center'>
                                <img className='xui-w-50 xui-h-50 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                                <div className='testimonial-profile xui-pl-1'>
                                    <p className='xui-font-sz-100 xui-font-w-bold'>William Traynor</p>
                                    <p className='xui-font-sz-80 xui-mt-half xui-opacity-8'>CEO Founder at <span className='xui-font-w-bold'>Magdena Group</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p className='xui-font-sz-100 xui-w-fluid-80 xui-font-w-medium xui-mx-auto xui-text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nesciunt"</p>
                            <div className='xui-d-flex xui-flex-ai-center xui-mt-4 xui-flex-jc-center'>
                                <img className='xui-w-50 xui-h-50 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690154.jpg?w=996&t=st=1705926610~exp=1705927210~hmac=b1e4bf8ffe6458ad3cb2926a77df22341079d62af9afc63fdef10647fcffe980" alt="" />
                                <div className='testimonial-profile xui-pl-1'>
                                    <p className='xui-font-sz-100 xui-font-w-bold'>William Traynor</p>
                                    <p className='xui-font-sz-80 xui-mt-half xui-opacity-8'>CEO Founder at <span className='xui-font-w-bold'>Magdena Group</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </section>
        </>
    )
}