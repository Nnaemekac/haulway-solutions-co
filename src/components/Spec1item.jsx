import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'react-feather';

const Spec1item = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Mapping of content for each subarray tab
  const contentMap = {
    '0-0': (
        <>
            <div>
                <p>
                In the dynamic landscape of diverse sales channels, companies face the challenge of maintaining focus on
                traditional sales efforts, such as tele sales, amidst the array of emerging options. However, particularly in
                challenging economic times, the telephone remains a highly effective method for converting new customers.
                </p>
                <ul>
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                </ul>
                <p>
                To address the risk of losing focus and to optimize performance while controlling costs, companies can consider
                outsourcing some or all of their tele sales operations.
                </p>
                {/* Add more JSX elements as needed */}
            </div>
        </>
  
),
'0-1': (
  <div>
    <p>
      In virtually every industry, companies are locked in fierce competition, facing immense pressure to optimize
      their resources. Managers and entrepreneurs operate in a high-stakes environment where decisions must be made
      swiftly and with little margin for error.
    </p>
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
      <li>Point 3</li>
    </ul>
    <p>
      For companies relying on teleservices to support their customers, finding solutions that offer both superior
      customer support and cost efficiency, operational flexibility, and strategic compatibility is paramount.
    </p>
    {/* Add more JSX elements as needed */}
  </div>
),
'0-2': (
  <div>
    <p>
      In the era of evolving communication channels, encompassing the internet, social networking, and SMS, businesses
      are compelled to adapt to novel methods of engaging with their clientele.
    </p>
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
      <li>Point 3</li>
    </ul>
    <p>
      Offering strategic and prompt options to web visitors not only heightens customer satisfaction but also
      significantly boosts conversion rates.
    </p>
    {/* Add more JSX elements as needed */}
  </div>
),
'0-3': (
  <div>
    <p>Since its establishment in 2006, Grascope has been a trusted provider of cost-effective outsourced...</p>
    {/* Add more JSX elements as needed */}
  </div>
),
'0-4': 'Content for SEO & PPC',
'0-5': 'Content for Social Media Marketing',
'0-6': 'Content for Email Marketing',
'0-7': 'Content for Content Marketing',
// ... Add content for other tabs in the first array
'1-0': 'Content for IT Support: System/Network Admin',
'1-1': 'Content for Web Design',
'1-2': 'Content for Web Development',
'1-3': 'Content for Software Development',
'1-4': 'Content for Graphic Design',
'1-5': 'Content for Animation',
'1-6': 'Content for Story Boards',
'1-7': 'Content for Quality Assurance/Testing',

// ... Add content for other tabs in the second array
'2-0': 'Content for Data Processing',
'2-1': 'Content for Accounting',
'2-2': 'Content for HR Support',
'2-3': 'Content for Virtual Assistant',
'2-4': 'Content for Medical Billing',
'2-5': 'Content for Insurance Support',
'2-6': 'Content for Lawyers and Paralegals',
'2-7': 'Content for Real Estate',
'2-8': 'Content for Management & Administration',
// ... Add content for other tabs in the third array
};
  

  return (
    <div className='xui-row'>
      <div className='xui-lg-col-4'>
        {data.map((item, arrayIndex) => (
          <div className=' xui-cursor-pointer' key={arrayIndex}>
            <div
              onClick={() => toggleItem(arrayIndex)}
              className='xui-d-flex xui-flex-ai-center xui-bdr-rad-1 xui-py-1 xui-pr-1 xui-pl-half faq-section xui-pos-relative'
            >
              <h3 className='xui-font-sz-120 xui-font-9' style={{ width: 'calc(100% - 20px)' }}>
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

      <div className='xui-lg-col-8 xui-p-1'>
        {activeIndex !== null && activeTab !== null && (
          <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half'>
            {contentMap[activeTab]}
          </p>
        )}
      </div>
    </div>
  );
};

export default Spec1item;
