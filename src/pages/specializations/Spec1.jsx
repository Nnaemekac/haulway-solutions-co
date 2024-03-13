
import Spec1item from '../../components/Spec1item';

const Spec1 = () => {
  const Spec1Data = [
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
    <Spec1item data={Spec1Data}/>
  );
};

export default Spec1;
