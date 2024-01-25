/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import { Settings } from 'react-feather';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const colorPalettes = [
        { name: 'Red', color: '#ff0000' },
        { name: 'Green', color: '#00ff00' },
        { name: 'Blue', color: '#0000ff' },
        // Add more color options as needed
    ];

    const changeBodyColor = (color) => {
        document.querySelector(".hw-main-section").style.backgroundColor = color;
    };
    useEffect(() => {
        window.xuiScrollOnAnimation();
    });
    useEffect(() => {
        const hagionNav = document.querySelector(".hw-nav");
        window.addEventListener("scroll", function(){
            if(window.scrollY >= 200){
                hagionNav.style.backgroundColor = "#060417";
            } else {
                hagionNav.style.backgroundColor = "transparent";
            }
        });
    });
    return (
        <>
        <nav className="xui-navbar xui-container hw-nav xui-text-white" brand="true" layout="2" menu="2">
            <div className="brand">
                <HashLink className="xui-text-dc-none xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <h1>GRASCOPE</h1>
                    {/* <span className="xui-ml-half xui-d-inline-block xui-font-1 xui-font-w-bold">Kathy</span> */}
                </HashLink>
            </div>
            <div className="links" placed="left">
                <div className="main primary">
                    <ul>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" smooth to={"/"}><span className="xui-opacity-9">Home</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" smooth to={"#offer"}><span className="xui-opacity-9">What we offer</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" smooth to={"#companies"}><span className="xui-opacity-9">Our companies</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" smooth to={"#management"}><span className="xui-opacity-9">Our management</span></HashLink>
                        </li>
                    </ul>
                </div>
                <div className="fixed xui-lg-d-block xui-md-d-block xui-d-none">
                    <ul>
                        <li>
                            <HashLink to={'#contact'} style={{padding: '.8rem 1.4rem'}} className='xui-bdr-rad-half white-bdr xui-text-dc-none xui-text-white xui-font-sz-90 xui-font-w-bold xui-mr-1 xui-md-mr-none secondary'>Contact</HashLink>
                            <div className='xui-ml-1' onClick={toggleSidebar}>
                                <Settings size={24} strokeWidth={1.6} />
                            </div>
                            {/* <BtnCustomI onClick={scrollToContainer("contact")} href="./" text="Book free consultation" mobileText="Book Now" layout="iv"></BtnCustomI> */}
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>

        <div className={`sidebar xui-p-1 ${sidebarVisible ? 'active' : ''}`}>
                    <h3>Select your favorite color palette</h3>
                    <div className="color-palettes xui-d-grid xui-grid-col-3 xui-grid-gap-1 xui-mt-2">
                        {colorPalettes.map((palette) => (
                            <div className='xui-w-30 xui-h-30 xui-bdr-rad-circle' style={{"backgroundColor": palette.color}} key={palette.name} onClick={() => changeBodyColor(palette.color)}>
                
                            </div>
                        ))}
                        {/* Add more color options as needed */}
                    </div>
                </div>
        </>
    )
};

export default Navbar;