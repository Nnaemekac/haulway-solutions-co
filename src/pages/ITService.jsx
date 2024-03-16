
// import { useEffect } from 'react';
// import ITServicesdata from '../ITServicesdata';
// import ITServiceItem from '../ITServiceitem';

// const App = () => {
//   return (
//     <div>
//       <h1>ITServices</h1>
//       {ITServicesdata.map((ITService) => (
//         <ITServiceItem key={ITService.id} question={ITService.question} answer={ITService.answer} />
//       ))}
//     </div>
//   );
// };

// export default App;
import ITServiceItem from '../components/ITServiceItem';

const ITService = () => {
  const ITServiceData = [
    {
      question: 'Information Technology Support',
      answer: (
        <div>
          <p className='xui-font-sz-80 xui-opacity-8 xui-line-height-1-half'>
          Reliable IT support and troubleshooting assistance are essential components of maintaining optimal performance and security within an organization's technological infrastructure. In today's digital age, where businesses heavily rely on technology for various operations, having a reliable IT support system in place is crucial for addressing technical issues promptly and effectively.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          IT support teams are responsible for providing assistance to users experiencing technical difficulties, whether it's related to hardware malfunctions, software glitches, network connectivity issues, or cybersecurity threats. By offering timely and knowledgeable support, these teams help minimize downtime, enhance productivity, and mitigate potential security risks.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Moreover, reliable IT support involves more than just fixing problems when they arise. It also entails proactive measures such as monitoring systems for potential issues, implementing preventive maintenance tasks, and staying updated with the latest security patches and software updates to preemptively address vulnerabilities.
          </p>
          <p className='xui-font-sz-80 xui-line-height-1-half xui-mt-1'>
          By investing in reliable IT support services, organizations can ensure that their technology infrastructure remains resilient, efficient, and secure, enabling smooth business operations and safeguarding sensitive data from potential threats. Ultimately, IT support plays a critical role in enabling businesses to leverage technology effectively to achieve their goals and maintain a competitive edge in today's digital landscape.
          </p>
        </div>
      )
    },
    {
      question: 'Custom Software Development',
      answer: (
        <div>
          <p className='xui-font-sz-80 xui-opacity-8 xui-line-height-1-half'>
          Custom software solutions represent a tailored approach to address unique business needs, emphasizing customization and precision. These solutions are crafted to align closely with the specific requirements and objectives of a particular organization. By focusing on customization, Custom software aims to provide a perfect fit for the business processes and workflows, ensuring optimal efficiency and effectiveness.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          In the context of driving digital transformation, Custom software solutions play a crucial role in modernizing and optimizing business operations. They enable organizations to adapt to rapidly changing market dynamics, emerging technologies, and evolving customer expectations. By leveraging Custom software, businesses can streamline their processes, enhance productivity, and gain a competitive edge in the digital landscape.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Moreover, Custom software solutions offer flexibility and scalability, allowing organizations to scale their operations seamlessly as they grow and evolve. These solutions can be continuously adapted and refined to accommodate shifting business requirements, ensuring long-term relevance and sustainability.
          </p>

        </div>
      )
    },
    {
      question: 'Mobile App Development',
      answer: (
        <div>
          <p className='xui-font-sz-80 xui-opacity-8 xui-line-height-1-half'>
          Mobile app development involves the creation of software applications specifically designed to operate on mobile devices such as smartphones and tablets. These applications can serve a wide range of purposes, from entertainment and social networking to productivity and business operations.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          One area of expertise within mobile app development is the provision of financial services through mobile apps. These services include various functionalities such as invoicing, expense management, and financial reporting.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Invoicing features allow businesses to create and send invoices directly from their mobile devices to clients or customers. This streamlines the billing process and facilitates prompt payment.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Expense management capabilities enable users to track and categorize their expenses conveniently using their mobile devices. Users can capture receipts, categorize expenses, and generate reports to gain insights into their spending habits.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Financial reporting functionalities provide users with detailed insights into their financial activities. These reports may include information on income, expenses, profit and loss, cash flow, and other key financial metrics.
          </p>

        </div>
      )
    },
    {
      question: 'Website Development',
      answer: (
        <div>
          <p className='xui-font-sz-80 xui-opacity-8 xui-line-height-1-half'>
          Website development services are essential for businesses aiming to establish a strong online presence and achieve growth in the digital landscape. These services encompass the creation, design, and implementation of websites tailored to meet the specific needs and objectives of each client.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Professional website developers utilize their expertise in various programming languages, such as HTML, CSS, and JavaScript, to build user-friendly, visually appealing, and functional websites. They work closely with clients to understand their brand identity, target audience, and business goals, ensuring that the final product reflects the unique characteristics of the brand and effectively communicates its message.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Through careful planning and strategic execution, website developers create intuitive navigation structures, engaging layouts, and seamless user experiences that encourage visitors to explore the site further and take desired actions.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Moreover, website development services extend beyond the initial creation phase, encompassing ongoing maintenance, updates, and optimization to ensure that the website remains relevant, secure, and optimized for performance across various devices and platforms.
          </p>

        </div>
      )
    },
  ];
 

  return (
    <ITServiceItem data={ITServiceData}/>
  );
};

export default ITService;


{/* <section className='xui-container xui-lg-pt-4 xui-pt-3 xui-lg-pb-6 xui-pb-4 xui-text-white' style={{"backgroundColor": "var(--yellow)"}}>
      <div className='xui-row xui-pos-relative'>
          <div className='xui-col-5'>
            <img className='xui-img-400 xui-pos-absolute' style={{"left": "-10px", "top": "-150px",}} src={AppRotate1} alt="" />
          </div>
          <div className='xui-col-7'>
            <h1 className="xui-font-sz-250 xui-lg-font-sz-250 xui-font-w-bold xui-text-center" style={{"letterSpacing": "-.1.5rem"}}>Frequently Answered Questions</h1>
            <ITServiceitem data={ITServiceData} />
          </div>
      </div>
    </section> */}