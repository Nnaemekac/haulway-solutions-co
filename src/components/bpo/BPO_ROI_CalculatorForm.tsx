import { Formik } from "formik";
import '../animations/css/animations.css'

export default function BPO_ROI_CalculatorForm(){
    return(
        <div className="lg:px-5 md:px-4 px-3 flex items-center justify-center flex-col">
            <div className="roi-calculator-form-anim" />

            <div style={{ gap: '20px' }} className="mb-5 lg:w-1/2 w-full flex items-center justify-center flex-col">
                <div
                    className="roi-header-title"
                >
                    Our ROI Calculator
                </div>

                <h1 className="m-0 p-0 txt-37 font-family-Outfit txt-FFF text-center">
                    Return On Investment {'('}ROI{")"} Calculator
                </h1>

                <div className="flex items-center justify-center">
                    <p className="w-4/5 m-0 p-0 txt-16 font-family-Outfit txt-FFF fw-500 text-center">
                        Measure your returns with precision—Grascope's ROI Calculator helps you make data-driven decisions, optimize investments, and maximize growth.                    
                    </p>
                </div>
            </div>

            <Formik
                initialValues={{}}
                onSubmit={() => {}}
            >
                {() => (
                    <div className="w-full roi-form-container">
                        <h1 style={{ textTransform: 'capitalize' }} className="m-0 p-0 text-center txt-32 fw-600 font-family-Outfit txt-FFF mb-5 pb-4">
                            See how much you can save today!
                        </h1>

                        <div className="mb-5 pb-4">
                            <div className="mb-4 flex flex-wrap items-center justify-between">
                                <div 
                                    className="lg:mb-0 mb-4 lg:w-1/2 w-full lg:px-3 px-0"
                                >
                                    <p className="m-0 p-0 mb-2 txt-16 font-family-Outfit fw-500 txt-F5FFFF">
                                        First name<sup className="txt-C30101 px-1 txt-17">*</sup>
                                    </p>
                                    <input 
                                        className="roi-form-input w-full"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div 
                                    className="lg:w-1/2 w-full lg:px-3 px-0"
                                >
                                    <p className="m-0 p-0 mb-2 txt-16 font-family-Outfit fw-500 txt-F5FFFF">
                                        Last name<sup className="txt-C30101 px-1 txt-17">*</sup>
                                    </p>
                                    <input 
                                        className="roi-form-input w-full"
                                        placeholder="Last name"
                                    />
                                </div>                            
                            </div>

                            <div className="flex flex-wrap items-center justify-between">
                                <div 
                                    className="mb-lg-0 mb-md-4 mb-4 lg:w-1/2 w-full lg:px-3 px-0"
                                >
                                    <p className="m-0 p-0 mb-2 txt-16 font-family-Outfit fw-500 txt-F5FFFF">
                                        Email address<sup className="txt-C30101 px-1 txt-17">*</sup>
                                    </p>
                                    <input 
                                        className="roi-form-input w-full"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div 
                                    className="lg:w-1/2 w-full lg:px-3 px-0"
                                >
                                    <p className="m-0 p-0 mb-2 txt-16 font-family-Outfit fw-500 txt-F5FFFF">
                                        Phone number {"("}optional{")"}
                                    </p>
                                    <input 
                                        className="roi-form-input w-full"
                                        placeholder="Phone number"
                                    />
                                </div>                            
                            </div>  
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="header-btn lg:w-1/2 w-full items-center justify-center txt-23">
                                Start My ROI Calculation
                            </button>                      
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}