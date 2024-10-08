import React, { useState } from 'react';
import ITImage1 from "../assets/images/it-image1.jpg";
import ITImage2 from "../assets/images/it-image2.jpg";
import ITImage3 from "../assets/images/it-image3.jpg";
import ITImage4 from "../assets/images/it-image4.jpg";
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from '@carbon/icons-react';

const ITServices = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };
    const initialData = [
        {
          image: ITImage1,
          heading: "Information Technology Support",
          paragraph: "Offering comprehensive IT support to ensure your systems run smoothly, minimize downtime, and optimize performance, allowing your business to focus on growth and innovation."
        },
        {
          image: ITImage2,
          heading: "Mobile App Development",
          paragraph: "Designing and developing intuitive, high-performance mobile applications tailored to meet your business needs, enhance user engagement, and drive digital growth."
        },
        {
          image: ITImage3,
          heading: "Website Development",
          paragraph: "Crafting customized, user-friendly websites that enhance your online presence, drive engagement, and deliver a seamless digital experience for your audience."
        },
        {
          image: ITImage4,
          heading: "Custom Software Development",
          paragraph: "Creating bespoke software solutions that align with your specific business requirements, enhance operational efficiency, and foster innovation for sustained growth."
        },
        
    ];
    return (
        <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container'>
            <div className='xui-py-3 xui-text-center'>
                <span className='xui-d-inline-block xui-py-1 xui-px-1-half xui-bdr-white xui-bdr-s-solid xui-bdr-w-1 xui-bdr-rad-2'>IT Services</span>
                <h1 className='xui-font-sz-250 xui-font-w-normal xui-mt-1'>Our IT Services</h1>
                <p className='xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1 xui-mx-auto xui-lg-w-fluid-75 xui-w-fluid-100'>Providing businesses with reliable, scalable, and secure IT services designed to enhance operational efficiency, drive innovation, and ensure seamless performance.</p>
            </div>
            <div className='cards row'>
                {initialData.map((data, index) => (
                    <div key={index} onClick={() => toggleCard(index)} className={`card row xui-bg-sz-cover xui-bg-pos-center ${expandedCard === index ? 'expanded' : ''}`} style={{"backgroundImage": `url('${data.image}')`}}>
                        <div className='card-body'>
                            <div className='title'>
                                <h2>{data.heading}</h2>
                            </div>
                            <p className='xui-font-sz-90 xui-line-height-1-half xui-mt-1'>{data.paragraph}</p>
                            <Link class="custom-svg-box xui-text-dc-none xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-bdr-rad-1-half xui-grid-gap-1-half">
                            <p className='xui-font-sz-90'>CONTACT US</p>
                            <span className='xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                <ChevronRight size={19.5} color='#FFF'/>
                            </span>
                            <div class="overlay xui-bdr-rad-2">
                            
                            </div>
                            </Link>
                        </div>
                    </div>
                ))}
                {/* <div className='card row xui-bg-sz-cover xui-bg-pos-center' style={{"backgroundImage": `url('${ITImage1}')`}}>
                    <div className='card-body'>
                        <div className='title'>
                            <h2>Street</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur maxime blanditiis!</p>
                    </div>
                </div>
                <div className='card row xui-bg-sz-cover xui-bg-pos-center' style={{"backgroundImage": `url('${ITImage1}')`}}>
                    <div className='card-body'>
                        <div className='title'>
                            <h2>Street</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur maxime blanditiis!</p>
                    </div>
                </div>
                <div className='card row xui-bg-sz-cover xui-bg-pos-center' style={{"backgroundImage": `url('${ITImage1}')`}}>
                    <div className='card-body'>
                        <div className='title'>
                            <h2>Street</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur maxime blanditiis!</p>
                    </div>
                </div>
                <div className='card row xui-bg-sz-cover xui-bg-pos-center' style={{"backgroundImage": `url('${ITImage1}')`}}>
                    <div className='card-body'>
                        <div className='title'>
                            <h2>Street</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur maxime blanditiis!</p>
                    </div>
                </div>
                <div className='card row xui-bg-sz-cover xui-bg-pos-center' style={{"backgroundImage": `url('${ITImage1}')`}}>
                    <div className='card-body'>
                        <div className='title'>
                            <h2>Street</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur maxime blanditiis!</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default ITServices;