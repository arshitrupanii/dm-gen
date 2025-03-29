"use client"
import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
         <footer className="bg-white/95 backdrop-blur-sm border-t border-gray-100 ">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6 group">
                <Sparkles className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="ml-2 text-lg font-bold text-blue-600">DMGenie </span>
              </div>
              <p className="text-base text-gray-600 mb-6">
                Revolutionizing message generation with AI-powered solutions for businesses.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">Product</h3>
              <ul className="space-y-4">
                <li><Link href="/generate-dm" className="text-base text-gray-600 hover:text-blue-700 transition-all duration-300 hover:translate-x-1 inline-flex font-medium">Generate</Link></li>
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
              © {new Date().getFullYear()} DMGenie . All rights reserved. Built with ❤️ for better communication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer