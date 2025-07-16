import { Slide } from 'react-awesome-reveal'
import { Briefcase, MoneyBag, ShieldCheck, TimerIcon, StackIcon, People } from '../icons'

const featuresList = [
    {
        Icon: () => <TimerIcon />,
        title: 'Accelerated Execution',
        text: 'Up to 37% faster execution with fully managed Nigerian teams'
    },
    {
        Icon: () => <MoneyBag />,
        title: 'Cost Efficiency',
        text: '20–30% cost savings on admin and back-office operations'
    },    
    {
        Icon: () => <Briefcase />,
        title: 'Hassle-free Hiring',
        text: 'No hiring headaches — we handle sourcing, training, oversight'
    }, 
    {
        Icon: () => <ShieldCheck />,
        title: 'Transparency Management',
        text: 'Full transparency: dashboards, weekly updates, accountable leads'
    }, 
    {
        Icon: () => <StackIcon />,
        title: 'Continous Improvement',
        text: 'Ongoing process improvement — not just fixed tasks'
    },     
    {
        Icon: () => <People />,
        title: 'In person, Fully Managed Team',
        text: 'Staff report to the office daily from 9–5—no freelancers.'
    },         
]


export default function BPO_Features(){

    const displayFeaturesList = featuresList.map((item, i) => {
        const { Icon, title, text } = item

        return(
            <div
                key={i}
                style={{
                    
                }}
                className="lg:w-1/3 w-full mb-5 features-single-feature-bg"
            >
                <div style={{ gap: '12px' }} className="lg:w-4/5 w-full flex flex-col justify-start items-start">
                    <div className='feature-single-feature-icon-bg'>
                        <Icon />
                    </div>

                    <h4 
                        className="m-0 p-0 txt-19 fw-500 font-family-Outfit txt-FFF"
                    >
                        { title }
                    </h4>

                    <p className="m-0 p-0 txt-16 font-family-Outfit fw-400 txt-FFF">
                        { text }
                    </p>
                </div>
            </div>
        )
    })

    return(
        <div className="px-lg-5 px-md-4 px-3">
            <h1 style={{ lineHeight: '58.5px' }} className="m-0 p-0 txt-39 lg:w-4/5 md:w-4/5 w-full fw-600 font-family-Outfit txt-FFF">
                For operations leads and founders managing too much with too little support — Grascope helps you delegate intelligently and scale without chaos.
            </h1>

            <div className="py-8" />

            <Slide
                duration={2000}
            >
                <div className="flex items-stretch justify-start flex-wrap">
                    { displayFeaturesList }
                </div>
            </Slide>
        </div>
    )
}