"use client"
import React, { useState } from 'react';
import { User, Building2, Briefcase, GraduationCap } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'; // For Next.js 13+ with App Router
import { useUser } from '../components/UserContext';

function App() {
  const router = useRouter();
  const { userData, setUserData } = useUser();
  const [formData, setFormData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      toast.error("Full Name is required!");
      return;
    }
    if (!formData.jobTitle.trim()) {
      toast.error("Job Title is required!");
      return;
    }

    // Update context with form data
    setUserData(formData);
    router.push("/generate-dm");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 px-4 sm:px-6 md:px-0">
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 mb-4 sm:mb-6 lg:mb-12">
        <div className="px-4 py-3 sm:py-4 lg:py-6 max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 text-center tracking-tight">
            Basic Information
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 text-center mt-1 sm:mt-2 max-w-2xl mx-auto">
            💡 Smart AI for Professional Outreach – Write, Personalize, Connect!
          </p>
        </div>
      </div>

      {/* Updated class structure with mobile responsiveness */}
      <div className="w-full max-w-3xl lg:max-w-3xl mb-6 sm:mb-10 mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 text-gray-800 flex items-center gap-2">
            <User className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
            Basic Information
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 sm:space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  What&apos;s your full name?
                </label>
                <div className="relative">
                  <input
                    area-required="true"
                    type="text"
                    name="fullName"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                  />
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  What&apos;s your current role?
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="jobTitle"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Full Stack Developer, AI Engineer"
                  />
                  <Briefcase className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Which company do you work at? (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="companyName"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Acme Corp"
                  />
                  <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Experience Level
                </label>
                <div className="relative">
                  <select
                    name="experienceLevel"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                  >
                    <option value="beginner">🟢 Beginner (0-1 year)</option>
                    <option value="intermediate">🔵 Intermediate (1-3 years)</option>
                    <option value="experienced">🔴 Experienced (3+ years)</option>
                  </select>
                  <GraduationCap className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Continue Button */}
              <button
                className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-medium shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-150 cursor-pointer mt-2 sm:mt-4"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;