"use client";

import React from 'react';
import { MessageSquare, Send, Star, Linkedin, Twitter, Check } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from './herosection';
import { useRouter } from 'next/navigation'; 

const stats = [
  { name: 'Response Rate', value: '85%', description: 'Average response rate across platforms' },
  { name: 'Time Saved', value: '75%', description: 'Reduction in message creation time' },
  { name: 'Conversion Rate', value: '32%', description: 'Average conversion from messages' },
  { name: 'Customer Satisfaction', value: '4.8/5', description: 'Based on user feedback' },
];

const platforms = [
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-500' },
  { name: 'X (Twitter)', icon: Twitter, color: 'bg-black' },
  { name: 'WhatsApp', icon: MessageSquare, color: 'bg-green-500' },
  { name: 'Email', icon: Send, color: 'bg-yellow-500' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Dmgenie has revolutionized our outreach strategy. We\'ve seen a 3x increase in response rates since implementing their solution.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Sales Manager',
    company: 'GrowthWorks',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The AI-generated messages feel incredibly personal. Our team saves hours each week while maintaining meaningful connections.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Social Connect',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'As a startup founder, time is precious. Dmgenie helps me maintain quality communication across all platforms effortlessly.',
    rating: 5
  },
];

const plans = [
  {
    name: 'Starter',
    price: '5',
    description: 'Perfect for small businesses and individuals',
    features: [
      '20 messages per Day',
      'Basic customer support',
      'Standard response time'
    ],
  },
  {
    name: 'Professional',
    price: '10',
    description: 'Ideal for growing teams and businesses',
    features: [
      '100 messages per Day',
      'Priority customer support',
      'Faster response time',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '20',
    description: 'For large organizations with custom needs',
    features: [
      '300 messages per Day',
      'Dedicated customer support',
      'Fastest response time',
      'Custom integrations'
    ],
  },
];

function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <div className="bg-gray-50 dark:bg-gray-800/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="px-6 py-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden sm:p-8">
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{stat.name}</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{stat.value}</dd>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{stat.description}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Platforms Section */}
        <div className="bg-white dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-10 sm:mb-12">
              Supported Platforms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex flex-col items-start rounded-lg border border-gray-200 dark:border-gray-700 p-5 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <div className={`inline-flex p-3 rounded-lg ${platform.color}`}>
                    <platform.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Generate personalized messages optimized for {platform.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 dark:bg-gray-800/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Why Choose Dmgenie?</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">AI-Powered Generation</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Our advanced AI understands context and generates highly personalized messages that resonate with your audience.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Multi-Platform Support</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Generate messages optimized for different platforms while maintaining your brand voice.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Real-Time Analytics</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Track your message performance and optimize your outreach strategy with detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Trusted by Business Leaders
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                See what our customers are saying about their experience with Dmgenie
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-lg text-gray-900 dark:text-white">{testimonial.content}</p>
                  </blockquote>
                  <div className="mt-6 flex items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-gray-50 dark:bg-gray-800/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Choose the perfect plan for your business needs
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-8 bg-white dark:bg-gray-800 rounded-2xl flex flex-col ${
                    plan.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400 shadow-xl' : 'border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute top-0 -translate-y-1/2 bg-blue-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <button 
                      onClick={() => router.push(`/payment-dashboard?amount=${plan.price}`)}
                      className={`w-full py-3 px-4 rounded-lg font-semibold ${
                        plan.popular
                          ? 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                      }`}
                    >
                      Get started
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Frequently Asked Questions
              </h3>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Can I switch plans later?</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Do you offer a free trial?</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Yes, all plans come with a 14-day free trial. No credit card required to start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
