import { ArrowLeft } from '@carbon/icons-react';
import { Link } from 'react-router-dom';


const IdeaLab = () => {

  return (
    <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
      <section className='py-[3rem] text-center'>
        <Link to={'/'} className='inline-flex items-center py-[1rem] px-[1.5rem] border border-white rounded-[2rem] lg:text-[95%] text-[85%] text-[#FFF] no-underline'>
          <ArrowLeft className="mr-[1rem]" color="#FFF" />
          Our Job Pool
        </Link>
        <h1 className='lg:text-[250%] text-[180%] xui-font-normal mt-[1rem]'>Join the Grascope Talent Pool</h1>
        <p className='lg:text-[95%] text-[85%] opacity-[.8] leading-[1.5rem] mt-[1rem] mx-auto lg:w-[75%] w-full'>
          Grascope works with global clients and also builds its own products. Through our Idea Lab, we constantly design, test, and launch new digital solutions—so we're always on the lookout for brilliant creatives, developers, and strategists to bring into the fold.
        </p>
      </section>
    
    </section>
  );
};

export default IdeaLab;