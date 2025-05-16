"use client"
import { MessageSquare } from "lucide-react";
import MessageForm from "./userInputForm";
import OutputPreview from "./output_preview";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {

  const [generatedMessage, setGeneratedMessage] = useState("");

  // This function connects Form to OutputPreview
  const handleMessageGenerated = (message) => {
    setGeneratedMessage(message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar/>
      {/* Header - More compact on mobile */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 mb-6 lg:mb-12">
        <div className="px-4 py-4 lg:py-6 max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center tracking-tight">
            Smart Message Generator
          </h1>
          <p className="text-base lg:text-xl text-gray-600 dark:text-gray-300 text-center mt-2 max-w-2xl mx-auto">
          🤖✨ Boost Your Outreach with AI-Generated, Personalized Messages!
          </p>
        </div>
      </div>

      {/* Main Content - Stack on mobile, side by side on desktop */}
      <div className="px-4 lg:px-8 pb-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Form Section - Full width on mobile */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-4 lg:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white">
                  Message Details
                </h2>
              </div>
              <MessageForm onMessageGenerated={handleMessageGenerated} />
              {/* <Form onMessageGenerated={handleMessageGenerated}/> */}
            </div>
          </div>

          {/* Preview Section - Hidden on initial mobile view */}
          <div className="lg:block">
            <div className="sticky top-[120px]">
              <OutputPreview message={generatedMessage} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Preview Toggle - Only visible on mobile */}
      <div className="fixed bottom-4 right-4 lg:hidden">
        <button
          type="button"
          className="bg-blue-500 dark:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          aria-label="Toggle Preview"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
      <Footer/>
    </div>
  );
}
