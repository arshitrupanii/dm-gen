"use client"
import React, { useState, createContext, useContext } from 'react';
import { User, Building2, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'; // For Next.js 13+ with App Router
import { useUser } from '../components/UserContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CustomDropdown({ options, value, onChange, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full pl-9 pr-10 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer transition-all duration-200"
      >
        <span className="absolute left-2 top-2.5 text-gray-400">
          <Icon className="h-5 w-5" />
        </span>
        <span>{options.find(opt => opt.value === value)?.label}</span>
        <span className={`absolute right-2 top-2.5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-1 max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left flex items-center space-x-3 hover:bg-blue-50 transition-colors ${value === option.value ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              <option.icon className="h-5 w-5" />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


function App() {
  const router = useRouter();
  const { userData, setUserData } = useUser();
  const [formData, setFormData] = useState(userData);

  const experienceOptions = [
    { value: "beginner", label: "🟢 Beginner (0-1 year)", icon: GraduationCap },
    { value: "intermediate", label: "🔵 Intermediate (1-3 years)", icon: GraduationCap },
    { value: "experienced", label: "🔴 Experienced (3+ years)", icon: GraduationCap },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDropdownChange = (value) => {
    setFormData(prev => ({
      ...prev,
      experienceLevel: value
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar/>

      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100 mb-6 lg:mb-12">
        <div className="px-4 py-4 lg:py-6 max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center tracking-tight">
            Basic Information
          </h1>
          <p className="text-base lg:text-xl text-gray-600 text-center mt-2 max-w-2xl mx-auto">
            💡 Smart AI for Professional Outreach – Write, Personalize, Connect!
          </p>
        </div>
      </div>

      <div className="max-w-lg md:max-w-3xl mx-auto my-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800 flex items-center gap-2">
            <User className="w-6 h-6 text-blue-600" />
            Basic Information
          </h2>

          <form action=""  onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What&apos;s your full name?
                </label>
                <div className="relative">
                  <input
                    area-required ="true"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <div className="relative">
                <CustomDropdown
                  options={experienceOptions}
                  value={formData.experienceLevel}
                  onChange={handleDropdownChange}
                  icon={GraduationCap}
                />
                </div>
              </div>

              {/* Continue Button */}
              <button
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-150 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer/>
    </div>

  );
}

export default App;
