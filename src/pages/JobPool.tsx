import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ArrowLeft, CheckmarkFilled, ChevronDown, Close, Upload, WarningFilled } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { BitcoinIconsStarFilled } from '../components/icons';
import { motion } from 'framer-motion';

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
  role: string[];
  portfolioLink: string;
  yearsOfExperience: string;
  cv: FileList;
  projectsExciteYou: string;
  problemSolvingApproach: string;
  bestTeamType: string;
  proudProjectOrChallenge: string;
  availability: string;
  openToIdeaLab: boolean;
  consent: boolean;
  otherRole?: string;
};

const roleOptions = [
  'Product Designer',
  'UI/UX Designer',
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'Project Manager',
  'Content Designer',
  'Performance Marketer',
  'Copywriter',
  'Motion Designer',
  'Other'
];

const experienceOptions = [
  'Less than 1 year',
  '1–2 years',
  '3–5 years',
  '6+ years'
];

const availabilityOptions = [
  'Available immediately',
  '1–2 weeks',
  'Open to short-term projects',
  'Full-time preferred',
  'Contract only',
  'Open to part-time or freelance as needed'
];

const MAX_WORDS = 300;

const JobPool = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState({
    role: false,
    experience: false,
    availability: false
  });
  const [currentStep, setCurrentStep] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedRoles = watch('role') || [];
  const cvFile = watch('cv')?.[0];
  const otherRoleSelected = selectedRoles.includes('Other');

  // Calculate word counts
  const wordCounts = {
    projectsExciteYou: watch('projectsExciteYou') ? watch('projectsExciteYou').trim().split(/\s+/).filter(Boolean).length : 0,
    problemSolvingApproach: watch('problemSolvingApproach') ? watch('problemSolvingApproach').trim().split(/\s+/).filter(Boolean).length : 0,
    bestTeamType: watch('bestTeamType') ? watch('bestTeamType').trim().split(/\s+/).filter(Boolean).length : 0,
    proudProjectOrChallenge: watch('proudProjectOrChallenge') ? watch('proudProjectOrChallenge').trim().split(/\s+/).filter(Boolean).length : 0
  };

  const toggleRole = (role: string) => {
    if (selectedRoles.includes(role)) {
      setValue('role', selectedRoles.filter(r => r !== role));
    } else {
      setValue('role', [...selectedRoles, role]);
    }
  };

  const toggleDropdown = (field: 'role' | 'experience' | 'availability') => {
    setDropdownOpen(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setValue('cv', undefined as unknown as FileList);
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      const requiredFields = [
        'fullName',
        'email',
        'phoneNumber',
        'city',
        'role',
        'portfolioLink',
        'yearsOfExperience',
        'cv'
      ];
      
      const validateField = (field: keyof FormData, value: FormData[keyof FormData]) => {
        if (field === 'role') {
            return Array.isArray(value) && value.length > 0;
        } else if (field === 'cv') {
            return value !== undefined && value !== null;
        } else {
            return typeof value === 'string' && value.trim() !== '';
        }
        };

        return requiredFields.every(field => {
        const value = watch(field as keyof FormData);
        return validateField(field as keyof FormData, value);
        });
    }
    return true;
  };

  const nextStep = () => {
    if (!validateCurrentStep()) {
      setSubmitError('Please complete all required fields before proceeding');
      return;
    }
    setSubmitError('');
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setSubmitError('');
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  setSubmitError('');

  try {

    // Prepare the JSON payload
    const payload = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      city: data.city,
      country: data.country,
      role: data.role.map(role => 
        role === 'Other' && data.otherRole ? data.otherRole : role
      ),
      portfolioLink: data.portfolioLink,
      yearsOfExperience: data.yearsOfExperience,
      cv: data.cv?.[0]?.name || '', // Send as base64 string
      projectsExciteYou: data.projectsExciteYou,
      problemSolvingApproach: data.problemSolvingApproach,
      bestTeamType: data.bestTeamType,
      proudProjectOrChallenge: data.proudProjectOrChallenge,
      availability: data.availability,
      openToIdeaLab: data.openToIdeaLab
    };

    const response = await axios.post(
      'https://grascoperoi-84aafe9da70d.herokuapp.com/api/v1/talent-pool',
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === 201) {
      setSubmitSuccess(true);
    }
  } catch (error) {
    console.error('Submission error:', error);
    if (axios.isAxiosError(error) && error.response?.data?.validationErrors) {
      const validationErrors = error.response.data.validationErrors;
      const errorMessages = validationErrors.map((err: any) => 
        `${err.field}: ${err.errors.join(', ')}`
      ).join('\n');
      setSubmitError(errorMessages);
    } else {
      setSubmitError('Failed to submit your application. Please try again.');
    }
  } finally {
    setIsSubmitting(false);
  }
};

  const StepIndicator = () => {
    const steps = [
      { number: 1, label: 'Basic Info' },
      { number: 2, label: 'About You' },
      { number: 3, label: 'Preferences' }
    ];

    return (
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center space-x-4 mb-2">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: currentStep >= step.number ? '#159B48' : '#374151',
                  borderColor: currentStep >= step.number ? '#159B48' : '#374151'
                }}
                transition={{ duration: 0.3 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= step.number ? 'bg-[#159B48] border-[#159B48]' : 'bg-gray-700 border-gray-700'}`}
              >
                {currentStep > step.number ? (
                  <CheckmarkFilled className="text-white" />
                ) : (
                  <span className="text-white">{step.number}</span>
                )}
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: currentStep > step.number ? '#159B48' : '#374151'
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-1 ${currentStep > step.number ? 'bg-[#159B48]' : 'bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] backdrop-blur-[53.080570220947266px] shadow-[0px_5.31px_31.85px_-3.98px_rgba(0,0,0,0.2)]'}`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-white text-sm">
          Step {currentStep} of {steps.length}
        </div>
      </div>
    );
  };

  return (
    <section className="lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
      <section className='py-[3rem] text-center'>
        <Link to={'/'} className='inline-flex items-center py-[1rem] px-[1.5rem] border border-white rounded-[2rem] lg:text-[95%] text-[85%] text-[#FFF] no-underline'>
          <ArrowLeft className="mr-[1rem]" color="#FFF" />
          Our Job Pool
        </Link>
        <h1 className='lg:text-[250%] text-[180%] xui-font-normal mt-[1rem]'>Join the Grascope Talent Pool</h1>
        <p className='lg:text-[95%] text-[85%] opacity-[.8] leading-[1.5rem] mt-[1rem] mx-auto lg:w-[75%] w-full'>
          Grascope works with global clients and also builds its own products. Through our Idea Lab, we constantly design, test, and launch new digital solutions—so we're always on the lookout for brilliant creatives, developers, and strategists to bring into the fold.
        </p>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#222222] lg:p-[2rem] p-[1rem] rounded-[1rem]">
        {submitError && (
            <div className="flex items-start p-4 mb-4 text-[#991b1b] rounded-lg bg-[#fef2f2]" role="alert">
                <WarningFilled className="shrink-0 inline w-5 h-5 me-3 mt-0.5" />
                <div className="ms-3 text-sm font-medium">
                <h3 className="font-bold">Validation Errors</h3>
                {submitError.split('\n').map((error, i) => (
                    <p key={i} className="mt-1">{error}</p>
                ))}
                </div>
            </div>
        )}
        {submitSuccess && (
            <div className="flex items-center p-4 mb-4 text-[#065F46] rounded-lg bg-[#ECFDF5]" role="alert">
                <CheckmarkFilled className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" />
                <span className="sr-only">Info</span>
                <div className="ms-3 text-sm font-medium">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank you for submitting your details.</h2>
                    <p className="text-gray-600 mb-6">
                        You're now part of the Grascope talent pool. Whether it's a client project or a product coming out of the Idea Lab—we'll reach out if it's the right fit.
                    </p>
                    <p className="text-gray-500">
                        No spam. No mass messages. Just meaningful opportunities.
                    </p>
                </div>
            </div>
        )}

        <StepIndicator />

        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-4">Basic Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  Full Name <BitcoinIconsStarFilled />
                </label>
                <input
                  type="text"
                  {...register('fullName', { required: 'Full name is required' })}
                  className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  Email Address <BitcoinIconsStarFilled />
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  Phone Number (WhatsApp preferred) <BitcoinIconsStarFilled />
                </label>
                <input
                  type="tel"
                  {...register('phoneNumber', { required: 'Phone number is required' })}
                  className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="+1 (123) 456-7890"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
              </div>
            <div className="grid md:grid-cols-2 gap-6">
            <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                City <BitcoinIconsStarFilled />
                </label>
                <input
                type="text"
                {...register('city', { required: 'City is required' })}
                className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="City"
                />
            </div>
            <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                Country <BitcoinIconsStarFilled />
                </label>
                <input
                type="text"
                {...register('country', { required: 'Country is required' })}
                className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Country"
                />
            </div>
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                Role/Skill Category <BitcoinIconsStarFilled />
              </label>
              <div className="relative">
                <div 
                  className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF] cursor-pointer flex justify-between items-center ${errors.role ? 'border-red-500' : 'border-gray-300'}`}
                  onClick={() => toggleDropdown('role')}
                >
                  <span className="text-white">{selectedRoles.length > 0 ? selectedRoles.join(', ') : 'Select one or multiple'}</span>
                  <ChevronDown className={`transition-transform text-white ${dropdownOpen.role ? 'transform rotate-180' : ''}`} />
                </div>
                {dropdownOpen.role && (
                  <div className="absolute z-10 mt-1 w-full bg-[#1E1E1E] border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {roleOptions.map(role => (
                      <div 
                        key={role} 
                        className={`px-4 py-2 text-white hover:bg-[#222222] cursor-pointer flex items-center ${selectedRoles.includes(role) ? 'bg-[#222222]' : ''}`}
                        onClick={() => toggleRole(role)}
                      >
                        <span className={`w-5 h-5 inline-block border rounded mr-2 ${selectedRoles.includes(role) ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                          {selectedRoles.includes(role) && <CheckmarkFilled className="text-white w-4 h-4 mx-auto" />}
                        </span>
                        {role}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {errors.role && <p className="text-red-500 text-sm mt-1">Please select at least one role</p>}
              {otherRoleSelected && (
                <div className="mt-2">
                  <input
                    type="text"
                    {...register('otherRole')}
                    className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] text-white"
                    placeholder="Please specify your role"
                  />
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  Portfolio Link (Website, Behance, GitHub, etc.) <BitcoinIconsStarFilled />
                </label>
                <input
                  type="url"
                  {...register('portfolioLink', { required: 'Portfolio link is required' })}
                  className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.portfolioLink ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="https://"
                />
                {errors.portfolioLink && <p className="text-red-500 text-sm mt-1">{errors.portfolioLink.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  Years of Experience <BitcoinIconsStarFilled />
                </label>
                <div className="relative">
                  <div 
                    className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF] cursor-pointer flex justify-between items-center ${errors.yearsOfExperience ? 'border-red-500' : 'border-gray-300'}`}
                    onClick={() => toggleDropdown('experience')}
                  >
                    <span className="text-white">{watch('yearsOfExperience') || 'Select your experience level'}</span>
                    <ChevronDown className={`transition-transform text-white ${dropdownOpen.experience ? 'transform rotate-180' : ''}`} />
                  </div>
                  {dropdownOpen.experience && (
                    <div className="absolute z-10 mt-1 w-full bg-[#1E1E1E] border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                      {experienceOptions.map(exp => (
                        <div 
                          key={exp} 
                          className="px-4 py-2 text-white hover:bg-[#222222] cursor-pointer flex items-center"
                          onClick={() => {
                            setValue('yearsOfExperience', exp);
                            setDropdownOpen(prev => ({ ...prev, experience: false }));
                          }}
                        >
                          {exp}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {errors.yearsOfExperience && <p className="text-red-500 text-sm mt-1">Please select your experience level</p>}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                Upload Your CV (PDF preferred) <BitcoinIconsStarFilled />
              </label>
              <input
                type="file"
                {...register('cv', { required: 'CV is required' })}
                ref={fileInputRef}
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setValue('cv', e.target.files);
                  }
                }}
              />
              <div 
                className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${errors.cv ? 'border-red-500' : 'border-gray-300'}`}
                onClick={handleFileClick}
              >
                {cvFile ? (
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center justify-between bg-gray-100 p-3 rounded w-full">
                      <div className="flex items-center space-x-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium text-gray-900 truncate max-w-xs">{cvFile.name}</p>
                          <p className="text-xs text-gray-500">{(cvFile.size / 1024).toFixed(1)} KB</p>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        className="text-gray-400 hover:text-red-500 ml-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile();
                        }}
                      >
                        <Close className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-sm text-blue-600 font-medium mt-2">Click to change file</p>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto text-3xl text-gray-400 mb-2" />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max. 5MB)</p>
                  </>
                )}
              </div>
              {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>}
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={nextStep}
                className="relative text-white z-[1] rounded-[.5rem] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between justify-center p-[1rem]"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Get to Know You */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-4">About You</h2>
            
            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                What kinds of projects excite you most and why? <BitcoinIconsStarFilled />
              </label>
              <div className="relative">
                <textarea
                  {...register('projectsExciteYou', { required: 'This field is required' })}
                  className={`mt-2 w-full h-[270px] py-4 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.projectsExciteYou ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Describe the types of projects that get you excited and why..."
                  maxLength={MAX_WORDS * 6}
                />
                <div className={`absolute bottom-2 right-2 text-xs ${wordCounts.projectsExciteYou >= MAX_WORDS ? 'text-red-500' : 'text-gray-400'}`}>
                  {wordCounts.projectsExciteYou}/{MAX_WORDS} words
                </div>
              </div>
              {errors.projectsExciteYou && <p className="text-red-500 text-sm mt-1">{errors.projectsExciteYou.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                How do you typically approach problem-solving in your work? <BitcoinIconsStarFilled />
              </label>
              <div className="relative">
                <textarea
                  {...register('problemSolvingApproach', { required: 'This field is required' })}
                  className={`mt-2 w-full h-[270px] py-4 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.problemSolvingApproach ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Describe your problem-solving process..."
                  maxLength={MAX_WORDS * 6}
                />
                <div className={`absolute bottom-2 right-2 text-xs ${wordCounts.problemSolvingApproach >= MAX_WORDS ? 'text-red-500' : 'text-gray-400'}`}>
                  {wordCounts.problemSolvingApproach}/{MAX_WORDS} words
                </div>
              </div>
              {errors.problemSolvingApproach && <p className="text-red-500 text-sm mt-1">{errors.problemSolvingApproach.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                What kind of team do you do your best work with? <BitcoinIconsStarFilled />
              </label>
              <div className="relative">
                <textarea
                  {...register('bestTeamType', { required: 'This field is required' })}
                  className={`mt-2 w-full h-[270px] py-4 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.bestTeamType ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Describe your ideal team environment..."
                  maxLength={MAX_WORDS * 6}
                />
                <div className={`absolute bottom-2 right-2 text-xs ${wordCounts.bestTeamType >= MAX_WORDS ? 'text-red-500' : 'text-gray-400'}`}>
                  {wordCounts.bestTeamType}/{MAX_WORDS} words
                </div>
              </div>
              {errors.bestTeamType && <p className="text-red-500 text-sm mt-1">{errors.bestTeamType.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                Tell us something real: a project you're proud of, or a challenge that shaped how you work. <BitcoinIconsStarFilled />
              </label>
              <div className="relative">
                <textarea
                  {...register('proudProjectOrChallenge', { required: 'This field is required' })}
                  className={`mt-2 w-full h-[270px] py-4 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 ${errors.proudProjectOrChallenge ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Share a meaningful professional experience..."
                  maxLength={MAX_WORDS * 6}
                />
                <div className={`absolute bottom-2 right-2 text-xs ${wordCounts.proudProjectOrChallenge >= MAX_WORDS ? 'text-red-500' : 'text-gray-400'}`}>
                  {wordCounts.proudProjectOrChallenge}/{MAX_WORDS} words
                </div>
              </div>
              {errors.proudProjectOrChallenge && <p className="text-red-500 text-sm mt-1">{errors.proudProjectOrChallenge.message}</p>}
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={prevStep}
                className="text-center bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] backdrop-blur-[53.080570220947266px] shadow-[0px_5.31px_31.85px_-3.98px_rgba(0,0,0,0.2)] text-white font-bold py-3 px-6 rounded-lg "
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="relative text-white z-[1] rounded-[.5rem] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between justify-center p-[1rem]"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Work Preferences */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-4">Work Preferences</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  Availability <BitcoinIconsStarFilled />
                </label>
                <div className="relative">
                  <div 
                    className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF] cursor-pointer flex justify-between items-center ${errors.availability ? 'border-red-500' : 'border-gray-300'}`}
                    onClick={() => toggleDropdown('availability')}
                  >
                    <span className="text-white">{watch('availability') || 'Select your availability'}</span>
                    <ChevronDown className={`transition-transform text-white ${dropdownOpen.availability ? 'transform rotate-180' : ''}`} />
                  </div>
                  {dropdownOpen.availability && (
                    <div className="absolute z-10 mt-1 w-full bg-[#1E1E1E] border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                      {availabilityOptions.map(option => (
                        <div 
                          key={option} 
                          className="px-4 py-2 text-white hover:bg-[#222222] cursor-pointer flex items-center"
                          onClick={() => {
                            setValue('availability', option);
                            setDropdownOpen(prev => ({ ...prev, availability: false }));
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {errors.availability && <p className="text-red-500 text-sm mt-1">Please select your availability</p>}
              </div>

              <div className="flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('openToIdeaLab')}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-white">
                    Would you be open to joining internal Grascope products built in the Idea Lab?
                  </span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    type="checkbox"
                    {...register('consent', { required: 'You must give consent to proceed' })}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <label htmlFor="consent" className="ml-2 block text-sm text-white">
                  I give Grascope permission to securely store my information and share my portfolio and CV with potential clients and internal teams if there's a matching opportunity. I understand this does not guarantee job placement. <BitcoinIconsStarFilled />
                </label>
              </div>
              {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>}
            </div>

            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={prevStep}
                className="text-center bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] backdrop-blur-[53.080570220947266px] shadow-[0px_5.31px_31.85px_-3.98px_rgba(0,0,0,0.2)] text-white font-bold py-3 px-6 rounded-lg"
              >
                Previous
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative text-white z-[1] rounded-[.5rem] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay no-underline inline-flex items-center justify-between justify-center p-[1rem]"
              >
                {isSubmitting ? 'Submitting...' : 'Join Our Talent Pool'}
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default JobPool;