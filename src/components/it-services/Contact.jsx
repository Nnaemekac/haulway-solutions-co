import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ArrowRight from '../custom-svg-icons/ArrowRight';
import Star from '../custom-svg-icons/Star';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const [processing, setProcessing] = useState(false);

  const sendEmail = async (fields) => {
    setProcessing(true);
    setIsDisabled(true);

    try {

      // Send confirmation email via Brevo
      await axios.post(
        'https://api.brevo.com/v3/smtp/email',
        {
          sender: {
            name: 'Grascope Team',
            email: 'support@Grascope.ng',
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
        },
        {
          headers: {
            'api-key': import.meta.env.VITE_BREVO_API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );

      alert('Booking successful!');
    } catch (error) {
      console.error('Error processing booking:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setProcessing(false);
      setIsDisabled(false);
    }
  };

  return (
    <section className='xui-py-3' id='contact-section'>
      <h3 className='xui-lg-font-sz-400 xui-font-sz-220 xui-mt-half xui-font-w-600'><span className='text-[#737373]'>Get In Touch</span> With Us</h3>
      <div className="contact-section xui-mt-2">
        <form onSubmit={handleSubmit(sendEmail)} autoComplete="off" noValidate>
          <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2'>
            <div className='contact-section-form-grp'>
              <label htmlFor="firstName">
                <input type="text" id="firstName" placeholder="First Name" {...register("firstName", { required: "This field is required" })} />
                <span className='xui-font-sz-100'>First Name <Star /></span>
              </label>
              {errors.firstName && (<p className="xui-form-error-msg">{errors.firstName.message}</p>)}
            </div>
            <div className='contact-section-form-grp'>
              <label htmlFor="lastName">
                <input type="text" id="lastName" placeholder="Last Name" {...register("lastName", { required: "This field is required" })} />
                <span className='xui-font-sz-100'>Last Name <Star /></span>
              </label>
              {errors.lastName && (<p className="xui-form-error-msg">{errors.lastName.message}</p>)}
            </div>
            <div className='contact-section-form-grp'>
              <label htmlFor="emailAddress">
                <input type="email" id="emailAddress" placeholder="Email Address" {...register("emailAddress", { required: "This field is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} />
                <span className='xui-font-sz-100'>Email Address <Star /></span>
              </label>
              {errors.emailAddress && (<p className="xui-form-error-msg">{errors.emailAddress.message}</p>)}
            </div>
            <div className='contact-section-form-grp'>
              <label htmlFor="phoneNumber">
                <input type="tel" id="phoneNumber" placeholder="Phone Number" {...register("phoneNumber", { required: "This field is required", pattern: { value: /^[0-9]{10,15}$/, message: "Phone number must be 10–15 digits" } })} />
                <span className='xui-font-sz-100'>Phone Number (optional) <Star /></span>
              </label>
              {errors.phoneNumber && (<p className="xui-form-error-msg">{errors.phoneNumber.message}</p>)}
            </div>
          </div>
          <div className='contact-section-form-grp'>
            <label htmlFor="contactMessage">
            <textarea className='xui-mt-2' name="contactMessage" id="contactMessage" placeholder='How can we help?' {...register("contactMessage", { required: "This field is required" })}></textarea>
            </label>
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
    </section>
  );
};

export default Contact;
