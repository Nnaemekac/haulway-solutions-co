/**
 * Calculator.tsx — Tailwind-styled alerts (no window.alert)
 * React 18  |  TypeScript 5
 */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeft, CheckmarkFilled, WarningFilled } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BitcoinIconsStarFilled } from './icons';

/* ──────────────────────────────────────────────────────────
 * Domain Types
 * ──────────────────────────────────────────────────────────*/
interface PositionOption {
  name: string;
  savingsPercentage: number;
  grascopeCostPerMonth: number | null;
}

interface FirstStepFields {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber?: string;
}

interface SecondStepFields {
  hiringPosition: string;
  currentCostMonth: number;
  currentCostYear: number;
  currency: 'GBP';
}

type ROIFormData = FirstStepFields & SecondStepFields;

interface ROIResult {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
  currentHiringCostMonthly: number;
  currentHiringCostYearly: number;
  hiringCostYear: number;
  totalSavingsYearly: number;
  totalSavingsPercantage: number;
  formatted: {
    hiringPosition: string;
    currentCostYear: string;
    grascopeCostYear: string;
    totalSavings: string;
    percentageSaved: string;
  };
}

type AlertType = 'success' | 'error';
interface AlertState {
  type: AlertType;
  message: string;
}

/* ──────────────────────────────────────────────────────────
 * Component
 * ──────────────────────────────────────────────────────────*/
const Calculator = () => {
  /* form */
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ROIFormData>();

  /* state */
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<Partial<ROIFormData>>({});
  const [roiData, setRoiData] = useState<ROIResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<AlertState | null>(null);


  /* derived yearly cost */
  const monthlyCost = watch('currentCostMonth');
  useEffect(() => {
    if (!monthlyCost && monthlyCost !== 0) {
      setValue('currentCostYear', 0);
    } else {
      setValue('currentCostYear', Number(monthlyCost) * 12);
    }
  }, [monthlyCost, setValue]);

  const positionOptions: PositionOption[] = [
    { name: 'Customer Support',  savingsPercentage: 70, grascopeCostPerMonth: 1500 },
    { name: 'Software Engineer', savingsPercentage: 64, grascopeCostPerMonth: 2000 },
    { name: 'Digital Marketing', savingsPercentage: 55, grascopeCostPerMonth: 1800 },
    { name: 'HR Manager',        savingsPercentage: 67, grascopeCostPerMonth: 1500 },
    { name: 'Data Analyst',      savingsPercentage: 50, grascopeCostPerMonth: 2500 },
    { name: 'Other',             savingsPercentage: 40, grascopeCostPerMonth: null },
  ];

  /* ROI logic */
  const calculateROI = (data: ROIFormData): ROIResult => {
    const currentCostPerYear = data.currentCostYear;
    const selected = positionOptions.find(p => p.name === data.hiringPosition);
    if (!selected) throw new Error('Invalid hiring position');

    const grascopeCostPerYear =
      selected.grascopeCostPerMonth !== null
        ? selected.grascopeCostPerMonth * 12
        : currentCostPerYear * (1 - selected.savingsPercentage / 100);

    const savings = currentCostPerYear - grascopeCostPerYear;
    const percent = (savings / currentCostPerYear) * 100;

    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.emailAddress,
      phoneNumber: data.phoneNumber ?? '',
      position: data.hiringPosition,
      currentHiringCostMonthly: data.currentCostMonth,
      currentHiringCostYearly: currentCostPerYear,
      hiringCostYear: grascopeCostPerYear,
      totalSavingsYearly: savings,
      totalSavingsPercantage: Math.round(percent),
      formatted: {
        hiringPosition: data.hiringPosition,
        currentCostYear: currentCostPerYear.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }),
        grascopeCostYear: grascopeCostPerYear.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }),
        totalSavings: savings.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }),
        percentageSaved: `${Math.round(percent)}%`,
      },
    };
  };

  /* first-step handler */
  const handleFirstStepSubmit = (fields: FirstStepFields) => {
    setFormData(fields);
    setStep(2);
  };

  /* second-step handler */
  const handleSecondStepSubmit = async (fields: SecondStepFields) => {
    setIsSubmitting(true);
    try {
      const combined = { ...formData, ...fields } as ROIFormData;
      const result   = calculateROI(combined);

      await axios.post(
        'https://grascoperoi-84aafe9da70d.herokuapp.com/api/v1/bpo/roi-data',
        {
          firstName:                result.firstName,
          lastName:                 result.lastName,
          email:                    result.email,
          phoneNumber:              result.phoneNumber,
          position:                 result.position,
          currentHiringCostMonthly: result.currentHiringCostMonthly,
          currentHiringCostYearly:  result.currentHiringCostYearly,
          hiringCostYear:           result.hiringCostYear,
          totalSavingsYearly:       result.totalSavingsYearly,
          totalSavingsPercantage:   result.totalSavingsPercantage,
        },
        { headers: { 'Content-Type': 'application/json' } },
      );

      setAlert({ type: 'success', message: 'ROI calculated – showing result…' });
      setRoiData(result);

      setTimeout(() => {
        setAlert(null);
        setStep(3);
      }, 2500);
    } catch (err) {
      console.error(err);
      setAlert({ type: 'error', message: 'Failed to submit your ROI calculation. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* helpers */
  const renderFieldError = (err?: typeof errors[keyof typeof errors]) =>
  err?.message ? <p className="text-red-500 text-sm mt-1">{err.message}</p> : null;

  /* -----------------------------------------------------------
 *  Tailwind alert that matches the supplied design
 *  (drop this in Calculator.tsx replacing the old <Alert>)
 * -----------------------------------------------------------*/
    const Alert = ({ state }: { state: AlertState }) => {
  const isSuccess = state.type === 'success';

  /* literal Tailwind classes, one string per state */
  const colorClasses = isSuccess
    ? 'text-[#065F46] bg-[#ECFDF5] border border-[#6EE7B7]'
    : 'text-[#991b1b] bg-[#fef2f2] border border-[#fca5a5]';

  /* choose Carbon icon */
  const Icon = isSuccess ? CheckmarkFilled : WarningFilled;

  return (
    <div role="alert" className={`flex items-center p-4 mb-4 text-sm rounded-lg ${colorClasses}`}>
      <Icon className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" />
      <span className="sr-only">{isSuccess ? 'Success' : 'Error'}</span>
      <div className="flex-1">
        <span className="font-medium">{isSuccess ? 'Success!' : 'Error!'}&nbsp;</span>
        {state.message}
      </div>
    </div>
  );
};



  /* ──────────────────────────────────────────────────────────
   * JSX
   * ──────────────────────────────────────────────────────────*/
  return (
    <div className={`${step !== 2 ? 'max-w-[900px]' : ''} w-full mx-auto`}>

      {/* STEP 1 */}
      {step === 1 && (
        <section className="bg-[#222222] text-white rounded-lg p-6 mb-8">
          <h3 className="text-xl lg:text-3xl font-semibold text-center mb-6">
            See how much you can save today!
          </h3>

          <form
            onSubmit={handleSubmit(handleFirstStepSubmit)}
            className="grid lg:grid-cols-2 gap-6 mt-[4rem]"
            noValidate
          >
            {/* first name */}
            <div>
              <label htmlFor="firstName" className="text-sm font-medium inline-flex gap-1">
                First Name <BitcoinIconsStarFilled />
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] focus:ring-2 focus:ring-indigo-500"
                {...register('firstName', { required: 'This field is required' })}
              />
              {renderFieldError(errors.firstName)}
            </div>

            {/* last name */}
            <div>
              <label htmlFor="lastName" className="text-sm font-medium inline-flex gap-1">
                Last Name <BitcoinIconsStarFilled />
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] focus:ring-2 focus:ring-indigo-500"
                {...register('lastName', { required: 'This field is required' })}
              />
              {renderFieldError(errors.lastName)}
            </div>

            {/* email */}
            <div>
              <label htmlFor="emailAddress" className="text-sm font-medium inline-flex gap-1">
                Email Address <BitcoinIconsStarFilled />
              </label>
              <input
                id="emailAddress"
                type="email"
                placeholder="Email Address"
                className="mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] focus:ring-2 focus:ring-indigo-500"
                {...register('emailAddress', {
                  required: 'This field is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
              />
              {renderFieldError(errors.emailAddress)}
            </div>

            {/* phone */}
            <div>
              <label htmlFor="phoneNumber" className="text-sm font-medium inline-flex">
                Phone number (optional)
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                className="mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] focus:ring-2 focus:ring-indigo-500"
                {...register('phoneNumber', {
                  pattern: { value: /^[0-9]{10,15}$/, message: 'Phone number must be 10–15 digits' },
                })}
              />
              {renderFieldError(errors.phoneNumber)}
            </div>

            {/* submit */}
            <div className="lg:col-span-2 mt-[4rem]">
              <button
                type="submit"
                className="rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline flex items-center justify-center p-[1rem] max-w-[500px] w-full mx-auto"
              >
                Continue
              </button>
            </div>
          </form>
        </section>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <section className="bg-[#222222] text-white rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setStep(1)} className="p-2">
              <ArrowLeft color="#FFF" />
            </button>
            <h3 className="text-xl lg:text-3xl font-semibold">Return on Investment (ROI) Calculator</h3>
            <span />
          </div>
          {alert && <Alert state={alert} />}
          <form onSubmit={handleSubmit(handleSecondStepSubmit)} noValidate className='mt-[4rem]'>
            {/* position */}
            <div className="mb-6">
              <label htmlFor="hiringPosition" className="text-sm font-medium inline-flex gap-1">
                Select the Position You're Hiring For <BitcoinIconsStarFilled />
              </label>
              <select
                id="hiringPosition"
                className="mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF]"
                {...register('hiringPosition', { required: 'This field is required' })}
              >
                <option value="">Select a position</option>
                {positionOptions.map(opt => (
                  <option key={opt.name} value={opt.name}>{opt.name}</option>
                ))}
              </select>
              {renderFieldError(errors.hiringPosition)}
            </div>

            {/* monthly + yearly */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <label htmlFor="currentCostMonth" className="text-sm font-medium inline-flex gap-1">
                  Current Hiring Cost For Role/month <BitcoinIconsStarFilled />
                </label>
                <div className="relative mt-2 bg-[#222222] border border-[#FFF] rounded-lg">
                  <select
                    {...register('currency', { required: true })}
                    className="absolute outline-none inset-y-0 left-0 w-14 pl-3 bg-transparent font-semibold"
                  >
                    <option value="GBP">£</option>
                  </select>
                  <input
                    id="currentCostMonth"
                    type="number"
                    placeholder="0"
                    className="w-full h-14 pl-14 pr-4 rounded-lg bg-neutral-800"
                    {...register('currentCostMonth', {
                      required: 'This field is required',
                      min: { value: 0, message: 'Value must be positive' },
                      valueAsNumber: true,
                    })}
                  />
                </div>
                {renderFieldError(errors.currentCostMonth)}
              </div>

              <div>
                <label htmlFor="currentCostYear" className="text-sm font-medium inline-flex gap-1">
                  Current Hiring Cost For Role/year <BitcoinIconsStarFilled />
                </label>
                <div className="relative mt-2 bg-[#222222] border border-[#FFF] rounded-lg">
                  <select
                    {...register('currency')}
                    className="absolute outline-none inset-y-0 left-0 w-14 pl-3 bg-transparent font-semibold"
                  >
                    <option value="GBP">£</option>
                  </select>
                  <input
                    id="currentCostYear"
                    type="number"
                    readOnly
                    placeholder="0"
                    className="w-full h-14 pl-14 pr-4 rounded-lg bg-neutral-800"
                    {...register('currentCostYear', {
                      required: true,
                      min: { value: 0, message: 'Value must be positive' },
                      valueAsNumber: true,
                    })}
                  />
                </div>
                {renderFieldError(errors.currentCostYear)}
              </div>
            </div>
                    
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-[4rem] rounded-[2rem] relative text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[2rem] before:opacity-20 before:mix-blend-overlay no-underline flex items-center justify-center p-[1rem] max-w-[500px] w-full mx-auto"
            >
              {isSubmitting ? 'Calculating…' : 'My ROI with Grascope'}
            </button>
          </form>
        </section>
      )}

      {/* STEP 3 */}
      {step === 3 && roiData && (
        <section className="bg-[#222222] text-white rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setStep(2)} className="p-2">
              <ArrowLeft color="#FFF" />
            </button>
            <h3 className="text-xl lg:text-2xl font-semibold">Your ROI With Grascope</h3>
            <span />
          </div>

          <div className="space-y-4 border-b border-white] pb-[2rem] mt-[2rem]">
            {([
                ['Hiring Position', roiData.formatted.hiringPosition],
                ['Your Current Hiring Cost/year', roiData.formatted.currentCostYear],
                ['Your Hiring Cost with Grascope/year', roiData.formatted.grascopeCostYear],
                ['Total Savings/year', roiData.formatted.totalSavings],
                ['Percentage Saved', roiData.formatted.percentageSaved, { fontSize: '200%' }],
                ] as const).map(([label, value, styles]) => (
                <div key={label} className="flex items-center justify-between">
                    <p className="text-[110%] font-medium">{label}</p>
                    <p
                    className={`text-[120%] font-semibold ${label.replace(/\s+/g, '')}`}
                    style={styles}
                    >
                    {value}
                    </p>
                </div>
            ))}
          </div>
          <p className="text-[110%] font-medium text-center mt-[2rem]">Start Saving Now</p>
          <div className="grid lg:grid-cols-2 gap-4 mt-8 max-w-xl mx-auto">
            <Link
              to="https://calendly.com/grascope"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-[.5rem] text-white z-[1] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay no-underline flex items-center justify-center"
            >
              Book a Demo
            </Link>
            <a
              href="/Grascope Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg text-center bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] backdrop-blur-[53.080570220947266px] shadow-[0px_5.31px_31.85px_-3.98px_rgba(0,0,0,0.2)]"
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
