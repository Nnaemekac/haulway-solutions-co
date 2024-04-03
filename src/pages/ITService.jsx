
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spec2 from "./specializations/Spec2";
import { useLocation } from "react-router-dom";
import ITService1 from "./specializations/ITService1";

const ITService = () => {
    const location = useLocation();
    const [headerText, setHeaderText] = useState(null);
    const [paragraphText, setParagraphText] = useState(null);


    useEffect(() => {
        // Extract the 'tab' parameter from the URL
        const urlParams = new URLSearchParams(location.search);
        const tabParam = urlParams.get('tab');
      
        // Check if the URL contains 'customer-service' and set activeTab accordingly
        if (location.pathname.includes('information-technology-support')) {
            setHeaderText("Information Technology Support");
        }
        else if(location.pathname.includes('mobile-app-development')){
            setHeaderText("Mobile App Development");
        } 
        else if(location.pathname.includes('custom-software-development')){
            setHeaderText("Custom Software Development");
        } 
        else if(location.pathname.includes('website-development')){
            setHeaderText("Website Development");
        } 
        
      }, [location.pathname, location.search]);

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div className="xui-pos-relative">
      
      <section className="xui-h-500 xui-pos-relative xui-bg-sz-cover xui-bg-pos-top" style={{"backgroundImage" : `url('https://img.freepik.com/free-photo/person-office-work-day_23-2150690165.jpg?t=st=1710333996~exp=1710337596~hmac=bbe0389dc9433355577e93d344682c05b8ffa222af737c0b10563090031c016e&w=740')`, 'backgroundAttachment': 'fixed'}}>
        <div className="xui-overlay-2 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-h-fluid-100 xui-pt-9 xui-text-center xui-lg-pb-7 xui-pb-5 xui-container">
            <div className="">
                <h3 data-aos="fade-in" data-aos-duration="800" class="xui-text-uppercase xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">{headerText}</h3>
                <p className="xui-font-sz-100 xui-opacity-8 xui-mt-2">{paragraphText}</p>
                
        </div>
        </div>
    </section>

      <div className="xui-pt-5 xui-lg-pb-5 xui-pb-5 xui-container">
          <div className="xui-pos-relative">
            <div >
              <h3 class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Our IT Services</h3>
            </div>
            <div className="xui-mt-2">
              <ITService1 />
            
            </div>
        </div>
      </div>  

    </div>
  )
}

export default ITService