import React from 'react';
import { Link } from 'react-router-dom';
import RightArrowIcon from '../../../components/custom-svg-icons/RightArrowIcon';
import LeftArrowIcon from '../../../components/custom-svg-icons/LeftArrowIcon';

const BPONavigation = (props) => {
    const { isLeftIcon, isRightIcon, routeBack, route } = props;
    return (
        <div>
            <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between xui-mt-1-half xui-p-1'>
                { isLeftIcon ? (
                    <Link to={routeBack} className='xui-d-inline-flex xui-opacity-8 xui-flex-ai-center xui-grid-gap-half xui-text-dc-none xui-text-white xui-lg-font-sz-90 xui-font-sz-75'>
                        <LeftArrowIcon />
                        Previous Package
                    </Link>
                ) : <div></div>}
                {
                    isRightIcon ? (
                        <Link to={route} className='xui-d-inline-flex xui-opacity-8 xui-flex-ai-center xui-grid-gap-half xui-text-dc-none xui-text-white xui-lg-font-sz-90 xui-font-sz-75'>
                            Next Package
                            <RightArrowIcon />
                        </Link>
                    ) : <div></div>
                }
            </div>
        </div>
    );
};

export default BPONavigation;