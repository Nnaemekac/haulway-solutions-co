import axios from "axios";
import { CloseCircle } from "iconsax-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";

const Contact = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [ validationErrMsg, setValidationErrMsg ] = useState('');
    const [ successErrMsg, setSuccessErrMsg ] = useState('');

    const supabaseUrl = "https://oecowxxcyzcaeaztfmqd.supabase.co";
    const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lY293eHhjeXpjYWVhenRmbXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MzEyODQsImV4cCI6MjAyNzMwNzI4NH0.gRx3hDGsbSn1BzdTPcbS8sjzyrxjujjDxfKyTh_NPzo"; // Your Supabase anonymous key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

    
    useEffect(() => {
        window.xuiAlerts();
    });
    const sendRequest = async (fields) => {
        setIsDisabled(true);
        try {
          const { data, error } = await supabase
            .from("interested_emails")
            .update({ 
              name: fields.name, 
              email: fields.email, 
              message: fields.message 
            })
            .eq('id', fields.id);
            
          if (error) {
            throw new Error("Error saving email: " + error.message);
          } else {
            setSuccessErrMsg("Email sent successfully");
            window.xuiAnime('successAlert');
            console.log("Email sent successfully:", data);
            reset();
          }
        } catch (error) {
          setValidationErrMsg("Error sending request: " + error.message);
          window.xuiAnime('validationAlert');
          console.error("Error saving email:", error);
        } finally {
          setIsDisabled(false);
        }
      }
      
      
    return(
        <>
            <section id="contact" className="xui-container  xui-py-3 xui-lg-py-5">
                <div className="xui-row">
                    <div className="xui-lg-col-5 xui-col-12">
                        <h1 className="xui-font-sz-300 break xui-font-w-500 xui-line-height-2-half xui-font-9">Get in touch</h1>
                        <p className="xui-opacity-6 xui-font-sz-80 xui-mt-1 xui-line-height-1-half">Ready to partner with a leader in innovation and entrepreneurship? Contact us today to learn more about how Grascope Industries Ltd can help you achieve your goals. Let's build a brighter future together.</p>
                        <div className="secondary xui-w-80 xui-h-5 xui-my-3"></div>
                    </div>
                    <div className="xui-lg-col-7 xui-col-12 xui-lg-pl-2 xui-pl-none xui-pt-2 xui-lg-pt-none">
                    <form className="xui-mt-2" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
                    <div className="xui-d-grid xui-grid-col-1 xui-grid-gap-1">
                        <div>
                            <label className="xui-form-label xui-font-sz-90 xui-mb-1">Name</label>
                            <input {...register('name', {required: true, minLength: 2})} type="text" className={`famebuy-contact-input xui-bdr-rad-half xui-form-input xui-font-sz-90 ${errors.name ? 'famebuy-input-error' : ''}`} placeholder="Enter your full name" />
                            {errors.name && errors.name.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your name</span> : null}
                            {errors.name && errors.name.type == "minLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too short</span> : null}
                        </div>

                        <div>
                            <label className="xui-form-label xui-font-sz-90 xui-mb-1">Email</label>
                            <input {...register('email', {required: true, pattern: /^(?!.*@gigi\.codes$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} type="email" className={`famebuy-contact-input xui-bdr-rad-half xui-form-input xui-font-sz-90 ${errors.email ? 'famebuy-input-error' : ''}`} placeholder="Enter your email address" />
                            {errors.email && errors.email.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your email addres</span> : null}
                            {errors.email && errors.email.type == "pattern" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Incorrect email address</span> : null}
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
                        <button className="secondary xui-text-white xui-btn xui-font-w-700 xui-px-3 xui-py-1-half xui-bdr-rad-half" disabled={isDisabled ? true : false}>{isDisabled ? 'Sending...' : 'Send message'}</button>
                    </div>
                </form>
                    </div>
                </div>
            </section>
            <div className="xui-alert xui-alert-danger" xui-custom="validationAlert" xui-placed="top-center">
                <div className="xui-alert-close">
                    <CloseCircle size={20} />
                </div>
                <div className="xui-alert-content">
                    <span>{validationErrMsg}</span>
                </div>
            </div>
            <div className="xui-alert xui-alert-success" xui-custom="successAlert" xui-placed="top-center" no-icon="true">
            <div className="xui-alert-close">
                {/* <CloseCircle size={20} /> */}
            </div>
            <div className="xui-alert-content">
                <span>{successErrMsg}</span>
            </div>
            </div>

        </>
    )
}
export default Contact;