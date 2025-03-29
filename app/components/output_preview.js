"use client"
import { MessageSquare, RotateCw, Copy, CloudCog } from "lucide-react";
import { useState } from "react";

export default function OutputPreview({ message }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  console.log(message)

  return (
    <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Generated Message
        </h2>
        {message && (
          <button
            onClick={handleCopy}
            className={`p-2 text-gray-500 hover:text-blue-500 transition-colors ${copied ? 'text-green-500' : ''}`}
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            <Copy className="w-5 h-5 cursor-pointer" />
          </button>
        )}
      </div>
      <div className={`min-h-[650px] rounded-lg p-2 ${message ? 'bg-white text-gray-800' : 'flex items-center justify-center text-gray-400 bg-gray-50'}`}>
        {message ? (
          <div className="whitespace-pre-wrap">{message}</div>
        ) : (
          <div className="text-center">
            <MessageSquare className="w-14 h-14 mx-auto mb-4 opacity-40" />
            <p className="text-lg">Your generated message will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );
}