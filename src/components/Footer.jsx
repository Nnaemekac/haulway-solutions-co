import { HashLink } from "react-router-hash-link";

export default function Footer(){
    return(
        <>
            <footer className="xui-lg-py-4 xui-py-2 xui-container hw-footer">
                <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-2 footer-holder">
                    <div>
                        <h1 className="xui-lg-font-sz-200 xui-font-sz-150 xui-w-fluid-80">Let's work together</h1>
                        <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-mt-half">Have an idea that could be the next Big Thing? Or you're not sure where to start? <HashLink smooth to='#contact'>Let's talk</HashLink></p>
                    </div>
                    <div className="footer-links-holder">
                        <p className="xui-font-sz-100 xui-font-w-600">Main pages</p>
                        <div>
                            <HashLink className="" smooth to='#services'>What we offer</HashLink>
                            <HashLink className="" smooth to='#services'>Our companies</HashLink>
                            <HashLink className="" smooth to='#services'>Our management</HashLink>
                        </div>
                    </div>
                    <div className="footer-links-holder">
                        <p className="xui-font-sz-100 xui-font-w-600">Inquires</p>
                        <div>
                            <HashLink className="" smooth to='#services'>lorem@yahoo.com</HashLink>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}