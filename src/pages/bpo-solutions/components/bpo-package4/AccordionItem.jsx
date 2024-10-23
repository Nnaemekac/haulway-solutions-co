import { Add, ChevronDown, ChevronUp, Subtract } from '@carbon/icons-react';
import { useState } from 'react';

const AccordionItem = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=''>
      {data.map((item, index) => (
        <div className='xui-cursor-pointer' key={index} onClick={() => toggleItem(index)}>
          <div className={'xui-d-flex xui-flex-ai-center xui-py-1-half xui-px-1 xui-pos-relative accordion-item ' + (activeIndex === index ? 'begorah-bg-blue-iii' : 'xui-bg-none')}>
            <p className='xui-lg-font-sz-110 xui-font-sz-90 xui-font-w-500' style={{"width": "calc(100% - 30px)"}}>{item.question}</p>
            {activeIndex !== index &&
                <div className='xui-w-30 xui-h-30 xui-bg-white xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                    <ChevronDown size={20} color="#000" variant="Linear"/>
                </div>
            }
            {activeIndex === index &&
                <div className='xui-w-30 xui-h-30 xui-bg-white xui-bdr-rad-circle xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                    <ChevronUp size={20} color="#000" variant="Linear"/>
                </div>
            }
        
          </div>
          {/* <hr style={{"backgroundColor": "#FFF"}}/> */}
          {activeIndex === index &&
           <div className='xui-px-1 xui-pb-1 begorah-bg-blue-iii xui-pos-relative'>
              <div className='xui-w-fluid-100'>{item.answer}</div>
           </div>
           }
           
        </div>
      ))}
    
    </div>
  );
};

export default AccordionItem;