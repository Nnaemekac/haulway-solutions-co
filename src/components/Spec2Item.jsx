
import { User } from 'iconsax-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'react-feather';
import { useLocation, useParams } from 'react-router-dom';
import { contentMap } from '../assets/contentData';

const Spec2item = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { id } = useParams();
    const location = useLocation();
  
  const [activeTab, setActiveTab] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

  };
  useEffect(() => {
    // Set the default active tab when the component mounts
    if (data && data[activeIndex] && data[activeIndex].answer.length > 0) {
      setActiveTab(`${activeIndex}-0`);
    }
  }, [data, activeIndex]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
    useEffect(() => {
        // Extract the 'tab' parameter from the URL
        const urlParams = new URLSearchParams(location.search);
        const tabParam = urlParams.get('tab');
      
        // Check if the URL contains 'customer-service' and set activeTab accordingly
        if(location.pathname.includes('telesales-outsourcing')){
            setActiveTab(`0-0`);
            console.log(activeIndex);
        } 
        else if (location.pathname.includes('customer-service')) {
            setActiveTab(`0-1`);
            console.log(activeIndex);
        }
        else if(location.pathname.includes('live-chat')){
            setActiveTab(`0-2`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('content-moderation')){
            setActiveTab(`${activeIndex}-3`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('seo-and-ppc')){
            setActiveTab(`${activeIndex}-4`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('social-media-marketing')){
            setActiveTab(`${activeIndex}-5`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('email-marketing')){
            setActiveTab(`${activeIndex}-6`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('content-marketing')){
            setActiveTab(`${activeIndex}-7`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('IT-Support')){
            setActiveIndex(1);
            setActiveTab(`${1}-0`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('web-design')){
            setActiveIndex(1);
            setActiveTab(`${1}-1`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('web-development')){
            setActiveIndex(1);
            setActiveTab(`1-2`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('software-development')){
            setActiveIndex(1);
            setActiveTab(`1-3`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('graphic-design')){
            setActiveIndex(1);
            setActiveTab(`1-4`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('animation')){
            setActiveIndex(1);
            setActiveTab(`1-5`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('story-boards')){
            setActiveIndex(1);
            setActiveTab(`1-6`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('quality-assurance')){
            setActiveIndex(1);
            setActiveTab(`1-7`);
            console.log(activeIndex);
        } 

        else if(location.pathname.includes('data-processing')){
            setActiveIndex(2);
            setActiveTab(`2-0`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('accounting')){
            setActiveIndex(2);
            setActiveTab(`2-1`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('hr-support')){
            setActiveIndex(2);
            setActiveTab(`2-2`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('virtual-assistant')){
            setActiveIndex(2);
            setActiveTab(`2-3`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('medical-billing')){
            setActiveIndex(2);
            setActiveTab(`2-4`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('insurance-support')){
            setActiveIndex(2);
            setActiveTab(`2-5`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('lawyers-and-paralegals')){
            setActiveIndex(2);
            setActiveTab(`2-6`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('real-estate')){
            setActiveIndex(2);
            setActiveTab(`2-7`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('management-and-administration')){
            setActiveIndex(2);
            setActiveTab(`2-8`);
            console.log(activeIndex);
        } 
        else if (tabParam !== null) {
          setActiveTab(parseInt(tabParam, 10));
        }
      }, [location.pathname, location.search, activeIndex, activeTab]);
      
    

  return (
    <div className='xui-row spec-item'>
      <div className='xui-lg-col-3'>
        {data.map((item, arrayIndex) => (
          <div className=' xui-cursor-pointer' key={arrayIndex}>
            <div
              onClick={() => toggleItem(arrayIndex)}
              className='xui-d-flex xui-flex-ai-center xui-bdr-rad-1 xui-py-1 xui-pr-1 xui-pl-half faq-section xui-pos-relative'
            >
              <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-9' style={{ width: 'calc(100% - 20px)' }}>
                {item.question}
              </h3>
              {activeIndex !== arrayIndex && (
                <ArrowDownRight size='20' color='#000' />
              )}
              {activeIndex === arrayIndex && (
                <ArrowUpRight size='20' color='#000' />
              )}
            </div>
            {activeIndex === arrayIndex && (
            <div className='xui-p-half'>
                {item.answer.map((ans, subTabIndex) => (
                <p
                    key={arrayIndex + '-' + subTabIndex}
                    onClick={() => handleTabClick(arrayIndex + '-' + subTabIndex)} // Concatenate arrayIndex and subTabIndex for the correct key
                    className={'xui-opacity-8 xui-font-sz-90 xui-my-1 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-2 ' + (activeTab === arrayIndex + '-' + subTabIndex ? 'primary-color xui-font-w-bold' : '')}
                >
                    {ans}
                </p>
                ))}
            </div>
            )}
          </div>
        ))}
      </div>

      <div className='xui-lg-col-9 xui-p-1'>
        {activeIndex !== null && activeTab !== null && (
          <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half'>
            {contentMap[activeTab]}
          </p>
        )}
      </div>
    </div>
  );
};

export default Spec2item;

