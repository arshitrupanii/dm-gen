'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageSquare, Sparkles, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createClient } from "utils/supabase/client";

const HeroSection = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [hasProfile, setHasProfile] = useState(false);
    const supabase = createClient();

    useEffect(() => {
        const checkUserAndProfile = async () => {
            try {
                // Check if user is logged in
                const { data: { user }, error: userError } = await supabase.auth.getUser();
                
                if (userError || !user) {
                    setUser(null);
                    setHasProfile(false);
                    setIsLoading(false);
                    return;
                }

                setUser(user);

                // Check if user has completed profile
                const { data: userDetails, error: detailsError } = await supabase
                    .from('user_details')
                    .select('*')
                    .eq('user_id', user.id)
                    .single();

                setHasProfile(!!userDetails && !detailsError);
                setIsLoading(false);
            } catch (error) {
                console.error('Error checking user status:', error);
                setUser(null);
                setHasProfile(false);
                setIsLoading(false);
            }
        };

        checkUserAndProfile();
    }, []);

    const handleGetStarted = () => {
        if (!user) {
            router.push('/login');
        } else if (!hasProfile) {
            router.push('/personal-details');
        } else {
            router.push('/generate-dm');
        }
    };

    if (isLoading) {
        return (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        {/* Left side content skeleton */}
                        <div className="lg:col-span-7">
                            <div className="text-left">
                                <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                                <div className="h-12 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
                                <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                                <div className="h-6 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8"></div>
                                
                                {/* Button skeleton */}
                                <div className="h-12 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-8"></div>

                                {/* Features skeleton */}
                                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-10">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center">
                                            <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                                            <div className="ml-3 h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right side skeleton */}
                        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-5">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                                <div className="bg-gray-800 dark:bg-gray-900 px-5 py-4">
                                    <div className="h-4 w-48 bg-gray-700 dark:bg-gray-600 rounded animate-pulse"></div>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-4">
                                        <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                                        <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                                        <div className="flex justify-between items-center pt-2">
                                            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                            <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left side content */}
          <div className="lg:col-span-7">
            <div className="text-left">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="block text-blue-700 dark:text-blue-400">AI-Powered</span>
                <span className="block">Message Generation</span>
              </h1>
              <p className="mt-6 text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                Create personalized, high-converting messages for all your platforms in seconds, not hours.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={handleGetStarted}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 ease-in-out sm:px-10 sm:py-4 sm:text-lg"
                >
                  {!user ? 'Get Started Free' : !hasProfile ? 'Complete Profile' : 'Generate Message'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-10">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <p className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">Generate in seconds</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <p className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">AI personalization</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <p className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">Multi-platform ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side image/demo */}
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-5">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gray-800 dark:bg-gray-900 px-5 py-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-white text-sm">Dmgenie Message Generator</div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Generate a LinkedIn connection request to Sarah, a Marketing Director interested in AI solutions</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-200">Hi Sarah,</p>
                    <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">I noticed your work in marketing leadership and thought to connect. Your experience with AI-driven campaigns caught my attention. I'd love to exchange ideas on how AI is transforming marketing strategies.</p>
                    <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">Looking forward to connecting!</p>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Generated in 2.3 seconds</span>
                    <button className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-sm rounded hover:bg-blue-700 dark:hover:bg-blue-600">Copy Message</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <div className="flex -space-x-2">
                  <img src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt="User" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" />
                  <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" />
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Trusted by 10,000+ professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );

};

export default HeroSection;