"use client"
import { MessageSquare, Copy } from "lucide-react";
import { useState } from "react";

export default function OutputPreview({ message, recentMessages }) {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (msg) => {
    try {
      await navigator.clipboard.writeText(msg);
      setCopied(msg);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Function to format the message with Markdown-like syntax
  const formatMessage = (text) => {
    if (!text) return "";

    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold (**text**)
      .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic (*text*)
      .replace(/~~(.*?)~~/g, "<del>$1</del>") // Strikethrough (~~text~~)
      .replace(/`(.*?)`/g, "<code class='bg-gray-100 px-1 rounded'>$1</code>"); // Inline code (`code`)
  };

  return (
    <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Generated Message
        </h2>
        {message && (
          <button
            onClick={() => handleCopy(message)}
            className={`p-2 text-gray-500 hover:text-blue-500 transition-colors ${
              copied === message ? "text-green-500" : ""
            }`}
            title={copied === message ? "Copied!" : "Copy to clipboard"}
          >
            <Copy className="w-5 h-5 cursor-pointer" />
          </button>
        )}
      </div>
      <div
        className={`min-h-[650px] rounded-lg p-2 ${
          message
            ? "bg-white text-gray-800"
            : "flex items-center justify-center text-gray-400 bg-gray-50"
        }`}
      >
        {message ? (
          <div
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: formatMessage(message) }}
          />
        ) : (
          <div className="text-center">
            <MessageSquare className="w-14 h-14 mx-auto mb-4 opacity-40" />
            <p className="text-lg">Your generated message will appear here...</p>
          </div>
        )}
      </div>

      {/* Recent Messages Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Recent Messages</h3>
        <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentMessages.map((msg, index) => (
            <div key={index} className="p-4 border rounded-md bg-gray-100 flex flex-col justify-between">
              <div className="whitespace-pre-wrap overflow-hidden overflow-ellipsis max-h-24">
                {msg}
              </div>
              <button
                onClick={() => handleCopy(msg)}
                className={`mt-2 p-2 text-gray-500 hover:text-blue-500 transition-colors ${copied === msg ? "text-green-500" : ""}`}
                title={copied === msg ? "Copied!" : "Copy to clipboard"}
              >
                <Copy className="w-5 h-5 cursor-pointer" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
