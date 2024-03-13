import { useEffect, useLayoutEffect, useRef, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircleSpinner from "../components/CircleSpinner";
import { Mail, Phone, Search, ThumbsUp, User, UserPlus, Users } from "react-feather";
import { Book, Building, Calculator, Code, Designtools, Edit, Hospital, House, Judge, Keyboard, KyberNetwork, Magicpen, Message, Paintbucket, Warning2, Whatsapp, Wifi, Windows } from "iconsax-react";
import { Link } from "react-router-dom";

const BPOServices = () => {

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div className="xui-pos-relative">
      <div className="header-section xui-pt-9 xui-text-center xui-lg-pb-7 xui-pb-5 xui-container">
            <h3 data-aos="fade-in" data-aos-duration="800" class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Our BPO Services</h3>
            <h3 data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" class="xui-font-sz-200 xui-font-9 xui-d-inline-flex xui-flex-ai-center xui-mt-half xui-font-w-500 xui-text-left">Grascope
            <span className="xui-d-inline-flex xui-flex-ai-center xui-mx-half">
                <img className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                <img className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                <img className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                <img className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
            </span>
            <span>provides experienced staffs in a number of ways</span>
            </h3>
            
      </div>
    <section className="xui-h-300 xui-pos-relative xui-bg-sz-cover xui-bg-pos-top" style={{"backgroundImage" : `url('https://img.freepik.com/free-photo/person-office-work-day_23-2150690165.jpg?t=st=1710333996~exp=1710337596~hmac=bbe0389dc9433355577e93d344682c05b8ffa222af737c0b10563090031c016e&w=740')`, 'backgroundAttachment': 'fixed'}}>
        <CircleSpinner />
    </section>
    <div className="xui-pt-9 xui-lg-pb-5 xui-pb-5 xui-container">
        <h3 data-aos="fade-in" data-aos-duration="800" class="xui-font-sz-200 break xui-font-w-500 xui-line-height-2-half xui-font-9">Build Your Own Offshore Team</h3>
        <p className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-1">Below is a list of some of our specializations. If you dont’t see what you need, we can also recruit for other resources upon request. If you don’t require a full time worker, there are also part-time options available for most categories.</p>
        <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1 xui-mt-3">
            <div className="xui-text-center">
                <h3 className='xui-font-sz-120 xui-font-9'>MARKETING & CUSTOMER SUPPORT</h3>
                <Link to='/bpo-services/telesales-outsourcing' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Phone size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Telesales</p>
                </Link>
                <Link to='/bpo-services/customer-service' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Whatsapp size="19px" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Customer Service</p>
                </Link>
                <Link to='/bpo-services/live-chat' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Message size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Live Chat Support</p>
                </Link>
                <Link to='/bpo-services/content-moderation' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Warning2 size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Content Moderation</p>
                </Link>
                <Link to='/bpo-services/seo-and-ppc' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Search size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">SEO & PPC</p>
                </Link>
                <Link to='/bpo-services/live-chat/social-media-marketing' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Wifi size="19px" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Social Media Marketing</p>
                </Link>
                <Link to='/bpo-services/email-marketing' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Mail size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">E-Mail Marketing</p>
                </Link>
                <Link to='/bpo-services/content-marketing' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <KyberNetwork size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Content Marketing</p>
                </Link>
            </div>
            <div className="xui-text-center">
                <h3 className='xui-font-sz-120 xui-font-9'>ICT & CREATIVE SERVICES</h3>
                <Link to='/bpo-services/IT-Support' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Book size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">IT Support: System/Network Admin</p>
                </Link>
                <Link to='/bpo-services/web-design' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Designtools size="19px" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Web Design</p>
                </Link>
                <Link to='/bpo-services/web-development' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Code size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Web Development</p>
                </Link>
                <Link to='/bpo-services/software-development' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Windows size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Software Development</p>
                </Link>
                <Link to='/bpo-services/graphic-design' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Paintbucket size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Graphic Design</p>
                </Link>
                <Link to='/bpo-services/animation' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Magicpen size="19px" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Animation</p>
                </Link>
                <Link to='/bpo-services/story-boards' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Edit size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Storyboards</p>
                </Link>
                <Link to='/bpo-services/quality-assurance' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <ThumbsUp size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Quality Assurance/Testing</p>
                </Link>
            </div>
            <div>
                <h3 className='xui-font-sz-120 xui-font-9 xui-text-center'>BACK OFFICE SUPPORT</h3>
                <Link to='/bpo-services/data-processing' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Keyboard size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Data Processing</p>
                </Link>
                <Link to='/bpo-services/accounting' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Calculator size="19px" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Accounting</p>
                </Link>
                <Link to='/bpo-services/hr-support' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Users size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">HR Support</p>
                </Link>
                <Link to='/bpo-services/virtual-assistant' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <User size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Virtual Assistant</p>
                </Link>
                <Link to='/bpo-services/medical-billing' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Hospital size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Medical Billing</p>
                </Link>
                <Link to='/bpo-services/insurance-support' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Building size="19px" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Insurance Support</p>
                </Link>
                <Link to='/bpo-services/lawyers-and-paralegals' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Judge size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Lawyers and Paralegals</p>
                </Link>
                <Link to='/bpo-services/real-estate' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <House size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Real Estate</p>
                </Link>
                <Link to='/bpo-services/management-and-administration' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <UserPlus size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Management & Administration</p>
                </Link>
            </div>
            {/* <div>
                <h3 className='xui-font-sz-120 xui-font-9'>DESIGN, CONSTRUCTION & OTHER INDUSTRIES</h3>
                <Link to='/' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Phone size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Telesales</p>
                </Link>
                <Link to='/' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Whatsapp size="19px" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Customer Service</p>
                </Link>
                <Link to='/' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Message size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Live Chat Support</p>
                </Link>
                <Link to='/' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Warning2 size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Content Moderation</p>
                </Link>
                <Link to='/' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Search size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">SEO & PPC</p>
                </Link>
                <Link to='/' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Wifi size="19px" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Social Media Marketing</p>
                </Link>
                <Link to='/' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <Mail size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">E-Mail Marketing</p>
                </Link>
                <Link to='/' className="bpo xui-d-flex xui-flex-ai-center">
                    <span>
                        <KyberNetwork size="19" color="#000" />
                    </span>
                    <p className="xui-font-sz-80 xui-opacity-8 xui-ml-1">Content Marketing</p>
                </Link>
            </div> */}
        </div>
    </div>


    </div>
  )
}

export default BPOServices