import { Fade } from "react-awesome-reveal";
import { ArrowRightCircle } from "../icons";
import { useNavigate } from "react-router-dom";
import '../animations/css/animations.css'

export default function BPO_Header(){

    const navigate = useNavigate()
    const navigateTo = (path: string) => navigate(path)
    const goToRoiCalculator = () => navigateTo('/roi')

    return(
        <div>
            <div className="header-bg bg-img">
                <div className="my-5" />

                <div className="flex items-center justify-center px-lg-5 px-md-4 px-3">
                    <div style={{ gap: '30px' }} className="lg:w-3/4  flex items-center justify-center flex-col"> 
                        <h1 style={{ lineHeight: '70px' }} className="capitalize m-0 p-0 txt-63 fw-600 font-family-Outfit txt-FFF text-center">
                            Your operations are costing more than you think
                        </h1>

                        <Fade duration={2000}>
                            <div className="flex items-center justify-center">
                                <div className="lg:w-3/4 w-full">
                                    <p className="m-0 p-0 text-center txt-16 font-family-Outfit fw-300 txt-FFF">
                                        Use our 30-second ROI Calculator to quantify how much time, money, and internal bandwidth your team is losing — and what streamlining with Grascope could unlock.                        
                                    </p>
                                </div>
                            </div>
                        </Fade>

                        <Fade direction="up" duration={2000}>
                            <button onClick={goToRoiCalculator} className="header-btn">
                                <span>
                                    Calculate My ROI
                                </span>

                                <ArrowRightCircle />
                            </button>
                        </Fade>

                        <div className="roi-calculator-form-anim" />
                    </div>
                </div>

                <div className="my-5" />

                <div className="py-3 px-lg-5 px-md-4 px-3">
                    {/* <Slider {...settings}>
                        <CarouselItem1 />
                        <CarouselItem1 />
                    </Slider>             */}

                    {/* <Fade
                        duration={3000}
                    >
                        <img 
                            className="col-lg-12 col-md-12 col-12 d-lg-block d-md-block d-none"
                            src={tempHeaderImg}
                        />
                    </Fade> */}
                </div>
            </div>            
        </div>
    )
}