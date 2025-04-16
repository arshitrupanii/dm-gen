// app/loading.jsx
"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 20000);
    
    return () => clearTimeout(timer);
  }, [progress]);
  
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="w-24 h-24 relative">
        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
        <div 
          className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"
          style={{ animationDuration: "1.5s" }}
        ></div>
      </div>
      
      <div className="mt-12 w-64">
        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center text-gray-500 mt-3 font-light">
          {progress >= 100 ? "Ready" : "Loading..."}
        </p>
      </div>
      
      <p className="mt-12 text-gray-400 text-sm font-light">
        Preparing something amazing for you
      </p>
    </div>
  );
}