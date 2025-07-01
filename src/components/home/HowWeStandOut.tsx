import { useState } from "react";
import { PopupModal } from "react-calendly";
import { ArrowRight } from "@carbon/icons-react";
import { LogosAmplicationIcon, LogosHashNodeIcon, LogosMatterMostIcon, LogosRockyLinuxIcon } from "../icons";
import SectionComponent from "../SectionComponent";

const HowWeStandOut = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-[3rem] lg:px-[3rem] px-[1rem]">
      <SectionComponent
        subheading="HOW WE STAND OUT"
        heading="We deliver structured workforce solutions—no freelancers."
      />
      <div className="mt-[3rem] flex flex-wrap">
        <div className="lg:basis-5/12 basis-full">
          <p data-aos="fade-down" data-aos-duration="1000" className="text-[95%] leading-[1.5rem] lg:w-[80%] w-full">Unlike remote freelancing, our teams work in person at a secure workspace, ensuring compliance & comprehensive workforce supervision, which translates to consistent, high-quality performance.</p>

          {/* Calendly Button */}
          <button data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" onClick={(e) => {e.preventDefault(); setIsOpen(true); }} className="rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem] mt-[2rem]">
            <p className="text-[95%]">Book a Call Today</p>
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
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" className="pt-[1rem] px-[1rem] pb-[2rem] rounded-[1rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[1rem] before:opacity-20 before:mix-blend-overlay">
              <div className="flex items-center gap-[1rem]">
                <span className="w-[35px] h-[35px] rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center">
                  <LogosAmplicationIcon />
                </span>
                <h3 className="text-[110%] font-medium">Legal Protection:</h3>
              </div>
              <p className="text-[95%] leading-[1.5rem] mt-[1rem]">
                As a UK-registered business with a DUNS number, we offer robust legal protection and peace of mind through our comprehensive compliance standards.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" className="pt-[1rem] px-[1rem] pb-[2rem] rounded-[1rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[1rem] before:opacity-20 before:mix-blend-overlay">
              <div className="flex items-center gap-[1rem]">
                <span className="w-[35px] h-[35px] rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center">
                  <LogosMatterMostIcon />
                </span>
                <h3 className="text-[110%] font-medium">24/7 Support</h3>
              </div>
              <p className="text-[95%] leading-[1.5rem] mt-[1rem]">
                With 24/7 support and dedicated account managers, we deliver real-time updates and performance tracking to keep you informed every step of the way.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900" className="pt-[1rem] px-[1rem] pb-[2rem] rounded-[1rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[1rem] before:opacity-20 before:mix-blend-overlay">
              <div className="flex items-center gap-[1rem]">
                <span className="w-[35px] h-[35px] rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center">
                  <LogosHashNodeIcon />
                </span>
                <h3 className="text-[110%] font-medium">Better Pricing</h3>
              </div>
              <p className="text-[95%] leading-[1.5rem] mt-[1rem]">
                Save up to 60% on staffing costs while benefiting from our streamlined team management and dedicated support services.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1100" className="pt-[1rem] px-[1rem] pb-[2rem] rounded-[1rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[1rem] before:opacity-20 before:mix-blend-overlay">
              <div className="flex items-center gap-[1rem]">
                <span className="w-[35px] h-[35px] rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center">
                  <LogosRockyLinuxIcon />
                </span>
                <h3 className="text-[110%] font-medium">Fully Supervised Staff</h3>
              </div>
              <p className="text-[95%] leading-[1.5rem] mt-[1rem]">
                We maintain an in-person workforce with structured management for accountability, seamless coordination, and exceptional performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeStandOut;
