
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
import Spec2item from '../../components/Spec2Item';

const Spec2 = () => {
  const Spec2Data = [
    {
      question: 'MARKETING & CUSTOMER SUPPORT',
      answer: ['Telesales', 'Customer Service', 'Live Chat Support', 'Content Moderation', 'SEO & PPC', 'Social Media Marketing', 'Email Marketing', 'Content Marketing']
    },
    {
      question: 'ICT & CREATIVE SERVICES',
      answer: ['IT Support: System/Network Admin', 'Web Design', 'Web Development', 'Software Development', 'Graphic Design', 'Animation', 'Storyboards', 'Quality Assurance/Testing']
    },
    {
      question: 'BACK OFFICE SUPPORT',
      answer: ['Data Processing', 'Accounting', 'HR Support', 'Virtual Assistant', 'Medical Billing', 'Insurance Support', 'Lawyers and Paralegals', 'Real Estate', 'Management & Administration']
    },
   
  ];
 

  return (
    <Spec2item data={Spec2Data}/>
  );
};

export default Spec2;


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