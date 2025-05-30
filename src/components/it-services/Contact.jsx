import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ArrowRight from '../custom-svg-icons/ArrowRight';
import Star from '../custom-svg-icons/Star';
import ErrorAlert from '../alerts/Error';
import SuccessAlert from '../alerts/Success';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [validationErrMsg, setValidationErrMsg] = useState('');
  const [successErrMsg, setSuccessErrMsg] = useState('');
  const [processing, setProcessing] = useState(false);

  const sendEmail = async (fields) => {
    setProcessing(true);
    const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;

    const messagePayload = {
        email: fields.emailAddress,
        attributes: {
            firstName: fields.firstName,
            lastName: fields.lastName,
        },
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [2], // Adjust the list ID as needed
        updateEnabled: false,
    };

    const emailOptions = {
        sender: {
            name: 'Grascope Team',
            email: 'grascopemarketing@gmail.com',
        },
        to: [
            {
              email: fields.emailAddress,
              name: `${fields.firstName} ${fields.lastName}`,
            },
        ],
        subject: 'Contact Inquiry Received - Grascope',
        htmlContent: `
        <html>
            <body>
            <h1>Contact Inquiry Received</h1>
            <p>Dear ${fields.firstName},</p>
            <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
            <p>Here is a copy of your message:</p>
            <blockquote>${fields.contactMessage}</blockquote>
            <p>Best regards,<br>Grascope Team</p>
            </body>
        </html>
        `,
    };
    let brevoSuccess = false;

    try {
        // Attempt to send contact to Brevo
        const brevoContactRes = await axios.post(
            "https://api.brevo.com/v3/contacts",
            messagePayload,
            {
                headers: {
                    "api-key": BREVO_API_KEY,
                    "Content-Type": "application/json",
                },
            }
        );
        if (brevoContactRes.status === 201) {
            brevoSuccess = true;

            // Attempt to send email via Brevo
            await axios.post(
                "https://api.brevo.com/v3/smtp/email",
                emailOptions,
                {
                    headers: {
                        "api-key": BREVO_API_KEY,
                        "Content-Type": "application/json",
                    },
                }
            );
            setSuccessErrMsg("Your message has been sent successfully");
            window.xuiAnimeStart('successAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('successAlert');
                reset();
            }, 3200);
        }
    } catch (error) {
        console.error("Brevo error:", error);
        setValidationErrMsg(error.response?.data?.message || "An error occurred. Please try again.");
        window.xuiAnimeStart('errorAlert');
        setTimeout(() => {
            window.xuiAnimeEnd('errorAlert');
        }, 3200);

        // **Do not show error alert**, just log the error
    }
    finally {
        setProcessing(false);
    }
  };

  return (
    <section className='xui-py-3' id='form-section'>
      <h3 className='xui-lg-font-sz-400 xui-font-sz-220 xui-mt-half xui-font-w-600'><span className='text-[#737373]'>Get In Touch</span> With Us</h3>
      <div className="form-section xui-mt-2">
        <form onSubmit={handleSubmit(sendEmail)} autoComplete="off" noValidate>
          <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2'>
            <div className='form-section-form-grp'>
              <label htmlFor="firstName"><span className='xui-font-sz-100'>First Name <Star /></span></label>
              <input type="text" id="firstName" className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' placeholder="First Name" {...register("firstName", { required: "This field is required" })} />
              {errors.firstName && (<p className="xui-form-error-msg">{errors.firstName.message}</p>)}
            </div>
            <div className='form-section-form-grp'>
              <label htmlFor="lastName"><span className='xui-font-sz-100'>Last Name <Star /></span></label>
              <input type="text" id="lastName" className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' placeholder="Last Name" {...register("lastName", { required: "This field is required" })} />
              {errors.lastName && (<p className="xui-form-error-msg">{errors.lastName.message}</p>)}
            </div>
            <div className='form-section-form-grp'>
              <label htmlFor="emailAddress"><span className='xui-font-sz-100'>Email Address <Star /></span></label>
              <input type="email" id="emailAddress" className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' placeholder="Email Address" {...register("emailAddress", { required: "This field is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} />
              {errors.emailAddress && (<p className="xui-form-error-msg">{errors.emailAddress.message}</p>)}
            </div>
            <div className='form-section-form-grp'>
              <label htmlFor="phoneNumber"><span className='xui-font-sz-100'>Contact (optional) <Star /></span></label>
              <input type="tel" id="phoneNumber" className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' placeholder="Phone Number" {...register("phoneNumber", { required: "This field is required", pattern: { value: /^[0-9]{10,15}$/, message: "Phone number must be 10–15 digits" } })} />
              {errors.phoneNumber && (<p className="xui-form-error-msg">{errors.phoneNumber.message}</p>)}
            </div>
            <div className='form-section-form-grp'>
              <label htmlFor="companyName"><span className='xui-font-sz-100'>Company Name <Star /></span></label>
              <input type="text" id="companyName" className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' placeholder="Company Name" {...register("companyName", { required: "This field is required" })} />
              {errors.companyName && (<p className="xui-form-error-msg">{errors.companyName.message}</p>)}
            </div>
            <div className='form-section-form-grp'>
              <label htmlFor="role"><span className='xui-font-sz-100'>Role <Star /></span></label>
              <input type="text" id="role" className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' placeholder="Role" {...register("role", { required: "This field is required" })} />
              {errors.role && (<p className="xui-form-error-msg">{errors.role.message}</p>)}
            </div>
          </div>
          <div className='form-section-form-grp xui-mt-2'>
            <label htmlFor="contactMessage"><span className='xui-font-sz-100'>Description <Star /></span></label>
            <textarea className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' name="contactMessage" id="contactMessage" placeholder='How can we help?' {...register("contactMessage", { required: "This field is required" })}></textarea>
            {errors.contactMessage && (<p className="xui-form-error-msg">{errors.contactMessage.message}</p>)}
          </div>
          <button disabled={processing} className='padding-[0.6rem_0.6rem_0.6rem_1.2rem] gradient-btn xui-bdr-rad-2 xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2'>
            <p className='xui-font-sz-95'>{processing ? 'Processing...' : 'Get in Touch'}</p>
            <span className='xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bg-white xui-bdr-rad-circle xui-w-35 xui-h-35'>
                <ArrowRight color={"#141416"} />
            </span>
        </button>
        </form>
      </div>
      <ErrorAlert name={`errorAlert`} message={validationErrMsg} />
      <SuccessAlert name={`successAlert`} message={successErrMsg} noIcon={true} />
    </section>
  );
};

export default Contact;
