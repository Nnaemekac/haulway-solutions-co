import React from 'react';
import Haulway from "../../assets/images/companies/haulway.png";
import SunflowerPantry from "../../assets/images/companies/sunflower-pantry.png";
import AmanduSkincare from "../../assets/images/companies/amandu-skincare.png";
import MyCut from "../../assets/images/companies/mycut.png";
import Begorah from "../../assets/images/companies/begorah.png";

const Companies = () => {
    return (
        <section className='xui-py-3'>
            <h3 className='xui-lg-font-sz-150 xui-font-sz-110 xui-font-w-500 xui-text-center'>Companies That Trust Us</h3>
            <div className='xui-mt-2-half bg-[#1E1E1E] xui-container xui-py-1 xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <img className='xui-lg-img-150 xui-img-50' src={Haulway} alt="" />
                <img className='xui-lg-img-80 xui-img-50' src={SunflowerPantry} alt="" />
                <img className='xui-lg-img-150 xui-img-50' src={AmanduSkincare} alt="" />
                <img className='xui-lg-img-150 xui-img-50' src={MyCut} alt="" />
                <img className='xui-lg-img-150 xui-img-50' src={Begorah} alt="" />
            </div>
        </section>
    );
};

export default Companies;