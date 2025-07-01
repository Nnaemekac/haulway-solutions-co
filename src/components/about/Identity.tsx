import { useState } from "react";
import SectionComponent from "../SectionComponent";

const tabs = [
  { id: 0, number: "01.", title: "Our Story", content: 
    <>
      <h3 className="text-[160%] font-medium lg:w-[80%] w-full">
        Every Groundbreaking Solution Begins With a Spark Of An Idea.
      </h3>
      <p className="text-[95%] leading-[1.5rem] lg:w-[95%] w-full mt-[2rem]">
      Grascope Industries was founded to act as an idea lab, where creativity and innovation meet to reshape industries and create impactful solutions. Founded in Port Harcourt, Nigeria, we have grown into a trusted partner for companies in the UK, the USA, and beyond. Grascope has grown into a hub for transforming visions into actionable, scalable outcomes. We work across diverse industries, helping companies reach their goals by building the solutions they need to succeed.
      </p>
      <p className="text-[95%] leading-[1.5rem] lg:w-[95%] w-full mt-[1rem]">
      Not just your traditional service company—we are an innovation engineering platform that takes conceptual ideas and transforms them into executable, high-impact solutions across multiple industries.
      </p>
    </>
  },
  { id: 1, number: "02.", title: "Our Mission", content: 
    <>
      <h3 className="text-[160%] font-medium lg:w-[80%] w-full">
        Architecting Future Possibilities
      </h3>
      <p className="text-[95%] leading-[1.5rem] lg:w-[95%] w-full mt-[2rem]">
      We exist to bridge the gap between imagination and implementation. Our mission is to identify, refine, and develop breakthrough ideas that solve complex business and societal challenges.
      </p>
    </>
  },
  { id: 2, number: "03.", title: "Our Identity", content: 
    <>
      <h3 className="text-[160%] font-medium lg:w-[80%] w-full">
        What Sets Us Apart
      </h3>
      <p className="text-[95%] leading-[1.5rem] lg:w-[95%] w-full mt-[2rem]">Innovation and impact define us. Grascope Industries is built on values that inspire trust, collaboration, and excellence.</p>
      <ul className="pl-[2rem] mt-[1rem] grid grid-cols-1 gap-[1rem]">
        <li className="leading-[1.5rem] text-[95%]">Commitment to Quality: Every project we undertake is driven by a passion for excellence and a commitment to exceeding expectations.</li>
        <li className="leading-[1.5rem] text-[95%]">Global Perspective, Local Expertise: We harness the best talent from West Africa, delivering solutions that meet international standards.</li>
        <li className="leading-[1.5rem] text-[95%]">Comprehensive Solutions: From outsourcing to IT services and coworking spaces, we offer a holistic approach to business success.</li>
        <li className="leading-[1.5rem] text-[95%]">Client-Centric Philosophy: Your goals are our goals. We work closely with you to understand and address your unique needs.</li>
      </ul>
    </>
  },
  { id: 3, number: "04.", title: "Our Approach", content: 
    <>
      <h3 className="text-[160%] font-medium lg:w-[80%] w-full">
        Systematic Innovation Engineering
      </h3>
      <p className="text-[95%] leading-[1.5rem] lg:w-[95%] w-full mt-[2rem]">Idea Transformation Framework:</p>
      <ul className="pl-[2rem] mt-[1rem] grid grid-cols-1 gap-1">
        <li className="leading-[1.5rem] text-[95%]">Concept Validation: Rigorous assessment of idea potential.</li>
        <li className="leading-[1.5rem] text-[95%]">Strategic Design: Architectural blueprinting of solutions.</li>
        <li className="leading-[1.5rem] text-[95%]">Technological Implementation: Building scalable prototypes.</li>
        <li className="leading-[1.5rem] text-[95%]">Market Integration: Preparing innovations for real-world deployment.</li>
      </ul>
    </>
  }
];

const Identity = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-[3rem]">
      <SectionComponent subheading="Our Identity" heading="Delivering excellence and driving growth every step of the way." />

      <div className="flex flex-wrap mt-[3rem]">
        {/* Tabs */}
        <div className="lg:basis-5/12 basis-full" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex cursor-pointer self-end gap-1 py-[1.5rem] border-b border-[#737373] ${
                activeTab === tab.id ? "text-[#fff]" : "text-[#737373]"
              }`}
            >
              <span className="text-[150%] font-medium">{tab.number}</span>
              <h3 className="lg:text-[300%] text-[200%] m-[0] font-medium">{tab.title}</h3>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="lg:basis-7/12 basis-full lg:pl-[1rem] pl-[0] lg:mt-[0] mt-[2rem]">
          <div className="lg:px-[1.5rem] px-[1rem] pt-[1rem] lg:pb-[3rem] pb-[2rem] bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] backdrop-blur-[53.080570220947266px] shadow-[0px_5.31px_31.85px_-3.98px_rgba(0,0,0,0.2)] rounded-[1rem] lg:max-h-[500px] h-full max-h-[800px]" 
               data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
            <div
              key={activeTab}
              className="animate-[slide-up_0.5s_ease-out]"
            >
              {tabs[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
