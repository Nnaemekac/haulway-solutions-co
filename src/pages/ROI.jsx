import HeaderPattern from "../assets/images/header-pattern.png";
import Calculator from "../components/roi/Calculator";
import Header from "../components/roi/Header";

const ROI = () => {
    return (
        <section className='xui-lg-pt-8 xui-pt-7 xui-pb-3 xui-container xui-bg-pos-top' style={{backgroundImage: `url('${HeaderPattern}')`, backgroundRepeat: 'no-repeat'}}>
          <Header />
          <Calculator />
      </section>
    );
};

export default ROI;