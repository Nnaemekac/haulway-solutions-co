
// import { useEffect } from 'react';
// import Faqsdata from '../Faqsdata';
// import FAQItem from '../Faqitem';

// const App = () => {
//   return (
//     <div>
//       <h1>FAQs</h1>
//       {Faqsdata.map((faq) => (
//         <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
//       ))}
//     </div>
//   );
// };

// export default App;
import Faqitem from '../components/Faqitem';
import Faqitem2 from '../components/Faqitem2';

const Faq2 = () => {

  const faqData2 = [
    {
      question: 'Staff Leasing',
      answer: 'This is our most common form of offshore resource building. Under this structure, we discuss your business goals and together come up with a specific recruiting profile for the staff you want to hire.'
    },
    {
      question: 'Project-Based & Output-Based',
      answer: 'This model employs a pricing structure based on a flat project fee to produce something like a website or animation, normally based on detailed specifications communicated and agreed before the project starts; or pricing based on an hourly fee that can be estimated and fixed up front or billed on a rolling basis for services such as online marketing or data entry; or rolling pricing based on a fixed fee for output such as data entry units or processed images.'
    },
    {
      question: 'Outsourcing in Armenia',
      answer: 'Uncover the potential of Armenia’s technology sector, a premier destination for outsourcing, particularly in advanced IT and diverse fields.'
    },
    {
      question: 'Outsourcing in South Africa',
      answer: 'Streamline your operations and focus on your core competencies by outsourcing non-core business functions to our experienced team, allowing you to reduce costs and increase productivity.'
    },
    // Add more FAQ items as needed
  ];

  return (
    <Faqitem2 data2={faqData2} />
  );
};

export default Faq2;


{/* <section className='xui-container xui-lg-pt-4 xui-pt-3 xui-lg-pb-6 xui-pb-4 xui-text-white' style={{"backgroundColor": "var(--yellow)"}}>
      <div className='xui-row xui-pos-relative'>
          <div className='xui-col-5'>
            <img className='xui-img-400 xui-pos-absolute' style={{"left": "-10px", "top": "-150px",}} src={AppRotate1} alt="" />
          </div>
          <div className='xui-col-7'>
            <h1 className="xui-font-sz-250 xui-lg-font-sz-250 xui-font-w-bold xui-text-center" style={{"letterSpacing": "-.1.5rem"}}>Frequently Answered Questions</h1>
            <Faqitem data={faqData} />
          </div>
      </div>
    </section> */}