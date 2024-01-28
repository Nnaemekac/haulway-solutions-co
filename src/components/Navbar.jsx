/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import { Moon, Settings, Sun } from 'react-feather';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle dark mode-related changes here (e.g., update classes, styles)
    const mainSection = document.querySelector(".hw-main-section");
    mainSection.classList.toggle('dark-mode', darkMode);
  };
    useEffect(() => {
        window.xuiScrollOnAnimation();
    });
    useEffect(() => {
        const hagionNav = document.querySelector('.hw-nav');
        window.addEventListener('scroll', function () {
          if (window.scrollY >= 200) {
            hagionNav.style.backgroundColor = '#060417';
          } else {
            hagionNav.style.backgroundColor = 'transparent';
          }
        });
      });
    
    return (
        <>
        <nav className={`xui-navbar xui-container hw-nav ${darkMode ? 'dark-mode' : ''}`} brand="true" layout="2" menu="2">
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
                            <HashLink to={'#contact'} style={{padding: '.8rem 1.4rem'}} className='xui-bdr-rad-half white-bdr xui-text-dc-none  xui-font-sz-90 xui-font-w-bold xui-mr-1 xui-md-mr-none secondary'>Contact</HashLink>
                            
                            {/* <div className='xui-ml-1' onClick={toggleDarkMode}>
                                {darkMode ? <Sun size={24} strokeWidth={1.6} /> : <Moon size={24} strokeWidth={1.6} />}
                            </div> */}
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

        </>
    )
};

export default Navbar;