import { ArrowRight } from "@carbon/icons-react";
import { LogosGoodTickIcon } from "../icons";
import SectionComponent from "../SectionComponent";
import { Link } from "react-router-dom";

const cardItems = [
  {
    img: '/static/home/bpo.png',
    aosDelay: 300,
    title: "BPO & Customer Support",
    bullets: [
      "24/7 Phone, Chat & Email Support",
      "Inbound & Outbound Call Handling",
      "Multilingual Support Options",
      "Help Desk & IT Support",
    ],
  },
  {
    img: '/static/home/virtual-assistant.png',
    aosDelay: 500,
    title: "Virtual Assistants & Admin Support",
    bullets: [
      "Data Entry & Back-Office Support",
      "Research & Lead Generation",
      "Appointment Scheduling & CRM Updates",
      "Operational Oversight",
    ],
  },
  {
    img: '/static/home/it-development.png',
    aosDelay: 700,
    title: "IT Development & Software Services",
    bullets: [
      "Website & App Development",
      "UI / UX Design & Prototyping",
      "DevOps & Cloud Infrastructure Mgt",
      "Software Development",
    ],
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-[3rem] lg:px-[3rem] px-[1rem]">
      <SectionComponent
        subheading="SERVICES"
        heading="What We Offer"
        text="Tailored outsourcing solutions for businesses seeking quality and savings—blending UK excellence with cost-effective Nigerian teams for optimal performance."
      />

      <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-3">
        {cardItems.map(({ img, aosDelay, title, bullets }) => (
          <div
            key={title}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay={aosDelay}
            className="rounded-xl bg-[#1E1E1E]"
          >
            <img
              src={img}
              alt=""
              className="h-[250px] w-full rounded-t-[1rem] object-cover"
            />

            <div className="px-4 pt-4 pb-8">
              <h3 className="border-b border-[#737373] pb-4 text-lg font-medium leading-snug lg:w-4/5">
                {title}
              </h3>

              <ul className="mt-6 space-y-4">
                {bullets.map((text) => (
                  <li key={text} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                      <LogosGoodTickIcon />
                    </span>
                    <p className="text-sm leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[2rem] flex justify-center">
        <Link to={'/jobs'} className="rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem] mt-[2rem]">
          <p className="text-[95%]">Join Our Talent Pool</p>
          <span className="flex justify-center items-center bg-white rounded-full w-[35px] h-[35px]">
            <ArrowRight color={"#141416"} />
          </span>
        </Link>
      </div>
    </section>
  );
}
