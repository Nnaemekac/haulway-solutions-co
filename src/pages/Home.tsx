import Companies from "../components/home/Companies";
import Header from "../components/home/Header";
import HowWeStandOut from "../components/home/HowWeStandOut";
import Tools from "../components/home/Tools";
import WhatWeOffer from "../components/home/WhatWeOffer";
import WhoWeAre from "../components/home/WhoWeAre";


const Home = () => {
  
  return (
    <>
      <Header />
      <Companies />
      <WhoWeAre />
      <HowWeStandOut />
      <section className='py-[3rem] lg:px-[3rem] px-[1rem]'>
        <img data-aos="flip-down" data-aos-duration="1000" className='w-full' src={'/static/home/group-staff.png'} />
      </section>
      <Tools />
      <WhatWeOffer />
    </>
  );
};

export default Home;
