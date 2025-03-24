"use client"
import { MessageSquare, RotateCw, Copy } from "lucide-react";

export default function OutputPreview() {
  return (
    <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Generated Message
        </h2>
        <div className="flex gap-3">
          <button
            className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
            title="Regenerate"
          >
            <RotateCw className="w-5 h-5" />
          </button>
          <button
            className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
            title="Copy to clipboard"
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="min-h-[450px] flex items-center justify-center text-gray-400 bg-gray-50 rounded-lg p-8">
        <div className="text-center">
          <MessageSquare className="w-14 h-14 mx-auto mb-4 opacity-40" />
          <p className="text-lg">Your generated message will appear here...</p>
        </div>
      </div>
    </div>
  );
}