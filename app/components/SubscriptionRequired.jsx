'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, Sparkles, Check, X } from 'lucide-react';

const SubscriptionRequired = ({ message, usage, onClose }) => {
  const router = useRouter();

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

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Select a plan that's right for you
              </h2>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Message */}
          <div className="mb-8">
            
            {/* Usage Progress Bar (if usage data is available) */}
            {usage && (
              <div className="mt-6 space-y-2">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full h-5 overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${Math.min((usage.current / 5) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between">
                  <span>Used: {usage.current}/5 free messages</span>
                  <span>Remaining: {usage.remaining}</span>
                </div>
              </div>
            )}
          </div>

          {/* Plans Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-6 rounded-xl flex flex-col h-full ${
                  plan.popular
                    ? 'ring-2 ring-blue-500 dark:ring-blue-400 shadow-lg'
                    : 'border border-gray-200 dark:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      <Sparkles className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-base">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 rounded-full p-1 bg-green-100 dark:bg-green-900/30">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </span>
                      <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => router.push(`/checkout?plan=${plan.name.toLowerCase()}`)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.popular ? 'Upgrade Now' : 'Get Started'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionRequired;