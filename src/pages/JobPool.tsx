import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ArrowLeft, CheckmarkFilled, ChevronDown, Close, Upload, WarningFilled } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { BitcoinIconsStarFilled } from '../components/icons';
import { motion } from 'framer-motion';

// Import Country, State, City from 'country-state-city'
import { Country, State, City } from 'country-state-city';

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
  state?: string;
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
  marketingConsent: boolean; // Added new field for marketing consent
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
  'Sales',
  'Admin support',
  'Accounting',
  'Social Media Management',
  'Content Creator',
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
  const { register, handleSubmit, watch, setValue } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState({
    role: false,
    experience: false,
    availability: false,
    country: false,
    state: false,
    city: false,
  });
  const [currentStep, setCurrentStep] = useState(1);
   // Watch the values for the toggle switches
  const openToIdeaLabValue = watch('openToIdeaLab');
  const marketingConsentValue = watch('marketingConsent');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedRoles = watch('role') || [];
  const cvFile = watch('cv')?.[0];
  const otherRoleSelected = selectedRoles.includes('Other');

  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>(null);

  const [countrySearchTerm, setCountrySearchTerm] = useState('');
  const [stateSearchTerm, setStateSearchTerm] = useState('');
  const [citySearchTerm, setCitySearchTerm] = useState('');

  const watchedCountry = watch('country');
  const watchedState = watch('state');
  const watchedCity = watch('city');

  const allCountries = Country.getAllCountries();
  const filteredCountries = allCountries.filter(country =>
    country.name.toLowerCase().includes(countrySearchTerm.toLowerCase())
  );

  const statesOfSelectedCountry = selectedCountryCode ? State.getStatesOfCountry(selectedCountryCode) : [];
  const filteredStates = statesOfSelectedCountry.filter(state =>
    state.name.toLowerCase().includes(stateSearchTerm.toLowerCase())
  );

  const citiesToShow = selectedStateCode
    ? City.getCitiesOfState(selectedCountryCode!, selectedStateCode)
    : selectedCountryCode && statesOfSelectedCountry.length === 0
      ? City.getCitiesOfCountry(selectedCountryCode)
      : [];

  const filteredCities = citiesToShow!.filter(city =>
    city.name.toLowerCase().includes(citySearchTerm.toLowerCase())
  );

  useEffect(() => {
    if (watchedCountry) {
      const countryFound = allCountries.find(c => c.name === watchedCountry);
      if (countryFound && countryFound.isoCode !== selectedCountryCode) {
        setSelectedCountryCode(countryFound.isoCode);
        setSelectedStateCode(null);
        setValue('state', '');
        setValue('city', '');
      } else if (!countryFound && selectedCountryCode) {
        setSelectedCountryCode(null);
        setSelectedStateCode(null);
        setValue('state', '');
        setValue('city', '');
      }
    } else if (selectedCountryCode) {
      setSelectedCountryCode(null);
      setSelectedStateCode(null);
      setValue('state', '');
      setValue('city', '');
    }
  }, [watchedCountry, selectedCountryCode, allCountries, setValue]);

  useEffect(() => {
    if (watchedState && selectedCountryCode) {
      const stateFound = statesOfSelectedCountry.find(s => s.name === watchedState);
      if (stateFound && stateFound.isoCode !== selectedStateCode) {
        setSelectedStateCode(stateFound.isoCode);
        setValue('city', '');
      } else if (!stateFound && selectedStateCode) {
        setSelectedStateCode(null);
        setValue('city', '');
      }
    } else if (selectedStateCode && (!watchedState || !selectedCountryCode)) {
      setSelectedStateCode(null);
      setValue('city', '');
    }
  }, [watchedState, selectedStateCode, selectedCountryCode, statesOfSelectedCountry, setValue]);

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

  const toggleDropdown = (field: 'role' | 'experience' | 'availability' | 'country' | 'state' | 'city') => {
    setDropdownOpen(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
    if (field === 'country' && dropdownOpen.country) setCountrySearchTerm('');
    if (field === 'state' && dropdownOpen.state) setStateSearchTerm('');
    if (field === 'city' && dropdownOpen.city) setCitySearchTerm('');
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setValue('cv', undefined as unknown as FileList);
  };

  const validateCurrentStep = (stepToValidate: number = currentStep) => {
  setSubmitError(''); // Clear previous errors at the start of validation
  const errors: string[] = [];

  // Step 1 validation
  if (currentStep === 1) {
    const fullName = watch('fullName');
    const email = watch('email');
    const phoneNumber = watch('phoneNumber');
    const country = watch('country');
    const city = watch('city');
    const role = watch('role');
    const portfolioLink = watch('portfolioLink');
    const yearsOfExperience = watch('yearsOfExperience');
    const cv = watch('cv');

    if (!fullName || fullName.trim() === '') errors.push('Full name is required.');
    if (!email || email.trim() === '') {
      errors.push('Email is required.');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.push('Invalid email address.');
    }
    if (!phoneNumber || phoneNumber.trim() === '') errors.push('Phone number is required.');
    if (!country || country.trim() === '' || !selectedCountryCode) errors.push('Country is required.');
    if (selectedCountryCode && statesOfSelectedCountry.length > 0 && (!watchedState || watchedState.trim() === '')) {
      errors.push('State/Region is required.');
    }
    if (!city || city.trim() === '' || !watchedCity) errors.push('City is required.');
    if (!Array.isArray(role) || role.length === 0) errors.push('Please select at least one role.');
    if (otherRoleSelected && (!watch('otherRole') || watch('otherRole')?.trim() === '')) {
      errors.push('Please specify your role for "Other".');
    }

    if (!portfolioLink || portfolioLink.trim() === '') {
      errors.push('Portfolio link is required.');
    } else {
      // This is the **corrected** and **recommended** regex based on our previous discussion
      const urlRegex = /^(https?:\/\/(?:www\.|m\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z0-9-]{1,63}\.(?:com|net|org|io|dev|app|co|art|design|me|xyz|site|blog|info|biz|space|tech)(?:\/[^\s]*)?|https?:\/\/(?:www\.)?behance\.net\/[^\s]+|https?:\/\/(?:www\.)?github\.com\/[^\s]+)$/i;
      if (!urlRegex.test(portfolioLink)) {
        errors.push('Portfolio link must be a valid website, Behance, or GitHub URL.');
      }
    }

    if (!yearsOfExperience || yearsOfExperience.trim() === '') errors.push('Years of Experience is required.');
    if (!cv || cv.length === 0) errors.push('CV is required.');

    if (errors.length > 0) {
      setSubmitError(errors.join('\n')); // Sets the specific error messages
      return false;
    }
    return true;
  }

  // Step 2 validation
  if (currentStep === 2) {
    const requiredTextAreas = [
      { field: 'projectsExciteYou', label: 'Projects that excite you' },
      { field: 'problemSolvingApproach', label: 'Problem-solving approach' },
      { field: 'bestTeamType', label: 'Best team type' },
      { field: 'proudProjectOrChallenge', label: 'Proud project or challenge' }
    ];

    requiredTextAreas.forEach(({ field, label }) => {
      const value = watch(field as keyof FormData) as string;
      const words = value ? value.trim().split(/\s+/).filter(Boolean).length : 0;
      if (!value || value.trim() === '') {
        errors.push(`${label} is required.`);
      } else if (words > MAX_WORDS) {
        errors.push(`Max ${MAX_WORDS} words for "${label}". You have ${words}.`);
      }
    });

    if (errors.length > 0) {
      setSubmitError(errors.join('\n')); // Sets the specific error messages
      return false;
    }
    return true;
  }
  if (stepToValidate === 3) {
    const availability = watch('availability');
    if (!availability || availability.trim() === '') {
      errors.push('Availability is required.');
    }

    if (errors.length > 0) {
      setSubmitError(errors.join('\n'));
      return false;
    }
    return true;
  }

  return true; // Default to true if no specific validation for the current step

};


  const nextStep = () => {
    setSubmitError(''); // Clear any previous validation errors before checking for the next step
    setSubmitSuccess(false); // Clear success message if user goes back or advances

    const isStepValid = validateCurrentStep();

    if (isStepValid) {
      setCurrentStep(prev => prev + 1);
      // Only scroll to top if validation passes
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // If validation fails, errors are already set by validateCurrentStep.
      // We explicitly *don't* scroll to the top here, so the user sees the errors.
    }
  };

  const prevStep = () => {
    setSubmitError(''); // Clear errors when going back
    setSubmitSuccess(false); // Clear success message if user goes back
    setCurrentStep(prev => prev - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFinalSubmit = async () => {
  // Validate step 3 fields
  const isStep3Valid = validateCurrentStep(3);

  if (isStep3Valid) {
    // If step 3 is valid, proceed with the actual form submission
    handleSubmit(onSubmit)(); // Call the onSubmit function provided by react-hook-form
  }
};

  const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  setSubmitError(''); // Clear any previous submission errors before a new attempt
  setSubmitSuccess(false); // Ensure success state is reset

  try {
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
      cv: data.cv?.[0]?.name || '',
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
  } catch (error: unknown) { // Explicitly type error as unknown (though it's default)
    console.error('Submission error:', error);

    if (axios.isAxiosError(error)) {
      // Now 'error' is known to be an AxiosError
      if (error.response?.data?.validationErrors) {
        const validationErrors = error.response.data.validationErrors;
        const errorMessages = validationErrors.map((err: any) => // err: any is fine here if structure is unknown
          `${err.field}: ${err.errors.join(', ')}`
        ).join('\n');
        setSubmitError(errorMessages);
      } else if (error.response?.data?.message) { // Check if 'message' exists on data
        setSubmitError(`Failed to submit your application. ${error.response.data.message}`);
      } else if (error.message) { // Fallback to generic Axios error message
        setSubmitError(`Failed to submit your application: ${error.message}`);
      } else {
        setSubmitError('Failed to submit your application. An unknown error occurred with the request.');
      }
    } else if (error instanceof Error) {
      // If it's a standard JavaScript Error object
      setSubmitError(`Failed to submit your application: ${error.message}`);
    } else {
      // General fallback for anything else that was thrown
      setSubmitError('Failed to submit your application. An unexpected error occurred.');
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
                  className="mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 border-gray-300"
                  placeholder="Your full name"
                />
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
                  className="mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 border-gray-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                Phone Number (WhatsApp preferred) <BitcoinIconsStarFilled />
              </label>
              <input
                type="tel"
                {...register('phoneNumber', { required: 'Phone number is required' })}
                className="mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 border-gray-300"
                placeholder="+1 (123) 456-7890"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6"> {/* Changed to 3 columns */}
              {/* Country Dropdown */}
              <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  Country <BitcoinIconsStarFilled />
                </label>
                <div className="relative">
                  <div
                    className="mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF] cursor-pointer flex justify-between items-center"
                    onClick={() => toggleDropdown('country')}
                  >
                    <span className="text-white">{watchedCountry || 'Select a country'}</span>
                    <ChevronDown className={`transition-transform text-white ${dropdownOpen.country ? 'transform rotate-180' : ''}`} />
                  </div>
                  {dropdownOpen.country && (
                    <div className="absolute z-20 mt-1 w-full bg-[#1E1E1E] border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      <input
                        type="text"
                        placeholder="Search country..."
                        className="w-full px-4 py-2 bg-[#1A1A1A] text-white border-b border-gray-700 sticky top-0"
                        value={countrySearchTerm}
                        onChange={(e) => setCountrySearchTerm(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map(country => (
                          <div
                            key={country.isoCode}
                            className="px-4 py-2 text-white hover:bg-[#222222] cursor-pointer"
                            onClick={() => {
                              setValue('country', country.name, { shouldValidate: true });
                              setSelectedCountryCode(country.isoCode);
                              setValue('state', '', { shouldValidate: true }); // Clear state
                              setSelectedStateCode(null); // Clear selectedStateCode
                              setValue('city', '', { shouldValidate: true }); // Clear city
                              toggleDropdown('country');
                              setCountrySearchTerm('');
                            }}
                          >
                            {country.name}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-400">No countries found.</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* State/Region Dropdown (New Field) */}
              <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  State/Region {statesOfSelectedCountry.length > 0 && <BitcoinIconsStarFilled />} {/* Only show star if states exist */}
                </label>
                <div className="relative">
                  <div
                    className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF] cursor-pointer flex justify-between items-center
                    ${!selectedCountryCode ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => selectedCountryCode && statesOfSelectedCountry.length > 0 && toggleDropdown('state')}
                  >
                    <span className="text-white">
                      {selectedCountryCode && statesOfSelectedCountry.length > 0
                        ? (watchedState || 'Select a state/region')
                        : 'No states/regions available'}
                    </span>
                    <ChevronDown className={`transition-transform text-white ${dropdownOpen.state ? 'transform rotate-180' : ''}`} />
                  </div>
                  {dropdownOpen.state && selectedCountryCode && statesOfSelectedCountry.length > 0 && (
                    <div className="absolute z-20 mt-1 w-full bg-[#1E1E1E] border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      <input
                        type="text"
                        placeholder="Search state/region..."
                        className="w-full px-4 py-2 bg-[#1A1A1A] text-white border-b border-gray-700 sticky top-0"
                        value={stateSearchTerm}
                        onChange={(e) => setStateSearchTerm(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {filteredStates.length > 0 ? (
                        filteredStates.map(state => (
                          <div
                            key={state.isoCode}
                            className="px-4 py-2 text-white hover:bg-[#222222] cursor-pointer"
                            onClick={() => {
                              setValue('state', state.name, { shouldValidate: true });
                              setSelectedStateCode(state.isoCode);
                              setValue('city', '', { shouldValidate: true }); // Clear city on state change
                              toggleDropdown('state');
                              setStateSearchTerm('');
                            }}
                          >
                            {state.name}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-400">No states/regions found.</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* City Dropdown */}
              <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  City <BitcoinIconsStarFilled />
                </label>
                <div className="relative">
                  <div
                    className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF] cursor-pointer flex justify-between items-center
                    ${!selectedCountryCode || (statesOfSelectedCountry.length > 0 && !selectedStateCode) ? 'opacity-50 cursor-not-allowed' : ''} border-gray-300'`}
                    onClick={() => (selectedCountryCode && (statesOfSelectedCountry.length === 0 || selectedStateCode)) && toggleDropdown('city')}
                  >
                    <span className="text-white">
                      {watchedCity || (selectedCountryCode
                        ? (statesOfSelectedCountry.length > 0 && !selectedStateCode
                            ? 'Select a state/region first'
                            : 'Select a city')
                        : 'Select country first')}
                    </span>
                    <ChevronDown className={`transition-transform text-white ${dropdownOpen.city ? 'transform rotate-180' : ''}`} />
                  </div>
                  {dropdownOpen.city && selectedCountryCode && (selectedStateCode || statesOfSelectedCountry.length === 0) && (
                    <div className="absolute z-20 mt-1 w-full bg-[#1E1E1E] border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      <input
                        type="text"
                        placeholder="Search city..."
                        className="w-full px-4 py-2 bg-[#1A1A1A] text-white border-b border-gray-700 sticky top-0"
                        value={citySearchTerm}
                        onChange={(e) => setCitySearchTerm(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {filteredCities.length > 0 ? (
                        filteredCities.map(city => (
                          <div
                            key={`${city.name}-${city.stateCode || 'no-state'}-${city.countryCode}`}
                            className="px-4 py-2 text-white hover:bg-[#222222] cursor-pointer"
                            onClick={() => {
                              setValue('city', city.name, { shouldValidate: true });
                              toggleDropdown('city');
                              setCitySearchTerm('');
                            }}
                          >
                            {city.name}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-400">No cities found for this selection.</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                Role/Skill Category <BitcoinIconsStarFilled />
              </label>
              <div className="relative">
                <div
                  className="mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF] cursor-pointer flex justify-between items-center"
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
                  {...register('portfolioLink', {
                    required: 'Portfolio link is required',
                    pattern: {
                      value: /^(https?:\/\/(?:www\.|m\.)?(?:[a-zA-Z0-9-]+\.)+(?:com|net|org|io|dev|app|co|art|design|me|xyz|site|blog|info|biz|space|tech)(?:\/[^\s]*)?|https?:\/\/(?:www\.)?behance\.net\/[^\s]+|https?:\/\/(?:www\.)?github\.com\/[^\s]+)$/i,
                      message: 'Portfolio link must be a valid website, Behance, or GitHub URL.'
                    }
                  })}
                  className="mt-2 w-full h-14 px-4 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 border-gray-300"
                  placeholder="https://"
                />
              </div>

              <div>
                <label className="text-sm font-medium inline-flex gap-1 text-white">
                  Years of Experience <BitcoinIconsStarFilled />
                </label>
                <div className="relative">
                  <div
                    className="mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF] cursor-pointer flex justify-between items-center"
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
                            setValue('yearsOfExperience', exp, { shouldValidate: true });
                            setDropdownOpen(prev => ({ ...prev, experience: false }));
                          }}
                        >
                          {exp}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
                    setValue('cv', e.target.files, { shouldValidate: true });
                  }
                }}
              />
              <div
                className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer border-gray-300`}
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
                        <span className="text-gray-800">{cvFile.name}</span>
                      </div>
                      <button type="button" onClick={(e) => { e.stopPropagation(); removeFile(); }} className="text-gray-500 hover:text-gray-700">
                        <Close />
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm">Click to change file</p>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="mt-1 text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={nextStep}
                className="py-3 px-6 bg-[#159B48] text-white rounded-lg hover:bg-[#127F3A] transition duration-200"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 2: About You */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-4">About You</h2>
            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                What kind of projects excite you most? <BitcoinIconsStarFilled />
              </label>
              <textarea
                {...register('projectsExciteYou', {
                  required: 'This field is required',
                  validate: value => {
                    const words = value.trim().split(/\s+/).filter(Boolean).length;
                    return words <= MAX_WORDS || `Max ${MAX_WORDS} words. You have ${words}.`;
                  }
                })}
                rows={4}
                className={`mt-2 w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 border-gray-300`}
                placeholder="Tell us about your ideal projects..."
              ></textarea>
              <p className="text-right text-xs text-gray-400 mt-1">
                {wordCounts.projectsExciteYou}/{MAX_WORDS} words
              </p>
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                Describe your approach to problem-solving. <BitcoinIconsStarFilled />
              </label>
              <textarea
                {...register('problemSolvingApproach', {
                  required: 'This field is required',
                  validate: value => {
                    const words = value.trim().split(/\s+/).filter(Boolean).length;
                    return words <= MAX_WORDS || `Max ${MAX_WORDS} words. You have ${words}.`;
                  }
                })}
                rows={4}
                className={`mt-2 w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 border-gray-300`}
                placeholder="How do you tackle challenges?"
              ></textarea>
              <p className="text-right text-xs text-gray-400 mt-1">
                {wordCounts.problemSolvingApproach}/{MAX_WORDS} words
              </p>
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                What kind of team environment do you thrive in? <BitcoinIconsStarFilled />
              </label>
              <textarea
                {...register('bestTeamType', {
                  required: 'This field is required',
                  validate: value => {
                    const words = value.trim().split(/\s+/).filter(Boolean).length;
                    return words <= MAX_WORDS || `Max ${MAX_WORDS} words. You have ${words}.`;
                  }
                })}
                rows={4}
                className={`mt-2 w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 border-gray-300`}
                placeholder="Describe your ideal team setup."
              ></textarea>
              <p className="text-right text-xs text-gray-400 mt-1">
                {wordCounts.bestTeamType}/{MAX_WORDS} words
              </p>
            </div>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                Tell us about a project or challenge you're most proud of and why. <BitcoinIconsStarFilled />
              </label>
              <textarea
                {...register('proudProjectOrChallenge', {
                  required: 'This field is required',
                  validate: value => {
                    const words = value.trim().split(/\s+/).filter(Boolean).length;
                    return words <= MAX_WORDS || `Max ${MAX_WORDS} words. You have ${words}.`;
                  }
                })}
                rows={4}
                className={`mt-2 w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-white focus:ring-2 focus:ring-indigo-500 border-gray-300`}
                placeholder="Share a standout achievement."
              ></textarea>
              <p className="text-right text-xs text-gray-400 mt-1">
                {wordCounts.proudProjectOrChallenge}/{MAX_WORDS} words
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="py-3 px-6 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="py-3 px-6 bg-[#159B48] text-white rounded-lg hover:bg-[#127F3A] transition duration-200"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Preferences */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-4">Preferences</h2>

            <div>
              <label className="text-sm font-medium inline-flex gap-1 text-white">
                Availability <BitcoinIconsStarFilled />
              </label>
              <div className="relative">
                <div
                  className={`mt-2 w-full h-14 px-4 rounded-lg bg-[#222222] border border-[#FFF] cursor-pointer flex justify-between items-center border-gray-300`}
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
                          setValue('availability', option, { shouldValidate: true });
                          setDropdownOpen(prev => ({ ...prev, availability: false }));
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Toggle Switch for openToIdeaLab */}
            <div className="flex items-center">
              <label htmlFor="openToIdeaLab" className="inline-flex relative items-center cursor-pointer">
                {/* Hidden actual checkbox */}
                <input
                  type="checkbox"
                  id="openToIdeaLab"
                  className="sr-only peer" // Tailwind class to visually hide but keep accessible
                  {...register('openToIdeaLab')}
                  checked={openToIdeaLabValue} // Controlled by react-hook-form's watch
                  onChange={(e) => setValue('openToIdeaLab', e.target.checked, { shouldValidate: true })} // Update value and trigger validation
                />
                {/* Visual toggle switch */}
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#159B48]"></div>
                <span className="ml-3 text-sm text-white">
                  I'm open to being considered for opportunities from Grascope's Idea Lab (internal projects).
                </span>
              </label>
            </div>

            {/* Toggle Switch for marketingConsent */}
            <div className="flex items-center">
              <label htmlFor="marketingConsent" className="inline-flex relative items-center cursor-pointer">
                {/* Hidden actual checkbox */}
                <input
                  type="checkbox"
                  id="marketingConsent"
                  className="sr-only peer" // Tailwind class to visually hide but keep accessible
                  {...register('marketingConsent', { required: 'You must consent to receive marketing emails and job offers.' })}
                  checked={marketingConsentValue} // Controlled by react-hook-form's watch
                  onChange={(e) => setValue('marketingConsent', e.target.checked, { shouldValidate: true })} // Update value and trigger validation
                />
                {/* Visual toggle switch */}
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#159B48]"></div>
                <span className="ml-3 text-sm text-white inline-flex gap-1">
                  I consent to receive marketing emails and job offers from Grascope. <BitcoinIconsStarFilled />
                </span>
              </label>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="py-3 px-6 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                className="py-3 px-6 bg-[#159B48] text-white rounded-lg hover:bg-[#127F3A] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </div>
        )}
        <div className='mt-[2rem]'>
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
        </div>
      </form>
    </section>
  );
};

export default JobPool;