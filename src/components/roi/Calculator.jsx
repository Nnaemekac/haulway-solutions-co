import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Star from '../custom-svg-icons/Star';
import { ArrowLeft } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Calculator = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [roiData, setRoiData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Watch monthly cost to calculate yearly cost
  const monthlyCost = watch("currentCostMonth");
  // Update the useEffect hook that watches monthlyCost
  useEffect(() => {
    if (monthlyCost === '' || monthlyCost === null || isNaN(monthlyCost)) {
      setValue("currentCostYear", 0);
    } else {
      const yearlyCost = parseFloat(monthlyCost) * 12;
      setValue("currentCostYear", yearlyCost.toFixed(2));
    }
  }, [monthlyCost, setValue]);

  // Position options with their respective savings percentages
  const positionOptions = [
    { 
      name: 'Customer Support', 
      savingsPercentage: 50,
      grascopeCostPerMonth: 1500
    },
    { 
      name: 'Software Engineer', 
      savingsPercentage: 64,
      grascopeCostPerMonth: 2000
    },
    { 
      name: 'Digital Marketing', 
      savingsPercentage: 55,
      grascopeCostPerMonth: 1800
    },
    { 
      name: 'HR Manager', 
      savingsPercentage: 67,
      grascopeCostPerMonth: 1500
    },
    { 
      name: 'Data Analyst', 
      savingsPercentage: 50,
      grascopeCostPerMonth: 2500
    },
    { 
      name: 'Other', 
      savingsPercentage: 40,
      grascopeCostPerMonth: null
    }
  ];

  // Calculate ROI based on input values
  const calculateROI = (data) => {
    const currentCostPerYear = parseFloat(data.currentCostYear);
    const selectedPosition = positionOptions.find(pos => pos.name === data.hiringPosition);
    
    let grascopeCostPerYear;
    if (selectedPosition.grascopeCostPerMonth) {
      grascopeCostPerYear = selectedPosition.grascopeCostPerMonth * 12;
    } else {
      const savingsDecimal = selectedPosition.savingsPercentage / 100;
      grascopeCostPerYear = currentCostPerYear * (1 - savingsDecimal);
    }
    
    const savings = currentCostPerYear - grascopeCostPerYear;
    
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.emailAddress,
      phoneNumber: data.phoneNumber || '',
      position: data.hiringPosition,
      currentHiringCostMonthly: parseFloat(data.currentCostMonth),
      currentHiringCostYearly: currentCostPerYear,
      hiringCostYear: grascopeCostPerYear,
      totalSavingsYearly: savings,
      totalSavingsPercantage: selectedPosition.savingsPercentage,
      formatted: {
        hiringPosition: data.hiringPosition,
        currentCostYear: currentCostPerYear.toLocaleString('en-GB', { 
          style: 'currency', 
          currency: 'GBP',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }),
        grascopeCostYear: grascopeCostPerYear.toLocaleString('en-GB', { 
          style: 'currency', 
          currency: 'GBP',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }),
        totalSavings: savings.toLocaleString('en-GB', { 
          style: 'currency', 
          currency: 'GBP',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }),
        percentageSaved: `${selectedPosition.savingsPercentage}%`
      }
    };
  };

  const handleFirstStepSubmit = (fields) => {
    setFormData(fields);
    setStep(2);
  };

  const handleSecondStepSubmit = async (fields) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Combine form data from both steps
      const combinedData = { ...formData, ...fields };
      const calculatedROI = calculateROI(combinedData);
      
      // Submit to ROI endpoint
      const response = await axios.post(
        'https://grascoperoi-84aafe9da70d.herokuapp.com/api/v1/bpo/roi-data',
        {
          firstName: calculatedROI.firstName,
          lastName: calculatedROI.lastName,
          email: calculatedROI.email,
          phoneNumber: calculatedROI.phoneNumber,
          position: calculatedROI.position,
          currentHiringCostMonthly: calculatedROI.currentHiringCostMonthly,
          currentHiringCostYearly: calculatedROI.currentHiringCostYearly,
          hiringCostYear: calculatedROI.hiringCostYear,
          totalSavingsYearly: calculatedROI.totalSavingsYearly,
          totalSavingsPercantage: calculatedROI.totalSavingsPercantage
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 201) {
        console.log(response);
        
        setRoiData(calculatedROI);
        setStep(3);
      } else {
        throw new Error('Failed to submit ROI data');
      }
    } catch (error) {
      console.error('Error submitting ROI data:', error);
      setSubmitError('Failed to submit your ROI calculation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${step !== 2 && 'xui-max-w-900'} xui-w-fluid-100 xui-mx-auto`}>
      {/* Error message display */}
      {submitError && (
        <div className="xui-text-red-500 xui-mb-2 xui-text-center">
          {submitError}
        </div>
      )}

      {step === 1 && (
        <section className='xui-py-1-half bg-[#222222] xui-px-1-half xui-bdr-rad-half xui-mb-2'>
          <h3 className='xui-lg-font-sz-200 xui-font-sz-150 xui-text-center xui-mt-half xui-font-w-600'>See how much you can save today!</h3>
          <div className="form-section xui-mt-2">
            <form onSubmit={handleSubmit(handleFirstStepSubmit)} autoComplete="off" noValidate>
              <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2'>
                <div className='form-section-form-grp'>
                  <label htmlFor="firstName"><span className='xui-font-sz-100'>First Name <Star /></span></label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' 
                    placeholder="First Name" 
                    {...register("firstName", { required: "This field is required" })} 
                  />
                  {errors.firstName && (<p className="xui-form-error-msg">{errors.firstName.message}</p>)}
                </div>
                <div className='form-section-form-grp'>
                  <label htmlFor="lastName"><span className='xui-font-sz-100'>Last Name <Star /></span></label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' 
                    placeholder="Last Name" 
                    {...register("lastName", { required: "This field is required" })} 
                  />
                  {errors.lastName && (<p className="xui-form-error-msg">{errors.lastName.message}</p>)}
                </div>
                <div className='form-section-form-grp'>
                  <label htmlFor="emailAddress"><span className='xui-font-sz-100'>Email Address <Star /></span></label>
                  <input 
                    type="email" 
                    id="emailAddress" 
                    className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' 
                    placeholder="Email Address" 
                    {...register("emailAddress", { 
                      required: "This field is required", 
                      pattern: { 
                        value: /^\S+@\S+$/i, 
                        message: "Invalid email address" 
                      } 
                    })} 
                  />
                  {errors.emailAddress && (<p className="xui-form-error-msg">{errors.emailAddress.message}</p>)}
                </div>
                <div className='form-section-form-grp'>
                  <label htmlFor="phoneNumber"><span className='xui-font-sz-100'>Phone number (optional)</span></label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    className='xui-mt-1 xui-w-fluid-100 xui-h-70 xui-p-1-half xui-bdr-s-none xui-bdr-rad-half bg-[#1E1E1E] xui-text-white' 
                    placeholder="Phone Number" 
                    {...register("phoneNumber", { 
                      pattern: { 
                        value: /^[0-9]{10,15}$/, 
                        message: "Phone number must be 10–15 digits" 
                      } 
                    })} 
                  />
                  {errors.phoneNumber && (<p className="xui-form-error-msg">{errors.phoneNumber.message}</p>)}
                </div>
              </div>
              <button 
                type="submit" 
                className='xui-max-w-500 xui-w-fluid-100 xui-mx-auto padding-[1rem] gradient-btn xui-bdr-rad-2 xui-d-flex xui-flex-jc-center xui-mt-2'
              >
                <p className='xui-font-sz-95'>Continue</p>
              </button>
            </form>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className='xui-py-1-half bg-[#222222] xui-px-1-half xui-bdr-rad-half xui-mb-2'>
          <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center xui-grid-gap-1 xui-mt-half'>
            <span className='xui-cursor-pointer' onClick={() => setStep(1)}>
              <ArrowLeft color='#FFF' />
            </span>
            <h3 className='xui-lg-font-sz-200 xui-font-sz-150 xui-font-w-600'>Return on Investment (ROI) Calculator</h3>
            <div></div>
          </div>
          <div className="form-section xui-mt-2">
            <form onSubmit={handleSubmit(handleSecondStepSubmit)} autoComplete="off" noValidate>
              <div className='form-section-form-grp'>
                <label htmlFor="hiringPosition"><span className='xui-font-sz-100'>Select the Position You're Hiring For <Star /></span></label>
                <select 
                  id="hiringPosition" 
                  className='xui-w-fluid-100 xui-h-70 xui-mt-1 xui-p-1-half xui-bdr-white xui-bdr-w-1 xui-bdr-s-solid xui-bdr-rad-half xui-bg-[#222] xui-text-white' 
                  {...register("hiringPosition", { required: "This field is required" })}
                >
                  <option value="">Select a position</option>
                  {positionOptions.map((option, index) => (
                    <option key={index} value={option.name}>{option.name}</option>
                  ))}
                </select>
                {errors.hiringPosition && (<p className="xui-form-error-msg">{errors.hiringPosition.message}</p>)}
              </div>
              <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2 xui-mt-2'>
                <div className='form-section-form-grp'>
                  <label htmlFor="currentCostMonth"><span className='xui-font-sz-100'>Current Hiring Cost For Role/month <Star /></span></label>
                  <div className='xui-pos-relative xui-mt-1'>
                    <div className="xui-w-60 xui-h-fluid-100 xui-pos-absolute left-[0]">
                      <select 
                        {...register('currency', { required: 'Currency is required' })} 
                        className="xui-w-fluid-100 xui-h-fluid-100 xui-pl-1-half xui-bg-transparent xui-font-w-600 xui-text-white" 
                        style={{outline: 'none', border: 'none'}}
                      >
                        <option value="GBP">£</option>
                      </select>
                    </div>
                    <input 
                      type="number" 
                      id="currentCostMonth" 
                      placeholder="£0" 
                      className='xui-w-fluid-100 xui-h-70 xui-py-1-half xui-pl-5 xui-pr-1-half xui-bdr-white xui-bdr-w-1 xui-bdr-s-solid xui-bdr-rad-half xui-bg-transparent xui-text-white' 
                      {...register("currentCostMonth", { 
                        required: "This field is required", 
                        min: { 
                          value: 0, 
                          message: "Value must be positive" 
                        }, 
                        valueAsNumber: true
                      })} 
                    />
                  </div>
                  {errors.currentCostMonth && (<p className="xui-form-error-msg">{errors.currentCostMonth.message}</p>)}
                </div>
                <div className='form-section-form-grp'>
                  <label htmlFor="currentCostYear"><span className='xui-font-sz-100'>Current Hiring Cost For Role/year <Star /></span></label>
                  <div className='xui-pos-relative xui-mt-1'>
                    <div className="xui-w-60 xui-h-fluid-100 xui-pos-absolute left-[0]">
                      <select 
                        {...register('currency', { required: 'Currency is required' })} 
                        className="xui-w-fluid-100 xui-h-fluid-100 xui-pl-1-half xui-bg-transparent xui-font-w-600 xui-text-white" 
                        style={{outline: 'none', border: 'none'}}
                      >
                        <option value="GBP">£</option>
                      </select>
                    </div>
                    <input 
                      type="number" 
                      id="currentCostYear" 
                      placeholder="£0" 
                      className='xui-w-fluid-100 xui-h-70 xui-py-1-half xui-pl-5 xui-pr-1-half xui-bdr-white xui-bdr-w-1 xui-bdr-s-solid xui-bdr-rad-half xui-bg-transparent xui-text-white' 
                      {...register("currentCostYear", { 
                        required: "This field is required", 
                        min: { 
                          value: 0, 
                          message: "Value must be positive" 
                        }, 
                        valueAsNumber: true
                      })} 
                      readOnly
                    />
                  </div>
                  {errors.currentCostYear && (<p className="xui-form-error-msg">{errors.currentCostYear.message}</p>)}
                </div>
              </div>
              <div className='xui-d-flex xui-flex-jc-center xui-flex-gap-1 xui-mt-2'>
                <button 
                  type="submit" 
                  className='xui-max-w-500 xui-w-fluid-100 xui-mx-auto padding-[1rem] gradient-btn xui-bdr-rad-2 xui-d-flex xui-flex-jc-center xui-mt-2'
                  disabled={isSubmitting}
                >
                  <p className='xui-font-sz-95'>
                    {isSubmitting ? 'Calculating...' : 'My ROI with Grascope'}
                  </p>
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {step === 3 && roiData && (
        <section className='xui-py-1-half bg-[#222222] xui-px-1-half xui-bdr-rad-half xui-mb-2'>
          <div className='xui-d-flex xui-flex-jc-space-between xui-flex-ai-center xui-grid-gap-1 xui-mt-half'>
            <span className='xui-cursor-pointer' onClick={() => setStep(2)}>
              <ArrowLeft color='#FFF' />
            </span>
            <h3 className='xui-lg-font-sz-200 xui-font-sz-150 xui-font-w-600'>Your ROI With Grascope</h3>
            <div></div>
          </div>
          <div className="xui-mt-2">
            <div className='xui-d-grid xui-lg-grid-col-1 xui-grid-gap-2'>
              <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <p className='xui-font-sz-110 xui-font-w-400'>Hiring Position</p>
                <p className='xui-font-sz-120 xui-font-w-600'>{roiData.formatted.hiringPosition}</p>
              </div>
              <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <p className='xui-font-sz-110 xui-font-w-400'>Your Current Hiring Cost/year</p>
                <p className='xui-font-sz-120 xui-font-w-600'>{roiData.formatted.currentCostYear}</p>
              </div>
              <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <p className='xui-font-sz-110 xui-font-w-400'>Your Hiring Cost with Grascope/year</p>
                <p className='xui-font-sz-120 xui-font-w-600'>{roiData.formatted.grascopeCostYear}</p>
              </div>
              <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <p className='xui-font-sz-110 xui-font-w-400'>Total Savings/year</p>
                <p className='xui-font-sz-120 xui-font-w-600'>{roiData.formatted.totalSavings}</p>
              </div>
              <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <p className='xui-font-sz-110 xui-font-w-400'>Percentage Saved</p>
                <p className='xui-font-sz-120 xui-font-w-600'>{roiData.formatted.percentageSaved}</p>
              </div>
            </div>
          </div>
          <div className='xui-max-w-700 xui-w-fluid-100 xui-mx-auto xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1 xui-mt-4'>
            <Link 
              to="https://calendly.com/grascope" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='xui-w-fluid-100 xui-px-2 xui-py-1 gradient-btn xui-bdr-rad-half xui-text-dc-none xui-text-white xui-text-center'
            >
              Book a Demo
            </Link>
            <a 
              href="/Grascope Brochure.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="xui-w-fluid-100 xui-px-2 xui-py-1 bg-gradient2 xui-bdr-rad-half xui-text-dc-none xui-text-white xui-text-center"
            >
              See How It Works
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Calculator;