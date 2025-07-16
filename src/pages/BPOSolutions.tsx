// import CostSavings from '../components/bpo-solutions/CostSavings';
import { Fade } from 'react-awesome-reveal';
import BPO_Caption from '../components/bpo/BPO_Caption';
import BPO_Features from '../components/bpo/BPO_Features';
import BPO_Footer from '../components/bpo/BPO_Footer';
import BPO_Header from '../components/bpo/BPO_Header';
import BPO_OperationFlow from '../components/bpo/BPO_OperationalFlow';
import BPO_TrackRecord from '../components/bpo/BPO_TrackRecord';
import '../components/bpo/css/bpoSolutions.css'

const BPOSolutions = () => {
  return (
    <>
      <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
        <BPO_Header />

        <div className="my-5 py-12" />  

        <BPO_Features />  

        <div className="my-5 py-12" />

        <Fade 
          duration={2000}
        >
            <BPO_TrackRecord />
        </Fade>       

        <div className="my-5 py-12" />            

        <BPO_OperationFlow />  

        <div className="my-5 py-12" /> 

        <BPO_Caption />   

        <div className="my-5 py-5" />             

        <BPO_Footer />                         

          {/* <BPOHeaderSlider />
          <Packages />
          <CostSavings /> */}
      </section>
    </>
  );
};

export default BPOSolutions;