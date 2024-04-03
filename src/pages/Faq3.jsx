
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
import Faqitem3 from '../components/Faqitem3';

const Faq3 = () => {

  const faqData3 = [
    {
      question: 'Information Technology Support',
      answer: 'Reliable IT support and troubleshooting assistance to ensure optimal performance and security.'
    },
    {
      question: 'Custom Software Development',
      answer: 'Bespoke software solutions tailored to meet specific business requirements and drive digital transformation.'
    },
    {
      question: 'Mobile App Development',
      answer: 'Innovative mobile app development services to help businesses reach their target audience and enhance user engagement.'
    },
    {
      question: 'Website Development',
      answer: 'Professional website development services to create impactful online presences and drive business growth.'
    },
    
  ];

  return (
    <Faqitem3 data3={faqData3} />
  );
};

export default Faq3;


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