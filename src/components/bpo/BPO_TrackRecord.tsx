import { Fade } from "react-awesome-reveal"

type FadeDirection = "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";

interface Records {
    title: string;
    text: string;
    delay: number;
    direction: FadeDirection
}

const records: Records[] = [
    {
        title: '5y+',
        text: 'Industrial experience',
        delay: 0,
        direction: 'left'
    },
    {
        title: '30+',
        text: 'Serving companies',
        delay: 250,
        direction: 'up'
    },    
    {
        title: '100+',
        text: 'In-house experts',
        delay: 500,
        direction: 'right'
    },    
]


export default function BPO_TrackRecord(){

    const displayRecords = records.map((record, i) => {
        const { title, text, delay, direction } = record

        return(
            <Fade
                delay={delay}
                duration={2000}
                direction={direction}
            >
                <div
                    key={i}
                    className="mb-md-5 mb-5"
                >
                    <h4 className="m-0 p-0 mb-4 txt-63 text-center font-family-Outfit fw-600 txt-FFF">
                        { title }
                    </h4>

                    <p className="m-0 p-0 txt-FFF text-center fw-400 txt-27 font-family-Outfit">
                        { text }
                    </p>
                </div>
            </Fade>
        )
    })

    return(
        <div style={{ gap: '100px' }} className="track-record-bg flex items-center justify-center flex-col mx-lg-5 mx-md-4 mx-3">
            <div className="col-lg-6 col-md-9 col-12">
                <h1 className="text-center m-0 p-0 txt-37 font-family-Outfit txt-FFF">
                    Innovating Beyond Boundaries Redefining Industry Excellence
                </h1>
            </div>

            <div style={{ gap: '40px' }} className="flex flex-wrap w-4/5 items-stretch justify-center">
                { displayRecords }
            </div>
        </div>
    )
}