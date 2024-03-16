import { useEffect, useLayoutEffect, useRef, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spec2 from "./specializations/Spec2";
import { useLocation } from "react-router-dom";

const BPOService = () => {
    const location = useLocation();
    const [headerText, setHeaderText] = useState(null);
    const [paragraphText, setParagraphText] = useState(null);


    useEffect(() => {
        // Extract the 'tab' parameter from the URL
        const urlParams = new URLSearchParams(location.search);
        const tabParam = urlParams.get('tab');
      
        // Check if the URL contains 'customer-service' and set activeTab accordingly
        if (location.pathname.includes('customer-service')) {
            setHeaderText("Customer Service");
            setParagraphText(`GRASCOPE ANSWERS THE NEEDS OF SMALL
            AND MEDIUM-SIZED BUSINESS WITH
            FLEXIBLE, LOW COST SOLUTIONS`);
        }
        else if(location.pathname.includes('telesales-outsourcing')){
            setHeaderText("Telesales Outsourcing");
            setParagraphText(`GRASCOPE OFFERS EXPERIENCED, HIGHLY-SKILLED TELESALES AGENTS AND TEAM MANAGEMENT`)
        } 
        else if(location.pathname.includes('live-chat')){
            setHeaderText("Live Chat Support");
            setParagraphText(`GRASCOPE’S LIVE CHAT SOLUTIONS ENABLE YOU TO
            INCREASE ONLINE SALES AND IMPROVE SUPPORT
            QUICKLY AND EASILY FOR A PRICE THAT MAKES BUSINESS SENSE`);
        } 
        else if(location.pathname.includes('content-moderation')){
            setHeaderText("Content Moderation");
            setParagraphText(`YEARS OF EXPERIENCE
            GIVE GRASCOPE AN EDGE IN
            PROVIDING MODERATION SERVICES`);
        } 
        else if(location.pathname.includes('seo-and-ppc')){
            setHeaderText("SEARCH ENGINE MARKETING: SEO & PPC");
            setParagraphText(`CREATE A SUCCESSFUL AND LASTING
            SEARCH ENGINE MARKETING (SEM) STRATEGY
            WITH OUTSOURCED SEM SERVICES FROM GRASCOPE`);
        } 
        else if(location.pathname.includes('social-media-marketing')){
            setHeaderText("Social Media Marketing");
            setParagraphText(`SOCIAL MEDIA MARKETING SERVICES FROM GRASCOPE CAN HELP YOU CONNECT
            WITH EXISTING CUSTOMERS IN A RICHER, MORE PRODUCTIVE WAY AND ATTRACT
            NEW CUSTOMERS BY IMPROVING YOUR ONLINE POSITIONING`);
        } 
        else if(location.pathname.includes('email-marketing')){
            setHeaderText("Email Marketing");
            setParagraphText(`DEEPEN YOUR CONNECTION WITH EXISTING CUSTOMERS AND MAXIMIZE
            YOUR OPPORTUNITIES WITH POTENTIAL CUSTOMERS WITH
            OUTSOURCED EMAIL MARKETING SOLUTIONS FROM GRASCOPE`);
        } 
        else if(location.pathname.includes('content-marketing')){
            setHeaderText("Content Marketing");
            setParagraphText(`GENERATE BRAND AWARENESS AND REACH YOUR
            ORGANIZATION’S POTENTIAL CUSTOMER BASE WITH OUTSOURCED
            CONTENT MARKETING SOLUTIONS FROM GRASCOPE`);
        } 
        else if(location.pathname.includes('IT-Support')){
            setHeaderText(" IT Support: System/Network Admin");
            setParagraphText(`GRASCOPE ENABLES SEAMLESS REMOTE SUPPORT`);
        } 
        else if(location.pathname.includes('web-design')){
            setHeaderText("Web Design");
            setParagraphText(`GRASCOPE’S DESIGNERS & WEB DEVELOPERS
            DELIVER AWARD-WINNING RESULTS`);
        } 
        else if(location.pathname.includes('web-development')){
            setHeaderText("Web Development");
            setParagraphText(`MAKE THE MOST OF YOUR RESOURCES BY
            OUTSOURCING YOUR WEB DEVELOPMENT TO
            EXPERTS FROM GRASCOPE`);
        } 
        else if(location.pathname.includes('software-development')){
            setHeaderText("Software Development");
            setParagraphText(`SKILLED DEVELOPERS, PROPER PLANNING AND A
            PROVEN DEVELOPMENT PROCESS WILL ENSURE
            THE SUCCESS OF YOUR PROJECT`);

        } 
        else if(location.pathname.includes('graphic-design')){
            setHeaderText("Graphic Design");
            setParagraphText(`WORK WITH AWARD-WINNING DESIGNERS
            FOR A FRACTION OF THE COST OF YOUR LOCAL MARKET`);
        } 
        else if(location.pathname.includes('animation')){
            setHeaderText("Animation for corporate presentations");
            setParagraphText(`UNLOCK THE POTENTIAL OF YOUR
            CORPORATE PRESENTATIONS WITH OUTSOURCED
            ANIMATION SERVICES FROM GRASCOPE`);
        } 
        else if(location.pathname.includes('story-boards')){
            setHeaderText("Story Boards");
            setParagraphText(`GRASCOPE HAS CREATED OUTBOARDZ,
            REPRESENTING TOP STORYBOARD
            ARTISTS.`);
        } 
        else if(location.pathname.includes('quality-assurance')){
            setHeaderText("Quality Assurance");
            setParagraphText(`MAKE SURE YOUR PRODUCTS ARE
            THE BEST THEY CAN BE WITH
            LOW-COST QA PROFESSIONALS`);
        } 

        else if(location.pathname.includes('data-processing')){
            setHeaderText("Data Processing");
            setParagraphText(`TAKE CONTROL OF YOUR DATA
            IN A WAY THAT MAKES BUSINESS SENSE
            WITH OUTSOURCED PROFESSIONALS`);
        } 
        else if(location.pathname.includes('accounting')){
            setHeaderText("Financial Accounting");
            setParagraphText(`SAVE MONEY ON YOUR BOOKKEEPING AND
            ACCOUNTING AND FOCUS ON YOUR CORE BUSINESS`);
        } 
        else if(location.pathname.includes('hr-support')){
            setHeaderText("HR Support");
            setParagraphText(`LOWER YOUR HR AND RECRUITING COSTS
            AND IMPROVE YOUR RESULTS
            BY OUTSOURCING TO EXPERTS`);
        } 
        else if(location.pathname.includes('virtual-assistant')){
            setHeaderText("Virtual Assistant");
            setParagraphText(`GET YOUR LIFE BACK BY OUTSOURCING
            MENIAL TASKS TO A LOW-COST
            VIRTUAL ASSISTANT`);
        } 
        else if(location.pathname.includes('medical-billing')){
            setHeaderText("Medical Billing");
            setParagraphText(`
            SHORTEN RESOLUTION TIMES, IMPROVE SERVICE LEVELS,
            AND OPTIMIZE REVENUE FLOW WITH MEDICAL BILLING
            STAFFING SOLUTIONS`);
        } 
        else if(location.pathname.includes('insurance-support')){
            setHeaderText("Insurance Support");
            setParagraphText(`
            DRIVE INNOVATION AND IMPROVE CUSTOMER SERVICE WITH OUTSOURCED INSURANCE PROCESSING SUPPORT FROM GRASCOPE`);
        } 
        else if(location.pathname.includes('lawyers-and-paralegals')){
            setHeaderText("Lawyers & Paralegals");
            setParagraphText(`
            OUTSOURCED LEGAL STAFFING FROM GRASCOPE CAN HELP YOU
            LOWER COSTS, ADDRESS STAFFING SHORTAGES & IMPROVE
            POSITIONING IN THE HIGHLY COMPETITIVE LEGAL INDUSTRY`);
        } 
        else if(location.pathname.includes('real-estate')){
            setHeaderText("Real Estate");
            setParagraphText(`
            IMPROVE SERVICE CONSISTENCY AND INCREASE
            FOCUS ON CORE BUSINESS WITH OUTSOURCED REAL ESTATE
            STAFFING SOLUTIONS FROM GRASCOPE`);
        } 
        else if(location.pathname.includes('management-and-administration')){
            setHeaderText("Management & Administration");
            setParagraphText(`
            IMPROVE FOCUS & OVERALL EFFICIENCY
            WITH THE HELP OF OUTSOURCED MANAGEMENT &
            ADMINISTRATIVE SPECIALISTS FROM GRASCOPE`);
        } 
        
      }, [location.pathname, location.search]);

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div className="xui-pos-relative">
      
      <section className="xui-h-500 xui-pos-relative xui-bg-sz-cover xui-bg-pos-top" style={{"backgroundImage" : `url('https://img.freepik.com/free-photo/person-office-work-day_23-2150690165.jpg?t=st=1710333996~exp=1710337596~hmac=bbe0389dc9433355577e93d344682c05b8ffa222af737c0b10563090031c016e&w=740')`, 'backgroundAttachment': 'fixed'}}>
        <div className="xui-overlay-2 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-h-fluid-100 xui-pt-9 xui-text-center xui-lg-pb-7 xui-pb-5 xui-container">
            <div className="">
                <h3 data-aos="fade-in" data-aos-duration="800" class="xui-text-uppercase xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">{headerText}</h3>
                <p className="xui-font-sz-100 xui-opacity-8 xui-mt-2">{paragraphText}</p>
                
        </div>
        </div>
    </section>

      <div className="xui-pt-5 xui-lg-pb-5 xui-pb-5 xui-container">
          <div className="xui-pos-relative">
            <div >
              <h3 class="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Specializations</h3>
              <p className="xui-font-sz-80 xui-opacity-6 xui-line-height-1-half xui-w-fluid-100 xui-mt-1">With our commitment to excellence and forward-thinking approach, we're not just shaping the future – we're leading it.</p>
            </div>
            <div className="xui-mt-2">
              <Spec2 />
            
            </div>
        </div>
      </div>  

    </div>
  )
}

export default BPOService