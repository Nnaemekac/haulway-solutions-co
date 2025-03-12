import React from 'react';
import Header from '../components/about/Header';
import Identity from '../components/about/Identity';
import HeaderPattern from "../assets/images/header-pattern.png";

const About = () => {
    return (
        <>
            <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container xui-bg-sz-cover xui-bg-pos-top' style={{backgroundImage: `url('${HeaderPattern}')`, backgroundRepeat: 'no-repeat'}}>
                <Header />
                <Identity />
            </section>
        </>
    );
};

export default About;