// import CostSavings from '../components/bpo-solutions/CostSavings';
import CostSavings from '../components/bpo/CostSavings';
import Packages from '../components/bpo/Packages';
import BPOHeaderSlider from '../components/BPOHeaderSlider';

const BPOSolutions = () => {
  return (
    <>
      <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
          <BPOHeaderSlider />
          <Packages />
          <CostSavings />
      </section>
    </>
  );
};

export default BPOSolutions;