import { useState } from "react";
import { PopupModal } from "react-calendly";
import { ArrowRight } from "@carbon/icons-react";
import { LocationStar, LogosEclipseIcon, LogosHarnessIcon, LogosWorkosIcon } from "../icons";
import SectionComponent from "../SectionComponent";

const WhoWeAre = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-[3rem] lg:px-[3rem] px-[1rem]">
      <SectionComponent
        subheading="WHO WE ARE"
        heading="A UK-Based Company Delivering Cost-Effective, Fully Managed Talent"
      />
      <div className="mt-[3rem] flex flex-wrap">
        <div className="lg:basis-5/12 basis-full">
          <p data-aos="fade-down" data-aos-duration="1000" className="text-[95%] leading-[1.5rem] lg:w-[80%] w-full">Grascope is a UK-registered outsourcing firm offering fully managed Nigerian teams with structured staffing, in-person management, UK contract protection, and dedicated account managers.</p>

          {/* Calendly Button */}
          <button data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" onClick={(e) => {e.preventDefault(); setIsOpen(true); }} className="rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem] mt-[2rem]">
            <p className="text-[95%]">Schedule a Free Consultation</p>
            <span className="flex justify-center items-center bg-white rounded-full w-[35px] h-[35px]">
              <ArrowRight color={"#141416"} />
            </span>
          </button>
          <PopupModal
            url="https://calendly.com/grascope"
            open={isOpen}
            onModalClose={() => setIsOpen(false)}
            /*      👇 tell TS “this will not be null” */
            rootElement={document.getElementById('root')!}
            />

        </div>

        <div className="lg:basis-7/12 basis-full lg:mt-[0] mt-[2rem]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[1rem]">
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className="pt-[1rem] px-[1rem] pb-[2rem] rounded-[1rem] bg-[#1E1E1E]">
              <div className="flex items-center gap-[1rem]">
                <span className="w-[35px] h-[35px] rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center">
                  <LogosHarnessIcon />
                </span>
                <h3 className="text-[110%] font-medium">DUNS Number: 231613614</h3>
              </div>
              <p className="text-[95%] leading-[1.5rem] mt-[1rem]">
                We are a UK-registered business providing managed outsourcing teams in Nigeria with structured staffing & UK contract protection.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" className="pt-[1rem] px-[1rem] pb-[2rem] rounded-[1rem] bg-[#1E1E1E]">
              <div className="flex items-center gap-[1rem]">
                <span className="w-[35px] h-[35px] rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center">
                  <LocationStar />
                </span>
                <h3 className="text-[110%] font-medium">Quality Teams, Lower Costs</h3>
              </div>
              <p className="text-[95%] leading-[1.5rem] mt-[1rem]">
                Offering structured outsourcing teams in Nigeria, ensuring UK-level quality with 60%+ cost savings—no freelancers, just full-time professionals.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900" className="pt-[1rem] px-[1rem] pb-[2rem] rounded-[1rem] bg-[#1E1E1E]">
              <div className="flex items-center gap-[1rem]">
                <span className="w-[35px] h-[35px] rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center">
                  <LogosWorkosIcon />
                </span>
                <h3 className="text-[110%] font-medium">Dedicated Account Managers</h3>
              </div>
              <p className="text-[95%] leading-[1.5rem] mt-[1rem]">
                We provide dedicated account managers for direct reporting, full workforce supervision, & seamless team coordination, ensuring efficiency & accountability.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1100" className="pt-[1rem] px-[1rem] pb-[2rem] rounded-[1rem] bg-[#1E1E1E]">
              <div className="flex items-center gap-[1rem]">
                <span className="w-[35px] h-[35px] rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center">
                  <LogosEclipseIcon />
                </span>
                <h3 className="text-[110%] font-medium">ISO & Compliance Standards</h3>
              </div>
              <p className="text-[95%] leading-[1.5rem] mt-[1rem]">
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
