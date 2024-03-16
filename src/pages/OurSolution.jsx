
// import { useEffect } from 'react';
// import OurSolutionsdata from '../OurSolutionsdata';
// import OurSolutionItem from '../OurSolutionitem';

// const App = () => {
//   return (
//     <div>
//       <h1>OurSolutions</h1>
//       {OurSolutionsdata.map((OurSolution) => (
//         <OurSolutionItem key={OurSolution.id} question={OurSolution.question} answer={OurSolution.answer} />
//       ))}
//     </div>
//   );
// };

// export default App;
import OurSolutionItem from '../components/OurSolutionItem';

const OurSolution = () => {
  const OurSolutionData = [
    {
      question: 'E-commerce Solutions',
      answer: (
        <div>
          <p className='xui-font-sz-80 xui-opacity-8 xui-line-height-1-half'>
          E-commerce solutions offered by Grascope Industries Ltd are meticulously crafted to cater to the intricate needs of online businesses. These solutions are designed to streamline and enhance various aspects of e-commerce operations, providing a comprehensive suite of tools and functionalities. One of the key features of these solutions is their ability to facilitate seamless order processing, ensuring that orders are efficiently managed from placement to fulfillment. Additionally, our e-commerce solutions include robust inventory management capabilities, allowing businesses to effectively track and manage their inventory levels in real-time. By leveraging these tailored solutions, businesses can optimize their e-commerce operations, improve customer satisfaction, and drive growth in the digital marketplace.
          </p>
        </div>
      )
    },
    {
      question: 'Agrotech Solutions',
      answer: (
        <div>
          <p className='xui-font-sz-80 xui-opacity-8 xui-line-height-1-half'>
          Agrotech Solutions focuses on providing innovative solutions aimed at optimizing various agricultural processes, thereby driving growth within the agribusiness sector. Through the integration of cutting-edge technologies and advanced methodologies, Agrotech Solutions endeavors to address key challenges faced by farmers, producers, and stakeholders in the agricultural value chain.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          By leveraging the power of technology, Agrotech Solutions aims to enhance productivity, efficiency, and sustainability across different facets of agriculture, including crop cultivation, livestock management, irrigation systems, and supply chain logistics. Through the development and deployment of specialized tools, software platforms, and data-driven insights, the company empowers agricultural professionals to make informed decisions, streamline operations, and maximize yields.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Furthermore, Agrotech Solutions remains committed to fostering collaboration and knowledge-sharing within the agricultural community. By facilitating partnerships between industry players, research institutions, and government agencies, the company aims to create synergies that drive innovation and propel the agribusiness sector forward.
          </p>

        </div>
      )
    },
    {
      question: 'Custom Software Solutions',
      answer: (
        <div>
          <p className='xui-font-sz-80 xui-opacity-8 xui-line-height-1-half'>
          Harnessing the power of custom software solutions enables businesses to leverage technology tailored specifically to their unique needs and requirements. Instead of relying on off-the-shelf solutions that may not fully address their challenges, organizations can collaborate with experienced developers to create bespoke software that aligns perfectly with their objectives.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          One of the key advantages of custom software is its ability to streamline processes and improve efficiency. By automating repetitive tasks and integrating disparate systems, businesses can reduce manual effort, minimize errors, and optimize workflows, leading to increased productivity and cost savings.
          </p>
          <p className='xui-font-sz-80 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          In addition to enhancing internal operations, custom software solutions can also enable businesses to better serve their customers. Whether through personalized user interfaces, seamless integrations, or advanced functionality, bespoke software can help organizations deliver exceptional experiences that foster loyalty and drive growth.
          </p>

        </div>
      )
    },

  ];
 

  return (
    <OurSolutionItem data={OurSolutionData}/>
  );
};

export default OurSolution;
