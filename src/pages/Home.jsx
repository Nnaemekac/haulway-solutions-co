import { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import animationData from "../assets/solution.json";
import Lottie from "lottie-react";
import Companies from "../components/Companies";
import { HashLink } from "react-router-hash-link";
import About from "../components/About";
import TrustedCompanies from "../components/TrustedCompanies";

const Home = () => {
  const comp = useRef(null)

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
      
      <div
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
      </div>
      <div className="header-section xui-row xui-pt-9 xui-pb-8 xui-container">
        <div id="welcome" className="hero-content xui-lg-col-6  xui-font-w-bold">
          <h1 className="xui-lg-font-sz-350 xui-font-sz-250 font-spaceGrotesk">From Ideas to Successful Companies</h1>
          <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-w-fluid-80 xui-mt-half">We believe that entrepreneurship can unlock human potential and make the world a better place.</p>
          <HashLink className="xui-bdr-rad-half xui-text-dc-none xui-font-sz-80 secondary  xui-py-1 xui-d-inline-block xui-mt-1 xui-px-2" smooth to='#companies'>Our companies</HashLink>
        </div>
        <div className="hero_img xui-lg-col-6">
          <Lottie animationData={animationData} className="xui-h-400" />
        </div>
        
      </div>
      <TrustedCompanies />
      <About />
      <Companies />

    </div>
  )
}

export default Home