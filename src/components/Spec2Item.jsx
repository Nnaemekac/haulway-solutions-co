
import { User } from 'iconsax-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'react-feather';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import { contentMap } from '../assets/contentData';
import { useForm } from "react-hook-form";

const Spec2item = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const sendRequest = (data) => {
        console.log(data);
    }

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
    setActiveTab(index); // Set activeTab to the clicked tab index
    
    // You may also want to update activeIndex based on your implementation logic
    // setActiveIndex(index); // Uncomment this line if you need to update activeIndex
    
    // Update the URL to reflect the selected tab
    // This part is commented out because you're already handling URL updates in useEffect
    // history.push(`/bpo-services/${data[index].answer[0].link}?tab=${index}`);
  };
  
  
  
  useEffect(() => {
    // Find the active tab based on the current location pathname
    const findActiveTab = () => {
      const pathname = location.pathname;
      let activeTabIndex = null;
      let activeSubTabIndex = null;
  
      // Loop through each section to check if the pathname matches any link
      data.forEach((section, sectionIndex) => {
        section.answer.forEach((answer, subTabIndex) => {
          if (pathname.includes(answer.link)) {
            activeTabIndex = sectionIndex;
            activeSubTabIndex = subTabIndex;
          }
        });
      });
  
      // Set the active tab based on the found index
      if (activeTabIndex !== null && activeSubTabIndex !== null) {
        setActiveIndex(activeTabIndex);
        setActiveTab(`${activeTabIndex}-${activeSubTabIndex}`);
      }
    };
  
    // Call the function to find the active tab when the component mounts or when the location changes
    findActiveTab();
  }, [location.pathname, data]);
  
      
    

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
                <Link
                to={`/bpo-services/${ans.link}?tab=${arrayIndex}-${subTabIndex}`}
                key={arrayIndex + '-' + subTabIndex}
                onClick={() => handleTabClick(`${arrayIndex}-${subTabIndex}`)}
                className={'xui-opacity-8 xui-font-sz-90 bpo-link xui-my-1 xui-w-fluid-100 xui-lg-w-fluid-90 ' + (activeTab === `${arrayIndex}-${subTabIndex}` ? 'primary-color xui-font-w-bold' : '')}
              >
                {ans.name}
              </Link>
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
            <form className="xui-mt-2" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
              <h3 className='xui-font-9 xui-font-sz-200 xui-text-center'>Send us a message</h3>
            <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1 xui-mt-2">
                <div>
                    <label className="xui-form-label xui-font-sz-90 xui-mb-1">Name</label>
                    <input {...register('fullName', {required: true, minLength: 2})} type="text" className={`famebuy-contact-input xui-bdr-rad-half xui-form-input xui-font-sz-90 ${errors.fullName ? 'famebuy-input-error' : ''}`} placeholder="Enter your full name" />
                    {errors.fullName && errors.fullName.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your name</span> : null}
                    {errors.fullName && errors.fullName.type == "minLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too short</span> : null}
                </div>

                <div>
                    <label className="xui-form-label xui-font-sz-90 xui-mb-1">Email</label>
                    <input {...register('emailAddress', {required: true, pattern: /^(?!.*@gigi\.codes$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} type="email" className={`famebuy-contact-input xui-bdr-rad-half xui-form-input xui-font-sz-90 ${errors.emailAddress ? 'famebuy-input-error' : ''}`} placeholder="Enter your email address" />
                    {errors.emailAddress && errors.emailAddress.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your email addres</span> : null}
                    {errors.emailAddress && errors.emailAddress.type == "pattern" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Incorrect email address</span> : null}
                </div>
            </div>
            <div className="xui-my-2">
                <label className="xui-form-label xui-font-sz-90 xui-mb-1">Message</label>
                <textarea {...register('message', {required: true, minLength: 10, maxLength: 200})} className={`famebuy-contact-textarea xui-bdr-rad-half xui-form-input xui-font-sz-90 ${errors.message ? 'famebuy-input-error' : ''}`} cols="30" rows="10" placeholder="Enter your message"></textarea>
                {errors.message && errors.message.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Enter your message</span> : null}
                {errors.message && errors.message.type == "minLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too short</span> : null}
                {errors.message && errors.message.type == "maxLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too long</span> : null}
            </div>
            
            <div className="xui-my-2">
                <button className="xui-bdr-rad-half secondary xui-btn-block xui-px-3 xui-py-1-half xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center">Send message</button>
            </div>
        </form>
          </p>
        )}
      </div>
    </div>
  );
};

export default Spec2item;

