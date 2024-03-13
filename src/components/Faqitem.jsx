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

import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'react-feather';

const Faqitem = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=''>
      {data.map((item, index) => (
        <div className='xui-my-2 xui-cursor-pointer' key={index} onClick={() => toggleItem(index)}>
          <div className='xui-d-flex xui-flex-ai-center xui-bdr-rad-1 xui-py-1 xui-pr-1 xui-pl-2 faq-section xui-pos-relative'>
            <h3 className='xui-font-sz-120 xui-font-9' style={{"width": "calc(100% - 20px)"}}>{item.question}</h3>
            {activeIndex !== index &&
            <ArrowDownRight size="20" color="#000"/>
            
            }
            {activeIndex === index &&
              <ArrowUpRight size="20" color="#000"/>
            }
        
          </div>
          {activeIndex === index &&
           <div className='xui-p-2'>
              <p className='xui-opacity-6 xui-font-sz-100 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-2'>{item.answer}</p>
           </div>
           }
        </div>
      ))}
    
    </div>
  );
};

export default Faqitem;

