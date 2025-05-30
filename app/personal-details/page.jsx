"use client"
import React, { useState } from 'react';
import { User, Building2, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Constants
const EXPERIENCE_OPTIONS = [
  { value: "beginner", label: "👦 Beginner (0-1 year)", icon: GraduationCap },
  { value: "intermediate", label: "👨🏻‍💻 Intermediate (1-3 years)", icon: GraduationCap },
  { value: "experienced", label: "👩🏻‍💼 Experienced (3+ years)", icon: GraduationCap },
];

// Form Field Component
function FormField({ label, name, value, onChange, placeholder, icon: Icon, required }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full pl-9 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <span className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-500">
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}

// Custom Dropdown Component
function CustomDropdown({ options, value, onChange, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-8">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full pl-9 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer transition-all duration-200"
      >
        <span className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-500">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-gray-900 dark:text-gray-100">{options.find(opt => opt.value === value)?.label}</span>
        <span className={`absolute right-3 top-3.5 text-gray-400 dark:text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors ${value === option.value ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100'}`}
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

// Main App Component
export default function App() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    companyName: '',
    experienceLevel: 'beginner'
  });

  // handle input changes 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleDropdownChange = (value) => {
    setFormData(prev => ({ ...prev, experienceLevel: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.jobTitle.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const response = await fetch('/api/personal-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to save user details');
      }

      // Navigate to the next page on success
      router.push("/generate-dm");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 mb-6 lg:mb-12">
        <div className="px-4 py-4 lg:py-6 max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center tracking-tight">
            Basic Information
          </h1>
          <p className="text-base lg:text-xl text-gray-600 dark:text-gray-300 text-center mt-2 max-w-2xl mx-auto">
            💡 Smart AI for Professional Outreach – Write, Personalize, Connect!
          </p>
        </div>
      </div>

      <div className="max-w-lg md:max-w-3xl mx-auto my-10 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-gray-800 dark:text-white flex items-center gap-2">
            <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Basic Information
          </h2>

          <form onSubmit={handleSubmit}>
            <FormField
              label="What's your full name?"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Smith"
              icon={User}
              required
            />

            <FormField
              label="What's your current role?"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="Full Stack Developer, AI Engineer"
              icon={Briefcase}
              required
            />

            <FormField
              label="Which company do you work at? (Optional)"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Acme Corp"
              icon={Building2}
            />

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Experience Level
              </label>
              <CustomDropdown
                options={EXPERIENCE_OPTIONS}
                value={formData.experienceLevel}
                onChange={handleDropdownChange}
                icon={GraduationCap}
              />
            </div>

            <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all flex items-center justify-center gap-3 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 duration-150">
              Continue
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <Footer />
    </div>
  );
}