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
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-grid-gap-half xui-opacity-7 xui-font-w-500">Minimum Number of Staff: 10 dedicated staff members</p></li>
                </ul>
                <p className='xui-lg-font-sz-110 xui-font-sz-90 xui-font-w-500'>Roles</p>
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-grid-gap-half xui-opacity-7 xui-font-w-500">5 Customer Support Agents (24/7 availability, phone, email, and chat)</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">2 Technical Support Agents (Tier 1 and 2)</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">2 Data Management Specialists (data processing, analytics, and reporting)</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">1 HR Specialist</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">1 Software Engineer/Developer</p></li>
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
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-opacity-7 xui-font-w-500 xui-line-height-1-half">24/7 Customer Support: Round-the-clock service across all communication channels.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Comprehensive Technical Support: Handle advanced technical issues and troubleshooting.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">HR & Payroll (Advanced): Comprehensive HR services including compliance and benefits management.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">In-Person Staff Management (Advanced): Full-time on-site management and performance auditing.</p></li>
                </ul>
            </div>
        },
        {
          question: `IT Services`,
          answer:
            <div className="xui-pl-1 dropdown-list">
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Custom Software Development: Develop tailored software solutions for your business.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">IT Infrastructure Management: Oversee your IT systems, ensuring smooth operations.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Cloud Services: Cloud platform management and integration.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Web & App Development: Create and maintain custom web or mobile applications.</p></li>
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