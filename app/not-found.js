"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 font-serif">
      {/* Background GIF Section */}
      <div
        className="w-full max-w-2xl h-96 bg-center bg-cover rounded-xl shadow-md"
        style={{
          backgroundImage:
            "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
        }}
      >
      </div>

      {/* Message Section */}
      <div className="text-center mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Looks like you're lost
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          The page you are looking for is not available!
        </p>

        <button
          onClick={() => router.push("/personal-details")}
          className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition cursor-pointer"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
