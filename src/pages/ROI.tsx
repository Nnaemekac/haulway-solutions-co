import { ArrowLeft } from "@carbon/icons-react"
import { Link } from "react-router-dom"
import Calculator from "../components/Calculator"

const ROI = () => {

  return (
    <>
      <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
        <section className='py-[3rem] text-center'>
          <Link to={'/'} className='inline-flex items-center py-[1rem] px-[1.5rem] border border-white rounded-[2rem] lg:text-[95%] text-[85%] text-[#FFF] no-underline'>
              <ArrowLeft className="mr-[1rem]" color="#FFF" />
              Our Hiring Tools
          </Link>
          <h1 className='lg:text-[250%] text-[180%] xui-font-normal mt-[1rem]'>Return On Investment (ROI) Calculator</h1>
          <p className='lg:text-[95%] text-[85%] opacity-[.8] leading-[1.5rem] mt-[1rem] mx-auto lg:w-[75%] w-full'>Measure your returns with precision—Grascope's ROI Calculator helps you make data-driven decisions, optimize investments, and maximize growth.</p>
        </section>
        <Calculator />
      </section>
    </>
  )
}

export default ROI