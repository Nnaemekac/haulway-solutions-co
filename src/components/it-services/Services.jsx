import React, { useEffect, useState, useRef } from "react";

const Services = () => {
  const animationOrder = [
    "it-animate1",
    "it-animate2",
    "it-animate3",
    "it-animate4",
  ];
  const lineHeights = ["90px", "316px", "542px", "765px"]; // Corresponding heights
  const [activeIndex, setActiveIndex] = useState(0);
  const [activatedIndexes, setActivatedIndexes] = useState([0]); // Stores activated indexes
  const serviceRefs = useRef([]); // Array of refs for scrolling

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex < animationOrder.length) {
          setActivatedIndexes((prevIndexes) => [...prevIndexes, nextIndex]);
          return nextIndex;
        } else {
          // Reset animation after a short delay
          setTimeout(() => {
            setActivatedIndexes([0]);
            setActiveIndex(0);
          }, 1500); // Adjust delay if needed
          return prev;
        }
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Scroll to the active service
  useEffect(() => {
    if (serviceRefs.current[activeIndex]) {
      serviceRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex]);

  return (
    <div className="xui-pt-3 xui-pb-6 xui-pos-relative xui-lg-max-w-800 xui-w-fluid-100 xui-mx-auto xui-d-flex">
      {/* Left Services */}
      <div className="it-service-left xui-pos-relative">
        <div
          ref={(el) => (serviceRefs.current[0] = el)}
          className="it-service xui-pos-absolute right-[0] top-[90px] xui-text-right active-service"
        >
          <h3 className="xui-lg-font-sz-140 xui-font-sz-95 xui-font-w-500">
            Information Technology Support
          </h3>
          <p className="xui-lg-font-sz-90 xui-font-sz-70 xui-mt-half xui-line-height-1-half">
            Offering comprehensive IT support to ensure your systems run smoothly.
          </p>
        </div>

        <div
          ref={(el) => (serviceRefs.current[2] = el)}
          className={`it-service xui-pos-absolute right-[0] top-[542px] xui-text-right ${
            activatedIndexes.includes(2) ? "active-service" : "inactive-service"
          }`}
        >
          <h3 className="xui-lg-font-sz-140 xui-font-sz-95 xui-font-w-500">
            UI/UX Design & Prototyping
          </h3>
          <p className="xui-lg-font-sz-90 xui-font-sz-70 xui-mt-half xui-line-height-1-half">
            Professional UI/UX design & prototyping services that transform ideas into intuitive digital experiences.
          </p>
        </div>
      </div>

      {/* Line Animation */}
      <div className="line-animate-holder">
        <div className="line-animate">
          <div
            className="line-progress"
            style={{
              height: lineHeights[activeIndex], // Line grows progressively
            }}
          ></div>
          {animationOrder.map((_, index) => (
            <span
              key={index}
              className={`${activatedIndexes.includes(index) ? "filled-circle" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Right Services */}
      <div className="it-service-right xui-pos-relative">
        <div
          ref={(el) => (serviceRefs.current[1] = el)}
          className={`it-service xui-pos-absolute left-[0] top-[316px] ${
            activatedIndexes.includes(1) ? "active-service" : "inactive-service"
          }`}
        >
          <h3 className="xui-lg-font-sz-140 xui-font-sz-95 xui-font-w-500">
            Web & Mobile App Development
          </h3>
          <p className="xui-lg-font-sz-90 xui-font-sz-70 xui-mt-half xui-line-height-1-half">
            Developing intuitive, high-performance mobile applications tailored to business needs.
          </p>
        </div>

        <div
          ref={(el) => (serviceRefs.current[3] = el)}
          className={`it-service xui-pos-absolute left-[0] top-[765px] ${
            activatedIndexes.includes(3) ? "active-service" : "inactive-service"
          }`}
        >
          <h3 className="xui-lg-font-sz-140 xui-font-sz-95 xui-font-w-500">
            DevOps & Cloud Engineering
          </h3>
          <p className="xui-lg-font-sz-90 xui-font-sz-70 xui-mt-half xui-line-height-1-half">
            Optimize your digital landscape with our DevOps and Cloud Management services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
