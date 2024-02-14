import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const sendRequest = (data) => {
        console.log(data);
    }
    return(
        <>
            <section id="contact" className="xui-container  xui-py-3 xui-lg-py-5">
                <div className="xui-row">
                    <div className="xui-lg-col-5 xui-col-12">
                        <h1 className="xui-lg-font-sz-350 xui-font-sz-250 font-spaceGrotesk">Get in touch</h1>
                        <p className="xui-opacity-6 xui-font-sz-80 xui-mt-1 xui-line-height-1-half">Ready to partner with a leader in innovation and entrepreneurship? Contact us today to learn more about how Grascope Industries Ltd can help you achieve your goals. Let's build a brighter future together.</p>
                        <div className="secondary xui-w-80 xui-h-5 xui-my-3"></div>
                    </div>
                    <div className="xui-lg-col-7 xui-col-12 xui-lg-pl-2 xui-pl-none xui-pt-2 xui-lg-pt-none">
                    <form className="xui-mt-2" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
                    <div className="xui-d-grid xui-grid-col-1 xui-grid-gap-1">
                        <div>
                            <label className="xui-form-label xui-font-sz-90 xui-mb-1">Name</label>
                            <input {...register('fullName', {required: true, minLength: 2})} type="text" className={`famebuy-contact-input xui-bdr-rad-half xui-form-input xui-font-sz-90 ${errors.fullName ? 'famebuy-input-error' : ''}`} placeholder="Enter your full name" />
                            {errors.fullName && errors.fullName.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your name</span> : null}
                            {errors.fullName && errors.fullName.type == "minLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too short</span> : null}
                        </div>

                        <div>
                            <label className="xui-form-label xui-font-sz-90 xui-mb-1">Email</label>
                            <input {...register('emailAddress', {required: true, pattern: /^(?!.*@gigi\.codes$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} type="email" className={`famebuy-contact-input xui-bdr-rad-half xui-form-input xui-font-sz-90 ${errors.emailAddress ? 'famebuy-input-error' : ''}`} placeholder="Enter your email address" />
                            {errors.emailAddress && errors.emailAddress.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your email addres</span> : null}
                            {errors.emailAddress && errors.emailAddress.type == "pattern" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Incorrect email address</span> : null}
                        </div>
                    </div>
                    <div className="xui-my-2">
                        <label className="xui-form-label xui-font-sz-90 xui-mb-1">Message</label>
                        <textarea {...register('message', {required: true, minLength: 10, maxLength: 200})} className={`famebuy-contact-textarea xui-bdr-rad-half xui-form-input xui-font-sz-90 ${errors.message ? 'famebuy-input-error' : ''}`} cols="30" rows="10" placeholder="Enter your message"></textarea>
                        {errors.message && errors.message.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Enter your message</span> : null}
                        {errors.message && errors.message.type == "minLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too short</span> : null}
                        {errors.message && errors.message.type == "maxLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too long</span> : null}
                    </div>
                    
                    <div className="xui-my-2">
                        <button className="xui-bdr-rad-half secondary xui-btn-block xui-px-3 xui-py-1-half xui-text-white xui-d-flex xui-flex-ai-center xui-flex-jc-center">Send message</button>
                    </div>
                </form>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Contact;