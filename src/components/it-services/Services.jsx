import React, { useEffect, useState } from "react";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const animationOrder = ["it-animate1", "it-animate2", "it-animate3", "it-animate4"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % animationOrder.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="xui-pt-3 xui-pos-relative xui-max-w-800 xui-w-fluid-100 xui-mx-auto xui-d-flex">
      <div className="it-service-left">
        <div
          className={`it-service xui-text-right xui-mt-4 xui-pos-relative it-animate1 ${
            activeIndex === 0 ? "animate-fade-in" : "opacity-30"
          }`}
        >
          <h3 className="xui-font-sz-140 xui-font-w-500">IT Support</h3>
          <p className="xui-font-sz-90 xui-mt-half">
            Offering comprehensive IT support to ensure your systems run
            smoothly, minimize downtime, & optimize performance, allowing your
            business to focus on growth and innovation.
          </p>
        </div>
        <div
          className={`it-service mt-[18rem] xui-text-right xui-pos-relative it-animate3 ${
            activeIndex === 2 ? "animate-fade-in" : "opacity-30"
          }`}
        >
          <h3 className="xui-font-sz-140 xui-font-w-500">IT Support</h3>
          <p className="xui-font-sz-90 xui-mt-half">
            Offering comprehensive IT support to ensure your systems run
            smoothly, minimize downtime, & optimize performance, allowing your
            business to focus on growth and innovation.
          </p>
        </div>
      </div>
      <div className="line-animate-holder">
        <div className="line-animate">
          <span className="top-[68px]"></span>
          <span className="top-[290px]"></span>
          <span className="top-[468px]"></span>
          <span className="top-[678px]"></span>
        </div>
      </div>
      <div className="it-service-right">
        <div
          className={`it-service mt-[18rem] xui-pos-relative it-animate2 ${
            activeIndex === 1 ? "animate-fade-in" : "opacity-30"
          }`}
        >
          <h3 className="xui-font-sz-140 xui-font-w-500">IT Support</h3>
          <p className="xui-font-sz-90 xui-mt-half">
            Offering comprehensive IT support to ensure your systems run
            smoothly, minimize downtime, & optimize performance, allowing your
            business to focus on growth and innovation.
          </p>
        </div>
        <div
          className={`it-service mt-[17rem] xui-pos-relative it-animate4 ${
            activeIndex === 3 ? "animate-fade-in" : "opacity-30"
          }`}
        >
          <h3 className="xui-font-sz-140 xui-font-w-500">IT Support</h3>
          <p className="xui-font-sz-90 xui-mt-half">
            Offering comprehensive IT support to ensure your systems run
            smoothly, minimize downtime, & optimize performance, allowing your
            business to focus on growth and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
