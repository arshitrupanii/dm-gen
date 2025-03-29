"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // For handling navigation in Next.js

export default function ErrorPage() {
  const router = useRouter(); // Next.js router hook

  useEffect(() => {
    document.title = "Error Page";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
            alt="gif_ing"
            className="w-64 h-auto "
          />
        </div>
        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">This page is gone.</h1>
          <p className="text-lg text-gray-600 mt-2 mb-5">
            ...maybe the page you're looking for is not found or never existed.
          </p>
          <button
            onClick={() => router.push("/personal-details")} // Navigate in the same tab
            className="cursor-pointer px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
