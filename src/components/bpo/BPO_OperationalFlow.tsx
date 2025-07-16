import { ArrowLeft } from "@carbon/icons-react";
import { Fade } from "react-awesome-reveal";

const flowOptions = [
    { 
        label: 'Hiring Position',
        value: 'Customer support'
    },
    { 
        label: 'Your Current Hiring Cost/year',
        value: '£48,000'
    },    
    { 
        label: 'Your Hiring Cost with Grascope/year',
        value: '£18,000'
    },    
    { 
        label: 'Total Savings/year',
        value: '£30,000'
    },    
    { 
        label: 'Percentage Saved',
        value: '62.5%'
    },    
]

export default function BPO_OperationFlow(){

    const displayFlowOptions = flowOptions.map((flowOpt, i) => {
        const { label, value } = flowOpt

        return(
            <div
                key={i}
                style={{
                    gap: '10px'
                }}
                className="flex items-center justify-between mb-4"
            >
                <p
                    className="m-0 p-0 font-family-Outfit txt-FFF txt-15 fw-400"
                >
                    { label }
                </p>

                <p
                    style={{
                        fontSize: i == 0 ? '15.66px' : i == flowOptions.length - 1 ? '30.15px' : '18.56'
                    }}
                    className="m-0 p-0 font-family-Outfit fw-600 txt-FFF"
                >
                    { value }  
                </p>
            </div>
        )
    })

    return(
        <div className="px-3">
            <div className="flex flex-wrap items-stretch justify-between">
                <Fade 
                    duration={2000} 
                    direction="left" 
                    className="lg:w-1/2 w-full lg:mb-0 mb-4"
                >
                    <div className="operation-flow-bg">
                        <div className="operation-flow-inner-bg">
                            <div className="mb-5 flex items-center justify-between">
                                <div className="col-lg-2">
                                    <ArrowLeft color="#F5FFFF" size={30} />
                                </div>

                                <div className="col-lg-7">
                                    <h5 className="m-0 p-0 text-center font-family-Outfit txt-18 fw-600 txt-FFF">
                                        Your ROI With Grascope
                                    </h5>
                                </div>

                                <div className="col-lg-2" />
                            </div>

                            <div>
                                { displayFlowOptions }
                            </div>                        
                        </div>
                    </div>
                </Fade>


                <div className="lg:w-1/2 w-full lg:px-4 px-0 flex items-start justify-start flex-col">
                    <div
                        className="roi-header-title mb-4"
                    >
                        What Happens Next?
                    </div> 

                    <Fade 
                        direction="up" 
                        duration={2000}
                    >
                        <p className="m-0 p-0 txt-16 font-family-Outfit fw-400 txt-FFF">
                            Once you complete the ROI Calculator, your estimate will be delivered instantly. 
                            A member of our operations team will follow up with a walkthrough of your results and a recommendation tailored to your current workflow. No hard sell. Just clarity and what it would take to run your operations like clockwork.                        
                        </p>
                    </Fade>

                </div>
            </div>
        </div>
    )
}