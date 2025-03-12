import React, { useState } from "react";
import SectionComponent from "../home/components/SectionComponent";

const tabs = [
  { id: 0, number: "01.", title: "Our Story", content: 
    <>
      <h3 className="xui-font-sz-160 xui-font-w-500 xui-lg-w-fluid-80 xui-w-fluid-100">
        Every Groundbreaking Solution Begins With a Spark Of An Idea.
      </h3>
      <p className="xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-2">
      Grascope Industries was founded to act as an idea lab, where creativity and innovation meet to reshape industries and create impactful solutions. Founded in Port Harcourt, Nigeria, we have grown into a trusted partner for companies in the UK, the USA, and beyond. Grascope has grown into a hub for transforming visions into actionable, scalable outcomes. We work across diverse industries, helping companies reach their goals by building the solutions they need to succeed.
      </p>
      <p className="xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-1">
      Not just your traditional service company—we are an innovation engineering platform that takes conceptual ideas and transforms them into executable, high-impact solutions across multiple industries.
      </p>
    </>
  },
  { id: 1, number: "02.", title: "Our Mission", content: 
    <>
      <h3 className="xui-font-sz-160 xui-font-w-500 xui-lg-w-fluid-80 xui-w-fluid-100">
        Architecting Future Possibilities
      </h3>
      <p className="xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-2">
      We exist to bridge the gap between imagination and implementation. Our mission is to identify, refine, and develop breakthrough ideas that solve complex business and societal challenges.
      </p>
    </>
  },
  { id: 2, number: "03.", title: "Our Identity", content: 
    <>
      <h3 className="xui-font-sz-160 xui-font-w-500 xui-lg-w-fluid-80 xui-w-fluid-100">
        What Sets Us Apart
      </h3>
      <p className="xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-2">Innovation and impact define us. Grascope Industries is built on values that inspire trust, collaboration, and excellence.</p>
      <ul className="xui-pl-2 xui-mt-1 xui-d-grid cui-grid-col-1 xui-grid-gap-1">
        <li className="xui-line-height-1-half xui-font-sz-95">Commitment to Quality: Every project we undertake is driven by a passion for excellence and a commitment to exceeding expectations.</li>
        <li className="xui-line-height-1-half xui-font-sz-95">Global Perspective, Local Expertise: We harness the best talent from West Africa, delivering solutions that meet international standards.</li>
        <li className="xui-line-height-1-half xui-font-sz-95">Comprehensive Solutions: From outsourcing to IT services and coworking spaces, we offer a holistic approach to business success.</li>
        <li className="xui-line-height-1-half xui-font-sz-95">Client-Centric Philosophy: Your goals are our goals. We work closely with you to understand and address your unique needs.</li>
      </ul>
    </>
  },
  { id: 3, number: "04.", title: "Our Approach", content: 
    <>
      <h3 className="xui-font-sz-160 xui-font-w-500 xui-lg-w-fluid-80 xui-w-fluid-100">
        Systematic Innovation Engineering
      </h3>
      <p className="xui-font-sz-95 xui-line-height-1-half xui-lg-w-fluid-95 xui-w-fluid-100 xui-mt-2">Idea Transformation Framework:</p>
      <ul className="xui-pl-2 xui-mt-1 xui-d-grid cui-grid-col-1 xui-grid-gap-1">
        <li className="xui-line-height-1-half xui-font-sz-95">Concept Validation: Rigorous assessment of idea potential.</li>
        <li className="xui-line-height-1-half xui-font-sz-95">Strategic Design: Architectural blueprinting of solutions.</li>
        <li className="xui-line-height-1-half xui-font-sz-95">Technological Implementation: Building scalable prototypes.</li>
        <li className="xui-line-height-1-half xui-font-sz-95">Market Integration: Preparing innovations for real-world deployment.</li>
      </ul>
    </>
  }
];

const Identity = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="xui-py-3">
      <SectionComponent subheading="Our Identity" heading="Delivering excellence and driving growth every step of the way." />

      <div className="xui-row xui-mt-3">
        {/* Tabs */}
        <div className="xui-lg-col-5 xui-col-12" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`xui-d-inline-flex xui-cursor-pointer xui-flex-ai-self-end xui-grid-gap-1 xui-py-1-half bdr-bottom-width-[1px] bdr-bottom-style-[solid] bdr-bottom-color-[#737373] ${
                activeTab === tab.id ? "xui-text-white" : "active-identity"
              }`}
            >
              <span className="xui-font-sz-150 xui-font-w-500">{tab.number}</span>
              <h3 className="xui-lg-font-sz-300 xui-font-sz-200 xui-m-none xui-font-w-500">{tab.title}</h3>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="xui-lg-col-7 xui-col-12 xui-lg-pl-1 xui-pl-none xui-lg-mt-none xui-mt-2">
          <div className="xui-lg-px-1-half xui-px-1 xui-pt-1 xui-lg-pb-3 xui-pb-2 bg-gradient2 xui-bdr-rad-1 xui-lg-max-h-500 xui-h-fluid-100 xui-max-h-800" 
               data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
