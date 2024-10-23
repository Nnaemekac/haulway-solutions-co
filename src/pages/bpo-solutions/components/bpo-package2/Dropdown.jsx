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
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-grid-gap-half xui-opacity-7 xui-font-w-500">Minimum Number of Staff: 5 dedicated staff members</p></li>
                </ul>
                <p className='xui-lg-font-sz-110 xui-font-sz-90 xui-font-w-500'>Roles</p>
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-grid-gap-half xui-opacity-7 xui-font-w-500">3 Customer Support Agents (12 hours/day, phone, email, and chat support)</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">1 Technical Support Agent (basic technical queries)</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">1 Data Management Specialist</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">1 Software Developer (Optional Add-On)</p></li>
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
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Customer Support (Advanced): Provide support via phone, chat, and email.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Data Entry & Management: Advanced data handling and reporting.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">HR & Payroll Services: Payroll processing, leave tracking, and employee records management.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">In-Person Staff Management (Basic): Occasional on-site management for staff oversight.</p></li>
                </ul>
            </div>
        },
        {
          question: `IT Services`,
          answer:
            <div className="xui-pl-1 dropdown-list">
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Basic IT Support: Software setup, troubleshooting, and cloud integration.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Web Development (Optional Add-On): Website updates and support for growing businesses.</p></li>
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