import React, { useEffect, useRef, useState } from 'react';

/**
 * Services section – slower auto‑scroll (6.5 s per slide)
 * TailwindCSS + React 18 + TSX
 */

const animationOrder = [0, 1, 2, 3];
const lineHeights = ['90px', '316px', '542px', '765px']; // dot/line positions
const SLIDE_DELAY = 6500; // ⇠ increase here for slower speed (ms)

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activatedIndexes, setActivatedIndexes] = useState<number[]>([0]);

  // refs to individual service blocks for scrollIntoView
  const serviceRefs = useRef<HTMLDivElement[]>([]);
  const contactRef = useRef<HTMLElement | null>(null);
  const [isContactVisible, setIsContactVisible] = useState(false);

  /* ───────── observe contact section ───────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => setIsContactVisible(entry.isIntersecting),
        { threshold: 0.3 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
        const el = contactRef.current;      // capture current ref
        if (el) observer.unobserve(el);     // perform cleanup
        // nothing is returned → TypeScript sees `void`
    };
    }, []);


  /* ───────── autoplay logic ───────── */
  useEffect(() => {
    if (isContactVisible) return; // pause when bottom section visible

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        if (next < animationOrder.length) {
          setActivatedIndexes((idx) => [...idx, next]);
          return next;
        }
        // reached the end – pause a bit then reset
        setTimeout(() => {
          setActivatedIndexes([0]);
          setActiveIndex(0);
        }, 1800);
        return prev;
      });
    }, SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [isContactVisible]);

  /* ───────── scroll active block into view ───────── */
  useEffect(() => {
    if (isContactVisible) return;
    const ref = serviceRefs.current[activeIndex];
    ref?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [activeIndex, isContactVisible]);

  /* ───────── JSX ───────── */
  return (
    <>
      <section className="py-12 max-w-[980px] w-full mx-auto flex relative">
        {/* Left column */}
        <div className="relative w-[42.3%]">
          {/* Service 0 */}
          <div
            ref={(el) => el && (serviceRefs.current[0] = el)}
            className="absolute right-0 top-[90px] text-right opacity-100 transition-opacity duration-[1500ms]"
          >
            <h3 className="text-[1.5rem] lg:text-[2.2rem] font-semibold">
              Information Technology Support
            </h3>
            <p className="text-sm lg:text-base mt-2 leading-relaxed">
              Offering comprehensive IT support to ensure your systems run smoothly.
            </p>
          </div>
          {/* Service 2 */}
          <div
            ref={(el) => el && (serviceRefs.current[2] = el)}
            className={`absolute right-0 top-[542px] text-right transition-opacity duration-[1500ms] ${
              activatedIndexes.includes(2) ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <h3 className="text-[1.5rem] lg:text-[2.2rem] font-semibold">
              UI/UX Design & Prototyping
            </h3>
            <p className="text-sm lg:text-base mt-2 leading-relaxed">
              Professional UI/UX design & prototyping services that transform ideas into intuitive digital experiences.
            </p>
          </div>
        </div>

        {/* vertical timeline */}
        <div className="w-[10%] flex justify-center h-[900px] relative">
          <div className="w-[2px] bg-neutral-500 relative">
            <div
              className="absolute w-full bg-white transition-all ease-in-out duration-[1500ms]"
              style={{ height: lineHeights[activeIndex] }}
            />
            {animationOrder.map((_, i) => (
              <span
                key={i}
                className={`w-5 h-5 rounded-full absolute left-1/2 -translate-x-1/2 border-2 transition-colors duration-700 ${
                  activatedIndexes.includes(i)
                    ? 'bg-white border-white'
                    : 'bg-neutral-500 border-neutral-500'
                }`}
                style={{ top: lineHeights[i] }}
              />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative w-[42.3%]">
          {/* Service 1 */}
          <div
            ref={(el) => el && (serviceRefs.current[1] = el)}
            className={`absolute left-0 top-[316px] transition-opacity duration-[1500ms] ${
              activatedIndexes.includes(1) ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <h3 className="text-[1.5rem] lg:text-[2.2rem] font-semibold">
              Web & Mobile App Development
            </h3>
            <p className="text-sm lg:text-base mt-2 leading-relaxed">
              Developing intuitive, high-performance mobile applications tailored to business needs.
            </p>
          </div>
          {/* Service 3 */}
          <div
            ref={(el) => el && (serviceRefs.current[3] = el)}
            className={`absolute left-0 top-[765px] transition-opacity duration-[1500ms] ${
              activatedIndexes.includes(3) ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <h3 className="text-[1.5rem] lg:text-[2.2rem] font-semibold">
              DevOps & Cloud Engineering
            </h3>
            <p className="text-sm lg:text-base mt-2 leading-relaxed">
              Optimize your digital landscape with our DevOps and Cloud Management services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section (pauses auto‑scroll when in view) */}
      {/* <section ref={contactRef}>
        <Contact />
      </section> */}
    </>
  );
};

export default Services;
