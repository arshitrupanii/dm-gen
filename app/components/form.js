"use client"
import { Mail, MessageSquare, Twitter, MessageCircle, Send, Building2, User, FileText, ChevronDown, LinkedinIcon, TwitterIcon, Instagram, MessageCircle as WhatsAppIcon } from "lucide-react";
import { useState, useRef } from "react";

export default function MessageForm({ onMessageGenerated }) {
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
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Platform</label>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="LinkedIn">LinkedIn</option>
          <option value="Twitter">Twitter</option>
          <option value="Email">Email</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Message Type</label>
        <select
          value={messageType}
          onChange={(e) => setMessageType(e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Direct Message">Direct Message</option>
          <option value="Post">Post</option>
          <option value="Email">Email</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Tone</label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Professional">Professional</option>
          <option value="Friendly">Friendly</option>
          <option value="Formal">Formal</option>
        </select>
      </div>

      {/* Message Purpose */}
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

      {/* Key Points */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Key Points & CTA</label>
        <div className="relative">
          <textarea
            ref={keyPointsRef}
            rows={3}
            placeholder="Main points to include and your call-to-action"
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="absolute left-2 top-2.5 text-gray-400 pointer-events-none">
            <FileText className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Recipient Details */}
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

      {/* Generate Button */}
      <button
        type="button"
        onClick={handleGenerate}
        disabled={isGenerating}
        className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isGenerating ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Generating...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Generate AI Message</span>
          </>
        )}
      </button>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
    </div>
  );
}