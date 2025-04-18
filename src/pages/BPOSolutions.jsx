import React from 'react';
import Header from '../components/bpo-solutions/Header';
import Packages from '../components/bpo-solutions/Packages';
import HeaderPattern from "../assets/images/header-pattern.png";
import CostSavings from '../components/bpo-solutions/CostSavings';

const BPOSolutions = () => {
  return (
    <>
      <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container xui-bg-pos-top' style={{backgroundImage: `url('${HeaderPattern}')`, backgroundRepeat: 'no-repeat'}}>
          <Header />
          <Packages />
          <CostSavings />
      </section>
    </>
  );
};

export default BPOSolutions;