// // FAQItem.js
// import React, { useState } from 'react';

// const FAQItem = ({ question, answer }) => {
//   const [showAnswer, setShowAnswer] = useState(false);

//   const toggleAnswer = () => {
//     setShowAnswer(!showAnswer);
//   };

//   return (
//     <div>
//       <button onClick={toggleAnswer}>{question}</button>
//       {showAnswer && <p>{answer}</p>}
//     </div>
//   );
// };

// export default FAQItem;

import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'react-feather';

const ITServiceItem = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    // Set the default active tab when the component mounts
    if (data && data[activeIndex] && data[activeIndex].answer.length > 0) {
      setActiveIndex(0);
    }
  }, [data, activeIndex]);

  useEffect(() => {
    // Find the active tab based on the current location pathname
    const findActiveIndex = () => {
      const pathname = location.pathname;
      let activeTabIndex = null;
  
      // Loop through each section to check if the pathname matches any link
      data.forEach((section, sectionIndex) => {
        if (pathname.includes(section.link)) {
          activeTabIndex = sectionIndex;
        }
      });
  
      // Set the active tab based on the found index
      if (activeTabIndex !== null) {
        setActiveIndex(activeTabIndex);
      }
    };
  
    // Call the function to find the active tab when the component mounts or when the location changes
    findActiveIndex();
  }, [location.pathname, data]);


  return (
    <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-lg-grid-gap-2 xui-grid-gap-none'>
      {data.map((item, index) => (
        <div className='xui-my-1 xui-cursor-pointer' key={index} onClick={() => toggleItem(index)}>
          <div className='xui-d-flex xui-flex-ai-center xui-bdr-rad-1 xui-py-1 xui-pr-1 faq-section xui-pos-relative'>
            <h3 className='xui-font-sz-120 xui-font-9' style={{"width": "calc(100% - 20px)"}}>{item.question}</h3>
            {activeIndex !== index &&
            <ArrowDownRight size="20" color="#000"/>
            
            }
            {activeIndex === index &&
              <ArrowUpRight size="20" color="#000"/>
            }
        
          </div>
          {activeIndex === index &&
           <div className='xui-py-2'>
              <p className='xui-opacity-6 xui-font-sz-100 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-2'>{item.answer}</p>
           </div>
           }
        </div>
      ))}
    
    </div>
  );
};

export default ITServiceItem;

