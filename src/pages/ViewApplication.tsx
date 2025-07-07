import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from '@carbon/icons-react';

// Define the type for a single job application
interface Application {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
  state?: string; // Optional field
  role: string[];
  portfolioLink: string;
  yearsOfExperience: string;
  cv: string; // Assuming this is the CV file name/link
  projectsExciteYou: string;
  problemSolvingApproach: string;
  bestTeamType: string;
  proudProjectOrChallenge: string;
  availability: string;
  openToIdeaLab: boolean;
}

// Define the type for the API response structure
interface ApiResponse {
  data: Application[];
  success: boolean;
  message: string;
}

// IMPORTANT: REPLACE THESE WITH YOUR ACTUAL SECRET PASSWORDS
// You can add as many passwords as needed to this array.
const SECRET_PASSWORDS: string[] = [
  'P@55w0rd',
];

const ViewApplication: React.FC = () => {
  const { password } = useParams<{ password: string }>(); // Get password from URL params
  const navigate = useNavigate(); // Hook for navigation

  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // New state for authentication status

  // Effect for password validation
  useEffect(() => {
    // Check if the provided password is in the list of allowed passwords
    if (password && SECRET_PASSWORDS.includes(password)) {
      setIsAuthenticated(true);
    } else {
      // If password doesn't match any in the array, redirect immediately
      navigate('/');
      // Set loading to false and error to indicate redirection happened
      setLoading(false);
      setError('Invalid password. Redirecting...');
    }
  }, [password, navigate]); // Rerun if password or navigate function changes

  // Effect for fetching applications (only runs if authenticated)
  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, don't proceed with fetching
      return;
    }

    const fetchApplications = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const response = await axios.get<ApiResponse>(
          'https://grascoperoi-84aafe9da70d.herokuapp.com/api/v1/talent-pool'
        );
        if (response.data.success) {
          setApplications(response.data.data);
        } else {
          setError(response.data.message || 'Failed to fetch applications.');
        }
      } catch (err: unknown) {
        console.error('Error fetching applications:', err);
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message || 'Network error occurred.');
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred while fetching applications.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [isAuthenticated]); // This effect now depends on isAuthenticated

  // Render nothing or a minimal loading screen if not authenticated yet or redirecting
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat text-white">
        <div className="text-xl font-semibold">Checking access...</div>
      </div>
    );
  }

  // Render loading state if authenticated but data is still loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat text-white">
        <div className="text-xl font-semibold">Loading applications...</div>
      </div>
    );
  }

  // Render error state if fetching failed after authentication
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat text-red-400 p-4">
        <p className="text-xl font-semibold mb-4">Error: {error}</p>
        <button
          onClick={() => window.location.reload()} // Simple reload to retry
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
        >
          Retry
        </button>
      </div>
    );
  }

  // Render empty state if no applications found after successful fetch
  if (applications.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat text-white p-4">
        <p className="text-xl font-semibold mb-4">No applications found.</p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
        >
          <ArrowLeft className="mr-2" /> Go to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen lg:pt-[8rem] pt-[7rem] pb-[3rem] lg:px-[3rem] px-[1rem] bg-[url('/static/header-pattern.png')] bg-top bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <div className="py-[3rem] text-center">
          <Link to={'/'} className='inline-flex items-center py-[1rem] px-[1.5rem] border border-white rounded-[2rem] lg:text-[95%] text-[85%] text-[#FFF] no-underline'>
            <ArrowLeft className="mr-[1rem]" color="#FFF" />
            Back to Home
          </Link>
          <h1 className='lg:text-[250%] text-[180%] font-medium mt-[1rem]'>Job Pool Applications</h1>
          <p className='lg:text-[95%] text-[85%] opacity-80 leading-[1.5rem] mt-[1rem] mx-auto lg:w-[75%] w-full'>
            Browse through the talent pool applications submitted to Grascope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-[#222222] rounded-xl shadow-lg p-6 flex flex-col justify-between
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl" // Added hover effects
            >
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">{app.fullName}</h3> {/* Larger name, more margin */}

                {/* Basic Info Section */}
                <div className="space-y-2 mb-4 p-3 bg-[#1E1E1E] rounded-lg"> {/* Grouped and styled basic info */}
                  <p className="text-base text-gray-200">
                    <span className="font-semibold text-green-300">Email:</span>{' '}
                    <a href={`mailto:${app.email}`} className="text-blue-400 hover:underline">{app.email}</a>
                  </p>
                  <p className="text-base text-gray-200">
                    <span className="font-semibold text-green-300">Phone:</span> {app.phoneNumber}
                  </p>
                  <p className="text-base text-gray-200">
                    <span className="font-semibold text-green-300">Location:</span> {app.city}, {app.state ? `${app.state}, ` : ''}{app.country}
                  </p>
                  <p className="text-base text-gray-200">
                    <span className="font-semibold text-green-300">Roles:</span>{' '}
                    <span className="inline-flex flex-wrap gap-1">
                      {app.role.map((r, i) => (
                        <span key={i} className="bg-green-700 text-green-100 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {r}
                        </span>
                      ))}
                    </span>
                  </p>
                  <p className="text-base text-gray-200">
                    <span className="font-semibold text-green-300">Experience:</span> {app.yearsOfExperience}
                  </p>
                  <p className="text-base text-gray-200">
                    <span className="font-semibold text-green-300">Availability:</span> {app.availability}
                  </p>
                  <p className="text-base text-gray-200">
                    <span className="font-semibold text-green-300">Idea Lab:</span> {app.openToIdeaLab ? 'Yes' : 'No'}
                  </p>
                </div>

                {/* Detailed Answers Section */}
                <div className="space-y-4 text-sm text-gray-300 mt-4"> {/* Increased spacing */}
                  <h4 className="text-lg font-bold text-green-400 border-b border-gray-700 pb-2 mb-3">Insights</h4> {/* Section title */}
                  <p>
                    <span className="font-semibold text-green-300 block mb-1">Projects that excite:</span>{' '}
                    <span className="text-gray-200 leading-relaxed">{app.projectsExciteYou}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-green-300 block mb-1">Problem-solving approach:</span>{' '}
                    <span className="text-gray-200 leading-relaxed">{app.problemSolvingApproach}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-green-300 block mb-1">Best team type:</span>{' '}
                    <span className="text-gray-200 leading-relaxed">{app.bestTeamType}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-green-300 block mb-1">Proud project/challenge:</span>{' '}
                    <span className="text-gray-200 leading-relaxed">{app.proudProjectOrChallenge}</span>
                  </p>
                </div>
              </div>

              {/* Links Section */}
              <div className="mt-6 pt-4 border-t border-gray-700"> {/* Increased top margin */}
                {app.portfolioLink && (
                  <a
                    href={app.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-white z-[1] rounded-[.5rem] border-none
                               bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)]
                               shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px]
                               before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48]
                               before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay
                               no-underline flex items-center justify-center p-[1rem] mb-2
                               hover:before:opacity-40 transition-all duration-300" // Added hover effect to button
                  >
                    View Portfolio
                  </a>
                )}
                {app.cv && (
                  <p className="text-center text-xs text-gray-400 mt-2">CV: {app.cv}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewApplication;
