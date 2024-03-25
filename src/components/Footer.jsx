import { Instagram, Linkedin } from "react-feather";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer(){
    return(
        <>
            <footer className="xui-lg-py-4 xui-py-2 xui-container hw-footer">
                <div className="xui-d-grid xui-lg-grid-col-4 xui-grid-col-1 xui-grid-gap-2 footer-holder">
                    <div>
                        <h1 className="xui-lg-font-sz-200 xui-font-sz-150 xui-w-fluid-80">Let's work together</h1>
                        <p className="xui-font-sz-80 xui-opacity-8 xui-line-height-1-half xui-mt-half">Have an idea that could be the next Big Thing? Or you're not sure where to start? contact us through our social links</p>
                    </div>
                    <div className="footer-links-holder">
                        <p className="xui-font-sz-100 xui-font-w-600">Main pages</p>
                        <div>
                            <Link className="" to='solutions'>Our Solutions</Link>
                            <Link className="" to='IT-services'>Our IT Services</Link>
                            <Link className="" to='bpo-services'>Our BPO Services</Link>
                        </div>
                    </div>
                    <div className="footer-links-holder">
                        <p className="xui-font-sz-100 xui-font-w-600">Inquires</p>
                        <div>
                        <a href="mailto:contact@grascope.com" className="">contact@grascope.com</a>
                        </div>
                    </div>
                    <div className="footer-links-holder">
                        <p className="xui-font-sz-100 xui-font-w-600">Social Links</p>
                        <div className="xui-d-inline-flex xui-flex-ai-center xui-grid-gap-2">
                            <Link className="" target='_blank' to='https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A101875302&keywords=Grascope%20Industries%20LTD&origin=ENTITY_SEARCH_HOME_HISTORY&sid=S%3Bn'><Linkedin size='22px' strokeWidth='1.2px' /></Link>
                            <Link className="" target='_blank' to='https://www.instagram.com/grascopeindustries/'><Instagram size='22px' strokeWidth='1.2px' /></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}