"use client"
import { Mail, MessageSquare, Twitter, MessageCircle, Send, Building2, User, FileText, ChevronDown, LinkedinIcon, TwitterIcon, Instagram, MessageCircle as WhatsAppIcon } from "lucide-react";
import { useState, useRef } from "react";

function CustomDropdown({ options, value, onChange, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [platform, setPlatform] = useState("LinkedIn");
  const [messageType, setMessageType] = useState("Direct Message");
  const [tone, setTone] = useState("Professional");

  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  // Add refs for the textarea fields
  const purposeRef = useRef(null);
  const keyPointsRef = useRef(null);
  const recipientRef = useRef(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/generate_dm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: platform,
          messageType: messageType,
          tone: tone,
          purpose: purposeRef.current.value,
          keyPoints: keyPointsRef.current.value,
          recipientDetails: recipientRef.current.value,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate message');
      }

      const data = await response.json();
      if (onMessageGenerated) {
        onMessageGenerated(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

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

export default function MessageForm({ onMessageGenerated }) {
  const [platform, setPlatform] = useState("email");
  const [messageType, setMessageType] = useState("cold_outreach");
  const [tone, setTone] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  // Add refs for the textarea fields
  const purposeRef = useRef(null);
  const keyPointsRef = useRef(null);
  const recipientRef = useRef(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/generate_dm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform,
          messageType,
          tone,
          purpose: purposeRef.current.value,
          keyPoints: keyPointsRef.current.value,
          recipientDetails: recipientRef.current.value,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate message');
      }

      const data = await response.json();
      if (onMessageGenerated) {
        onMessageGenerated(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const platformOptions = [
    { value: "email", label: "Email", icon: Mail },
    { value: "linkedin", label: "LinkedIn", icon: LinkedinIcon },
    { value: "twitter", label: "Twitter", icon: TwitterIcon },
    { value: "instagram", label: "Instagram", icon: Instagram },
    { value: "whatsapp", label: "WhatsApp", icon: WhatsAppIcon },
  ];

  const messageTypeOptions = [
    { value: "cold_outreach", label: "Cold Outreach", icon: MessageSquare },
    { value: "sales_pitch", label: "Sales Pitch", icon: MessageSquare },
    { value: "networking", label: "Networking", icon: MessageSquare },
    { value: "follow_up", label: "Follow-up", icon: MessageSquare },
  ];

  const toneOptions = [
    { value: "professional", label: "Professional", icon: MessageCircle },
    { value: "casual", label: "Casual", icon: MessageCircle },
    { value: "friendly", label: "Friendly", icon: MessageCircle },
    { value: "persuasive", label: "Persuasive", icon: MessageCircle },
  ];

  return (
    <div className="space-y-6">
      {/* Platform and Message Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
        <CustomDropdown
          options={platformOptions}
          value={platform}
          onChange={setPlatform}
          icon={Mail}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message Type</label>
        <CustomDropdown
          options={messageTypeOptions}
          value={messageType}
          onChange={setMessageType}
          icon={MessageSquare}
        />
      </div>

      {/* Recipient Info */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Details</label>
        <div className="relative">
          <input
            ref={recipientRef}
            type="text"
            placeholder="John Smith - Software Engineer"
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="absolute left-2 top-2.5 text-gray-400 pointer-events-none">
            <User className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Message Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message Purpose</label>
        <div className="relative">
          <textarea
            ref={purposeRef}
            rows={2}
            placeholder="What's the main purpose of your message?"
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="absolute left-2 top-2.5 text-gray-400 pointer-events-none">
            <FileText className="h-5 w-5" />
          </span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tone</label>
        <CustomDropdown
          options={toneOptions}
          value={tone}
          onChange={setTone}
          icon={MessageCircle}
        />
      </div>

      {/* Key Points */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Key Points & CTA</label>
        <div className="relative">
          <textarea
            ref={keyPointsRef}
            rows={3}
            placeholder="• Main points to include&#10;• Your call-to-action"
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="absolute left-2 top-2.5 text-gray-400 pointer-events-none">
            <FileText className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Generate Button */}
      <button
        type="button"
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="h-5 w-5" />
        <span>{isGenerating ? 'Generating...' : 'Generate AI Message'}</span>
      </button>
    </div>
  );
}
