/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import { Moon, Settings, Sun, X } from 'react-feather';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Colorpalette from './Colorpalette';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isPaletteOpen, setPaletteOpen] = useState(false);

  const togglePalette = () => {
    setPaletteOpen(!isPaletteOpen);
  };
    const ActiveMode = async () => {
        setDarkMode(!darkMode);
        if(darkMode === true){ 
        document.body.classList.add('light__mode');
        document.body.classList.remove('dark__mode');
        await localStorage.setItem('Theme','light__mode'); 
        }
        if(darkMode === false){ 
        document.body.classList.add('dark__mode');
        document.body.classList.remove('light__mode');
        await localStorage.setItem('Theme','dark__mode'); 
        }

  };

  useEffect(() => {
    if (localStorage.getItem('Theme') === 'light__mode') {
      document.body.classList.add('light__mode');

    } else if (localStorage.getItem('Theme') === 'dark__mode') {
      document.body.classList.add('dark__mode');
      setDarkMode(!darkMode);
    }
    else{
        document.body.classList.add('light__mode');
    }

  }, []);

    useEffect(() => {
        window.xuiScrollOnAnimation();
    });
    useEffect(() => {
        const hagionNav = document.querySelector('.hw-nav');
        window.addEventListener('scroll', function () {
          if (window.scrollY >= 200 && localStorage.getItem('Theme') === 'dark__mode') {
            hagionNav.style.backgroundColor = '#060417';
          }
          else if(window.scrollY >= 200 && localStorage.getItem('Theme') === 'light__mode'){
            hagionNav.style.backgroundColor = '#fff';
          } else {
            hagionNav.style.backgroundColor = 'transparent';
          }
        });
      });
    
    return (
        <>
        <nav className={`xui-navbar xui-container hw-nav ${localStorage.getItem('Theme') === 'dark__mode' ? 'dark__mode' : 'light__mode'}`} brand="true" layout="2" menu="2">
            <div className="brand">
                <HashLink className="xui-text-dc-none xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <h1>GRASCOPE</h1>
                </HashLink>
            </div>
            <div className="links" placed="left">
                <div className="main primary">
                    <ul>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-80 xui-text-inherit" smooth to={"/"}><span className="xui-opacity-9">Home</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-80 xui-text-inherit" smooth to={"#about"}><span className="xui-opacity-9">About</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-80 xui-text-inherit" smooth to={"#vision"}><span className="xui-opacity-9">Our Vision</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-80 xui-text-inherit" smooth to={"#companies"}><span className="xui-opacity-9">Our Companies</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-80 xui-text-inherit" smooth to={"#whychooseus"}><span className="xui-opacity-9">Why choose us</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-80 xui-text-inherit" smooth to={"#solutions"}><span className="xui-opacity-9">Our solutions</span></HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-80 xui-text-inherit" smooth to={"#contact"}><span className="xui-opacity-9">Get in touch</span></HashLink>
                        </li>
                        {/* <li className='xui-lg-d-none xui-d-block'>
                            <p className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-80 xui-text-inherit xui-opacity-9" onClick={togglePalette}>Customize your palette</p>       
                        </li> */}
                        {/* <li>
                            
                        </li> */}
                    </ul>
                </div>
                <div className="fixed xui-lg-d-block xui-md-d-block xui-d-block">
                    <ul>
                        <li>
                            {/* <div style={{padding: '.8rem 1.4rem'}} className='xui-cursor-pointer xui-text-white xui-bdr-rad-half white-bdr xui-text-dc-none  xui-font-sz-90 xui-font-w-bold xui-md-mr-none secondary' onClick={togglePalette}>Palette</div> */}
                            <div className="switch-checkbox xui-ml-1 xui-ml-none xui-cursor-pointer">
                                {localStorage.getItem('Theme') === 'dark__mode' ?
                                <Sun size={24} strokeWidth={1.2} onClick={ActiveMode} />
                                // <FcNightLandscape onClick={ActiveMode} />
                                :
                                <Moon size={24} strokeWidth={1.2} onClick={ActiveMode}/>
                                // <FcLandscape onClick={ActiveMode} />
                                }

                            </div>
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
        <div className={`palette-sidebar xui-p-1 xui-overflow-y-auto ${isPaletteOpen ? 'open-palette': ''}`}>
          <div onClick={togglePalette} className="xui-mb-2 xui-d-flex xui-flex-ai-center xui-flex-jc-flex-end">
            <X size={24} strokeWidth={1.6} />
          </div>
          <h3 className="xui-font-sz-120">Select your favorite palette</h3>
          <Colorpalette />
      </div>
        </>
    )
};

export default Navbar;