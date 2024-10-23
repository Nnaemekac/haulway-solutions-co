/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */

import AccordionItem from "./AccordionItem";
const Dropdown = () => {
    const dropdownData = [
        {
          question: `Inclusions`,
          answer: 
            <div className="xui-pl-1 dropdown-list">
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-grid-gap-half xui-opacity-7 xui-font-w-500">Minimum Number of Staff: 20+ dedicated staff members (scalable based on needs)</p></li>
                </ul>
                <p className='xui-lg-font-sz-110 xui-font-sz-90 xui-font-w-500'>Roles</p>
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-grid-gap-half xui-opacity-7 xui-font-w-500">Multiple dedicated support teams for customer service, technical support, and data management.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Full-time on-site managers and HR specialists.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">In-house software engineers, IT infrastructure specialists, and project managers.</p></li>
                </ul>
            </div>
        },
        {
          question: `Flexibility`,
          answer: 
            <div className="xui-pl-1 dropdown-list">
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Trust Our Expertise: Allow Grascope to handle the entire recruitment process based on your needs.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Be Involved: You can be involved in interviewing and selecting the staff that will work directly on your projects.</p></li>
                </ul>
            </div>
        },
        {
          question: `BPO Services`,
          answer: 
            <div className="xui-pl-1 dropdown-list">
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Dedicated 24/7 Support Teams: Custom teams for specific departments.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Comprehensive Technical Support: Tier 1-3 tech support for complex issues.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Data Solutions: Advanced data analytics, processing, and secure management.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Complete HR Management: Workforce planning, benefits, and compliance.</p></li>
                </ul>
            </div>
        },
        {
          question: `IT Services`,
          answer:
            <div className="xui-pl-1 dropdown-list">
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Advanced Software Development: Create enterprise-grade applications tailored to your business.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Full IT Infrastructure Management: Ensure optimal system performance and security.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">DevOps & Cloud Services: Manage CI/CD pipelines, cloud infrastructure, and automated deployments.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Cybersecurity Services: Protect your business with advanced security solutions.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">AI/ML Integration: Implement AI and machine learning for business intelligence and data analysis.</p></li>
                </ul>
            </div>
        }
    ];

    return (
        <>
        <section className="xui-py-1 xui-overflow-y-hidden">
            <AccordionItem data={dropdownData}/>
        </section>
        </>
    )
};

export default Dropdown;