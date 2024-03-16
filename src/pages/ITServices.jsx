import { useEffect, useLayoutEffect, useRef, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircleSpinner from "../components/CircleSpinner";
import { Mail, Phone, Search, ThumbsUp, User, UserPlus, Users } from "react-feather";
import { Book, Building, Calculator, Code, Designtools, Edit, Hospital, House, Judge, Keyboard, KyberNetwork, Magicpen, Message, Paintbucket, Warning2, Whatsapp, Wifi, Windows } from "iconsax-react";
import { Link } from "react-router-dom";
import ITService from "./ITService";

const ITServices = () => {

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div className="xui-pos-relative">
      <div className="header-section xui-pt-9 xui-text-center xui-lg-pb-7 xui-pb-5 xui-container">
            <h3 data-aos="fade-in" data-aos-duration="800" class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Our IT Services</h3>
            <h3 data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" class="xui-font-sz-200 xui-font-9 xui-lg-d-inline-flex xui-d-none xui-flex-ai-center xui-mt-half xui-font-w-500 xui-text-left">Grascope
            <span className="xui-d-inline-flex xui-flex-ai-center xui-mx-half">
                <img className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                <img className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                <img className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                <img className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
            </span>
            <span>provides seamless remote services</span>
            </h3>
            
      </div>
    <section className="xui-h-300 xui-pos-relative xui-bg-sz-cover xui-bg-pos-top" style={{"backgroundImage" : `url('https://img.freepik.com/free-photo/person-office-work-day_23-2150690165.jpg?t=st=1710333996~exp=1710337596~hmac=bbe0389dc9433355577e93d344682c05b8ffa222af737c0b10563090031c016e&w=740')`, 'backgroundAttachment': 'fixed'}}>
        <CircleSpinner service="IT Services" />
    </section>
    <div className="xui-pt-3 xui-lg-pb-5 xui-pb-5 xui-container">
        <h3 data-aos="fade-in" data-aos-duration="800" class="xui-font-sz-200 break xui-font-w-500 xui-line-height-2-half xui-font-9">Our IT Services include:</h3>
        {/* <div className="xui-d-grid xui-lg-grid-col-5 xui-grid-col-1 xui-grid-gap-1 xui-mt-3">
            <Link to='/bpo-services/telesales-outsourcing' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Phone size="19" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-80 xui-opacity-8 xui-pl-1">Information Technology Support</p>
            </Link>
            <Link to='/bpo-services/customer-service' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Whatsapp size="19px" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-80 xui-opacity-8 xui-pl-1">Custom Software Development</p>
            </Link>
            <Link to='/bpo-services/live-chat' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Message size="19" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-80 xui-opacity-8 xui-pl-1">Mobile App Development</p>
            </Link>
            <Link to='/bpo-services/content-moderation' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Warning2 size="19" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-80 xui-opacity-8 xui-pl-1">Content Moderation</p>
            </Link>
            <Link to='/bpo-services/seo-and-ppc' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Search size="19" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-80 xui-opacity-8 xui-pl-1">Website Development</p>
            </Link>
        </div> */}
        <ITService />
    </div>


    </div>
  )
}

export default ITServices