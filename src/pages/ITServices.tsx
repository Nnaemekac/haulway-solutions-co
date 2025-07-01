import Services from "../components/it-service/Services";

const ITServices = () => {
  return (
    <>
      <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
            <section className='py-[3rem] text-center'>
                <span className='py-[1rem] px-[1.5rem] border border-white rounded-[2rem] lg:text-[95%] text-[85%] text-[#FFF] no-underline'>
                IT Services
                </span>
                <h1 className='lg:text-[250%] text-[180%] xui-font-normal mt-[1rem]'>Our IT Services</h1>
                <p className='lg:text-[95%] text-[85%] opacity-[.8] leading-[1.5rem] mt-[1rem] mx-auto lg:w-[75%] w-full'>
                Get in touch with us for personalized support and expert solutions tailored to your business needs. Our team is here to help you take the next step toward growth and success.
                </p>
            </section>
            <Services />
            {/* <Contact /> */}
      </section>
    </>
  );
};

export default ITServices;