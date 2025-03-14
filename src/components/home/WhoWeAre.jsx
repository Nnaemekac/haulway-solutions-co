import React, { useState } from "react";
import SectionComponent from "./components/SectionComponent";
import { Link } from "react-router-dom";
import ArrowRight from "../custom-svg-icons/ArrowRight";
import Harness from "../custom-svg-icons/Harness";
import LocationStar from "../custom-svg-icons/LocationStar";
import LogosWorkos from "../custom-svg-icons/LogosWorkos";
import Eclipse from "../custom-svg-icons/Eclipse";
import { PopupModal } from "react-calendly";

const WhoWeAre = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="xui-py-3 xui-container">
      <SectionComponent
        subheading="WHO WE ARE"
        heading="A UK-Based Company Delivering Cost-Effective, Fully Managed Talent"
      />
      <div className="xui-mt-3 xui-row">
        <div className="xui-lg-col-5 xui-col-12">
          <p data-aos="fade-down" data-aos-duration="1000" className="xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100">Grascope is a UK-registered outsourcing firm offering fully managed Nigerian teams with structured staffing, in-person management, UK contract protection, and dedicated account managers.</p>

          {/* Calendly Button */}
          <button data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" onClick={(e) => {e.preventDefault(); setIsOpen(true); }} className="padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-text-dc-none xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2">
            <p className="xui-font-sz-95">Schedule a Free Consultation</p>
            <span className="xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35">
              <ArrowRight color={"#141416"} />
            </span>
          </button>
          <PopupModal url="https://calendly.com/grascope" onModalClose={() => setIsOpen(false)} open={isOpen} rootElement={document.getElementById("root")} />
        </div>

        <div className="xui-lg-col-7 xui-col-12 xui-lg-mt-none xui-mt-2">
          <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1">
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className="xui-pt-1 xui-px-1 xui-pb-2 xui-bdr-rad-1 bg-[#1E1E1E]">
              <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1">
                <span className="xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center gradient-btn">
                  <Harness />
                </span>
                <h3 className="xui-font-sz-110 xui-font-w-500">DUNS Number: 231613614</h3>
              </div>
              <p className="xui-font-sz-95 xui-line-height-1-half xui-mt-1">
                We are a UK-registered business providing managed outsourcing teams in Nigeria with structured staffing & UK contract protection.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" className="xui-pt-1 xui-px-1 xui-pb-2 xui-bdr-rad-1 bg-[#1E1E1E]">
              <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1">
                <span className="xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center gradient-btn">
                  <LocationStar />
                </span>
                <h3 className="xui-font-sz-110 xui-font-w-500">Quality Teams, Lower Costs</h3>
              </div>
              <p className="xui-font-sz-95 xui-line-height-1-half xui-mt-1">
                Offering structured outsourcing teams in Nigeria, ensuring UK-level quality with 60%+ cost savings—no freelancers, just full-time professionals.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900" className="xui-pt-1 xui-px-1 xui-pb-2 xui-bdr-rad-1 bg-[#1E1E1E]">
              <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1">
                <span className="xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center gradient-btn">
                  <LogosWorkos />
                </span>
                <h3 className="xui-font-sz-110 xui-font-w-500">Dedicated Account Managers</h3>
              </div>
              <p className="xui-font-sz-95 xui-line-height-1-half xui-mt-1">
                We provide dedicated account managers for direct reporting, full workforce supervision, & seamless team coordination, ensuring efficiency & accountability.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1100" className="xui-pt-1 xui-px-1 xui-pb-2 xui-bdr-rad-1 bg-[#1E1E1E]">
              <div className="xui-d-flex xui-flex-ai-center xui-grid-gap-1">
                <span className="xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-jc-center xui-flex-ai-center gradient-btn">
                  <Eclipse />
                </span>
                <h3 className="xui-font-sz-110 xui-font-w-500">ISO & Compliance Standards</h3>
              </div>
              <p className="xui-font-sz-95 xui-line-height-1-half xui-mt-1">
                We ensure secure, reliable, and scalable workforce solutions that meet ISO and compliance standards, guaranteeing quality and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
