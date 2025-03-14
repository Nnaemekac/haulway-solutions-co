import React from 'react';
import Header from '../components/home/Header';
import Companies from '../components/home/Companies';
import WhoWeAre from '../components/home/WhoWeAre';
import HowWeStandOut from '../components/home/HowWeStandOut';
import GroupStaff from "../assets/images/home/group-staff.png";
import WhatWeOffer from '../components/home/WhatWeOffer';

const Home = () => {
  return (
    <div>
      <Header />
      <Companies />
      <WhoWeAre />
      <HowWeStandOut />
      <section className='xui-py-3 xui-container'>
        <img data-aos="flip-down" data-aos-duration="1000" className='xui-w-fluid-100' src={GroupStaff} />
      </section>
      <WhatWeOffer />
    </div>
  );
};

export default Home;