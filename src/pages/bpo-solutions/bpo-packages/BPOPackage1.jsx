import React from 'react';
import Package1 from "../../../assets/images/bpo-packages/lg-package1.jpg";
import Dropdown from '../components/bpo-package1/Dropdown';
import { Link } from 'react-router-dom';
import { ChevronRight } from '@carbon/icons-react';
import BPONavigation from '../components/BPONavigation';
import GeneralLeftArrowIcon from '../../../components/custom-svg-icons/GeneralLeftArrowIcon';

const BPOPackage1 = () => {
    return (
        <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container'>
            <div className='xui-row'>
                <div className='xui-lg-col-5 xui-col-12'>
                    <h3 className='xui-font-sz-120 xui-font-w-500'>Startup Essentials Package</h3>
                    <div className='xui-mt-1'>
                        <Dropdown />
                    </div>
                </div>
                <div className='xui-lg-col-7 xui-col-12 xui-lg-pl-1 xui-pl-none xui-lg-mt-none xui-mt-1-half xui-pos-relative bpo-image'>
                    <img className='xui-w-fluid-100 xui-h-300 xui-bdr-rad-1 xui-pos-sticky' src={Package1} alt="" />
                    <p className='xui-lg-font-sz-110 xui-font-sz-100 xui-opacity-8 xui-line-height-1-half xui-mt-1 xui-lg-w-fluid-90 xui-w-fluid-100'>Our BPO package for startups delivers cost-effective solutions to streamline essential business functions, from administrative tasks to IT support. Designed to help emerging businesses focus on growth, we provide flexible, scalable services that enhance efficiency, reduce operational burdens, and support long-term success.</p>
                    <Link to='/contact' class="custom-svg-box xui-mt-1 xui-text-dc-none xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-bdr-rad-1-half xui-grid-gap-1-half">
                        <p className='xui-lg-font-sz-90 xui-font-sz-80'>CONTACT US</p>
                        <div className='xui-w-35 xui-h-35 xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <ChevronRight size={19.5} color='#FFF'/>
                        </div>
                        <div class="overlay xui-bdr-rad-2">
                        
                        </div>
                    </Link>
                </div>
            </div>
            <BPONavigation route='/bpo/solutions/package/2' isRightIcon={true} />
            <hr style={{"backgroundColor": "#FFF"}}/>
            <Link to='/bpo/solutions' className='xui-d-inline-block xui-mt-1'>
                <GeneralLeftArrowIcon />
            </Link>
        </section>
    );
};

export default BPOPackage1;