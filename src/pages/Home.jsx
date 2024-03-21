import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import animationData from "../assets/solution.json";
import Lottie from "lottie-react";
import Companies from "../components/Companies";
import AOS from 'aos';
import 'aos/dist/aos.css';
import animationOffer from "../assets/offer.json";
import Contact from "../components/Contact";
import { HashLink } from "react-router-hash-link";
import About from "../components/About";
import TrustedCompanies from "../components/TrustedCompanies";
// import Colorpalette from "../components/Colorpalette";
import { ArrowUpRight, Check, Send, Shield, Star, X } from "react-feather";
import Faq from "./Faq";
import Faq2 from "./Faq2";
import Faq3 from "./Faq3";
import Spec1 from "./specializations/Spec1";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
  // const [isPaletteOpen, setPaletteOpen] = useState(false);

  // const togglePalette = () => {
  //   setPaletteOpen(!isPaletteOpen);
  // };
  const comp = useRef(null)

  useEffect(() => {
    AOS.init();
}, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)

    return () => ctx.revert()
  }, [])
  return (
    <div className="xui-pos-relative" ref={comp}>
      
      {/* <div
        id="intro-slider"
        className="intro-slider font-spaceGrotesk"
      >
        <h1 id="title-1">
            Innovation at its Core
        </h1>
        <h1 id="title-2">
            End-to-End Solutions
        </h1>
        <h1 id="title-3">
            Collaborative Partnership
        </h1>
      </div> */}

      
      <div className="header-section xui-lg-d-block xui-d-none xui-pt-9 xui-lg-pb-5 xui-pb-2 xui-container">
        <div className="xui-d-flex">
            <div className="header-left xui-pos-relative">
              <h3 class="xui-font-sz-350 break xui-font-w-500 xui-line-height-2-half">
                <span data-aos="fade-right" data-aos-duration="800" class="word-background xui-w-500">Welcome to</span>
                <span data-aos="fade-right" data-aos-delay="400" data-aos-duration="800" class="word-background xui-w-400">Grascope</span>
                
              </h3>
              <div className="header-left-contents xui-pr-1">
                <p data-aos="fade-down" data-aos-delay="800" data-aos-duration="800" className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-half">Grascope Industries Ltd is not just a leader in innovation; we're also pioneers in entrepreneurship, owning and operating a diverse portfolio of companies across various industries.</p>
                <div data-aos="fade-down" data-aos-delay="900" data-aos-duration="800" className="btn xui-mt-1">
                  <span className="xui-w-40 xui-h-40 xui-bdr-rad-circle secondary xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                    <ArrowUpRight size="19" color="#FFF"/>
                  </span>
                  <p className="xui-font-w-bold xui-font-sz-90">Get started</p>
                </div>
              </div>
            </div>
            <div className="header-middle xui-z-index--1 xui-h-550" style={{backgroundImage: `url(https://img.freepik.com/free-photo/multicultural-businesswomen-group-meeting_1157-47735.jpg?t=st=1709381715~exp=1709385315~hmac=7292fab0cad514a184adc3b28336b9dde6731be3d127550f2ecc2a5beea8bed2&w=740)`}}>
                <div className="xui-overlay-1 xui-h-fluid-100 xui-pos-relative xui-bdr-rad-1">
                  <div data-aos="fade-in" data-aos-duration="800" className='xui-d-inline-flex xui-flex-ai-center solution xui-pos-absolute xui-text-white glass-bg xui-py-half xui-bdr-rad-1 xui-px-half'>
                      <div className="xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                        <Send size={15} color={"#000"} strokeWidth={1.6} />
                      </div>
                      <h3 className="xui-font-sz-70 font-spaceGrotesk xui-ml-half">E-commerce Solutions</h3>
                  </div>
                  <div data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" className='xui-d-inline-flex xui-flex-ai-center solution solution2 xui-pos-absolute xui-text-white glass-bg xui-py-half xui-bdr-rad-1 xui-px-half'>
                      <div className="xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                        <Send size={15} color={"#000"} strokeWidth={1.6} />
                      </div>
                      <h3 className="xui-font-sz-70 font-spaceGrotesk xui-ml-half">Agrotech Solutions</h3>
                  </div>
                  <div className="xui-d-flex xui-flex-ai-center xui-pos-absolute mini-companies-holder">
                      <img data-aos="fade-in" data-aos-delay="600" data-aos-duration="800" className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                      <img data-aos="fade-in" data-aos-delay="800" data-aos-duration="800" className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                      <img data-aos="fade-in" data-aos-delay="900" data-aos-duration="800" className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                  </div>
                </div>
              
            </div>
            <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className="header-right xui-pl-1">
              <img className="xui-h-300 xui-w-fluid-100 xui-bdr-rad-1" src="https://img.freepik.com/free-photo/focused-call-center-operator-typing-laptop_74855-4213.jpg?t=st=1710770736~exp=1710774336~hmac=f6dc562d54e5ee791ae472dda0b7033342102e55e50b8dbbe7489a199fa6734e&w=740" alt="" />
              <div>
                <div className="xui-d-flex xui-mt-1">
                  <span className="xui-w-60 xui-h-60 xui-bdr-rad-circle secondary xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                    <ArrowUpRight size="19" color="#FFF"/>
                  </span>
                  <div className="xui-pl-1" style={{"width": "calc(100% - 60px)"}}>
                    <p className="xui-font-w-bold xui-font-sz-90">Custom software solutions</p>
                    <p className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-half">Harness the power of tailored technology with our custom software solutions.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
      </div>
      <div className="header-section xui-d-block xui-lg-d-none mobile-header-section xui-pt-9 xui-lg-pb-5 xui-pb-3 xui-container">
        <div className="xui-d-flex">
          <div className="header-middle xui-z-index--1 xui-h-500" style={{backgroundImage: `url(https://img.freepik.com/free-photo/multicultural-businesswomen-group-meeting_1157-47735.jpg?t=st=1709381715~exp=1709385315~hmac=7292fab0cad514a184adc3b28336b9dde6731be3d127550f2ecc2a5beea8bed2&w=740)`}}>
              <div className="xui-overlay-1 xui-h-fluid-100 xui-pos-relative xui-bdr-rad-1">
                <h3 class="xui-font-sz-250 mobile-break break xui-font-w-500 xui-line-height-2-half">
                  <span data-aos="fade-right" data-aos-duration="800" class="word-background xui-w-300">Welcome to</span>
                  <span data-aos="fade-right" data-aos-delay="400" data-aos-duration="800" class="word-background xui-w-200">Grascope</span>
                  
                </h3>
                <div data-aos="fade-in" data-aos-duration="800" className='xui-d-inline-flex xui-flex-ai-center solution xui-pos-absolute xui-text-white glass-bg xui-py-half xui-bdr-rad-1 xui-px-half'>
                    <div className="xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                      <Send size={15} color={"#000"} strokeWidth={1.6} />
                    </div>
                    <h3 className="xui-font-sz-70 font-spaceGrotesk xui-ml-half">E-commerce Solutions</h3>
                </div>
                <div data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" className='xui-d-inline-flex xui-flex-ai-center solution solution2 xui-pos-absolute xui-text-white glass-bg xui-py-half xui-bdr-rad-1 xui-px-half'>
                    <div className="xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center">
                      <Send size={15} color={"#000"} strokeWidth={1.6} />
                    </div>
                    <h3 className="xui-font-sz-70 font-spaceGrotesk xui-ml-half">Agrotech Solutions</h3>
                </div>
                <div className="xui-d-flex xui-flex-ai-center xui-pos-absolute mini-companies-holder">
                    <img data-aos="fade-in" data-aos-delay="600" data-aos-duration="800" className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                    <img data-aos="fade-in" data-aos-delay="800" data-aos-duration="800" className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                    <img data-aos="fade-in" data-aos-delay="900" data-aos-duration="800" className="mini-companies xui-w-50 xui-h-50 xui-bdr-rad-circle" src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                </div>
              </div>
            
          </div>
            <div className="header-left xui-pos-relative">
              {/* <h3 class="xui-font-sz-350 break xui-font-w-500 xui-line-height-2-half">
                <span data-aos="fade-right" data-aos-duration="800" class="word-background xui-w-500">Welcome to</span>
                <span data-aos="fade-right" data-aos-delay="400" data-aos-duration="800" class="word-background xui-w-400">Grascope</span>
                
              </h3> */}
            
              <div className="header-left-contents xui-pr-1">
                <p data-aos="fade-down" data-aos-delay="800" data-aos-duration="800" className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-half">Grascope Industries Ltd is not just a leader in innovation; we're also pioneers in entrepreneurship, owning and operating a diverse portfolio of companies across various industries.</p>
                <div data-aos="fade-down" data-aos-delay="900" data-aos-duration="800" className="btn xui-mt-1">
                  <span className="xui-w-40 xui-h-40 xui-bdr-rad-circle secondary xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                    <ArrowUpRight size="19" color="#FFF"/>
                  </span>
                  <p className="xui-font-w-bold xui-font-sz-90">Get started</p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className="header-right">
              <img className="xui-h-300 xui-w-fluid-100 xui-bdr-rad-1" src="https://img.freepik.com/free-photo/part-modern-kitchen-place-cooking-extractor-stove_169016-19751.jpg?size=626&ext=jpg&ga=GA1.1.3493108.1707066373&semt=ais" alt="" />
              <div>
                <div className="xui-d-flex xui-mt-1">
                  <span className="xui-w-60 xui-h-60 xui-bdr-rad-circle secondary xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                    <ArrowUpRight size="19" color="#FFF"/>
                  </span>
                  <div className="xui-pl-1" style={{"width": "calc(100% - 60px)"}}>
                    <p className="xui-font-w-bold xui-font-sz-90">Custom software solutions</p>
                    <p className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-half">Harness the power of tailored technology with our custom software solutions.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
      </div>
      <div className="xui-lg-pt-5 xui-pt-2 xui-lg-pb-3 xui-pb-2 xui-container">
          <div className="xui-row">
              <div className="xui-lg-col-5 xui-col-12 xui-pos-relative">
                  <span style={{"top": "0", "right": "12px"}} className="xui-d-none xui-w-60 xui-h-60 xui-bdr-rad-circle xui-pos-absolute xui-bg-white xui-lg-d-flex xui-flex-jc-center xui-flex-ai-center">
                    <ArrowUpRight size="39" strokeWidth={1.2} color="#000"/>
                  </span>
                  <div className="">
                    <h3 class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Our Services</h3>
                    <p className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-1">With our commitment to excellence and forward-thinking approach, we're not just shaping the future – we're leading it.</p>
                  </div>
                  <div className="">
                    <img className="xui-w-fluid-100 xui-h-250 xui-bdr-rad-1 xui-lg-mt-5 xui-mt-1" src="https://img.freepik.com/free-photo/african-woman-sitting-computer-science-class-lady-with-glasses-female-student-sitting-computer_1157-42317.jpg?t=st=1710540191~exp=1710543791~hmac=9066fc516526257b9a8e50ebe5a28a0c0ba383042ace42ec9b5247d769e04052&w=740" alt="" />
                  </div>
              </div>
              <div className="xui-lg-col-7 xui-col-12 xui-lg-pl-2 xui-pl-none">
                  <div className="xui-grid-gap-2 tabs xui-flex-ai-center">
                      <span className={'xui-font-sz-80 xui-cursor-pointer xui-px-1 xui-py-half ' + (activeTab === 0 ? 'border-secondary xui-font-w-bold xui-py-1 xui-px-2 xui-font-sz-90' : 'xui-bg-none')} onClick={() => handleTabClick(0)}>Our Solutions</span>
                      <span className={'xui-font-sz-80 xui-cursor-pointer xui-px-1 xui-py-half ' + (activeTab === 2 ? 'border-secondary xui-font-w-bold xui-py-1 xui-px-2 xui-font-sz-90' : 'xui-bg-none')} onClick={() => handleTabClick(2)}>Our IT Services</span>     
                      <span className={'xui-font-sz-80 xui-cursor-pointer xui-px-1 xui-py-half ' + (activeTab === 1 ? 'border-secondary xui-font-w-bold xui-py-1 xui-px-2 xui-font-sz-90' : 'xui-bg-none')} onClick={() => handleTabClick(1)}>Our BPO Services</span>
                
                  </div>
                  <div>
                    {activeTab === 0 && 
                      <Faq2 />
                      
                    }
                    {activeTab === 1 && 
                      <Faq />
                    }
                    {activeTab === 2 && 
                      <Faq3 />
                    }
                  </div>
              </div>
          </div>
      </div>
      <Companies />
      <div className="xui-pt-2 xui-lg-pb-5 xui-pb-2 xui-container">
          <div className="xui-pos-relative">
            <div >
              <h3 class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Our BPO Services</h3>
              <p className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-1">With our commitment to excellence and forward-thinking approach, we're not just shaping the future – we're leading it.</p>
            </div>
            <div className="xui-mt-2">
              <Spec1 />
            
            </div>
        </div>
      </div>
      
      <section id='whychooseus' className='services-section xui-container xui-lg-py-4 xui-py-2 '>
                <div id="welcome">
                <h3 class="xui-font-sz-250 break xui-font-w-500 xui-text-center xui-line-height-2-half xui-font-9">Why Us?</h3>
                    {/* <HashLink className="xui-bdr-rad-half xui-text-dc-none xui-font-sz-80 secondary xui-text-white xui-py-1 xui-d-inline-block xui-mt-1 xui-px-2" smooth to='#contact'>Contact us</HashLink> */}
                </div>
                <div className="xui-d-grid xui-lg-grid-col-2 xui-mt-3 xui-grid-col-1 xui-grid-gap-3">
                  <div className='xui-p-2 offer'>
                    <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                        <Star size={24} strokeWidth={1.6} />
                    </div>
                    <div >
                        <h3 className="xui-font-sz-150 font-spaceGrotesk">Diverse Portfolio</h3>
                        <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">With ownership of several companies spanning various industries, we offer unparalleled expertise and insights to drive success.</p>
                    </div>
                  </div>
                  <div className='xui-mt-1 xui-p-2 offer'>
                      <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                          <Shield size={24} strokeWidth={1.6} />
                      </div>
                      <div >
                          <h3 className="xui-font-sz-150 font-spaceGrotesk">Entrepreneurial Spirit</h3>
                          <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">As entrepreneurs ourselves, we understand the challenges and opportunities of business ownership, and we're here to support you every step of the way.</p>
                      </div>
                  </div>

                  <div className='xui-p-2 offer'>
                      <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                          <Send size={24} strokeWidth={1.6} />
                      </div>
                      <div >
                          <h3 className="xui-font-sz-150 font-spaceGrotesk">Strategic Investments</h3>
                          <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Our strategic investments are driven by a commitment to long-term growth and sustainability, ensuring the success of our ventures and partners.</p>
                      </div>
                  </div>
                  <div className='xui-mt-1 xui-p-2 offer'>
                      <div className='xui-w-50 xui-h-50 xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                          <Send size={24} strokeWidth={1.6} />
                      </div>
                      <div >
                          <h3 className="xui-font-sz-150 font-spaceGrotesk">Innovation Leadership</h3>
                          <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">Innovation is at the core of everything we do. By staying ahead of the curve and embracing emerging trends, we're able to create value and drive impact in a rapidly evolving world.</p>
                      </div>
                  </div>
                </div>
      </section>
           
            <Contact />
            
      <TrustedCompanies />
      <About />
      

    </div>
  )
}

export default Home