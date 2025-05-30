import { ArrowLeft } from "@carbon/icons-react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='xui-py-3 xui-text-center'>
            <Link to={'/'} className='xui-d-inline-flex xui-flex-ai-center xui-py-1 xui-px-1-half xui-bdr-white xui-bdr-s-solid xui-bdr-w-1 xui-bdr-rad-2 xui-lg-font-sz-95 xui-font-sz-85 xui-text-white xui-text-dc-none'>
                <ArrowLeft className="xui-mr-1" color="#FFF" />
                Our Hiring Tools
            </Link>
            <h1 className='xui-lg-font-sz-250 xui-font-sz-180 xui-font-w-normal xui-mt-1'>Return On Investment (ROI) Calculator</h1>
            <p className='xui-lg-font-sz-95 xui-font-sz-85 xui-opacity-8 xui-line-height-1-half xui-mt-1 xui-mx-auto xui-lg-w-fluid-75 xui-w-fluid-100'>Measure your returns with precision—Grascope's ROI Calculator helps you make data-driven decisions, optimize investments, and maximize growth.</p>
         </div>
    );
};

export default Header;