
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
      question: 'E-commerce Solutions',
      answer: 'Tailored solutions to support e-commerce operations including order processing and inventory management.'
    },
    {
      question: 'Agrotech Solutions',
      answer: 'Innovative solutions to optimize agricultural processes and drive growth in the agribusiness sector.'
    },
    
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