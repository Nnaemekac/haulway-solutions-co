import { CloseCircle, User } from 'iconsax-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'react-feather';
import { contentMap } from '../assets/contentData';
import { useForm } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";

const Spec1item = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pricings, setPricing] = useState([{}]);
  const [selectedRole, setSelectedRole] = useState('');
  const [activeTab, setActiveTab] = useState(null);
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
    const removeOverflow = () => {
        document.querySelector("body").style.overflow = 'auto';
    }
    const handleRoleChange = (event) => {
      setSelectedRole(event.target.value);
    };
    const sendRequest = async (fields) => {
        setIsDisabled(true);
        removeOverflow();
        try {
          const { data, error } = await supabase
            .from("interested_emails")
            .update({ 
              name: fields.name, 
              email: fields.email, 
              message: fields.message,
              metadata: { 
                roles: selectedRole,
                staff: fields.staff,
              } 
            })
            .eq('id', fields.id);
            
          if (error) {
            throw new Error("Error saving email: " + error.message);
          } else {
            setSuccessErrMsg("Email sent successfully");
            window.xuiAnime('successAlert');
            console.log("Email sent successfully:", data);
            reset();
            setTimeout(() => {
              window.xuiModalHide('inquiryModal');
            }, 2500)
          }
        } catch (error) {
          setValidationErrMsg("Error sending request: " + error.message);
          window.xuiAnime('validationAlert');
          console.error("Error saving email:", error);
        } finally {
          setIsDisabled(false);
        }
    }

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

  };
  useEffect(() => {
    // Set the default active tab when the component mounts
    if (data && data[activeIndex] && data[activeIndex].answer.length > 0) {
      setActiveTab(`${activeIndex}-0`);
    //   setPricing([{
    //     level: "Entry",
    //     bigProject: "$980",
    //     smallProject: "$8.00"
    //   },
    //   {
    //     level: "Mid",
    //     bigProject: "$1,200.00",
    //     smallProject: "$9.00"
    //   },
    //   {
    //     level: "Expert",
    //     bigProject: "$1,500.00",
    //     smallProject: "$12.00"
    //   },
    // ])
    }
  }, [data, activeIndex]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    console.log(index);
    
}
  

  return (
    <div className='xui-row spec-item'>
      <div className='xui-lg-col-3 xui-col-12'>
        {data.map((item, arrayIndex) => (
          <div className=' xui-cursor-pointer' key={arrayIndex}>
            <div
              onClick={() => toggleItem(arrayIndex)}
              className='xui-d-flex xui-flex-ai-center xui-bdr-rad-1 xui-py-1 xui-pr-1 xui-pl-half faq-section xui-pos-relative'
            >
              <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-font-9' style={{ width: 'calc(100% - 20px)' }}>
                {item.question}
              </h3>
              {activeIndex !== arrayIndex && (
                <ArrowDownRight size='20' color='#000' />
              )}
              {activeIndex === arrayIndex && (
                <ArrowUpRight size='20' color='#000' />
              )}
            </div>
            {activeIndex === arrayIndex && (
            <div className='xui-p-half'>
                {item.answer.map((ans, subTabIndex) => (
                <p
                    key={arrayIndex + '-' + subTabIndex}
                    onClick={() => handleTabClick(arrayIndex + '-' + subTabIndex)} // Concatenate arrayIndex and subTabIndex for the correct key
                    className={'xui-opacity-8 xui-font-sz-90 xui-my-1 xui-w-fluid-100 xui-lg-w-fluid-90 xui-line-height-2 ' + (activeTab === arrayIndex + '-' + subTabIndex ? 'primary-color xui-font-w-bold' : '')}
                >
                    {ans}
                </p>
                ))}
            </div>
            )}
          </div>
        ))}
      </div>

      <div className='xui-lg-col-9 xui-col-12 xui-p-1'>
        {activeIndex !== null && activeTab !== null && (
          <>
            <p className='xui-font-sz-80 xui-opacity-6 xui-line-height-1-half'>
            {contentMap[activeTab]}
            </p>
            {/* <div className='telesales-pricing-holder xui-mt-1'>
                <h3 className='xui-font-sz-200 xui-font-9 xui-text-center'>Pricing</h3>
                  <div className='xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-mt-2 xui-grid-gap-1'>
                  {pricings.map((pricing, index) => (
                      <div key={index} className='xui-p-1 telesales-pricing xui-text-center'>
                        <div className='pricing-circle xui-mx-auto xui-w-80 xui-h-80 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                            <User size="28px" color="#37d67a" variant='Bold' />
                        </div>
                        <h3 className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8 xui-font-w-medium xui-mt-1'>{pricing.level} Level</h3>
                        <div className='xui-mt-1'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>{pricing.bigProject}</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/month</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Staff Leasing</p>
                        </div>
                        <div className='xui-mt-2'>
                            <p className=''><span className='xui-font-sz-250 xui-font-w-bold'>{pricing.smallProject}</span><span className='xui-lg-font-sz-120 xui-font-sz-90 xui-opacity-8'>/hour</span></p>
                            <p className='xui-opacity-6 xui-lg-font-sz-120 xui-font-sz-90 xui-mt-half'>Small projects</p>
                        </div>
                        <div xui-modal-open="inquiryModal" className="secondary xui-cursor-pointer xui-btn-block xui-bdr-rad-half xui-text-white xui-text-center xui-mt-1 xui-font-sz-120">Inquire</div>
                    </div>
                  ))}
                </div>
            </div> */}
          </>
        )}
      </div>

      <section className="xui-modal" xui-modal={'inquiryModal'}>
            <div className="xui-modal-content">
              <h3 className='xui-font-9 xui-font-sz-200 xui-text-center'>Send us a message</h3>
              <form className="xui-mt-2" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
            <div className="xui-d-grid xui-grid-col-1 xui-grid-gap-1">
              <div>
                <label htmlFor="rolesInterestedIn" className='xui-form-label xui-font-sz-90 xui-mb-1'>Select roles</label>
                <select
                  className="xui-form-select"
                  id="rolesInterestedIn"
                  name="your-roles"
                  value={selectedRole}
                  onChange={handleRoleChange}
                >
                  <option value="">Select roles</option>
                  <option value="Other">Other</option>
                  <option value="Sales">Sales</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Appointment Setting">Appointment Setting</option>
                  <option value="Customer Support">Customer Support</option>
                  <option value="Marketing">Marketing</option>
                  <option value="IT Support Staff">IT Support Staff</option>
                  <option value="Business Development (BDMs)">Business Development (BDMs)</option>
                  <option value="HR and Back Office Support">HR and Back Office Support</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Legal">Legal</option>
                  <option value="Compliance">Compliance</option>
                  <option value="Virtual Assistant (VAs)">Virtual Assistant (VAs)</option>
                  <option value="Sales Assistant">Sales Assistant</option>
                  <option value="Operations">Operations</option>
                  <option value="Real-Estate">Real-Estate</option>
                  <option value="Animation">Animation</option>
                  <option value="Architect">Architect</option>
                  <option value="Big Data Scientists">Big Data Scientists</option>
                  <option value="Cad Creation & Conversion - Specialist">Cad Creation & Conversion - Specialist</option>
                  <option value="Cad Creation & Conversion - Support">Cad Creation & Conversion - Support</option>
                  <option value="Community Moderation">Community Moderation</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="Content Moderation">Content Moderation</option>
                  <option value="Customer Service">Customer Service</option>
                  <option value="Data Processing">Data Processing</option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Geologist">Geologist</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="HR and Back Office Support">HR and Back Office Support</option>
                  <option value="Insurance Support">Insurance Support</option>
                  <option value="Live Chat Support Staff">Live Chat Support Staff</option>
                  <option value="Logistics and Transport Support">Logistics and Transport Support</option>
                  <option value="LPO">LPO</option>
                  <option value="Medical Billing">Medical Billing</option>
                  <option value="Developers">Developers</option>
                  <option value="Estimators">Estimators</option>
                  <option value="Management and Admin Staff">Management and Admin Staff</option>
                  <option value="QA Staff">QA Staff</option>
                  <option value="Recruitment Support">Recruitment Support</option>
                  <option value="Personal Assistants">Personal Assistants</option>
                  <option value="SEO and PPC Services">SEO and PPC Services</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Telesales">Telesales</option>
                  <option value="Web Design Staff">Web Design Staff</option>
                  <option value="Web Developers">Web Developers</option>
                </select>
              </div>
                <div>
                    <label className="xui-form-label xui-font-sz-90 xui-mb-1">Number of staffs</label>
                    <input {...register('staff', {required: true})} type="text" className={`famebuy-contact-input xui-bdr-rad-half xui-form-input xui-font-sz-90 ${errors.staff ? 'famebuy-input-error' : ''}`} placeholder="Enter your full staff" />
                    {errors.staff && errors.staff.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your number of staff</span> : null}
                </div>
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
      </section>
    </div>
  );
};

export default Spec1item;
