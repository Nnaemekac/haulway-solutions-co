import { TypeAnimation } from 'react-type-animation'

export default function BPO_Footer(){
    return(
        <div className="px-lg-5 px-md-4 px-3 footer-bg py-5">
            <div style={{ gap: '30px' }} className="flex flex-col mb-5 pb-5">
                <h3 className="text-center m-0 p-0 txt-32 font-family-Outfit fw-500 txt-FFF">
                    <span className="txt-737373">Proven across</span> international teams 
                </h3>

                <h2 className="text-center m-0 p-0 txt-44 font-family-Outfit fw-500 txt-FFF">
                    Trusted by <span className="txt-737373">growing companies</span>
                </h2>

                <h1 className="text-center m-0 p-0 txt-54 font-family-Outfit fw-500 txt-FFF">
                    <span className="txt-737373">Built for operators</span>
                    <span>
                        <TypeAnimation
                            sequence={[
                                ' who are done with bottlenecks',
                                2000,
                                ' who demand flawless execution',
                                2000,
                                ' who thrive on real-time insights',
                                2000,
                                ' who refuse to be slowed down',
                                2000,
                                " who prioritize uptime above all",
                                2000,
                                " who obsess over operational excellence",
                                2000,
                                " who run on data, not guesswork",
                                2000,
                                " who turn friction into flow",
                                2000,
                                " who scale without compromise",
                                2000,
                                " who make reliability their standard",
                                2000,
                                ` who never settle for “good enough”`,
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />                        
                    </span>
                </h1>            
            </div>
        </div>
    )
}