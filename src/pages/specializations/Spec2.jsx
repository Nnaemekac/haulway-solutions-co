
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
      answer: [{name:'Telesales', link: 'telesales-outsourcing'}, {name:'Customer Service', link: 'customer-service'}, {name:'Live Chat Support', link: 'live-chat-support'}, {name:'Content Moderation', link: 'content-moderation'}, {name:'SEO & PPC', link: 'seo-and-ppc'}, {name:'Social Media Marketing', link: 'social-media-marketing'}, {name:'Email Marketing', link: 'email-marketing'}, {name:'Content Marketing', link: 'content-marketing'}]
    },
    {
      question: 'ICT & CREATIVE SERVICES',
      answer: [{name:'IT Support: System/Network Admin', link: 'IT-Support'}, {name:'Web Design', link: 'web-design'}, {name:'Web Development', link: 'web-development'}, {name:'Software Development', link: 'software-development'}, {name:'Graphic Design', link: 'graphic-design'}, {name:'Animation', link: 'animation'}, {name:'Storyboards', link: 'story-boards'}, {name:'Quality Assurance/Testing', link: 'quality-assurance'}]
    },
    {
      question: 'BACK OFFICE SUPPORT',
      answer: [{name:'Data Processing', link: 'data-processing'}, {name:'Accounting', link: 'accounting'}, {name:'HR Support', link: 'hr-support'}, {name:'Virtual Assistant', link: 'virtual-assistant'}, {name:'Medical Billing', link: 'medical-billing'}, {name:'Insurance Support', link: 'insurance-support'}, {name:'Lawyers and Paralegals', link: 'lawyers-and-paralegals'}, {name:'Real Estate', link: 'real-estate'}, {name:'Management & Administration', link: 'management-and-administration'}]
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