
// import { useEffect } from 'react';
// import Spec1sdata from '../Spec1sdata';
// import Spec1Item from '../Spec1item';

// const App = () => {
//   return (
//     <div>
//       <h1>Spec1s</h1>
//       {Spec1sdata.map((Spec1) => (
//         <Spec1Item key={Spec1.id} question={Spec1.question} answer={Spec1.answer} />
//       ))}
//     </div>
//   );
// };

// export default App;
import Spec1item from '../../components/Spec1item';

const Spec1 = () => {
  const Spec1Data = [
    {
      question: 'MARKETING & CUSTOMER SUPPORT',
      answer: ['Telesales', 'Customer Service', 'Live Chat Support', 'Content Moderation', 'SEO & PPC', 'Social Media Marketing', 'Email Marketing', 'Content Marketing']
    },
    {
      question: 'ICT & CREATIVE SERVICES',
      answer: 'Professional customer support solutions to enhance customer satisfaction and loyalty.'
    },
    {
      question: 'BACK OFFICE SUPPORT',
      answer: 'Expert financial services including invoicing, expense management, and financial reporting.'
    },
   
  ];
 

  return (
    <Spec1item data={Spec1Data}/>
  );
};

export default Spec1;


{/* <section className='xui-container xui-lg-pt-4 xui-pt-3 xui-lg-pb-6 xui-pb-4 xui-text-white' style={{"backgroundColor": "var(--yellow)"}}>
      <div className='xui-row xui-pos-relative'>
          <div className='xui-col-5'>
            <img className='xui-img-400 xui-pos-absolute' style={{"left": "-10px", "top": "-150px",}} src={AppRotate1} alt="" />
          </div>
          <div className='xui-col-7'>
            <h1 className="xui-font-sz-250 xui-lg-font-sz-250 xui-font-w-bold xui-text-center" style={{"letterSpacing": "-.1.5rem"}}>Frequently Answered Questions</h1>
            <Spec1item data={Spec1Data} />
          </div>
      </div>
    </section> */}