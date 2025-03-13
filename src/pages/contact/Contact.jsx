import React from 'react';
import ContactCard from './components/ContactCard';
import ContactImage1 from "../../assets/images/contact-image1.jpg";
import ContactImage2 from "../../assets/images/contact-image2.jpg";
import ContactImage3 from "../../assets/images/contact-image3.jpg";

const Contact = () => {
    return (
        <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container'>
            <div className='xui-py-3 xui-text-center'>
                <span className='xui-d-inline-block xui-py-1 xui-px-1-half xui-bdr-white xui-bdr-s-solid xui-bdr-w-1 xui-bdr-rad-2'>CONTACT US</span>
                <h1 className='xui-lg-font-sz-250 xui-font-sz-180 xui-font-w-normal xui-mt-1'>Contact Us Today</h1>
                <p className='xui-lg-font-sz-95 xui-font-sz-85 xui-opacity-8 xui-line-height-1-half xui-mt-1 xui-mx-auto xui-lg-w-fluid-75 xui-w-fluid-100'>Get in touch with us for personalized support and expert solutions tailored to your business needs. Our team is here to help you take the next step toward growth and success.</p>
            </div>
            <div className='xui-mt-3 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-4 faq-holder'>
                <ContactCard heading="Contact Us Via WhatsApp Message" paragraph="Reach out to us instantly via WhatsApp for quick assistance, personalized support & inquiries." isWhatsapp={true} image={ContactImage1} />
                <ContactCard heading="Get In Touch With Us Via A Quick Call" paragraph="Connect with us effortlessly through a quick call to discuss your needs and explore solutions." isPhone={true} image={ContactImage2} />
                <ContactCard heading="Contact Us Via Email Message" paragraph="Have questions or need support? Reach out to us via email for inquiries or detailed information." isEmail={true} image={ContactImage3} />
            </div>
        </section>
    );
};

export default Contact;