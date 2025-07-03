import { LogosGoodTickIcon } from "../icons";
import SectionComponent from "../SectionComponent";

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
    </section>
  );
}
