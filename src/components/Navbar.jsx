/* eslint-disable react/no-unknown-property */
import { NavLink, Link, useLocation } from 'react-router-dom';
import LogoV1 from "../assets/images/brand/logo-v-1.png";
import { ArrowRight } from '@carbon/icons-react';
import { useEffect } from 'react';

const Navbar = () => {
    // const location = useLocation();
    // const [navbarColor, setNavbarColor] = useState("transparent");

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 50) {
    //             setNavbarColor("alternative-nav-color");
                
    //         } else {
    //             setNavbarColor("transparent");
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // });
    const { pathname } = useLocation();
    
    
    return (
        <>
        <nav className={`xui-navbar grascope-navbar xui-lg-px-half xui-px-1 `} brand="true" layout="2" menu="2">
            <div className="brand xui-h-fluid-100" style={{"zIndex": "11"}}>
                <NavLink className="xui-text-dc-none xui-lg-p-1 xui-p-none xui-h-fluid-100 xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img className='xui-lg-img-150 xui-img-200' src={LogoV1} alt="" />
                    {/* <span className="xui-ml-half xui-d-inline-block xui-font-1 xui-font-w-bold">Kathy</span> */}
                </NavLink>
            </div>
            <div className={`links`} placed="left">

                <div className="main dark-color xui-bg-black xui-bg-white">
                    <ul>
                        <li>
                            <NavLink className={`xui-font-2 xui-font-sz-100 nav-links xui-md-font-sz-120 xui-lg-font-sz-95 ${({ isActive }) => isActive ? 'active-link' : ''}`} to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={`xui-font-2 xui-font-sz-100 nav-links xui-md-font-sz-120 xui-lg-font-sz-95 ${({ isActive }) => isActive ? 'active-link' : ''}`} to={"about"}>About us</NavLink>
                        </li>
                        <li>
                            <NavLink className={`xui-font-2 xui-font-sz-100 nav-links xui-md-font-sz-120 xui-lg-font-sz-95 ${({ isActive }) => isActive ? 'active-link' : ''}`} to={"bpo/solutions"}>BPO Solutions</NavLink>
                        </li>
                        <li>
                            <NavLink className={`xui-font-2 xui-font-sz-100 nav-links xui-md-font-sz-120 xui-lg-font-sz-95 ${({ isActive }) => isActive ? 'active-link' : ''}`} to={"it/services"}>IT Services</NavLink>
                        </li>                        
                        <li className='extra-link'>
                            <NavLink className={`xui-font-2 xui-font-sz-100 nav-links xui-md-font-sz-120 xui-lg-font-sz-95 ${({ isActive }) => isActive ? 'active-link' : ''}`} to={"contact"}>Contact us</NavLink>
                        </li>
                     
                    </ul>
                </div>
                <div className="fixed xui-lg-d-block xui-d-none">
                    <ul>
                        <li>
                            <Link className='padding-[.8rem_1.2rem] xui-bdr-rad-2 xui-bg-white xui-text-black xui-font-sz-85' to="signin">Sign in</Link>
                            <Link className='padding-[.8rem_1.2rem] xui-bdr-white xui-bdr-w-1 xui-bdr-s-solid xui-bdr-rad-2 xui-text-white xui-font-sz-85 xui-ml-1' to="contact">Contact us</Link>
                            {/* <LinkButton text="Contact Us" route="tel:+234 567 896 8000" customClass="xui-bdr-rad-3" /> */}
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