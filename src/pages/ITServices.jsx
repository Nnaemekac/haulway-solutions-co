import { useEffect, useLayoutEffect, useRef, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import CircleSpinner from "../components/CircleSpinner";
import { Mail, Phone, Search, ThumbsUp, User, UserPlus, Users } from "react-feather";
import { Book, Building, Calculator, Code, Computing, Designtools, Edit, Global, Hospital, House, Judge, Keyboard, KyberNetwork, Magicpen, Message, Paintbucket, ShoppingCart, Warning2, Whatsapp, Wifi, Windows } from "iconsax-react";
import { Link } from "react-router-dom";
import OurSolution from "./OurSolution";

const ITServices = () => {

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div className="xui-pos-relative">
      <div className="header-section xui-pt-9 xui-text-center xui-pb-4 xui-container">
            <h3 data-aos="fade-in" data-aos-duration="800" class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Our IT Services</h3>
            <p className="xui-font-sz-90 xui-opacity-8 xui-mt-1">Grascope provides seamless remote IT Services</p>
            
      </div>
    <div className="xui-pt-1 xui-lg-pb-5 xui-pb-5 xui-container">
        <h3 data-aos="fade-in" data-aos-duration="800" class="xui-font-sz-200 break xui-text-center xui-font-w-500 xui-line-height-2-half xui-font-9">Our IT Services include:</h3>
        <div className="xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-1 xui-mt-3">
            <Link to='/IT-services/information-technology-support' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Keyboard size="19" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-90 xui-opacity-8 xui-pl-1">Information Technology Support</p>
            </Link>
            <Link to='/IT-services/mobile-app-development' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Code size="19px" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-90 xui-opacity-8 xui-pl-1">Mobile App Development</p>
            </Link>
            <Link to='/IT-services/custom-software-development' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Computing size="19" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-90 xui-opacity-8 xui-pl-1">Custom software development</p>
            </Link>
            <Link to='/IT-services/website-development' className="bpo xui-d-flex xui-flex-ai-center">
                <span className="xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                    <Global size="19" color="#000" />
                </span>
                <p style={{"width": "calc(100% - 40px)"}} className="xui-font-sz-90 xui-opacity-8 xui-pl-1">Website development</p>
            </Link>
        </div>
        
    </div>


    </div>
  )
}

export default ITServices