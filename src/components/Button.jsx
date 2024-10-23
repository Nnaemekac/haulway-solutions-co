import { ArrowRight } from '@carbon/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const { customClass, customStyle, text, isButton2, svgColor, url } = props;
    return (
        <>
            {!isButton2 ? (
            <>
            <Link to={url} style={{"padding": ".5rem .5rem .5rem 1rem"}} class={`${customClass} xui-pos-relative custom-svg-box xui-text-dc-none xui-text-white xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-bdr-rad-1-half`}>
                <p className='xui-lg-font-sz-90 xui-font-sz-75'>{text}</p>
                <span style={{ position: "absolute", right: "8px", ...customStyle }} className='xui-lg-w-35 xui-lg-h-35 xui-w-30 xui-h-30 xui-bg-white xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                <ArrowRight size={19.5} color={svgColor}/>
                </span>
                <div class="overlay xui-bdr-rad-2">
                
                </div>
            </Link>
            </>
        ) : (
            <Link to={url} style={{"padding": ".5rem .5rem .5rem 1rem"}} className={`${customClass} xui-d-inline-flex xui-ml-1 xui-flex-ai-center xui-bdr-rad-2 xui-text-dc-none xui-text-white`}>
              <p className='xui-lg-font-sz-90 xui-font-sz-75'>{text}</p>
              <span style={{"position": "absolute", "right": "8px"}} className='xui-lg-w-35 xui-lg-h-35 xui-w-30 xui-h-30 xui-bg-white xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                <ArrowRight size={19.5} color='#159B48'/>
              </span>
            </Link>
        )}
        </>
    );
};

export default Button;