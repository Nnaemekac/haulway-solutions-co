import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckmarkFilled, Location, WarningFilled } from '@carbon/icons-react';
import { Call, Clock, Sms } from 'iconsax-react';
import { BitcoinIconsStarFilled } from '../components/icons';

type FormData = {
  name: string;
  company?: string;
  email: string;
  service: string;
  message: string;
};

const calendlyLink = 'https://calendly.com/grascope'; // Replace with your Calendly link
const itSolutionsLink = '/it-services'; // Update as needed
const bpoLink = '/bpo-solutions'; // Update as needed
const googleMapsEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.234823163895!2d7.057697!3d4.789964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d1e9b1b1b1b1%3A0x0!2s4%20Iwowari%20Ave%2C%20Port%20Harcourt%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1720180000000'; // Embed for 4, Iwowari Avenue, Port Harcourt
const googleMapsLink = 'https://www.google.com/maps/place/4+Iwowari+Ave,+Port+Harcourt,+Nigeria/@4.789964,7.057697,17z'; // Full Google Maps link

const faqs = [
  {
    q: 'How do you approach new projects?',
    a: 'We start with a discovery session to understand your goals — whether it’s building a new product, automating systems, or scaling your team.',
  },
  {
    q: 'What kinds of services do you offer?',
    a: (
      <span>
        We provide:
        <ul className="list-disc ml-5 mt-1">
          <li className='mt-[2rem]'>Custom IT Solutions: Apps, infrastructure, UI/UX</li>
          <li className='mt-[2rem]'>BPO Services: Admin support, operations teams</li>
        </ul>
      </span>
    ),
  },
  {
    q: 'What industries do you work with?',
    a: 'We support businesses in tech, finance, logistics, healthcare, e-commerce, retail, energy, and more.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — Nigeria, UK, US, and other regions with timezone-flexible delivery.',
  },
  {
    q: 'What makes Grascope different?',
    a: 'We combine tech builds + operations under one roof. No juggling vendors. No wasted spend. Just systems and staff that work.',
  },
];

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formTopRef = useRef<HTMLDivElement>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const contactInfo = [
      {
        icon: Location,
        title: "Our Location",
        details: ["Port Harcourt, Nigeria", "Serving globally: UK, USA, and beyond"],
      },
      {
        icon: Sms,
        title: "Email Us",
        details: ["contact@grascope.com"],
      },
      {
        icon: Call,
        title: "Call Us",
        details: ["+234 818 293 1756", "+44 7441359374"],
      },
      {
        icon: Clock,
        title: "Business Hours",
        details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: By appointment"],
      }
    ]

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setSubmitError(null);
    setSubmitSuccess(null);
    try {
      const response = await fetch("https://grascoperoi-84aafe9da70d.herokuapp.com/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || "",
          service: data.service,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setSubmitSuccess(result.message || "Your request has been received.");
      reset();
      setTimeout(() => setSubmitSuccess(null), 5000);
      setIsLoading(false);
      formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error: any) {
      setSubmitError(error.message || "Something went wrong. Please try again.");
      formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsLoading(false);
    }
  };


  return (
    <main>
      {/* HERO SECTION */}
      <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
        <section className='py-[3rem] text-center'>
          <span className='inline-flex items-center py-[1rem] px-[1.5rem] border border-white rounded-[2rem] lg:text-[95%] text-[85%] text-[#FFF] no-underline'>
            Contact Us
          </span>
          <h1 className='lg:text-[250%] text-[180%] xui-font-normal mt-[1rem]'>Feel free to reach out to us</h1>
        </section>
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-stretch">
          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col justify-center bg-[#141416] rounded-xl lg:p-[1.5rem] p-[1rem] text-white">
            <h1 className="text-[150%] lg:text-4xl font-medium mb-4">
              Tech Builds. Managed Teams. One Global Partner.
            </h1>
            <p className=" mb-2">
              Grascope helps you launch custom software and scale operations with fully managed BPO teams — faster, leaner, and without the overhead.
            </p>
            <ul className="mb-6 mt-4 space-y-2 text-base opacity-90">
              <li className="flex items-center gap-2">
                <span className="text-[#159b48] font-medium text-xl">•</span> 50–70% cost savings
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#159b48] font-medium text-xl">•</span> No freelancers, no HR stress
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#159b48] font-medium text-xl">•</span> Built-for-you IT and back office solutions
              </li>
            </ul>
            <div className="flex flex-col gap-2 mb-2">
              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-white z-[1] rounded-[.5rem] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center p-[1rem]"
              >
                Book a Free Consultation
              </a>
              <div className="text-xs text-gray-300 mt-2">
                Not ready yet? Learn more:&nbsp;
                <a href={itSolutionsLink} className="underline hover:text-[#159b48] mr-2">IT Solutions</a>
                <a href={bpoLink} className="underline hover:text-[#159b48]">BPO Outsourcing</a>
              </div>
            </div>
            {/* WHY CHOOSE GRASCOPE */}
            <section className="py-12">
              <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-center text-[#FFF]">Why Choose Grascope?</h2>
              <p className="text-center text-lg mb-8">
                One partner. Two core strengths: Tech that scales, and teams that deliver.
              </p>
              <div className="grid md:grid-cols-2 gap-[1rem] mb-8">
                <div className='bg-[#1E1E1E] p-[1rem]'>
                  <h3 className="font-medium text-[#FFF] mb-1">Proven Track Record</h3>
                  <p className="text-[#FFF] mb-4 text-[70%] leading-relaxed">
                    Over 100 successful projects — from high-performing SaaS products to fully managed BPO setups — across multiple industries and regions.
                  </p>
                </div>
                <div className='bg-[#1E1E1E] p-[1rem]'>
                  <h3 className="font-medium text-[#FFF] mb-1">Dual Expertise: IT & Operations</h3>
                  <p className="text-[#FFF] mb-4 text-[70%] leading-relaxed">
                    Whether you're building a new system or scaling your team, Grascope gives you both. No need to juggle multiple vendors — we handle tech and execution under one roof.
                  </p>
                </div>
                <div className='bg-[#1E1E1E] p-[1rem]'>
                  <h3 className="font-medium text-[#FFF] mb-1">Global-Ready Delivery</h3>
                  <p className="text-[#FFF] mb-4 text-[70%] leading-relaxed">
                    We serve clients in Nigeria, the UK, the US, and beyond — with timezone-aligned support, cloud-based infrastructure, and international hiring standards.
                  </p>
                </div>
                <div className='bg-[#1E1E1E] p-[1rem]'>
                  <h3 className="font-medium text-[#FFF] mb-1">Cost-Efficient, Fully Managed</h3>
                  <p className="text-[#FFF] mb-4 text-[70%] leading-relaxed">
                    Our BPO teams offer up to 70% cost savings vs in-house hiring. Our IT services deliver high-impact builds without bloated dev cycles. You get expert execution without managing the mess.
                  </p>
                </div>
                <div className='bg-[#1E1E1E] p-[1rem]'>
                  <h3 className="font-medium text-[#FFF] mb-1">Long-Term Support, Not Just Delivery</h3>
                  <p className="text-[#FFF] mb-4 text-[70%] leading-relaxed">
                    We don’t disappear after handoff. From product iterations to team performance tracking, we stay in sync with your business as it grows.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href={calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-white z-[1] rounded-[.5rem] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center p-[1rem]"
                >
                  Book Free Consultation
                </a>
              </div>
            </section>
          </div>
          {/* RIGHT SIDE */}
          <div ref={formTopRef} className="flex-1 bg-[#141416] rounded-xl lg:p-[1.5rem] p-[1rem] shadow-lg flex flex-col">
            <h2 className="text-xl font-medium mb-4 text-white">Prefer to send us a quick brief?</h2>
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
                  <p className="text-sm">{submitSuccess}</p>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} id='contact-form' className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="inline-flex text-white mb-2">
                  Name <BitcoinIconsStarFilled />
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className={`w-full p-3 text-[#FFF] rounded-lg h-[60px] bg-[#222222] border placeholder:text-[#737373] ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                />
                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
              </div>
              {/* Company */}
              <div>
                <label className="inline-flex text-white mb-2">
                  Company (optional)
                </label>
                <input
                  {...register("company")}
                  placeholder="Company"
                  className="w-full p-3 text-[#FFF] rounded-lg h-[60px] bg-[#222222] border border-gray-600 placeholder:text-[#737373]"
                />
              </div>
              {/* Email */}
              <div>
                <label className="inline-flex text-white mb-2">
                  Email <BitcoinIconsStarFilled />
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address"
                    }
                  })}
                  type="email"
                  placeholder="Email"
                  className={`w-full p-3 text-[#FFF] rounded-lg h-[60px] bg-[#222222] border placeholder:text-[#737373] ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>
              {/* Service */}
              <div>
                <label className="inline-flex text-white mb-2">
                  What service are you interested in? <BitcoinIconsStarFilled />
                </label>
                <select
                  {...register("service", { required: "Please select a service" })}
                  className={`w-full p-3 text-[#FFF] rounded-lg h-[60px] bg-[#222222] border placeholder:text-[#737373] ${errors.service ? 'border-red-500' : 'border-gray-600'}`}
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  <option value="IT Solutions">IT Solutions</option>
                  <option value="BPO Staffing">BPO Staffing</option>
                  <option value="Both">Both</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
                {errors.service && <span className="text-red-500 text-xs">{errors.service.message}</span>}
              </div>
              {/* Message */}
              <div>
                <label className="inline-flex text-white mb-2">
                  Message or Project Goals <BitcoinIconsStarFilled />
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message or Project Goals"
                  rows={4}
                  className={`w-full p-3 text-[#FFF] rounded-lg bg-[#222222] border placeholder:text-[#737373] ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
                />
                {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
              </div>
              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="relative text-white z-[1] rounded-[.5rem] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center p-[1rem]"
              >
                {isLoading ? "Sending..." : "Submit Inquiry"}
              </button>
              <span className="text-xs text-gray-400 mt-1">
                We’ll get back to you within 24 hours.
              </span>
            </form>
            {/* LIVE MAP SECTION */}
            <section className="py-12">
              <h2 className="text-2xl font-medium mb-4 text-[#FFF]">Find Us</h2>
              <div className="w-full h-[350px] rounded-xl overflow-hidden mb-3 shadow-lg">
                <iframe
                  src={googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Grascope HQ Map"
                ></iframe>
              </div>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm"
              >
                View on Google Maps
              </a>
            </section>
          </div>
        </div>
        <section className='py-12'>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div
                  key={index}
                  className="text-center pt-[1rem] px-[1rem] pb-[2rem] rounded-[1rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[1rem] before:opacity-20 before:mix-blend-overlay aos-init aos-animate hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mb-[1rem] mx-auto rounded-full relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-center`}>
                    <IconComponent size="32" color="#ffffff" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="">{detail}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
      </section>
      {/* FAQ SECTION */}
      <section className="max-w-5xl mx-auto bg-[#1E1E1E] lg:p-[2rem] p-[1rem] rounded-[1rem]">
        <h2 className="lg:text-[250%] text-[150%] font-medium mb-4 text-[#FFF] text-center">Frequently Asked Questions</h2>
        <p className="mb-6 text-[#FFF] text-center">
          Common questions about how we support teams through IT solutions and BPO services.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-3">
              <button
                className="w-full rounded-[.5rem] text-left font-medium focus:outline-none flex justify-between items-center bg-[#141416] p-[1rem]"
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                type="button"
              >
                {faq.q}
                <span>{faqOpen === idx ? '-' : '+'}</span>
              </button>
              <div className={`mt-2 p-[1rem] text-[#FFF] text-sm transition-all duration-200 ${faqOpen === idx ? 'block' : 'hidden'}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="mb-2 text-[#FFF]">Need help choosing the right path?</p>
          <div className='mt-[2rem] flex lg:flex-row flex-col items-center justify-center gap-4'>
            <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-white z-[1] rounded-[.5rem] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between justify-center p-[1rem]"
          >
            Book a free consultation
          </a>
          <span className="mx-2 text-gray-500">or</span>
          <a
            href="#contact-form"
            className="underline text-[#FFF] font-semibold"
          >
            send us a message
          </a>
          </div>
        </div>
      </section>
      </section>
    </main>
  );
};

export default Contact;