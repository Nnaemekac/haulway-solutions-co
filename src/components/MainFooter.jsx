import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import XIcon from './icons/XIcon';
// import FacebookIcon from './icons/FacebookIcon';
// import GrascopeLogo from "../assets/images/logo.png";
// import InstagramIcon from './icons/InstagramIcon';
// import LinkedInIcon from './icons/LinkedInIcon';
import { API_URL } from "../../globals.json";
import axios from "axios";
import { useForm } from "react-hook-form";
import ErrorAlert from '../components/alerts/Error';
import SuccessAlert from '../components/alerts/Success';
import ThankYouModal from "./ThankYouModal";
import confetti from "canvas-confetti";
import InstagramIcon from './custom-svg-icons/InstagramIcon';
import LinkedInIcon from './custom-svg-icons/LinkedInIcon';
import LogoV2 from "../assets/images/brand/logo-v-2.png";

const MainFooter = () => {
    const { handleSubmit, register, formState: { errors, isValid }, reset } = useForm();
    const [isDisabled, setIsDisabled] = useState(false);
    const [validationErrMsg, setValidationErrMsg] = useState('');
    const [successErrMsg, setSuccessErrMsg] = useState('');

    const handleClick = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#FFF", "#FFF", "#FFF", "#FFF"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
                zIndex: 2247483646
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
                zIndex: 2247483646
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    const sendEmail = (fields) => {
        const newData = { ...fields };
        console.log(newData);
        setIsDisabled(true);
        axios({
            method: "POST",
            url: `${API_URL}/website/register`,
            data: newData
        })
        .then((res) => {
            console.log(res);
            setSuccessErrMsg(res.data.message);
            window.xuiAnimeStart('successAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('successAlert');
                reset();
                window.xuiModalShow('thanks-modal');
                handleClick();
                setIsDisabled(false);
            }, 3200);
        }, (err) => {
            console.log(err);
            setIsDisabled(false);
            setValidationErrMsg(err.response.status === 422 ? err.response.data.data[0].msg : err.response.status === 422 ? err.response.data.data[0].msg : err.response.data.message);
            window.xuiAnimeStart('errorAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('errorAlert');
            }, 3200);
        });
    }
    return (
        <>
        <section className="main-footer xui-lg-py-3 xui-py-1 xui-container">
            <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1 xui-flex-ai-flex-end'>
                <div>
                    <h1 className='haulway-heading-text xui-lg-line-height-4-half xui-line-height-2-half xui-lg-font-sz-300 xui-font-sz-180 xui-font-w-500'>
                        <p>PARTNER <span className='text-[#737373]'>WITH GRASCOPE</span> TODAY</p>
                    </h1>
                </div>
                {/* <form onSubmit={handleSubmit(sendEmail)} autoComplete="off" noValidate>
                    <div>
                        <p className='xui-mt-1 xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-500'>Subscribe To Our Newsletter</p>
                        <div className="footer-input-email-holder main-footer-input xui-mt-1">
                            <input {...register('email', {required: 'Please enter your email',pattern: {value: /^\S+@\S+$/i,message: 'Invalid email address'}})} type="email" name="email" id="email" placeholder="Your email address"/>
                            <button type="submit" disabled={isDisabled} className="footer-input-email-btn xui-text-dc-none xui-font-sz-85 xui-mobile-font-sz-65 xui-m-half">{isDisabled ? 'Granting access...' : 'Subscribe'}</button>
                        </div>
                    </div>
                </form> */}
            </div>
            <div className='xui-row xui-mt-4 xui-flex-ai-center'>
                <div className='xui-lg-col-7 xui-col-12'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-500'>CONTACT US</p>
                    
                    <p className='xui-lg-font-sz-95 xui-font-sz-65 xui-font-w-400 xui-mt-1'>
                        <span className='xui-mr-half xui-text-dc-none xui-text-white'>contact@grascope.com</span> /
                        <span className='xui-mx-half xui-text-dc-none xui-text-white'>+234 818 293 1756</span> /
                        <span className='xui-mx-half xui-text-dc-none xui-text-white'>+44 7441359374</span>
                     </p>
                </div>
                <div className='xui-lg-col-5 xui-col-12 xui-pl-none xui-lg-mt-none xui-mt-4'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-500'>ADDRESS</p>
                    <p className='xui-lg-font-sz-95 xui-font-sz-65 xui-font-w-400 xui-mt-1 xui-line-height-1-half'>4, Iwowari Avenue, George Sekibo Road, Sasun Roundabout, Off Peter Odili Road, PortHarcourt, Nigeria.</p>
                </div>
            </div>
            <div className='xui-row xui-mt-4 xui-flex-ai-center'>
                <div className='xui-lg-col-10 xui-col-12'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-500'>QUICK LINKS</p>
                    <p className='xui-lg-font-sz-95 xui-font-sz-65 xui-font-w-400 xui-mt-1'>
                    <Link to='/' className='xui-mr-half xui-text-dc-none xui-text-white'>Home</Link> /
                     <Link to='about' className='xui-mx-half xui-text-dc-none xui-text-white'>About us</Link> /
                     <Link to='it/services' className='xui-mx-half xui-text-dc-none xui-text-white'>IT Services</Link> /
                     <Link to='bpo/solutions' className='xui-mx-half xui-text-dc-none xui-text-white'>BPO Solutions</Link>
                     </p>
                </div>

                <div className='xui-lg-col-2 xui-lg-mt-none xui-mt-4 xui-text-right'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-500'>FOLLOW US</p>
                    <div className='xui-d-flex xui-flex-ai-center xui-lg-flex-jc-flex-end xui-flex-jc-flex-start xui-grid-gap-1 xui-mt-1'>
                        <Link to='https://www.instagram.com/grascopeindustries?igsh=YjVtcHg4czRmOHFu'><InstagramIcon /></Link>
                        <Link to='https://www.linkedin.com/company/grascope-industries-ltd/'><LinkedInIcon /></Link>
                    </div>
                </div>
            </div>
            <div className='xui-row xui-mt-4 xui-flex-ai-center'>
                <div className='xui-lg-col-10 xui-col-12'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-500'>RC NUMBERS</p>
                    <p className='xui-lg-font-sz-95 xui-font-sz-60 xui-font-w-400 xui-mt-1'>
                        <span className='xui-mr-half xui-text-white'>Grascope Industries UK LTD - 15589820  </span> 
                        <span className='green-text'>/</span>
                        <span to='about' className='xui-mx-half xui-text-white'>Grascope Industries NIG LTD - 1479476  </span>
                     
                     </p>
                </div>
                <div className='xui-lg-col-2 xui-col-12 xui-lg-mt-none xui-mt-2 xui-d-flex xui-lg-flex-jc-flex-end xui-flex-jc-flex-start'>
                    <p className=' xui-lg-font-sz-95 xui-font-sz-60 xui-font-w-400 xui-d-flex xui-flex-ai-center xui-grid-gap-half xui-flex-dir-column xui-flex-jc-center '>FROM <br /> <Link className='xui-d-inline-block' to='https://www.grascope.com/' target='_blank'><img className='xui-img-70' src={LogoV2} alt="" /></Link></p>
                </div>
            </div>

        </section>
        <ThankYouModal />
        <ErrorAlert name={`errorAlert`} message={validationErrMsg} />
        <SuccessAlert name={`successAlert`} message={successErrMsg} noIcon={true} />
        </>
    );
};

export default MainFooter;