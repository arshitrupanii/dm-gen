"use client"
import { MessageSquare, Copy } from "lucide-react";
import { useState } from "react";

export default function OutputPreview({ message }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
      .replace(/`(.*?)`/g, "<code class='bg-gray-100 dark:bg-gray-700 px-1 rounded'>$1</code>"); // Inline code (`code`)
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Generated Message
        </h2>
        {message && (
          <button
            onClick={handleCopy}
            className={`p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
              copied ? "text-green-500 dark:text-green-400" : ""
            }`}
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            <Copy className="w-5 h-5 cursor-pointer" />
          </button>
        )}
      </div>
      <div
        className={`min-h-[650px] rounded-lg p-2 ${
          message
            ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            : "flex items-center justify-center text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700"
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
            <p className="text-lg dark:text-gray-300">Your generated message will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );
}
