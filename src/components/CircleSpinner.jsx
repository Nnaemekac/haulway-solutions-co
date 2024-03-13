import { ArrowDown } from "iconsax-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function CircleSpinner(){
    return(
        <>
        <HashLink smooth to="/" className="xui-pos-relative xui-d-inline-block portfolio-circle-holder">
            <div className="arrow-down xui-z-index-1">
                <ArrowDown size="22" color="#FFF"/>
            </div>
            <svg className="portfolio-circle blue xui-bdr-rad-circle grey-color-border xui-p-half" viewBox="0 0 100 100" width="120" height="120">
            <defs>
                <path id="circle"
                d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"/>
            </defs>
            <text>
                <textPath style={{"fill": "#FFF"}} className="xui-opacity-6 xui-font-w-normal" href="#circle">
                BPO Services &nbsp; &nbsp; &nbsp; BPO Services
                </textPath>
            </text>
            </svg>
        </HashLink>
        </>
    );
}