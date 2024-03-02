import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import animationData from "../assets/solution.json";
import Lottie from "lottie-react";
import Companies from "../components/Companies";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink } from "react-router-hash-link";
import About from "../components/About";
import TrustedCompanies from "../components/TrustedCompanies";
// import Colorpalette from "../components/Colorpalette";
import { ArrowUpRight, Send, X } from "react-feather";
import Faq from "./Faq";
import Faq2 from "./Faq2";

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

      
      <div className="header-section xui-pt-9 xui-lg-pb-8 xui-pb-5 xui-container">
        <div className="xui-d-flex">
            <div className="header-left xui-pos-relative">
              <h3 class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half">
                <span data-aos="fade-right" data-aos-duration="800" class="word-background">Welcome to Grascope</span>
                <span data-aos="fade-right" data-aos-delay="400" data-aos-duration="800" class="word-background">Indutries Limited</span>
                <span data-aos="fade-right" data-aos-delay="600" data-aos-duration="800" class="word-background">Company</span>
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
      <div className="xui-pt-5 xui-lg-pb-8 xui-pb-5 xui-container">
          <div className="xui-row">
              <div className="xui-col-5 xui-row xui-pos-relative">
                  <span style={{"top": "12px", "right": "12px"}} className="xui-w-60 xui-h-60 xui-bdr-rad-circle xui-pos-absolute xui-bg-white xui-d-flex xui-flex-jc-center xui-flex-ai-center">
                    <ArrowUpRight size="39" strokeWidth={1.2} color="#000"/>
                  </span>
                  <div className="xui-col-6">
                    <h3 class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half">Our Services</h3>
                    <p className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-1">With our commitment to excellence and forward-thinking approach, we're not just shaping the future – we're leading it.</p>
                  </div>
                  <div className="xui-col-6 xui-pl-1">
                    <img className="xui-w-fluid-100 xui-h-250 xui-bdr-rad-1 xui-mt-5" src="https://img.freepik.com/premium-photo/cabinet-is-open-with-different-containers-filled-with-different-foods_674594-17367.jpg?size=626&ext=jpg&ga=GA1.1.3493108.1707066373&semt=ais" alt="" />
                  </div>
              </div>
              <div className="xui-col-7 xui-pl-2">
                  <div className="xui-d-flex xui-grid-gap-1 tabs xui-flex-ai-center xui-flex-jc-space-between">
                      <span className={'xui-font-sz-80 xui-cursor-pointer xui-px-1 xui-py-half light-grey xui-bdr-rad-5 ' + (activeTab === 0 ? 'secondary xui-font-w-bold xui-py-1 xui-px-2 xui-font-sz-90 xui-text-white' : 'xui-bg-none')} onClick={() => handleTabClick(0)}>Solutions</span>
                      <span className={'xui-font-sz-80 xui-cursor-pointer xui-px-1 xui-py-half light-grey xui-bdr-rad-5 ' + (activeTab === 1 ? 'secondary xui-font-w-bold xui-py-1 xui-px-2 xui-font-sz-90 xui-text-white' : 'xui-bg-none')} onClick={() => handleTabClick(1)}>Services</span>
                      <span className={'xui-font-sz-80 xui-cursor-pointer xui-px-1 xui-py-half light-grey xui-bdr-rad-5 ' + (activeTab === 2 ? 'secondary xui-font-w-bold xui-py-1 xui-px-2 xui-font-sz-90 xui-text-white' : 'xui-bg-none')} onClick={() => handleTabClick(2)}>Solutions</span>
                      <span className={'xui-font-sz-80 xui-cursor-pointer xui-px-1 xui-py-half light-grey xui-bdr-rad-5 ' + (activeTab === 3 ? 'secondary xui-font-w-bold xui-py-1 xui-px-2 xui-font-sz-90 xui-text-white' : 'xui-bg-none')} onClick={() => handleTabClick(3)}>Solutions</span>
                      <span className={'xui-font-sz-80 xui-cursor-pointer xui-px-1 xui-py-half light-grey xui-bdr-rad-5 ' + (activeTab === 4 ? 'secondary xui-font-w-bold xui-py-1 xui-px-2 xui-font-sz-90 xui-text-white' : 'xui-bg-none')} onClick={() => handleTabClick(4)}>Solutions</span>
                      
                
                  </div>
                  <div>
                    {activeTab === 0 && 
                      <Faq />
                    }
                    {activeTab === 1 && 
                      <Faq2 />
                    }
                  </div>
              </div>
          </div>
      </div>
      <TrustedCompanies />
      <About />
      <Companies />

    </div>
  )
}

export default Home