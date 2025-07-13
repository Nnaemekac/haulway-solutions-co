import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'iconsax-react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BasilStackOutline, BitcoinIconsStarFilled, FluentWindowNewRegular, SimpleIconsBlueprint, TwotoneSpeed } from '../components/icons';
import gsap from 'gsap';
import { CheckmarkFilled, WarningFilled } from '@carbon/icons-react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
gsap.registerPlugin(ScrollTrigger);

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  tools: string;
  links: string;
  description: string;
};

const StackCheck = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, watch
  } = useForm<FormData>();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const whyChouseUsSection = useRef(null);
  const setUpForWork = useRef(null);
  const qualification = useRef(null);
  const target = useRef(null);
  const certification = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const wordCounts = {
    links: watch('links') ? watch('links').trim().split(/\s+/).filter(Boolean).length : 0,
    description: watch('description') ? watch('description').trim().split(/\s+/).filter(Boolean).length : 0,
  };
  const LINK_MAX_WORDS = 360;
  const DESC_MAX_WORDS = 860;
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const quoteText = "Grascope didn't just build fast — they helped us rethink the entire process.";
  // const sectionRef = useRef<HTMLDivElement>(null);
  // const card1Ref = useRef<HTMLDivElement>(null);
  // const card2Ref = useRef<HTMLDivElement>(null);
  // const card3Ref = useRef<HTMLDivElement>(null);
  // const animationTriggered = useRef(false);

  // useGSAP(() => {
  //   gsap.set([card2Ref.current, card3Ref.current], {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     rotation: 0,
  //     zIndex: -1,
  //     scale: 0.95,
  //     opacity: 0.8,
  //   });
  //   ScrollTrigger.create({
  //     trigger: sectionRef.current,
  //     start: "top 80%",
  //     end: "top 20%",
  //     onEnter: () => {
  //       if (animationTriggered.current) return;
  //       animationTriggered.current = true;
        
  //       // 3 second delay before animation
  //       setTimeout(() => {
  //         const tl = gsap.timeline();
  //         tl.to(card2Ref.current, {
  //           rotation: -15,
  //           x: -40,
  //           y: 20,
  //           duration: 1.5,
  //           ease: "elastic.out(1, 0.5)"
  //         })
  //         .to(card3Ref.current, {
  //           rotation: 15,
  //           x: 40,
  //           y: 20,
  //           duration: 1.5,
  //           ease: "elastic.out(1, 0.5)"
  //         }, "<");
  //       }, 1200); // 3 second delay
  //     },
  //     onLeaveBack: () => {
  //       animationTriggered.current = false;
  //       gsap.to([card2Ref.current, card3Ref.current], {
  //         rotation: 0,
  //         x: 0,
  //         y: 0,
  //         duration: 0.8,
  //         ease: "power2.inOut"
  //       });
  //     }
  //   });
  // }, { scope: sectionRef });
  useGSAP(() => {
    // Split the text into characters for the typewriter effect
    if (quoteRef.current) {
      quoteRef.current.textContent = ''; // Clear the text initially
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          // Create a timeline for the typewriter effect
          const tl = gsap.timeline();
          const chars = quoteText.split('');
          
          chars.forEach((_, i) => {
            tl.to(quoteRef.current, {
              duration: 0.05,
              onUpdate: () => {
                if (quoteRef.current) {
                  quoteRef.current.textContent = quoteText.substring(0, i + 1);
                }
              }
            }, i * 0.05); // Adjust typing speed here (0.05s per character)
          });
        },
        once: true // Only animate once
      });
    }
  }, { scope: sectionRef });

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: whyChouseUsSection.current,
            start: "bottom bottom", // Start when the top of the trigger element reaches the top of the viewport
            end: "bottom+=50% bottom-=30%", // Extend the end point to make the scroll last longer
            scrub: 2, // Increase scrub value to smooth out the scroll
            markers: false,
            pin: true
        }
    });

    tl.to(setUpForWork.current, {
        filter: "blur(4px)",
        scale: 0.92,
        duration: 4 // Increase duration to make this animation last longer
    })
    .to(qualification.current, {
        bottom: "0",
        duration: 4 // Increase duration to make this animation last longer
    }, "<") // "<" makes this animation start at the same time as the previous one
    .to(target.current, {
        bottom: "0",
        duration: 4 // Increase duration to make this animation last longer
    })
    .to(qualification.current, {
        filter: "blur(4px)",
        scale: 0.92,
        duration: 4 // Increase duration to make this animation last longer
    }, "<")
    .to(certification.current, {
        bottom: "0",
        duration: 4 // Increase duration to make this animation last longer
    })
    .to(target.current, {
        filter: "blur(4px)",
        scale: 0.92,
        duration: 4 // Increase duration to make this animation last longer
    }, "<"); // This animation also starts at the same time as the previous one
  });

   const scrollToFormTop = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setSubmitError(null);
    const newData = {data, "tools": data.tools || undefined};
    console.log(newData.data);
    
    try {
      const response = await axios.post(
        'https://grascoperoi-84aafe9da70d.herokuapp.com/api/v1/bpo/stack-data',
        newData.data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        console.log(response);
        
        setSubmitSuccess(true);
        reset();
      }
    } catch (error) {
      console.log(error);
      
      if (axios.isAxiosError(error) && error.response?.data?.validationErrors) {
      const validationErrors = error.response.data.validationErrors;
      const errorMessages = validationErrors.map((err: any) => 
        `${err.field}: ${err.errors.join(', ')}`
      ).join('\n');
      setSubmitError(errorMessages);
    } else {
      setSubmitError('Failed to submit your application. Please try again.');
    }
    } finally {
      setIsLoading(false);
      scrollToFormTop();
    }
  };

  return (
    <div className="">
      <section className="overflow-hidden lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
        <div className="relative lg:text-center text-left z-[1] pt-[10rem]">
          <h1 className="lg:text-[350%] text-[250%] font-medium lg:w-[70%] w-full mx-auto capitalize">
            You built the product. Now let's build the system behind it.
          </h1>
          <p className="text-[90%] lg:w-[50%] w-full mx-auto capitalize">
            StackCheck™ is our expert-led audit that shows where your tools are failing, what they’re costing you, and how to build leaner, faster systems — without unnecessary complexity. And yes, it’s completely free.
          </p>
          <a
            href="#stack-check"
            className="rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem] mt-[2rem]"
          >
            Start My StackCheck™
            <span className="w-[40px] h-[40px] bg-[#F5FFFF] rounded-full flex items-center justify-center">
              <ArrowRight size={19} color="#159B48" />
            </span>
          </a>
        </div>
          <section ref={whyChouseUsSection} className="py-[3rem] lg:py-[4rem] relative overflow-hidden">
            <div className="relative">

              {/* Card 1 */}
              <div ref={setUpForWork} className="relative mt-[2rem] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[2rem] text-white p-[1rem] lg:p-[2rem] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(111.85deg,rgba(253,253,253,0.075)_5.74%,rgba(253,253,253,0.05)_68.32%)] before:backdrop-blur-[33.858px] before:shadow-[0px_6.77px_40.63px_-5.08px_rgba(0,0,0,0.2)] before:rounded-[2rem] before:-z-20 after:content-[''] after:absolute after:inset-0 after:bg-[#4B5E52] after:opacity-20 after:mix-blend-overlay after:rounded-[2rem] after:-z-10">
                <div className="relative z-10 min-h-[400px] h-full flex flex-col">
                  <div>
                    <h1 className="text-[200%] lg:text-[200%] font-[600] text-[#F5FFFF]">
                      DevOps &amp; Cloud Engineering
                    </h1>
                    <p className="mt-[1rem] opacity-80 lg:text-[105%] leading-[2rem] lg:w-[90%] text-[#F5FFFF] w-full">
                      Optimize your digital landscape with our DevOps and Cloud Management
                      services—seamless deployments, robust security, and scalable performance.
                    </p>
                  </div>
                  <div className="grow" />
                  <div>
                    <Link to="https://calendly.com/grascope" target='_blank' className="py-[1rem] px-[2rem] border border-white inline-block rounded-[2rem]">Get Custom Quote</Link>
                  </div>
                </div>
                <div className="relative z-10 rounded-[1rem] bg-center bg-cover h-full bg-[url('/static/stack-check/dev-ops.png')]"/>
              </div>


              {/* Card 2 */}
              <div ref={qualification} className="ca-why-us-section relative mt-[2rem] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[2rem] text-white p-[1rem] lg:p-[2rem] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(111.85deg,rgba(253,253,253,0.075)_5.74%,rgba(253,253,253,0.05)_68.32%)] before:backdrop-blur-[33.858px] before:shadow-[0px_6.77px_40.63px_-5.08px_rgba(0,0,0,0.2)] before:rounded-[2rem] before:-z-20 after:content-[''] after:absolute after:inset-0 after:bg-[#4B5E52] after:opacity-20 after:mix-blend-overlay after:rounded-[2rem] after:-z-10">
                <div className=" min-h-[400px] h-full flex flex-col">
                  <div>
                    <h1 className="text-[200%] lg:text-[200%] font-[600] text-[#F5FFFF]">Information Technology Support</h1>
                    <p className="mt-[1rem] opacity-80 lg:text-[105%] leading-[2rem] lg:w-[90%] text-[#F5FFFF]">
                      Offering comprehensive IT support to ensure your systems run smoothly, minimize downtime, & optimize performance, allowing your business to focus on growth and innovation.
                    </p>
                  </div>
                  <div className='grow'></div>
                  <div>
                    <Link to={'https://calendly.com/grascope'} target='_blank' className='py-[1rem] px-[2rem] border border-white inline-block rounded-[2rem]'>Get Custom Quote</Link>
                  </div>
                </div>
                <div className="bg-center bg-cover rounded-[1rem] h-full bg-[url('/static/stack-check/information-tech-support.png')]"></div>
              </div>

              {/* Card 3 */}
              <div ref={target} className="ca-why-us-section relative mt-[2rem] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[2rem] text-white p-[1rem] lg:p-[2rem] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(111.85deg,rgba(253,253,253,0.075)_5.74%,rgba(253,253,253,0.05)_68.32%)] before:backdrop-blur-[33.858px] before:shadow-[0px_6.77px_40.63px_-5.08px_rgba(0,0,0,0.2)] before:rounded-[2rem] before:-z-20 after:content-[''] after:absolute after:inset-0 after:bg-[#4B5E52] after:opacity-20 after:mix-blend-overlay after:rounded-[2rem] after:-z-10">
                <div className=" min-h-[400px] h-full flex flex-col">
                  <div>
                    <h1 className="text-[200%] lg:text-[200%] font-[600] text-[#F5FFFF]">UI/UX Design & Prototyping</h1>
                    <p className="mt-[1rem] opacity-80 lg:text-[105%] leading-[2rem] lg:w-[90%] text-[#F5FFFF]">
                      We offer professional UI/UX design & prototyping services that transform ideas into intuitive and engaging digital experiences, emphasizing user-centric design.
                    </p>
                  </div>
                  <div className='grow'></div>
                  <div>
                    <Link to={'https://calendly.com/grascope'} target='_blank' className='py-[1rem] px-[2rem] border border-white inline-block rounded-[2rem]'>Get Custom Quote</Link>
                  </div>
                </div>
                <div className="bg-center bg-cover rounded-[1rem] h-full bg-[url('/static/stack-check/ui-ux.png')]"></div>
              </div>

              {/* Card 4 */}
              <div ref={certification} className="ca-why-us-section relative mt-[2rem] grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[2rem] text-white p-[1rem] lg:p-[2rem] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(111.85deg,rgba(253,253,253,0.075)_5.74%,rgba(253,253,253,0.05)_68.32%)] before:backdrop-blur-[33.858px] before:shadow-[0px_6.77px_40.63px_-5.08px_rgba(0,0,0,0.2)] before:rounded-[2rem] before:-z-20 after:content-[''] after:absolute after:inset-0 after:bg-[#4B5E52] after:opacity-20 after:mix-blend-overlay after:rounded-[2rem] after:-z-10">
                <div className=" min-h-[400px] h-full flex flex-col">
                  <div>
                    <h1 className="text-[200%] lg:text-[200%] font-[600] text-[#F5FFFF]">Web & Mobile App Development</h1>
                    <p className="mt-[1rem] opacity-80 lg:text-[105%] leading-[2rem] lg:w-[90%] text-[#F5FFFF]">
                     Designing and developing intuitive, high-performance mobile applications tailored to meet your business needs, enhance user engagement, and drive digital growth.
                    </p>
                  </div>
                  <div className='grow'></div>
                  <div>
                    <Link to={'https://calendly.com/grascope'} className='py-[1rem] px-[2rem] border border-white inline-block rounded-[2rem]'>Get Custom Quote</Link>
                  </div>
                </div>
                <div className="bg-center bg-cover rounded-[1rem] h-full bg-[url('/static/stack-check/web-and-mobile.png')]"></div>
              </div>

            </div>
          </section>

      </section>
      <section className="lg:py-20 py-[2rem] lg:px-[3rem] px-[1rem]">
        <div className='flex flex-wrap'>
          <div className='lg:basis-7/12 base-full '>
            <h2 className="text-[220%] capitalize lg:w-[80%] w-full font-[600] mb-6 leading-[3.5rem]">
              When Growth Outpaces Systems, StackCheck™ Brings the Clarity
            </h2>
            <p className="mt-[1rem] opacity-80 lg:text-[105%] leading-[2rem] lg:w-[90%] text-[#F5FFFF] mt-[1ren]">When your systems lag behind your growth, everything feels harder than it should. StackCheck™ was built for teams like yours — who’ve launched, shipped, or scaled — but now need cleaner execution behind the scenes</p>
          </div>
          <div className='lg:basis-5/12 base-full lg:mt-[0] mt-[2rem]'>
              <div className="grid md:grid-cols-1 gap-y-[1.5rem]">
                {[
                  {
                    text: "Your workflows are scattered across tools that don’t sync",
                  },
                  {
                    text: "Your workflows are scattered across tools that don’t sync",
                  },
                  {
                    text: "Your workflows are scattered across tools that don’t sync",
                  },
                ].map((service, index) => {
                  return (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="relative flex items-center h-[72px] rounded-[8px] overflow-hidden z-[1] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(111.85deg,rgba(253,253,253,0.075)_5.74%,rgba(253,253,253,0.05)_68.32%)] before:backdrop-blur-[26.5403px] before:shadow-[0px_5.30806px_31.8483px_-3.98104px_rgba(0,0,0,0.2)] before:rounded-[8px] before:-z-20 after:content-[''] after:absolute after:bg-[#4B5E52] after:opacity-20 after:mix-blend-overlay after:rounded-[8px] after:-z-10">
                      <span className="relative inline-block w-[18px] h-full rounded-l-[8px] overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(111.85deg,rgba(21,152,72,0.5)_5.74%,rgba(21,152,72,0.3)_68.32%)] before:backdrop-blur-[26.5403px] before:shadow-[0px_5.30806px_31.8483px_-3.98104px_rgba(0,0,0,0.2)] before:rounded-l-[8px] before:-z-20 after:content-[''] after:absolute after:inset-0 after:bg-[#159B48] after:opacity-20 after:mix-blend-overlay after:rounded-l-[8px] after:-z-10"/>
                      <p className="pl-[1.5rem] leading-relaxed">{service.text}</p>
                    </div>
                  )
                })}
              </div>
          </div>
        </div>
      </section>
      <section className="lg:py-20 py-[2rem] lg:px-[3rem] px-[1rem]">
        <div className='flex items-center flex-wrap'>
          <div className='lg:basis-7/12 base-full '>
            <h2 className="text-[220%] capitalize lg:w-[80%] w-full font-[600] mb-6 leading-[3.5rem]">
              StackCheck™ — Audit Systems, Build Smarter, Scale Faster
            </h2>
            <p className="mt-[1rem] opacity-80 lg:text-[105%] leading-[2rem] lg:w-[90%] text-[#F5FFFF] mt-[1ren]">StackCheck™ is Grascope’s systems audit for technical founders, ops teams, and product leads who want to scale with smart, streamlined infrastructure.</p>
            <p className="mt-[1rem] opacity-80 lg:text-[105%] leading-[2rem] lg:w-[90%] text-[#F5FFFF] mt-[1ren]">We don’t just tell you what’s broken. We show you how we’d build it better — fast.</p>
          </div>
          <div className="lg:mt-[0] mt-[2rem] relative z-[1] lg:basis-5/12 w-full flex justify-center overflow-visible before:content-[''] before:absolute lg:before:w-[410px] before:w-[300px] lg:before:h-[410px] before:h-[300px] before:rounded-full before:bg-[#00752B] before:blur-[434px] before:filter before:top-0 before:left-1/2 before:-translate-x-1/2 before:-z-20 after:content-[''] after:absolute lg:after:w-[410px] after:w-[300px] lg:after:h-[410px] after:h-[300px] after:rounded-full after:bg-[url('/static/stack-check/stroke-line.png')] after:bg-contain after:bg-center after:bg-no-repeat after:top-0 after:left-1/2 after:-translate-x-1/2 after:-z-10">
            <img src="/static/stack-check/scope-glass.png" alt="" className="max-w-[150px] w-full mx-auto relative z-10"/>
          </div>
        </div>
      </section>
      <section className="pt-20 lg:px-[3rem] px-[1rem]">
        <h2 className="lg:text-[260%] text-[200%] capitalize font-[600] mb-12 text-center">WHAT YOU’LL GET</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14 mb-12 max-w-[1000px] w-full mx-auto">
                {[
                  {
                    title: "Stack & Workflow Mapping",
                    description: "We deliver a comprehensive, mapped review of your current tech stack and workflows, pinpointing bottlenecks and uncovering hidden efficiencies.",
                    icon: BasilStackOutline
                  },
                  {
                    title: "Quick Wins & Integrations",
                    description: "Receive targeted “quick wins” alongside tailored integration recommendations to boost performance with minimal disruption.",
                    icon: FluentWindowNewRegular
                  },
                  {
                    title: "Visual Rebuild Blueprint",
                    description: "Get a clear, visual breakdown showing exactly how Grascope would rebuild or streamline your system for smarter, more scalable operations.",
                    icon: SimpleIconsBlueprint
                  },
                  {
                    title: "Fast Delivery",
                    description: "Your full audit and action plan—in hand, fully prioritized, and ready to execute with clear next steps—within just 72 hours.",
                    icon: TwotoneSpeed
                  },
                ].map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="relative p-[2rem] z-[1] rounded-[24px] overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(111.85deg,rgba(253,253,253,0.075)_5.74%,rgba(253,253,253,0.05)_68.32%)] before:backdrop-blur-[30.9521px] before:shadow-[0px_6.19041px_37.1425px_-4.64281px_rgba(0,0,0,0.2)] before:rounded-[24px] before:-z-20 after:content-[''] after:absolute after:bg-[#4B5E52] after:opacity-20 after:mix-blend-overlay after" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className='flex items-center'>
                        <div className="w-14 h-14 rounded-[.5rem] relative inline-block text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay before:rounded-inherit flex items-center justify-center">
                          <IconComponent />
                        </div>
                        <h3 className="w-[calc(100%-14px)] pl-[1.5rem] text-[140%] font-medium">{service.title}</h3>
                      </div>
                      <p className="leading-relaxed mt-[3.5rem]">{service.description}</p>
                    </div>
                  )
                })}
              </div>
      </section>
      <section id='stack-check' ref={formRef} className="lg:py-20 py-[2rem] lg:px-[3rem] px-[1rem]">
        <h2 className="lg:text-[450%] text-[250%] text-[#737373] capitalize font-[600]">Start Your <span className='text-white'>StackCheck</span> Audit</h2>
        <p className="leading-relaxed mt-[1.5rem] lg:w-[60%] w-full">
          Not sure what your stack includes or what's wrong? No problem — just describe what you're currently using, or share your product's goal. We'll take it from there.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
          {submitError && (
            <div className="flex items-start p-4 mb-6 text-[#991b1b] rounded-lg bg-[#fef2f2]">
              <WarningFilled className="shrink-0 inline w-5 h-5 me-3 mt-0.5" />
              <span className="text-sm font-medium">{submitError}</span>
            </div>
          )}

          {submitSuccess && (
            <div className="flex items-start p-4 mb-6 text-[#065F46] rounded-lg bg-[#ECFDF5]">
              <CheckmarkFilled className="shrink-0 inline w-5 h-5 me-3 mt-0.5" />
              <div>
                <h3 className="font-bold">Thank you for your submission!</h3>
                <p className="text-sm">Your StackCheck request has been received. We'll review your information and get back to you soon.</p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="inline-flex text-white mb-2">
                First Name <BitcoinIconsStarFilled />
              </label>
              <input
                {...register('firstName', { required: 'First name is required' })}
                className={`w-full p-3 text-[#FFF] rounded-lg h-[80px] bg-[#222222] border placeholder:text-[#737373] placeholder:text-[#737373] ${errors.firstName ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="First Name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
            </div>

            <div>
              <label className="inline-flex text-white mb-2">
                Last Name <BitcoinIconsStarFilled />
              </label>
              <input
                {...register('lastName', { required: 'Last name is required' })}
                className={`w-full p-3 text-[#FFF] rounded-lg h-[80px] bg-[#222222] border placeholder:text-[#737373] placeholder:text-[#737373] ${errors.lastName ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Last name"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
            </div>
            <div className="mb-6">
              <label className="inline-flex text-white mb-2">
                Email <BitcoinIconsStarFilled />
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={`w-full p-3 text-[#FFF] rounded-lg h-[80px] bg-[#222222] border placeholder:text-[#737373] placeholder:text-[#737373] ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <label className="inline-flex text-white mb-2">
                Company Name <BitcoinIconsStarFilled />
              </label>
              <input
                {...register('companyName', { required: 'Company name is required' })}
                className={`w-full p-3 text-[#FFF] rounded-lg h-[80px] bg-[#222222] border placeholder:text-[#737373] placeholder:text-[#737373] ${errors.companyName ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Company Name"
              />
              {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
            </div>
          </div>

          <div className="mb-6">
            <label className="inline-flex text-white mb-2">
              Tools (Optional)
            </label>
            <textarea
              {...register('tools')}
              className={`w-full p-3 text-[#FFF] rounded-lg h-[160px] bg-[#222222] border placeholder:text-[#737373] ${errors.tools ? 'border-red-500' : 'border-gray-600'}`}
              placeholder="What tools are you currently using (if any)?"
            />
          </div>

          <div className="mb-6">
            <div className='flex items-center justify-between mb-2'>
              <label className="inline-flex text-white">
                Links <BitcoinIconsStarFilled />
              </label>
              <span>{wordCounts.links}/{LINK_MAX_WORDS} words</span>
            </div>
            <textarea
              {...register('links')}
              className="w-full p-3 text-[#FFF] rounded-lg h-[160px] bg-[#222222] border placeholder:text-[#737373] placeholder:text-[#737373] border-gray-600"
              placeholder="Link to your product website or social media page (if none, briefly describe your product or business)"
              maxLength={LINK_MAX_WORDS * 16}
            />
          </div>

          <div className="mb-6">
            <div className='flex items-center justify-between mb-2'>
              <label className="inline-flex text-white">
                Description <BitcoinIconsStarFilled />
              </label>
              <span>{wordCounts.description}/{DESC_MAX_WORDS} words</span>
            </div>
            <textarea
              {...register('description', { required: 'Description is required' })}
              rows={5}
              className={`w-full p-3 text-[#FFF] rounded-lg h-[360px] bg-[#222222] border placeholder:text-[#737373] placeholder:text-[#737373] ${errors.description ? 'border-red-500' : 'border-gray-600'}`}
              placeholder="What challenge are you facing? (Or describe what your system is meant to do)"
              maxLength={DESC_MAX_WORDS * 16}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem]"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                Submit My StackCheck™
                <span className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'><ArrowRight color='#141416' /></span>
              </>
            )}
          </button>
        </form>
      </section>
      <section className="lg:py-20 py-[2rem] lg:px-[3rem] px-[1rem]">
      <div className='flex items-center flex-wrap'>
        <div className="relative lg:basis-6/12 basis-full overflow-visible ">
          {/* <div className="relative w-[350px] h-[400px]">
            <div ref={card1Ref} className="absolute w-full h-full rounded-[1rem] p-6 flex flex-col justify-between bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] backdrop-blur-[3.6338px]">
              <img src="/static/stack-check/begorah.png" alt="" />
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">System Audit</h3>
                <div className='flex items-center justify-between'>
                  <p className="text-white/80 text-sm">EduTech - <br />Website Development</p>
                  <span className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'><ArrowUpRight color='#525955' /></span>
                </div>
              </div>
            </div>
            
            <div ref={card2Ref} className="absolute w-full h-full rounded-[1rem] p-6 flex flex-col justify-between bg-[#2D3A34]">
              <img src="/static/stack-check/sunflower.png" alt="" />
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">System Audit</h3>
                <div className='flex items-center justify-between'>
                  <p className="text-white/80 text-sm">EduTech - <br />Website Development</p>
                  <span className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'><ArrowUpRight color='#525955' /></span>
                </div>
              </div>
            </div>
            <div ref={card3Ref} className="absolute w-full h-full rounded-[1rem] p-6 flex flex-col justify-between bg-[#2D3A34]">
              <img src="/static/stack-check/begorah.png" alt="" />
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">System Audit</h3>
                <div className='flex items-center justify-between'>
                  <p className="text-white/80 text-sm">EduTech - <br />Website Development</p>
                  <span className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'><ArrowUpRight color='#525955' /></span>
                </div>
              </div>
            </div>
          </div> */}
          <img src="/static/stack-check/case-study.png" alt="" />
        </div>
        
        <div className='lg:basis-6/12 base-full mt-10 lg:mt-0 lg:pl-[2rem] pl-[0]'>
          <h2 className="text-[220%] capitalize lg:w-[80%] w-full font-[600] mb-6 leading-[3.5rem]">
            See what we’ve done
          </h2>
          <p className="mt-[1rem] opacity-80 lg:text-[105%] leading-[2rem] lg:w-[90%] text-[#F5FFFF]">
            A founder came to us with a messy internal flow and a 5-day launch deadline. We restructured the stack, rebuilt key flows, and shipped a working MVP in 72 hours.
          </p>
          <Link to={'/blogs'} className="rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between gap-[1.5rem] py-[0.6rem] pr-[0.6rem] pl-[1.2rem] mt-[1.5rem]">
            Explore Case Study
            <span className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'><ArrowRight color='#141416' /></span>
          </Link>
        </div>
      </div>
    </section>
    <section ref={sectionRef} className="lg:py-20 py-[2rem] lg:px-[3rem] px-[1rem]">
        <div className='text-center'>
          <h2 className="lg:text-[250%] text-[200%] capitalize font-[600] lg:w-[80%] w-full mx-auto">This isn’t just an audit — it’s the first step toward building the right systems for your team.</h2>
          <p className="leading-relaxed mt-[1rem] lg:w-[60%] w-full mx-auto">At Grascope, we co-build — from audit to prototype to production. You get lean execution, sharp UI, and infrastructure that actually works for how you operate.</p>
        </div>
        <div className=''>
            <div className="relative max-w-[900px] bg-[linear-gradient(111.85deg,rgba(253,253,253,0.075)_5.74%,rgba(253,253,253,0.05)_68.32%)] backdrop-blur-[30.9521px] shadow-[0px_6.19041px_37.1425px_-4.64281px_rgba(0,0,0,0.2)] w-full mt-[8rem] mx-auto p-[2rem] z-[1] rounded-[24px]  before:content-[''] before:absolute before:w-[240px] before:h-[240px] before:rounded-full before:bg-[#00752B] before:blur-[134px] before:filter before:top-0 before:left-1/2 before:-translate-x-1/2 before:-z-20">
              <img className='absolute lg:top-[-50px] top-[-40px] lg:left-[-70px] left-[50%] max-sm:-translate-x-1/2 lg:w-[100px] w-[60px] lg:h-[100px] h-[60px]' src="/static/stack-check/deborah.png" alt="" />
              <h3 ref={quoteRef} className="w-[calc(100%-14px)] lg:text-[280%] text-[150%] font-medium"></h3>
              <div>
                <p className="leading-relaxed mt-[3.5rem] font-medium">Dr. Deborah Ogbeni</p>
                <p className="leading-relaxed mt-[.5rem] font-light text-[80%]">Founder, Begorah Ltd</p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default StackCheck;
