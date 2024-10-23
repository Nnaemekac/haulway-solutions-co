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
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-grid-gap-half xui-opacity-7 xui-font-w-500">Minimum Number of Staff: 3 dedicated staff members</p></li>
                </ul>
                <p className='xui-lg-font-sz-110 xui-font-sz-90 xui-font-w-500'>Roles</p>
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-grid-gap-half xui-opacity-7 xui-font-w-500">2 Customer Support Agents (8 hours/day, email and chat support)</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">1 Data Entry Specialist</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-grid-gap-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Optional Add-On: IT Support (basic tech support for software troubleshooting and setup)</p></li>
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
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Customer Support (Basic): Handle customer queries via email and chat.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Data Entry: Basic data entry tasks for record management.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">HR Support (Basic): Employee onboarding assistance and simple payroll management.</p></li>
                </ul>
            </div>
        },
        {
          question: `IT Services`,
          answer:
            <div className="xui-pl-1 dropdown-list">
                <ul className="xui-my-1 xui-p-none">
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Basic IT Support: Help with software installation, troubleshooting, and device setup.</p></li>
                    <li style={{"listStyle": "circle"}}><p className="xui-font-sz-90 xui-mt-half xui-opacity-7 xui-font-w-500 xui-line-height-1-half">Website Maintenance (Optional Add-On): Basic updates and technical support for website operations.</p></li>
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