
import { User } from 'iconsax-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'react-feather';
import { useLocation, useParams } from 'react-router-dom';

const Spec2item = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { id } = useParams();
    const location = useLocation();
  
  const [activeTab, setActiveTab] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

  };
  useEffect(() => {
    // Set the default active tab when the component mounts
    if (data && data[activeIndex] && data[activeIndex].answer.length > 0) {
      setActiveTab(`${activeIndex}-0`);
    }
  }, [data, activeIndex]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
    useEffect(() => {
        // Extract the 'tab' parameter from the URL
        const urlParams = new URLSearchParams(location.search);
        const tabParam = urlParams.get('tab');
      
        // Check if the URL contains 'customer-service' and set activeTab accordingly
        if(location.pathname.includes('telesales-outsourcing')){
            setActiveTab(`0-0`);
            console.log(activeIndex);
        } 
        else if (location.pathname.includes('customer-service')) {
            setActiveTab(`0-1`);
            console.log(activeIndex);
        }
        else if(location.pathname.includes('live-chat')){
            setActiveTab(`0-2`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('content-moderation')){
            setActiveTab(`${activeIndex}-3`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('seo-and-ppc')){
            setActiveTab(`${activeIndex}-4`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('social-media-marketing')){
            setActiveTab(`${activeIndex}-5`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('email-marketing')){
            setActiveTab(`${activeIndex}-6`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('content-marketing')){
            setActiveTab(`${activeIndex}-7`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('IT-Support')){
            setActiveIndex(1);
            setActiveTab(`${1}-0`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('web-design')){
            setActiveIndex(1);
            setActiveTab(`${1}-1`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('web-development')){
            setActiveIndex(1);
            setActiveTab(`1-2`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('software-development')){
            setActiveIndex(1);
            setActiveTab(`1-3`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('graphic-design')){
            setActiveIndex(1);
            setActiveTab(`1-4`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('animation')){
            setActiveIndex(1);
            setActiveTab(`1-5`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('story-boards')){
            setActiveIndex(1);
            setActiveTab(`1-6`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('quality-assurance')){
            setActiveIndex(1);
            setActiveTab(`1-7`);
            console.log(activeIndex);
        } 

        else if(location.pathname.includes('data-processing')){
            setActiveIndex(2);
            setActiveTab(`2-0`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('accounting')){
            setActiveIndex(2);
            setActiveTab(`2-1`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('hr-support')){
            setActiveIndex(2);
            setActiveTab(`2-2`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('virtual-assistant')){
            setActiveIndex(2);
            setActiveTab(`2-3`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('medical-billing')){
            setActiveIndex(2);
            setActiveTab(`2-4`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('insurance-support')){
            setActiveIndex(2);
            setActiveTab(`2-5`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('lawyers-and-paralegals')){
            setActiveIndex(2);
            setActiveTab(`2-6`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('real-estate')){
            setActiveIndex(2);
            setActiveTab(`2-7`);
            console.log(activeIndex);
        } 
        else if(location.pathname.includes('management-and-administration')){
            setActiveIndex(2);
            setActiveTab(`2-8`);
            console.log(activeIndex);
        } 
        else if (tabParam !== null) {
          setActiveTab(parseInt(tabParam, 10));
        }
      }, [location.pathname, location.search, activeIndex, activeTab]);
      
      const contentMap = {
        '0-0': (
            <>
                <div>
                    <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
                    Grascope Industries Ltd, a dynamic conglomerate dedicated to driving innovation and entrepreneurship across sectors, offers unparalleled BPO services for telesales. With a robust portfolio of companies under our wing, we're at the forefront of shaping industries and creating lasting impact.
                    </p>
                    <p className='xui-lg-font-sz-120 xui-mt-1 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
                    In today's rapidly evolving business landscape, the growing diversity of potential sales channels can sometimes lead companies to lose focus on traditional sales efforts, such as tele sales. However, in tough economic times, there may be no more effective method than the telephone to convert new customers.
                    </p>
                    <p className='xui-lg-font-sz-120 xui-mt-1 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
                    To help companies retain focus, ensure performance, and control costs, Grascope offers outsourced tele sales operations. We leverage state-of-the-art facilities to deliver exceptional tele sales services, without compromising on quality or efficiency.
                    </p>
                    <p className='xui-lg-font-sz-120 xui-mt-1 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
                    With Grascope's BPO services for telesales, companies can confidently outsource their tele sales operations, knowing that they are partnering with a trusted industry leader committed to delivering exceptional results.
                    </p>
                    <ul className='xui-row xui-mt-2'>
                        <div className='xui-lg-col-6 xui-col-12'>
                            <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Top Staff:</span> Accent Neutral, Educated, Highly Motivated</li>
                            <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Transparency:</span> Call Recording, Biometrics, Webcams</li>
                            <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Technology:</span> VOIP, Softphones, Virtual PBX</li>
                            <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Infrastructure:</span> State of the Art Facilities</li>
                            <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Reduce Costs:</span> Fraction of Local Market</li>
                            <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Flexibility:</span> From One Agent to 100</li>
                        </div>
                        <div className='xui-lg-col-6 xui-col-12 xui-lg-pl-5 xui-pl-none'>
                            <li className='xui-my-1'>Speed to Market</li>
                            <li className='xui-my-1'>Access Expertise and Best Practices</li>
                            <li className='xui-my-1'>Focus on Core Business</li>
                            <li className='xui-my-1'>Eliminate Capital Investment</li>
                            <li className='xui-my-1'>Easily Cover 24-7</li>
                            <li className='xui-my-1'>Redundancy and Diversification</li>
                            <li className='xui-my-1'>Risk Mitigation</li>
                        </div>
                    
                    </ul>
                    <div className='telesales-pricing-holder xui-mt-1'>
                        <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                        <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                            <div className='xui-p-1 telesales-pricing xui-text-center'>
                                <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                                    <User size="28px" color="#37d67a" variant='Bold' />
                                </div>
                                <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                                <div className='xui-mt-1'>
                                    <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$49</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                                    <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                                </div>
                                <div className='xui-mt-2'>
                                    <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                                    <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                                </div>
                                
                            </div>
                            <div className='xui-p-1 telesales-pricing xui-text-center'>
                                <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                                    <User size="28px" color="#37d67a" variant='Bold' />
                                </div>
                                <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                                <div className='xui-mt-1'>
                                    <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,200.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                                    <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                                </div>
                                <div className='xui-mt-2'>
                                    <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$9.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                                    <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                                </div>
                                
                            </div>
                            <div className='xui-p-1 telesales-pricing xui-text-center'>
                                <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                                    <User size="28px" color="#37d67a" variant='Bold' />
                                </div>
                                <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                                <div className='xui-mt-1'>
                                    <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,500.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                                    <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                                </div>
                                <div className='xui-mt-2'>
                                    <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                                    <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
      
    ),
    '0-1': (
        <>
        <div>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
            In virtually every industry, companies face fierce competition and extreme pressure to maximize their resources. Managers and entrepreneurs must make decisions quickly and are given precious little room for error. Companies relying on teleservices to support their customers must find solutions that offer a superior customer support experience while at the same time providing cost efficiency, operational flexibility, and strategic compatibility.
            </p>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
            At the core of our vision are comprehensive metrics of excellence that permeate our organization and serve as a clear benchmark for each employee. By leveraging remote staff customer service outsourcing with us, businesses can create a dedicated team capable of delivering world-class service and performance. Whether you require a single virtual help desk agent or a full team, Grascope is committed to helping you elevate your customer service operations to new heights.
            </p>
            <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
            <ul className='xui-row xui-mt-1'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Technology:</span> Redundancy, Reliability, Results</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Hiring:</span> Hiring for Attitude, Training for Technology</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'> Efficiency/Productivity:</span> Customized Metrics</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Accountability:</span> Close Monitoring, Careful Management</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Customer Experience:</span> Planning and Implementation</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Employee Satisfaction:</span>  Focus on Retention</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Quality Assurance:</span> Constant Monitoring and Improvement</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Client Integration:</span> Applying Core Metrics to Client Vision</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Flexibility:</span> From One Agent to 100</li>
                </div>
                <div className='xui-lg-col-6 xui-col-12 xui-lg-pl-5 xui-pl-none'>
                    <li className='xui-my-1'>No Capital Investment Required</li>
                    <li className='xui-my-1'>Speed to Market</li>
                    <li className='xui-my-1'> Easily Cover 24-7</li>
                    <li className='xui-my-1'>Focus on Core Business</li>
                    <li className='xui-my-1'>Access to Best Practices</li>
                </div>
            
            </ul>
            <div className='telesales-pricing-holder xui-mt-1'>
                <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,100.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$9.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,300.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    ),
    '0-2': (
        <>
        <div>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
            With the rise of new modes of communication, such as the internet, social networking, and SMS, companies have had to adopt new ways of interacting with their customers. Providing strategic and timely choices for web visitors not only enhances customer satisfaction but also dramatically increases conversion rates.
            </p>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
            Live Chat has proven itself as an important component of a comprehensive e-commerce strategy and an extremely effective way to offer general support, provide technical assistance, retain customers, generate sales, and create leads. Grascope offers a range of Live Chat and e-mail services ranging from agent sourcing to full, turn-key solutions that include staffing, integration, CRM, reporting and analytics.
            </p>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
            Our Live-Chat, Email Support and Click-to-Call technology offers seamless integration with any website, as well as a variety of options for customer interaction and robust data-gathering and CRM support. Grascope allows you to supercharge website sales and customer support quickly, easily and for a price that makes business sense.
            </p>
            <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
            <ul className='xui-row xui-mt-1'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <li className='xui-my-1'>Increase Sales</li>
                    <li className='xui-my-1'>Improve Customer Service</li>
                    <li className='xui-my-1'>Agent Staffing or Turn-Key Solution</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Technology:</span> Redundancy, Reliability, Results</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Hiring:</span> Hire for Attitude, Train for Technology</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Efficiency/Productivity:</span> Custom Performance Metrics</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Accountability:</span> Close Monitoring, Careful Management</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Customer Experience:</span> Design and Implementation</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Employee Satisfaction:</span> Focus on Retention</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Quality Assurance:</span> Close Monitoring</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Flexibility:</span> From One Agent to 100</li>
                </div>
                <div className='xui-lg-col-6 xui-col-12 xui-lg-pl-5 xui-pl-none'>
                    <li className='xui-my-1'>Speed Time to Market</li>
                    <li className='xui-my-1'>Get a Custom Solution for Your Business</li>
                    <li className='xui-my-1'>Domain Expertise Equals Results</li>
                    <li className='xui-my-1'>Interact with Customers in Real-Time</li>
                    <li className='xui-my-1'>Seamless Application Integration</li>
                    <li className='xui-my-1'>Track Conversions, Measure ROI</li>
                    <li className='xui-my-1'>No Capital Investment Required</li>
                    <li className='xui-my-1'>Speed to Market</li>
                    <li className='xui-my-1'>Easily Cover 24-7</li>
                    <li className='xui-my-1'>Focus on Core Business</li>
                    <li className='xui-my-1'>Access to Best Practices</li>
                </div>
            
            </ul>
            <div className='telesales-pricing-holder xui-mt-1'>
                <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,100.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$9.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,300.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    ),
    '0-3': (
      <div>
        <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
            Grascope has been providing reliable, cost-effective outsourced content moderation services to some of the world’s most well-known brands. Our domain expertise and operational efficiency allow our clients to maximize resources, deliver better services to their customers and protect their brands.
        </p>
        <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>We have skilled content moderators experienced in:</h3>
        <ul className='xui-row xui-mt-2'>
            <div className='xui-lg-col-6 xui-col-12'>
                <li className='xui-my-1'>Website Moderation</li>
                <li className='xui-my-1'>User-Generated Content Moderation</li>
                <li className='xui-my-1'>Image and Video Moderation</li>
                <li className='xui-my-1'>Forum Moderation</li>
            </div>
            <div className='xui-lg-col-6 xui-col-12 xui-pl-3'>
                <li className='xui-my-1'>Community Moderation and Management</li>
                <li className='xui-my-1'>Profanity Filtering</li>
                <li className='xui-my-1'>Social Media Moderation</li>
                <li className='xui-my-1'>Profile Moderation</li>
            </div>
        
        </ul>
        <h3 className='xui-font-w-bold xui-font-sz-200 xui-text-center xui-mt-2'>OUTSOURCED CONTENT MODERATION</h3>
        <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>
            Social networking and user-generated content have changed the rules of business.  Virtually every type of company, from media to manufacturing, now makes use of social media to engage their customers on a daily basis.  But the raw, real-time nature of social media, as well as a constantly evolving legal landscape, has made moderation a pressing concern for companies looking to protect their brands.  This, in turn, has added cost pressures for companies already looking to make the most of limited resources.
        </p>
        <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
        Some of the benefits of our offshore solutions include:
        </p>
        <div className='xui-mt-2'>
            <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Cost Savings -</span> Less than half of domestic market cost</p>
            <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Knowledge and Domain Expertise -</span> Guarantee quality and best practices</p>
            <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Risk and Quality Control -</span> Output-based deals possible</p>
            <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Capacity Management -</span> Raise capacity, lower overhead</p>
            <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Easier Staffing -</span> Overcome domestic labor shortages</p>
            <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Time Zone Coverage -</span> Cover 24/7 at a lower cost</p>
            <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Time Savings -</span> Quickly build your own cost-effective offshore team</p>
        </div>
        <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half xui-mt-1'>
            All-inclusive monthly costs for a full-time community moderator begin at $800 dollars per moderator depending on the specifications and level of experience required.
        </p>
        <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
        <div className='xui-row xui-mt-2'>
            <div className='xui-lg-col-6 xui-col-12'>
                <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Protection from Unlawful, explicit, and offensive content -</span> Without moderation, your community will quickly fill with this type of content.  The ever-changing legal landscape, as evidenced by the recent conviction of Google executives in Italy, makes it a necessity for companies to do their utmost to protect themselves.</p>
                <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Protection from Predators -</span> who may be looking to victimize other community members, especially minors.  Not only does moderation fulfill your social responsibility as a community operator, but it protects your brand from being tarnished by the actions of your community members.</p>
                <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Protection from Pirated content -</span> Due diligence must be exercised to prevent wrongful use of copyrighted material.</p>
                <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Protection from Conflict among community members -</span> Moderators are able to nip conflicts in the bud and guide users toward positive interaction.</p>
            </div>
            <div className='xui-lg-col-6 xui-col-12 xui-pl-3'>
                <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Clear communication</span> of your brand message to the community.</p>
                <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>A more entertaining and compelling experience</span> by keeping content focused on the interests of your community.</p>
                <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Feedback from the community</span> that provides valuable customer data.</p>
                <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Loyalty</span> among members because they feel they are being heard.</p>
                <p className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>A better functioning community</span> by promoting company awareness of issues users may be facing.</p>
            </div>
        
        </div>
        <div className='telesales-pricing-holder xui-mt-1'>
                <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$7.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,050.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,200.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$9.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                </div>
            </div>
      </div>
    ),
    '0-4': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          In the realm of Internet-based marketing, where competition is fierce and technology evolves rapidly, companies face the challenge of developing effective strategies to attract and engage customers. Grascope understands the importance of a strong online presence and the role it plays in customer acquisition and retention.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Our dedicated team of professionals specializes in search engine optimization (SEO), search engine marketing (SEM), and pay-per-click (PPC) advertising, ensuring that businesses maximize their online visibility and reach. Additionally, our content creators, including writers, social media specialists, graphic artists, and animators, work collaboratively to produce high-quality content that resonates with target audiences across various digital platforms.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Built from the ground up to meet the diverse teleservices needs of small and medium-sized businesses, Grascope's customer service outsourcing solutions are flexible, focused, and cost-effective. Whether you require one virtual help desk agent or a full team, we are committed to delivering world-class service and performance.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          At the heart of our operations lie comprehensive metrics of excellence that guide our employees and organization towards achieving unparalleled customer satisfaction. Through remote staff customer service outsourcing with Grascope, businesses can rest assured that their customer service needs are met with professionalism, efficiency, and dedication, helping them stay ahead in today's competitive marketplace.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Grascope people can fill the following online marketing roles and more:
          </p>
          <div className='xui-mt-2'>
              <p className='xui-my-1'>SEO/PPC Specialist</p>
              <p className='xui-my-1'>Senior SEO/PPC Specialist</p>
              <p className='xui-my-1'>SEM/SEO Accounts Specialist</p>
              <p className='xui-my-1'>Lead Generation Specialist</p>
              <p className='xui-my-1'>Email Marketing Specialist</p>
              <p className='xui-my-1'>Web Sales Specialist</p>
              <p className='xui-my-1'>SEO and PPC Account Manager</p>
              <p className='xui-my-1'>Senior SEM Manager</p>
              <p className='xui-my-1'>SEM Director</p>
              <p className='xui-my-1'>SEO/PPC Consultant</p>
              <p className='xui-my-1'>Social Media Specialist</p>
              <p className='xui-my-1'>Animator</p>
              <p className='xui-my-1'>Video Specialist</p>
          </div>

          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
              <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Services</h3>
                  <li className='xui-my-1'>Website Optimization</li>
                  <li className='xui-my-1'>Extensive Keywords Research</li>
                  <li className='xui-my-1'>Competition Analysis</li>
                  <li className='xui-my-1'>Content Creation: Writing, Videos, Animations, Social Media, Mail</li>
                  <li className='xui-my-1'>Link Building</li>
                  <li className='xui-my-1'>Link Analysis and Removal – Panda/Penguin Impact Consulting</li>
                  <li className='xui-my-1'>Search Strategy Development</li>
                  <li className='xui-my-1'>Social Media Identity Creation and Maintenance</li>
                  <li className='xui-my-1'>Data Collection and Analysis</li>
                  <li className='xui-my-1'>Reputation Enhancement</li>
                  <li className='xui-my-1'>Search Engine Marketing</li>
                  <li className='xui-my-1'>Other Online Marketing</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
              <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Benefits</h3>
                  <li className='xui-my-1'>Access to Best Practices</li>
                  <li className='xui-my-1'>Guaranteed Results</li>
                  <li className='xui-my-1'>Ability to Focus on Core Business</li>
                  <li className='xui-my-1'>Cost Savings</li>
                  <li className='xui-my-1'>Wide Range of Services</li>
                  <li className='xui-my-1'>Custom Solutions</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$7.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,646.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,033.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$15.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '0-5': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Our team of social media experts specializes in growing and engaging communities around products or services. From managing social programs to generating custom content and increasing brand awareness, we offer a comprehensive approach to social media marketing that drives profitability and fosters customer loyalty.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Social media marketing results can be measured by customer engagement data, such as page views, likes, shares, backlinks, and comments on various social media sites. Whether you are a small business establishing an online presence or a large company looking to augment or improve your current social media marketing strategy, you need social media experts to get the most out of the process.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          We understand that achieving a strong online presence requires thoughtful and high-quality content across various platforms. That's why we provide highly talented professionals, including SEO/SEM experts, PPC specialists, writers, social media specialists, graphic artists, and animators, to support our clients' marketing efforts.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Social media marketing professionals grow and engage communities around products or services. They manage social programs, plan for custom content generation and create digital assets, increase brand awareness, attract potential customers, and increase profitability. It is a specialized skill and a labor-intensive process that requires significant resources to launch and maintain.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Some of the roles that Grascope people can fill include:
          </p>
          <div className='xui-mt-2'>
              <p className='xui-my-1'>Social Media Specialist</p>
              <p className='xui-my-1'>Social Media Planner</p>
              <p className='xui-my-1'>Social Media Strategist</p>
              <p className='xui-my-1'>Digital Content Specialist</p>
              <p className='xui-my-1'>Blogger/Social Media Content Writer</p>
              <p className='xui-my-1'>Social Media Analyst</p>
              <p className='xui-my-1'>Social Media Coordinator</p>
              <p className='xui-my-1'>Social Media Product Manager</p>
              <p className='xui-my-1'>Director of Social Media</p>
              <p className='xui-my-1'>Community Manager</p>
              <p className='xui-my-1'>Interactive Media Project manager</p>
              <p className='xui-my-1'>Interactive Traffic Manager</p>
              <p className='xui-my-1'>Public Relations Brand Manager</p>
              <p className='xui-my-1'>Online Community Manager</p>
              <p className='xui-my-1'>Social Media Moderator</p>
          </div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Grascope social media marketing professionals are experienced and passionate about what they do. Their domain expertise includes integration of traditional and new media marketing efforts, creation of targeted and personalized marketing messages through customer insights, multi-channel marketing campaign execution, brand monitoring, and custom profile development. Grascope social media experts are proficient in multiple social media platforms, scheduling tools and social media management software.
          </p>
          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Cost Savings</li>
                  <li className='xui-my-1'>Niche Expertise</li>
                  <li className='xui-my-1'>Solutions to Competency Gaps</li>
                  <li className='xui-my-1'>Talented Marketing Professionals</li>
                  <li className='xui-my-1'>Best Practices</li>
                  <li className='xui-my-1'>Time-Zone Coverage</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>Increased Competitiveness</li>
                  <li className='xui-my-1'>Shorter Implementation Time</li>
                  <li className='xui-my-1'>The Right People at the Right Time</li>
                  <li className='xui-my-1'>Scalable Solutions</li>
                  <li className='xui-my-1'>Project-Based or Staff Leasing</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,250.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2000.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,700.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$17.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '0-6': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Regular communication with clients is crucial to business success, and email marketing is one of the most effective ways to do this. Email marketing is the use of email to send a commercial message to your target audience. Managed properly, email marketing campaigns can drive a high return on investment. Most organizations use email marketing because it is significantly more affordable and faster than regular mail or other forms of communication. With email blasts, marketers can reach large numbers of subscribers and potential customers.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Email marketing campaigns allow businesses to solicit sales, acquire new customers, build loyalty, engage existing customers, understand consumer behavior, and improve brand awareness. Whether you need to generate leads or boost audience engagement, email marketing is a powerful tool to achieve your goals cost-effectively. If you already use search engine marketing, email marketing can further enhance effective communication between your business and clients.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Creating and managing successful email marketing campaigns requires experienced, talented professionals, but the cost of hiring full-time email marketing professionals can be very high, especially for startups and small businesses. Even if you can afford to build a team of in-house email marketing experts, it is often ideal to work with an experienced third party.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Some of the roles that Grascope people can fill include:
          </p>
          <div className='xui-mt-2'>
              <p className='xui-my-1'>Email Marketing Specialist</p>
              <p className='xui-my-1'>Email Marketing Lead</p>
              <p className='xui-my-1'>Email Marketing Campaign Specialist</p>
              <p className='xui-my-1'>Email Marketing Coordinator</p>
              <p className='xui-my-1'>Email Marketing Strategist</p>
              <p className='xui-my-1'>Email Marketing Developer</p>
              <p className='xui-my-1'>Email Marketing Analyst</p>
              <p className='xui-my-1'>Email Marketing Director</p>
              <p className='xui-my-1'>Email Marketing Project Manager</p>
              <p className='xui-my-1'>Database Marketing Email Production Manager</p>
              <p className='xui-my-1'>Digital Marketing Consultant</p>
          </div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Grascope email marketers are skilled and passionate about what they do, and it shows in their high-quality output. We guarantee optimal results for your campaigns in the form of improved open and click-through rates. Our email marketing expertise includes responsive email template design, dynamic content, HTML build and optimization, email list management, data-driven campaign planning, development and testing, analytics, consulting, and database upload. Our email marketers also have professional-level experience with email automation software, web development tools, and marketing tools.
          </p>
          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Reduced Costs</li>
                  <li className='xui-my-1'>Improve Efficiency</li>
                  <li className='xui-my-1'>Solutions to Competency Gaps</li>
                  <li className='xui-my-1'>Time-Zone Coverage</li>
                  <li className='xui-my-1'>Flexible Solutions</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>Niche Expertise</li>
                  <li className='xui-my-1'>Improved Focus</li>
                  <li className='xui-my-1'>Shorter Implementation Time</li>
                  <li className='xui-my-1'>Project-Based or Staff Leasing</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,130.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,388.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,775.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$17.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '0-7': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          At Grascope, we understand that successful content marketing is fundamental to reinforcing and maintaining your organization’s trustworthiness, credibility, and expertise. Unlike direct sales marketing, content marketing serves as an indirect yet powerful tool for educating customers about the benefits of your products or services. By consuming blog posts, videos, and other forms of content, customers gain valuable insights that influence their purchasing decisions.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          The impact of effective content marketing extends beyond mere engagement; it directly contributes to lead generation, sales enhancement, and profit improvement. Leveraging the power of social media channels, our content marketing strategies facilitate seamless sharing and promotion of content by your audience, thereby fostering brand awareness, building loyalty, and nurturing vibrant communities around your brand.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          The right content is as compelling as direct marketing in generating leads, increasing sales, and improving profits. The positive impact of content marketing to the bottom line is further enhanced by social media channels, wherein your audience can share, “like” and promote content. This helps businesses generate brand awareness, build loyalty and grow their communities.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Partner with Grascope Industries Ltd for unparalleled BPO services in content marketing, and unlock the full potential of your brand's digital presence. Let us collaborate to craft compelling narratives that captivate audiences, drive conversions, and propel your business towards sustained growth and success.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Some of the roles that Grascope people can fill include:
          </p>
          <div className='xui-mt-2'>
              <p className='xui-my-1'>Content Marketing Specialist</p>
              <p className='xui-my-1'>Media Strategist</p>
              <p className='xui-my-1'>Creative Content Specialist</p>
              <p className='xui-my-1'>Communications Specialist</p>
              <p className='xui-my-1'>Digital Content Designer</p>
              <p className='xui-my-1'>Lead Trainer</p>
              <p className='xui-my-1'>Freelance and Agency Relations</p>
              <p className='xui-my-1'>Content Marketing Officer</p>
              <p className='xui-my-1'>Chief Content Officer</p>
              <p className='xui-my-1'>Managing Editor</p>
              <p className='xui-my-1'>Audience Director</p>
              <p className='xui-my-1'>Writer</p>
              <p className='xui-my-1'>Animator</p>
              <p className='xui-my-1'>Filmmaker</p>
              <p className='xui-my-1'>Editor</p>
          </div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Our content marketing expertise encompasses keyword research, target audience analysis, competitive analysis, benchmarking strategy, search engine marketing, content amplification, social promotion, responsive design, structured data services, sponsored content and more. Grascope content marketing specialists are both creative and analytic. They have professional experience with ROI-driven marketing campaigns and content marketing software and tools.
          </p>
          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Maximize Resources</li>
                  <li className='xui-my-1'>Solutions to Competency Gaps</li>
                  <li className='xui-my-1'>Access Exceptional Marketing Talent</li>
                  <li className='xui-my-1'>Niche Expertise</li>
                  <li className='xui-my-1'>Improved Focus</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>Improved Efficiency</li>
                  <li className='xui-my-1'>Time-Zone Coverage</li>
                  <li className='xui-my-1'>Increased Competitiveness</li>
                  <li className='xui-my-1'>Scalable Solutions</li>
                  <li className='xui-my-1'>Project-Based or Staff Leasing</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,250.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2000.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,700.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$17.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    // ... Add content for other tabs in the first array
    '1-0': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          In today's rapidly evolving business landscape, the demand for qualified System and Network Administrators has never been greater. As businesses of all sizes increasingly rely on sophisticated computer networks and diverse devices, the need for proficient support professionals has become essential. While automated tools can aid in certain tasks, the value of skilled human support cannot be understated. However, providing quality human support can be labor-intensive and costly.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Recognizing this challenge, many forward-thinking companies have turned to outsourcing as a strategic solution. Grascope leverages its years of experience in providing technical support staff to a diverse array of companies, whether for in-house technical support or as part of IT consulting ventures. As one of the premier offshore outsourcing firms specializing in IT support technicians, Grascope has honed its expertise in recruiting and supporting professionals to ensure exceptional IT services for our clients.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Our approach is rooted in strong management practices, unparalleled transparency, diligent process oversight, state-of-the-art facilities, and a steadfast commitment to meeting the unique needs of each client. By partnering with Grascope, businesses gain access to a talented pool of System and Network Administrators, seamlessly integrating them into their operations to drive efficiency, productivity, and growth.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          At Grascope, we understand the importance of reliable technical support in today's digital age. Whether you require ongoing support for your internal IT infrastructure or specialized assistance for specific projects, we have the capabilities and resources to deliver uncompromising results. Trust Grascope to be your trusted partner in navigating the complexities of IT support, allowing you to focus on what matters most: driving your business forward.
          </p>
          
          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Benefits & Services</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Highly-Motivated, Extremely Qualified IT Systems and Network Administrators</li>
                  <li className='xui-my-1'>Fraction of the Cost of Local Markets</li>
                  <li className='xui-my-1'>Complete HR and Infrastructure Support</li>
                  <li className='xui-my-1'>Professional Oversight and Complete Transparency</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>Fraction of the Cost of Local Markets</li>
                  <li className='xui-my-1'>State-of-the-Art Facilities</li>
                  <li className='xui-my-1'> Domain Expertise</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,130.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,033.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,808.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$17.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '1-1': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          While there are various options available for creating a website, from inexpensive but limited web-creation tools to expensive customized solutions, Grascope understands the challenges businesses face in choosing the right approach. Pre-packaged solutions or template-driven sites may offer initial convenience, but they lack flexibility and scalability as the business evolves. Moreover, companies miss the opportunity to collaborate with specialists who can create a site that truly reflects their vision and objectives.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          The problem with a pre-packaged solution or template-driven site is that not only will the site be difficult to change and adapt as the business grows, but also the company will miss the valuable opportunity to work with specialists who can draw on their experience to create a site that is flexible, upgradeable, and well suited to the specific needs of the company. But online developers and specialists are expensive and by starting down that path, the company will be obligated to continue investing heavily for site revisions and expansion.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Thanks to Grascope, businesses can benefit from tailored web solutions that are flexible, upgradeable, and aligned with their specific needs. Our commitment to excellence ensures that each website we create not only meets but exceeds our clients' expectations, driving growth and success in the digital realm.
          </p>
          
          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Fully Customized – Built to Your Specifications</li>
                  <li className='xui-my-1'>More than Just a Site – A Complete Strategy</li>
                  <li className='xui-my-1'>Award-Winning Design</li>
                  <li className='xui-my-1'>Utilizing Latest Techniques</li>
                  <li className='xui-my-1'>Guaranteed Best Practices</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>SEO-Oriented</li>
                  <li className='xui-my-1'>Content Consultation</li>
                  <li className='xui-my-1'>Marketing Consultation</li>
                  <li className='xui-my-1'>Advanced Functionality Available</li>
                  <li className='xui-my-1'>Fraction of the Cost of Local Market</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,000.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$9.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,600.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,100.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$14.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '1-2': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Many businesses require in-depth customized development to meet their specific needs, yet specialized web development can be labor-intensive and costly. To address this challenge, companies often turn to offshore outsourcing to lower costs and achieve ambitious plans. However, offshore outsourcing comes with its own set of challenges, including communication barriers, integration issues, and oversight concerns.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          At Grascope, we are committed to overcoming these challenges and making it easy and efficient for companies to collaborate with experienced and highly talented web developers. Leveraging our extensive experience in virtually all aspects of web development, we ensure that best practices are implemented at every stage of your project.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Our approach involves recruiting the best developers and supporting them with our company-wide core knowledge base. Whether you opt for a project-based program or your dedicated team of developers, rest assured that we provide them with the necessary tools and resources to bring your vision to life.
          </p>
          
          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Wide Experience: PHP, .NET, ASP, C, C++, Ruby, Java</li>
                  <li className='xui-my-1'>Cost Savings</li>
                  <li className='xui-my-1'>Domain Expertise</li>
                  <li className='xui-my-1'>Time-Zone Coverage</li>
                  <li className='xui-my-1'>Project-Based or Staff Leasing</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>Experienced, Motivated Developers</li>
                  <li className='xui-my-1'>Proven Recruiting Methods</li>
                  <li className='xui-my-1'>State-of-the-Art Equipment</li>
                  <li className='xui-my-1'>In-House Knowledge Base</li>
                  <li className='xui-my-1'>Guaranteed Best Practices</li>
                  <li className='xui-my-1'>From Planning Through Roll Out and QA</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,250.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2000.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,700.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$17.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '1-3': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Surveys have shown that a large percentage of software development projects fail due to cost overruns, missing functionality, schedule delays or some combination of those and other factors. Developing an application is a serious and complex business that requires foresight, planning, skill, and discipline. And because most companies don’t possess sufficient development expertise or resources in-house, the choice of a development partner becomes an additional variable in the process. Whether you require a fully managed solution or are only seeking supplemental staff to integrate with an existing team, your selection of a partner will be a key factor in dooming or boosting your chances for success.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Grascope is dedicated to the success of your project and we bring years of development experience to each and every project we handle. Our domain expertise extends from project planning, recruitment and infrastructure support, to development process implementation, design, architecture, coding, testing, QA, deployment, support and more. At the core of our vision is a set of excellence metrics attached to even the smallest of our tasks, an intense focus on detail, and process that allows us to keep even the most complex and challenging projects on track.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Grascope’s expertise, experience, attitude, and intrinsically low costs provide the roadmap for successfully navigating the development process. Please give us a call today for a free consultation and experience a new standard in offshore software development. There is never any obligation until you have found the perfect fit for your business.
          </p>
          
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
              <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Services</h3>
                  <li className='xui-my-1'>Developer Staff Leasing</li>
                  <li className='xui-my-1'>.NET Application Development</li>
                  <li className='xui-my-1'>PHP Development</li>
                  <li className='xui-my-1'>Database Design and Programming</li>
                  <li className='xui-my-1'>Application Development for Mobile Devices</li>
                  <li className='xui-my-1'>Java, C++, C#, Visual Basic, Perl and More</li>
                  <li className='xui-my-1'>Social Networking Application</li>
                  <li className='xui-my-1'>Moderation Applications</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
              <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Benefits</h3>
                  <li className='xui-my-1'>Access to Best Practices</li>
                  <li className='xui-my-1'>Costs – Fraction of Local Market</li>
                  <li className='xui-my-1'>Experienced Developers</li>
                  <li className='xui-my-1'>No Capital Investment</li>
                  <li className='xui-my-1'>Focus on Core Business</li>
                  <li className='xui-my-1'>Guaranteed Results</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,130.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,033.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$14.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$3,840.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$20.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '1-4': (
        <>
        <div>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
            The growing fragmentation of media has placed unprecedented cost pressures on advertising agencies, publishers, direct marketers, and other design-related industries. Budgets have shrunk but quality expectations have remained constant, and competition has grown even stiffer.
            </p>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
            The problem is that good design requires talent, and it is labor intensive. While process efficiencies can be introduced, good design cannot be automated. But there is a way to cut costs by up to 70% without compromising quality. Grascope is dedicated to helping companies maximize their resources by offering top offshore staff and enabling them to function as seamlessly as local team members.
            </p>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
            At the core of our vision are comprehensive metrics of excellence that infuse our DNA and provide a clear benchmark for each employee and for the organization as a whole. We will help you create a team that will perform at the highest international standards of quality and efficiency, whether you require one artist or a full team. We also offer managed solutions for all types of graphic design projects including marketing materials, corporate identity, package design, stationary, presentations and more.
            </p>
            <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
            <ul className='xui-row xui-mt-1'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Talent:</span> Redundancy, Reliability, Results</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Training:</span> Hiring for Attitude, Training for Technology</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'> Efficiency/Productivity:</span> Customized Metrics</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Accountability:</span> Close Monitoring, Careful Management</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Employee Satisfaction:</span>  Focus on Retention</li>
                </div>
                <div className='xui-lg-col-6 xui-col-12 xui-lg-pl-5 xui-pl-none'>
                <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Quality Assurance:</span> Redundancy, Reliability, Results</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Client Integration:</span> Hiring for Attitude, Training for Technology</li>
                    <li className='xui-my-1'><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-w-bold'>Technology:</span> Customized Metrics</li>
                </div>
            
            </ul>
            <div className='telesales-pricing-holder xui-mt-1'>
                <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,050.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,517.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,033.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$15.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    ),
    '1-5': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          For companies that use the Internet to make contact with customers and communicate with them about their products and services, animation has become an indispensable tool to simplify their message and engage with their audience in a compelling way. Animation allows you to create unique visuals that are more attractive and memorable than live action video for a fraction of the cost.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Animation has been proven to increase conversions significantly and drive purchasing intent better than other types of media. Studies show that people retain more from audio-visual presentations than they do from reading.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          A block of text can overwhelm even the most attentive viewer, but an animated presentation helps improve focus and retention because it is engaging and enjoyable. Web visitors are increasingly expecting sites to be responsive and interactive, with multimedia options that include animated content.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          The creation of high-quality animated presentations requires the talent of experienced animators, illustrators, designers, web developers, and other highly skilled creative professionals. The right people can be hard to find, and if you do find a local animator or animation company that perfectly matches your project goals, the cost may be prohibitive.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Grascope people can fill the following roles and more:
          </p>
          <div className='xui-mt-2'>
              <p className='xui-my-1'>Cartoonist</p>
              <p className='xui-my-1'>Character Animator</p>
              <p className='xui-my-1'>Stop Motion Animator</p>
              <p className='xui-my-1'>3D Modeler</p>
              <p className='xui-my-1'>Texture Artist</p>
              <p className='xui-my-1'>Matte Painter</p>
              <p className='xui-my-1'>Digital Painter</p>
              <p className='xui-my-1'>Storyboard Artist</p>
              <p className='xui-my-1'>Key Animator</p>
              <p className='xui-my-1'>Art Director</p>
              <p className='xui-my-1'>Visual Development Artist</p>
              <p className='xui-my-1'>Compositor</p>
              <p className='xui-my-1'>Concept Artist</p>
          </div>

          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Features & Benefits</h3>
            <ul className='xui-row xui-mt-1'>
                <div className='xui-lg-col-6 xui-col-12'>
                    <li className='xui-my-1'>Lower Cost</li>
                    <li className='xui-my-1'>Skilled, Highly Motivated Offshore Talent</li>
                    <li className='xui-my-1'>Niche Expertise</li>
                    <li className='xui-my-1'>Domain Expertise</li>
                    <li className='xui-my-1'>Oversight & Quality Control</li>
                    <li className='xui-my-1'>Access to the Latest Tools & Processes</li>
                </div>
                <div className='xui-lg-col-6 xui-col-12 xui-lg-pl-5 xui-pl-none'>
                    <li className='xui-my-1'>Time-Zone Coverage</li>
                    <li className='xui-my-1'>Improved Focus</li>
                    <li className='xui-my-1'>Shorter Implementation Time</li>
                    <li className='xui-my-1'>Domain Expertise</li>
                    <li className='xui-my-1'>Scalable Solutions</li>
                    <li className='xui-my-1'>Project-Based or Staff Leasing</li>
                </div>
            
            </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,250.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,000.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,700.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$17.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '1-6': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Grascope Industries Ltd, a dynamic conglomerate committed to fostering innovation and entrepreneurship across various sectors, introduces Outboardz, an agency dedicated to serving storyboard clients. Outboardz connects clients with top international storyboard artists, offering high-quality, cost-effective solutions for advertising and entertainment projects. By leveraging Outboardz, clients can access premium storyboard talent at a competitive price point, ensuring exceptional results while optimizing their budget allocation.
          </p>
          
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 xui-text-center'>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$285.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/day</span></p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 xui-text-center'>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '1-7': (
        <>
        <div>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
            In today's highly competitive business landscape, where cost pressures impact software development processes, delivering superior products efficiently is paramount. Quality assurance and testing represent crucial stages often overlooked but essential for ensuring consistent delivery of products that meet user expectations from the outset.
            </p>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
            In response to market demands, Grascope leverages its extensive experience to provide top-tier quality assurance professionals to global clients. We boast a proven track record of recruiting and supporting highly skilled QA teams, drawing from a rich pool of talent. Our expertise enables us to seamlessly integrate QA professionals into your operations, whether you require individual testers or a full team.
            </p>
            <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
            At Grascope, we are committed to delivering excellence, ensuring that our clients receive unparalleled support and expertise in quality assurance and testing. Trust us to optimize your software development process, enhance product quality, and drive long-term success.
            </p>
            <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
              <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Features</h3>
                  <li className='xui-my-1'>Independent Stakeholder Testing</li>
                  <li className='xui-my-1'>Scalability Testing</li>
                  <li className='xui-my-1'>Application Testing</li>
                  <li className='xui-my-1'>Platform Testing</li>
                  <li className='xui-my-1'>Unit testing</li>
                  <li className='xui-my-1'>Integration testing</li>
                  <li className='xui-my-1'>System Testing</li>
                  <li className='xui-my-1'>Functional/Regression Testing</li>
                  <li className='xui-my-1'>Acceptance Testing</li>
                  <li className='xui-my-1'>Load/Performance Testing</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
              <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Benefits</h3>
                  <li className='xui-my-1'>Cost Savings</li>
                  <li className='xui-my-1'>Predict Time to Market</li>
                  <li className='xui-my-1'>Repairs Less Costly</li>
                  <li className='xui-my-1'>Highly-Motivated, Experienced Staff</li>
                  <li className='xui-my-1'>Outsource to Ensure Best Practices</li>
                  <li className='xui-my-1'>Focus on Your Core Capabilities</li>
              </div>
          
          </ul>
            <div className='telesales-pricing-holder xui-mt-1'>
                <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,033.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$9.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                    <div className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,808.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    ),
    
    // ... Add content for other tabs in the second array
    '2-0': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Even in this age of information, organizing and making proper use of data can be a challenge. You may understand the potential of your data, yet still be daunted by the time and costs involved in rendering it into a manageable format. Grascope is dedicated to enabling companies to take control of information by offering innovative data entry and data management solutions with extreme accuracy and efficiency at prices that make business sense.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          But beneath our process efficiency is always the Grascope commitment to customized service. We will never try to fit you into a template or automated structure; we will work closely with you to find the perfect solution for your unique business.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Whether your data currently resides in a database, traditional media, outdated format, or even if we are tasked with collecting it from the web or elsewhere, we are able to process it and deliver it by any means and in any format you require.
          </p>
         
          
          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Benefits & Services</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Redundant Data Security Measures</li>
                  <li className='xui-my-1'>Input From any Location or Format</li>
                  <li className='xui-my-1'>Output to Any Format</li>
                  <li className='xui-my-1'>Accuracy Verification - Adjustable QA Levels</li>
                  <li className='xui-my-1'>Free Customization</li>
                  <li className='xui-my-1'>Experienced Staff – Expertise in Many Fields</li>
                  <li className='xui-my-1'>Latest Data Entry Software and Technology</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>Text, Online and Numerical Data</li>
                  <li className='xui-my-1'>Scanning and Indexing Services</li>
                  <li className='xui-my-1'>CV Data Scanning</li>
                  <li className='xui-my-1'>Invoice Data Scanning</li>
                  <li className='xui-my-1'>Direct Keying</li>
                  <li className='xui-my-1'>U.S.-Managed – U.S.  Account Reps</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$7.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,200.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,500.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$9.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '2-1': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Accounting, being a highly specialized and labor-intensive area, is a logical target for outsourcing. Many businesses recognize that accounting may not be among their core competencies and opt to partner with specialized providers to optimize costs, access specialized skills, ensure best practices, and enhance competitiveness by focusing on core operations. Furthermore, local accounting firms may choose to outsource back-office functions to streamline operations and prioritize client-facing activities.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Additionally, Grascope offers domain expertise across all aspects of the service, including recruiting, security protocols, software utilization, and technical infrastructure. This expertise guarantees the implementation of best practices and ensures optimal efficiency and security for our clients' accounting operations.
          </p>
         
          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Benefits & Services</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Achieve a Greater Focus on Core Business</li>
                  <li className='xui-my-1'>Increase Flexibility</li>
                  <li className='xui-my-1'>Gain Outside Expertise</li>
                  <li className='xui-my-1'>Accuracy Verification - Adjustable QA Levels</li>
                  <li className='xui-my-1'>Less Focus on Non-Value Add Activities</li>
                  <li className='xui-my-1'>More Focus on Clients</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>Reduce Fixed Costs</li>
                  <li className='xui-my-1'>Efficiently Increase Capacity</li>
                  <li className='xui-my-1'>QuickBooks, MYOB, Peachtree etc…</li>
                  <li className='xui-my-1'>VPN, Secure FTP and more…</li>
                  <li className='xui-my-1'>Adjust for Seasonal Staffing Needs</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,130.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$7.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,775.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$9.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,291.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '2-2': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Recruiting and Human Resources are vital aspects of any business, but they are labor-intensive and highly specialized. Most smaller and mid-sized businesses cannot afford to create a dedicated in-house team devoted to these functions. Even companies specializing in providing recruiting and HR services in local markets may require additional experienced support staff to help them succeed in a highly competitive field.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          At Grascope, we are dedicated to empowering companies to maximize their resources beyond expectations by offering highly motivated, skilled employees for a fraction of the cost of local markets. In addition, we offer extensive domain expertise in the field of HR and Recruiting, ensuring our clients access to best practices, the latest technology and optimum efficiency. By outsourcing these functions to an expert such as Grascope, companies are able to cut costs, improve performance, and focus on their core business.
          </p>
         
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
              <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Recruiting Services</h3>
                  <li className='xui-my-1'>Job Advertisements</li>
                  <li className='xui-my-1'>Recruitment</li>
                  <li className='xui-my-1'>Workstation</li>
                  <li className='xui-my-1'>Administrative Functions</li>
                  <li className='xui-my-1'>Requisition management</li>
                  <li className='xui-my-1'>Job Postings</li>
                  <li className='xui-my-1'>Resume Database Searching</li>
                  <li className='xui-my-1'>Social Network Sourcing</li>
                  <li className='xui-my-1'>Trade Groups</li>
                  <li className='xui-my-1'>Competitor-Industry Sourcing</li>
                  <li className='xui-my-1'>Track Organization and Management</li>
                  <li className='xui-my-1'>Candidate Screening</li>
                  <li className='xui-my-1'>Candidate Assessment and Selection</li>
                  <li className='xui-my-1'>Applicant Tracking</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
              <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>HR Support Services</h3>
                  <li className='xui-my-1'>Employee Relations – Policies & Procedures, Interviews etc…</li>
                  <li className='xui-my-1'>Compensation & Benefits Processing – Job Descriptions etc…</li>
                  <li className='xui-my-1'>Payroll Administration – Attendance Tracking</li>
                  <li className='xui-my-1'>Regulatory Compliance – FLSA, EEO etc…</li>
                  <li className='xui-my-1'>Performance Management – Surveys, Planning etc…</li>
                  <li className='xui-my-1'>Organizational Development – Audits, Analysis etc…</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$7.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,200.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,500.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '2-3': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          In today's fast-paced world, efficient time management is crucial for individuals seeking to focus on their core ideas, talents, and specializations. Grascope recognizes the importance of freeing up valuable time from routine tasks to enable professionals to concentrate on what truly matters. That's why we provide top-notch virtual assistant services, aimed at empowering individuals to reclaim their time and maximize productivity.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Our virtual assistants are highly educated and motivated professionals, meticulously recruited to meet the highest standards of excellence. Supported by close supervision, state-of-the-art facilities, and industry-best client monitoring systems, including webcams and biometric attendance verification, our virtual assistants ensure seamless support for our clients.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          At Grascope, we understand the significance of cost-effectiveness without compromising quality. Our college-educated virtual assistants are available for less than 6 dollars per hour or less than 1000 dollars per month, offering exceptional value for businesses of all sizes. By entrusting routine tasks to our virtual assistants, clients can unlock opportunities to pursue higher-level objectives and strategic initiatives, making our services an unparalleled investment in efficiency and growth.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          With Grascope's BPO services, clients can leverage the power of outsourcing to streamline operations, enhance productivity, and achieve their business objectives with confidence.
          </p>
         
          <h3 className='xui-font-sz-200 xui-font-9 xui-text-center xui-mt-2'>Sample Tasks</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Schedule Management</li>
                  <li className='xui-my-1'>Email Management</li>
                  <li className='xui-my-1'>Online Presence Updating</li>
                  <li className='xui-my-1'>SEO/Online Marketing</li>
                  <li className='xui-my-1'>Presentation Creation</li>
                  <li className='xui-my-1'>Correspondence</li>
                  <li className='xui-my-1'>Lead Generation</li>
                  <li className='xui-my-1'>Customer Support</li>
                  <li className='xui-my-1'>Research</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>Bill Paying</li>
                  <li className='xui-my-1'>Website Maintenance</li>
                  <li className='xui-my-1'>Press Release Distribution</li>
                  <li className='xui-my-1'>Proposal Creation</li>
                  <li className='xui-my-1'>Data Entry/Transcription</li>
                  <li className='xui-my-1'>Spreadsheet Creation</li>
                  <li className='xui-my-1'>Travel Arrangements</li>
                  <li className='xui-my-1'>Venue Booking</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$7.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,200.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$8.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,500.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$9.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
        </div>
        </div>
      ),
    '2-4': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Medical billing is a crucial component of the healthcare revenue cycle and the decision to outsource medical billing staffing can make a crucial difference in improving service and revenues. Medical billers are responsible for submitting and following claims to ensure that healthcare providers receive timely payment for the services they have performed. This process often requires multiple interactions among the biller, healthcare provider, and insurance company as well as in-depth knowledge of complex medical billing codes, which often change.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Access to an ample supply of skilled medical billers is therefore critical for healthcare organizations and medical billing service providers in order to avoid unnecessary delays and shortfalls in expected revenues. But cost pressures and the short supply of skilled medical billers in local markets have made it difficult for providers to maintain adequate medical billing staff. As a result, many organizations have begun outsourcing their medical billing staff overseas in order to save costs and access a wider talent pool. Technology has enabled the seamless integration of offshore teams with local medical billing processes and offshore staff have gained the knowledge and experience to deliver results on a par with local staff
          </p>
      
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Grascope people can fill the following online marketing roles and more:
          </p>
          <div className='xui-mt-2'>
              <p className='xui-my-1'>Entry-Level Patient Biller/Coder</p>
              <p className='xui-my-1'>Medical Billing Specialist</p>
              <p className='xui-my-1'>Senior Medical Billing Specialist</p>
              <p className='xui-my-1'>Coding Quality Reviewer</p>
              <p className='xui-my-1'>Medical Records Technician</p>
              <p className='xui-my-1'>Health Information Biller and Coder</p>
          </div>
          <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                  <li className='xui-my-1'>Lower Costs</li>
                  <li className='xui-my-1'>Shorter Resolution Times</li>
                  <li className='xui-my-1'>Domain Expertise</li>
                  <li className='xui-my-1'>Skilled, Highly Motivated Offshore Talent</li>
                  <li className='xui-my-1'>Time-Zone Coverage</li>
                  <li className='xui-my-1'>Reduced Paperwork</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                  <li className='xui-my-1'>Improved Process Efficiency</li>
                  <li className='xui-my-1'>Improved Service Quality</li>
                  <li className='xui-my-1'>Reduced Denials</li>
                  <li className='xui-my-1'>Improved Focus</li>
                  <li className='xui-my-1'>Scalable Solutions</li>
                  <li className='xui-my-1'>Project-Based or Staff Leasing</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,200.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,500.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
        </div>
      ),
    '2-5': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Medical billing is a crucial component of the healthcare revenue cycle and the decision to outsource medical billing staffing can make a crucial difference in improving service and revenues. Medical billers are responsible for submitting and following claims to ensure that healthcare providers receive timely payment for the services they have performed. This process often requires multiple interactions among the biller, healthcare provider, and insurance company as well as in-depth knowledge of complex medical billing codes, which often change.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Access to an ample supply of skilled medical billers is therefore critical for healthcare organizations and medical billing service providers in order to avoid unnecessary delays and shortfalls in expected revenues. But cost pressures and the short supply of skilled medical billers in local markets have made it difficult for providers to maintain adequate medical billing staff. As a result, many organizations have begun outsourcing their medical billing staff overseas in order to save costs and access a wider talent pool. Technology has enabled the seamless integration of offshore teams with local medical billing processes and offshore staff have gained the knowledge and experience to deliver results on a par with local staff
          </p>
      
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Here are some of the roles that Grascope staff can fill:
          </p>
          <div className='xui-mt-2'>
            <p className='xui-my-1'>Underwriting Consultant</p>
            <p className='xui-my-1'>Underwriting Support</p>
            <p className='xui-my-1'>Underwriting Manager</p>
            <p className='xui-my-1'>Financial Reporting Specialist</p>
            <p className='xui-my-1'>General Ledger Support Specialist</p>
            <p className='xui-my-1'>Stat and GAAP Reporting Specialist</p>
            <p className='xui-my-1'>Individual Life Underwriter</p>
            <p className='xui-my-1'>LTC Underwriters</p>
            <p className='xui-my-1'>New Business Underwriters</p>
            <p className='xui-my-1'>Remote Life Underwriter</p>
            <p className='xui-my-1'>Structured Settlement Underwriter</p>
            <p className='xui-my-1'>Commercial Lines Underwriter</p>
            <p className='xui-my-1'>Customer Support</p>
            <p className='xui-my-1'>Technical Support</p>
          </div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          At Grascope, it is our people that set us apart from other offshore staffing firms. Our recruitment team ensures that only the best insurance support staff is matched with our clients. We use modern recruitment techniques and take advantage of our deep industry contacts and partnerships. We interview and pre-screen each candidate before presenting them to a client, ensuring that only the top candidates make it to the shortlist. Our insurance support professionals truly care about what they do, and they are committed to your success from day one.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Grascope is committed to providing high-quality but cost-effective insurance support services and staffing solutions. All aspects of our operations are infused by our metrics of excellence. We adhere to the highest ethical standards and conduct our business with integrity and confidentiality, with security being a top priority throughout all of our processes.
          </p>
          <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                <li className='xui-my-1'>Talented Staff</li>
                <li className='xui-my-1'>Your Own Highly Motivated Offshore Team</li>
                <li className='xui-my-1'>Niche Expertise</li>
                <li className='xui-my-1'>Control Costs</li>
                <li className='xui-my-1'>Time-Zone Coverage</li>
                <li className='xui-my-1'>Improved Focus</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                <li className='xui-my-1'>Improved Customer Service</li>
                <li className='xui-my-1'>Increased Competitiveness</li>
                <li className='xui-my-1'>Shorter Implementation Time</li>
                <li className='xui-my-1'>Project-Based or Staff Leasing</li>
                <li className='xui-my-1'>Scalable Solutions</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$980.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,200.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,500.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$17.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
        </div>
        </div>
      ),
    '2-6': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Legal process outsourcing is a rapidly growing segment within the legal industry, driven by factors such as globalization, technological advancements, and the need to reduce costs while maintaining high standards of service. Grascope's BPO services provide a compelling value proposition, offering a strategic solution to help legal professionals overcome these challenges effectively.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Traditionally, outsourcing legal services was primarily viewed as a cost reduction strategy, with low-value work being outsourced to take advantage of labor arbitrage in developing countries. However, with the evolution of outsourcing centers like Grascope, there has been a significant increase in domain expertise, enabling law firms to outsource more sophisticated and higher-level processes overseas.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Furthermore, Grascope's integrated approach to outsourcing enables legal professionals to make deep cuts in their overhead while maintaining reliability and efficiency. By centralizing their outsourcing needs with Grascope, law firms can benefit from enhanced coordination, streamlined communication, and improved service delivery.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          In conclusion, Grascope Industries Ltd offers a comprehensive suite of Legal Process Outsourcing services tailored to the unique needs of lawyers and paralegals. By leveraging Grascope's expertise and resources, legal professionals can stay ahead in a competitive market, drive efficiency, and focus on delivering high-quality legal services to their clients.
          </p>

          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Here are some of the roles that Grascope staff can fill:
          </p>
          <div className='xui-mt-2'>
            <p className="xui-my-1">Document Coder</p>
            <p className="xui-my-1">Billing Clerk</p>
            <p className="xui-my-1">Legal Secretary</p>
            <p className="xui-my-1">Online Records Clerk</p>
            <p className="xui-my-1">Legal Executive Assistant</p>
            <p className="xui-my-1">Document Reviewer</p>
            <p className="xui-my-1">Document Processing Specialist</p>
            <p className="xui-my-1">Legal Administrator</p>
            <p className="xui-my-1">Legal Administrative Assistant</p>
            <p className="xui-my-1">Legal Researcher</p>
            <p className="xui-my-1">Litigation Support Specialist</p>
            <p className="xui-my-1">Case Manager</p>
            <p className="xui-my-1">Contract Administrator</p>
            <p className="xui-my-1">Compliance Specialist</p>
            <p className="xui-my-1">Patent/Intellectual Property Specialist</p>
            <p className="xui-my-1">Paralegal</p>
            <p className="xui-my-1">Foreign Language Translator</p>
          </div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Grascope legal personnel are experienced in multiple practice areas, including compliance, employment, M&A due diligence, litigation support, environmental, securities, class action and antitrust. Our industry domain expertise encompasses contact centers, insurance, healthcare, biotech and pharmaceutical, government, banking and finance, manufacturing, energy, commodities, higher education and more. Grascope legal staff also perform core activities such as litigation support, enterprise-level contract management, lease management, legal research and intellectual property services. Our recruitment specialists have access to deep industry networks, reducing time-to-fill and matching talent to the job much more quickly.
          </p>
          
          <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                <li className="xui-my-1">Cost Efficiency</li>
                <li className="xui-my-1">Niche Expertise</li>
                <li className="xui-my-1">Skilled, Highly Motivated Offshore Talent</li>
                <li className="xui-my-1">Time-Zone Coverage</li>
                <li className="xui-my-1">Improved Focus</li>
                <li className="xui-my-1">Increased Competitiveness</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                <li className="xui-my-1">Shorter Implementation Time</li>
                <li className="xui-my-1">Solutions to Competency Gaps</li>
                <li className="xui-my-1">Domain Expertise</li>
                <li className="xui-my-1">Scalable Solutions</li>
                <li className="xui-my-1">Project-Based or Staff Leasing</li>
                <li className="xui-my-1">Resources Also Available for Marketing and Back Office Needs</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>1,250.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,000.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,700.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$17.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
        </div>
        </div>
      ),
    '2-7': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          The real estate industry is undergoing a major transformation. Real estate firms and departments are contending with a slow growing and risky global economy, as well as the pressure to increase revenue while controlling costs. The key question is how resources can best be deployed to address these challenges cost effectively while supporting the dynamic needs of the organization.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          It is no surprise that outsourcing has gained momentum in the real estate industry over the last few years. Real estate firms are turning to service providers mainly to lower costs, increase efficiency, increase focus on core competencies, improve service consistency, and gain access to best practices and sophisticated technology.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Real estate service outsourcing providers are moving from transactional process offerings to assuming advisory, strategic roles that have been traditionally performed in-house by real estate firms. These functions include the management of leased portfolios, market research (occupancy analysis and forecasting), strategic planning, and even workplace design. Service providers are also being asked to develop strategic operating plans to improve returns for investors.
          </p>

          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Here are some of the roles that Grascope staff can fill:
          </p>
          
          <div className='xui-mt-2'>
            <p className="xui-my-1">Virtual Assistant (Sales)</p>
            <p className="xui-my-1">Virtual Assistant (Property Management)</p>
            <p className="xui-my-1">Customer Services Officer</p>
            <p className="xui-my-1">Telemarketing Officer</p>
            <p className="xui-my-1">Marketing Officer</p>
            <p className="xui-my-1">Leasing Consultant</p>
            <p className="xui-my-1">Property Manager</p>
            <p className="xui-my-1">Asset Manager</p>
            <p className="xui-my-1">Residential Auction Staff</p>
            <p className="xui-my-1">Lending Operations Analyst</p>
            <p className="xui-my-1">Executive Secretary</p>
            <p className="xui-my-1">Escrow Mortgage Professional</p>
            <p className="xui-my-1">New Home Sales and Marketing Professional</p>
            <p className="xui-my-1">Special Events Coordinator</p>
            <p className="xui-my-1">Property Finance and Accounting Specialist</p>
            <p className="xui-my-1">Project Manager</p>
            <p className="xui-my-1">Language Translator</p>
            <p className="xui-my-1">Maintenance Technician</p>
          </div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Grascope legal personnel are experienced in multiple practice areas, including compliance, employment, M&A due diligence, litigation support, environmental, securities, class action and antitrust. Our industry domain expertise encompasses contact centers, insurance, healthcare, biotech and pharmaceutical, government, banking and finance, manufacturing, energy, commodities, higher education and more. Grascope legal staff also perform core activities such as litigation support, enterprise-level contract management, lease management, legal research and intellectual property services. Our recruitment specialists have access to deep industry networks, reducing time-to-fill and matching talent to the job much more quickly.
          </p>
          
          <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                <li className="xui-my-1">Cost Efficiency</li>
                <li className="xui-my-1">Increased Service Consistency and Competitiveness</li>
                <li className="xui-my-1">Domain Expertise</li>
                <li className="xui-my-1">Time-Zone Coverage</li>
                <li className="xui-my-1">Access to Sophisticated Technology</li>
                <li className="xui-my-1">Option to Fill Strategic and Advisory Roles</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                <li className="xui-my-1">Improved Focus</li>
                <li className="xui-my-1">Skilled, Highly Motivated Offshore Talent</li>
                <li className="xui-my-1">Solutions to Competency Gaps</li>
                <li className="xui-my-1">Shorter Implementation Time</li>
                <li className="xui-my-1">Scalable Solutions</li>
                <li className="xui-my-1">Project-Based or Staff Leasing</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>980.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$10.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,200.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$12.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,500.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          <div className='xui-mt-2'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$17.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                          </div>
                          
                      </div>
                  </div>
        </div>
        </div>
      ),
    '2-8': (
        <div>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>
          Outsourced management and admin services allow internal HR staff to concentrate on core activities like strategy development and execution. The role of local HR staff decision makers say they have better control of admin and management responsibilities by outsourcing these functions to a third party. Outsourcing improves control of regulatory and reporting requirements and of costs. Better control in turn helps businesses manage their operational planning better and executives make more informed decisions. Even though outsourcing means transfer of some control to the vendor, executives generally prefer less administrative burden.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          A service provider like Grascope has superior expertise and resources to deliver significant management and administrative benefits to an organization. Businesses have better access to information and improved services. Nine out of ten respondents say that outsourcing reduces administrative burden through direct access to information and improves technology channels to retrieve pertinent data.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          Top-performing organizations often employ tech-savvy administrative staff with higher skill sets. It can be prohibitive to recruit, train and support full-time managers and administrative staff, particularly for small and medium-sized businesses. A trusted vendor has the capabilities and extensive network to attract and match talent to an organization’s changing staffing needs.
          </p>
          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-mt-1 xui-line-height-1-half'>
          In addition, partnering with a trusted vendor allows executives to optimize talent management. Vendors ensure that companies have the right people in the right roles and can easily scale up or down depending on business needs and goals. Grascope has the tools and expertise to support growth, whether it is to augment an existing workforce or prepare for future expansion.
          </p>

          <p className='xui-lg-font-sz-120 xui-font-sz-90 xui-line-height-1-half xui-mt-1'>
          Grascope’s outsourced management and administrative solutions encompass various industry-specific and shared activities such as document creation and processing, creative services, virtual admin support, and marketing and consulting services. Grascope provides the following management and administrative roles and more:
          </p>
          
          <div className='xui-mt-2'>
            <li className="xui-my-1">Admin Assistant</li>
            <li className="xui-my-1">Admin Manager</li>
            <li className="xui-my-1">Client Relations Officer</li>
            <li className="xui-my-1">Customer Support Officer</li>
            <li className="xui-my-1">Legal Secretary</li>
            <li className="xui-my-1">Virtual Assistant</li>
            <li className="xui-my-1"><span>Virtual Executive Assistant</span></li>
            <li className="xui-my-1">Typist/Word Processor</li>
            <li className="xui-my-1">Receptionist</li>
            <li className="xui-my-1">Events Coordinator</li>
            <li className="xui-my-1">Scheduling Coordinator</li>
            <li className="xui-my-1">Customer Services Manager</li>
            <li className="xui-my-1">Records Manager</li>
            <li className="xui-my-1">General Secretary</li>
            <li className="xui-my-1">Customer Survey Officer</li>
            <li className="xui-my-1">Personnel Coordinator</li>
            <li className="xui-my-1">Temporary Staff</li>
            <li className="xui-my-1">Employee Communications Coordinator</li>
            <li className="xui-my-1">Training and Development Specialist</li>
            <li className="xui-my-1">Executive Development Coach</li>
            <li className="xui-my-1">Performance and Risk Manager</li>
          </div>
          
          <h3 className='xui-font-w-bold xui-font-sz-150 xui-text-center xui-mt-2'>Features & Benefits</h3>
          <ul className='xui-row xui-mt-2'>
              <div className='xui-lg-col-6 xui-col-12'>
                <li className="xui-my-1">Scalability</li>
                <li className="xui-my-1">Project-Based or Staff Leasing</li>
                <li className="xui-my-1">Streamlined Processes</li>
                <li className="xui-my-1">Domain Expertise</li>
                <li className="xui-my-1">Reduced Costs</li>
                <li className="xui-my-1">Time-Zone Coverage</li>
                <li className="xui-my-1">Better Focus and Control</li>
              </div>
              <div className='xui-lg-col-6 xui-col-12 xui-pl-4'>
                <li className="xui-my-1">Access to Highly-Specialized Skills</li>
                <li className="xui-my-1">Improved Compliance</li>
                <li className="xui-my-1">Proven Recruiting Methods</li>
                <li className="xui-my-1">Advanced Technology</li>
                <li className="xui-my-1">Faster Delivery Speed</li>
                <li className="xui-my-1">Guaranteed Best Practices</li>
                <li className="xui-my-1">End-to-End Management</li>
              </div>
          
          </ul>
          
          <div className='telesales-pricing-holder xui-mt-1'>
                  <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Entry Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>980.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                          
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Mid Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$1,517.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>
                      </div>
                      <div className='xui-p-1 telesales-pricing xui-text-center'>
                          <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                              <User size="28px" color="#37d67a" variant='Bold' />
                          </div>
                          <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>Expert Level</h3>
                          <div className='xui-mt-1'>
                              <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>$2,033.00</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                              <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                          </div>

                      </div>
                  </div>
        </div>
        </div>
      ),
    // ... Add content for other tabs in the third array
  };
        // ... Add content for other tabs in the third array

  return (
    <div className='xui-row spec-item'>
      <div className='xui-lg-col-3'>
        {data.map((item, arrayIndex) => (
          <div className=' xui-cursor-pointer' key={arrayIndex}>
            <div
              onClick={() => toggleItem(arrayIndex)}
              className='xui-d-flex xui-flex-ai-center xui-bdr-rad-1 xui-py-1 xui-pr-1 xui-pl-half faq-section xui-pos-relative'
            >
              <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-9' style={{ width: 'calc(100% - 20px)' }}>
                {item.question}
              </h3>
              {activeIndex !== arrayIndex && (
                <ArrowDownRight size='20' color='#000' />
              )}
              {activeIndex === arrayIndex && (
                <ArrowUpRight size='20' color='#000' />
              )}
            </div>
            {activeIndex === arrayIndex && (
            <div className='xui-p-half'>
                {item.answer.map((ans, subTabIndex) => (
                <p
                    key={arrayIndex + '-' + subTabIndex}
                    onClick={() => handleTabClick(arrayIndex + '-' + subTabIndex)} // Concatenate arrayIndex and subTabIndex for the correct key
                    className={'xui-opacity-8 xui-font-sz-90 xui-my-1 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-2 ' + (activeTab === arrayIndex + '-' + subTabIndex ? 'primary-color xui-font-w-bold' : '')}
                >
                    {ans}
                </p>
                ))}
            </div>
            )}
          </div>
        ))}
      </div>

      <div className='xui-lg-col-9 xui-p-1'>
        {activeIndex !== null && activeTab !== null && (
          <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half'>
            {contentMap[activeTab]}
          </p>
        )}
      </div>
    </div>
  );
};

export default Spec2item;

