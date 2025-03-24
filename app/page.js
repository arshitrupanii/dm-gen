'use client';

import { MessageSquare, User, Settings, History, BarChart3, Sparkles, Menu, X, Github, Twitter, Linkedin, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <Sparkles className="h-8 w-8 text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-2 bg-blue-100 rounded-full blur opacity-0 group-hover:opacity-50 transition-all duration-300" />
                </div>
                <span className="ml-3 text-xl font-bold text-blue-600">DM Gen</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/generate" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">Generate</Link>
              <Link href="/personal-details" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">Profile</Link>
              <Link href="/settings" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">Settings</Link>
              <Link href="/analytics" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">Analytics</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/generate" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 font-medium">Generate</Link>
              <Link href="/personal-details" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 font-medium">Profile</Link>
              <Link href="/settings" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 font-medium">Settings</Link>
              <Link href="/analytics" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300 font-medium">Analytics</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fadeInUp text-white">
              Generate Engaging Messages
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl mx-auto animate-fadeInUp delay-100">
              Create personalized, effective messages that resonate with your audience using our advanced AI-powered platform.
              Perfect for sales, marketing, and customer support teams.
            </p>
            <div className="mt-10 animate-fadeInUp delay-200">
              <Link
                href="/generate"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transition-all duration-300 group transform hover:scale-105 hover:shadow-xl hover:shadow-white/10"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-blue-50 via-indigo-50/50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="px-4 lg:px-8 py-16 max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Total Messages</p>
                <h3 className="text-2xl font-bold text-blue-600">24</h3>
                <p className="text-sm text-gray-600 mt-1">+12% from last week</p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Success Rate</p>
                <h3 className="text-2xl font-bold text-green-600">92%</h3>
                <p className="text-sm text-gray-600 mt-1">Based on user feedback</p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-purple-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
                <History className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Last Generated</p>
                <h3 className="text-2xl font-bold text-purple-600">2h ago</h3>
                <p className="text-sm text-gray-600 mt-1">Marketing campaign</p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-orange-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors duration-300">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Avg. Response Time</p>
                <h3 className="text-2xl font-bold text-orange-600">1.2s</h3>
                <p className="text-sm text-gray-600 mt-1">Across all templates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-6">
              <Link href="/generate" 
                className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl hover:shadow-lg transition-all duration-300 group transform hover:scale-105">
                <div className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300 group-hover:shadow-xl">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-center">
                  <span className="text-blue-700 font-semibold block">New Message</span>
                  <span className="text-sm text-blue-600 mt-1">Create a new message</span>
                </div>
              </Link>
              
              <Link href="/personal-details" 
                className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl hover:shadow-lg transition-all duration-300 group transform hover:scale-105">
                <div className="p-4 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300 group-hover:shadow-xl">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-center">
                  <span className="text-green-700 font-semibold block">Update Profile</span>
                  <span className="text-sm text-green-600 mt-1">Manage your details</span>
                </div>
              </Link>
              
              <Link href="/settings" 
                className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl hover:shadow-lg transition-all duration-300 group transform hover:scale-105">
                <div className="p-4 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300 group-hover:shadow-xl">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-center">
                  <span className="text-purple-700 font-semibold block">Settings</span>
                  <span className="text-sm text-purple-600 mt-1">Configure app</span>
                </div>
              </Link>
              
              <Link href="/analytics" 
                className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl hover:shadow-lg transition-all duration-300 group transform hover:scale-105">
                <div className="p-4 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors duration-300 group-hover:shadow-xl">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-center">
                  <span className="text-orange-700 font-semibold block">Analytics</span>
                  <span className="text-sm text-orange-600 mt-1">View insights</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
              <Link href="/history" className="text-sm text-blue-700 hover:text-blue-800 flex items-center group font-medium">
                View All
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-102 group">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-800">Generated new message</p>
                    <span className="text-sm text-gray-600">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Marketing campaign for Q2 launch</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-102 group">
                <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                  <User className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-800">Updated profile information</p>
                    <span className="text-sm text-gray-600">5 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Updated company details and preferences</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-102 group">
                <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
                  <Settings className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-800">Modified generation settings</p>
                    <span className="text-sm text-gray-600">1 day ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Updated tone and style preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6 group">
                <Sparkles className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="ml-2 text-lg font-bold text-blue-600">DM Gen</span>
              </div>
              <p className="text-base text-gray-600 mb-6">
                Revolutionizing message generation with AI-powered solutions for businesses.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">Product</h3>
              <ul className="space-y-4">
                <li><Link href="/generate" className="text-base text-gray-600 hover:text-blue-700 transition-all duration-300 hover:translate-x-1 inline-flex font-medium">Generate</Link></li>
                <li><Link href="/analytics" className="text-base text-gray-600 hover:text-blue-700 transition-all duration-300 hover:translate-x-1 inline-flex font-medium">Analytics</Link></li>
                <li><Link href="/settings" className="text-base text-gray-600 hover:text-blue-700 transition-all duration-300 hover:translate-x-1 inline-flex font-medium">Settings</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">Resources</h3>
              <ul className="space-y-4">
                <li><Link href="/documentation" className="text-base text-gray-600 hover:text-blue-700 transition-all duration-300 hover:translate-x-1 inline-flex font-medium">Documentation</Link></li>
                <li><Link href="/support" className="text-base text-gray-600 hover:text-blue-700 transition-all duration-300 hover:translate-x-1 inline-flex font-medium">Support</Link></li>
                <li><Link href="/api" className="text-base text-gray-600 hover:text-blue-700 transition-all duration-300 hover:translate-x-1 inline-flex font-medium">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="https://github.com" 
                    className="flex items-center text-gray-600 hover:text-blue-700 transition-all duration-300 group font-medium">
                    <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com" 
                    className="flex items-center text-gray-600 hover:text-blue-700 transition-all duration-300 group font-medium">
                    <Twitter className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" 
                    className="flex items-center text-gray-600 hover:text-blue-700 transition-all duration-300 group font-medium">
                    <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-8">
            <p className="text-base text-gray-600 text-center">
              © {new Date().getFullYear()} DM Gen. All rights reserved. Built with ❤️ for better communication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}