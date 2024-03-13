import { useEffect, useLayoutEffect, useRef, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spec2 from "./specializations/Spec2";

const BPOService = () => {
  const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div className="xui-pos-relative">
      
      <section className="xui-h-500 xui-pos-relative xui-bg-sz-cover xui-bg-pos-top" style={{"backgroundImage" : `url('https://img.freepik.com/free-photo/person-office-work-day_23-2150690165.jpg?t=st=1710333996~exp=1710337596~hmac=bbe0389dc9433355577e93d344682c05b8ffa222af737c0b10563090031c016e&w=740')`, 'backgroundAttachment': 'fixed'}}>
        <div className="xui-overlay-2 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-h-fluid-100 xui-pt-9 xui-text-center xui-lg-pb-7 xui-pb-5 xui-container">
            <div className="">
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
        </div>
    </section>

      <div className="xui-pt-5 xui-lg-pb-5 xui-pb-5 xui-container">
          <div className="xui-pos-relative">
            <div >
              <h3 class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Specializations</h3>
              <p className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-1">With our commitment to excellence and forward-thinking approach, we're not just shaping the future – we're leading it.</p>
            </div>
            <div className="xui-mt-2">
              <Spec2 />
            
            </div>
        </div>
      </div>  

    </div>
  )
}

export default BPOService