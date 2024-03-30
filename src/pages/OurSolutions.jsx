import { useEffect, useLayoutEffect, useRef, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircleSpinner from "../components/CircleSpinner";
import { Mail, Phone, Search, ThumbsUp, User, UserPlus, Users } from "react-feather";
import { Book, Building, Calculator, Code, Computing, Designtools, Edit, Hospital, House, Judge, Keyboard, KyberNetwork, Magicpen, Message, Paintbucket, ShoppingCart, Warning2, Whatsapp, Wifi, Windows } from "iconsax-react";
import { Link } from "react-router-dom";
import OurSolution from "./OurSolution";

const OurSolutions = () => {

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div className="xui-pos-relative">
      <div className="header-section xui-pt-9 xui-text-center xui-lg-pb-7 xui-pb-5 xui-container">
            <h3 data-aos="fade-in" data-aos-duration="800" class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Our Solutions</h3>
            <p className="xui-font-sz-90 xui-opacity-8 xui-mt-1">Grascope provides seamless remote solutions</p>
            
      </div>
    <section className="xui-h-300 xui-pos-relative xui-bg-sz-cover xui-bg-pos-top" style={{"backgroundImage" : `url('https://img.freepik.com/free-photo/person-office-work-day_23-2150690165.jpg?t=st=1710333996~exp=1710337596~hmac=bbe0389dc9433355577e93d344682c05b8ffa222af737c0b10563090031c016e&w=740')`, 'backgroundAttachment': 'fixed'}}>
        <CircleSpinner service="Our Solutions" />
    </section>
    <div className="xui-pt-3 xui-lg-pb-5 xui-pb-5 xui-container">
        <h3 data-aos="fade-in" data-aos-duration="800" class="xui-font-sz-200 break xui-font-w-500 xui-line-height-2-half xui-font-9">Our Solutions include:</h3>
        <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1 xui-mt-3">
            <Link to='/solutions/ecommerce-solutions' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <ShoppingCart size="19" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-90 xui-opacity-8 xui-pl-1">Ecommerce solutions</p>
            </Link>
            <Link to='/solutions/agrotech-solutions' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Code size="19px" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-90 xui-opacity-8 xui-pl-1">Agrotech solutions</p>
            </Link>
            <Link to='/solutions/custom-software-solutions' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Computing size="19" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-90 xui-opacity-8 xui-pl-1">Custom software solutions</p>
            </Link>
        </div>
        
    </div>


    </div>
  )
}

export default OurSolutions