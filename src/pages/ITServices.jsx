import Header from '../components/it-services/Header';
import Services from '../components/it-services/Services';
import HeaderPattern from "../assets/images/header-pattern.png";
// import Contact from '../components/it-services/Contact';

const ITServices = () => {
  return (
    <>
      <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container xui-bg-pos-top' style={{backgroundImage: `url('${HeaderPattern}')`, backgroundRepeat: 'no-repeat'}}>
          <Header />
          <Services />
          {/* <Contact /> */}
      </section>
    </>
  );
};

export default ITServices;