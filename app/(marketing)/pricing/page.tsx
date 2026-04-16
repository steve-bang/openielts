"use client";

import { useState } from "react";
import { Check, X, Lock, Crown, Zap, Building2, Download } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Free",
    icon: Zap,
    price: { monthly: 0, annual: 0 },
    description: "Basic access to get started with IELTS preparation",
    cta: "Get Started Free",
    ctaVariant: "outline" as const,
    highlight: false,
    badge: null,
    features: [
      { text: "5 practice tests per month", included: true },
      { text: "Reading & Listening exercises", included: true },
      { text: "Basic progress tracking", included: true },
      { text: "Writing assessments", included: false },
      { text: "Speaking practice with AI", included: false },
      { text: "Personalized study plans", included: false },
      { text: "Full mock tests", included: false },
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    price: { monthly: 19, annual: 15 },
    description: "Complete IELTS preparation with all features",
    cta: "Start Free Trial",
    ctaVariant: "primary" as const,
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Unlimited practice tests", included: true },
      { text: "Writing tasks with expert feedback", included: true },
      { text: "AI-powered speaking practice", included: true },
      { text: "Personalized study plans", included: true },
      { text: "Full IELTS mock tests", included: true },
      { text: "Advanced analytics & insights", included: true },
      { text: "Priority customer support", included: true },
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: { monthly: 49, annual: 39 },
    description: "For institutions and serious test-takers",
    cta: "Contact Sales",
    ctaVariant: "green" as const,
    highlight: false,
    badge: null,
    features: [
      { text: "Dedicated account manager", included: true },
      { text: "Custom test creation", included: true },
      { text: "Group progress tracking", included: true },
      { text: "Bulk user management", included: true },
      { text: "API access", included: true },
      { text: "White-label options", included: true },
      { text: "24/7 premium support", included: true },
    ],
  },
];

const COMPARISON_ROWS = [
  { feature: "Practice Tests", free: "5/month", premium: "Unlimited", enterprise: "Unlimited" },
  { feature: "Writing Assessments", free: false, premium: "5/month", enterprise: "Unlimited" },
  { feature: "Speaking Practice", free: false, premium: "AI Feedback", enterprise: "AI + Human" },
  { feature: "Full Mock Tests", free: false, premium: "2/month", enterprise: "Unlimited" },
  { feature: "Study Plans", free: "Basic", premium: "Personalized", enterprise: "Custom" },
  { feature: "Progress Analytics", free: "Basic", premium: "Advanced", enterprise: "Enterprise" },
  { feature: "Customer Support", free: "Email", premium: "Priority", enterprise: "24/7 Dedicated" },
  { feature: "User Management", free: "Single", premium: "Single", enterprise: "Multiple Users" },
];

const FAQS = [
  { q: "Can I change my plan at any time?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect on your next billing cycle." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal." },
  { q: "Is there a free trial?", a: "We offer a 7-day free trial for our Premium plan so you can experience all features before committing." },
  { q: "Can I get a refund?", a: "We offer a 30-day money-back guarantee if you're not satisfied with our service." },
  { q: "How do I cancel my subscription?", a: "You can cancel at any time from your account settings. Access continues until the end of your billing period." },
];

const BILLING_HISTORY = [
  { date: "Sep 15, 2023", desc: "Premium Plan - Monthly", amount: "$19.00" },
  { date: "Aug 15, 2023", desc: "Premium Plan - Monthly", amount: "$19.00" },
  { date: "Jul 15, 2023", desc: "Premium Plan - Monthly", amount: "$19.00" },
  { date: "Jun 15, 2023", desc: "Premium Plan - Monthly", amount: "$19.00" },
  { date: "May 15, 2023", desc: "Upgrade to Premium", amount: "$19.00" },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-red-50 rounded-full text-[#D32F2F] text-sm font-semibold">
            Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Choose Your Plan</h1>
          <p className="text-lg text-gray-600">Upgrade your learning experience with our premium features</p>
        </div>

        {/* Current Plan Banner */}
        <div className="gradient-bg rounded-2xl p-6 text-white mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Crown className="w-5 h-5 text-yellow-300" />
                <span className="text-lg font-bold">You&apos;re on the Premium Plan</span>
              </div>
              <p className="text-red-100">Your subscription renews on October 15, 2024</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white text-[#D32F2F] font-medium rounded-lg hover:bg-gray-100 transition text-sm">
                Manage Subscription
              </button>
              <button className="px-4 py-2 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition text-sm">
                Cancel Plan
              </button>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${!isAnnual ? "bg-white shadow text-gray-800" : "text-gray-500"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${isAnnual ? "bg-white shadow text-gray-800" : "text-gray-500"}`}
            >
              Annual
            </button>
          </div>
          {isAnnual && (
            <span className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.price.annual : plan.price.monthly;
            return (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl p-8 flex flex-col relative shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                  plan.highlight ? "ring-2 ring-[#D32F2F] shadow-[0_0_20px_rgba(211,47,47,0.15)]" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-[#D32F2F] text-white text-xs font-semibold px-3 py-1 rounded-tr-2xl rounded-bl-lg">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#D32F2F]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">${price}</span>
                    <span className="text-gray-500">/month</span>
                    {isAnnual && plan.price.annual > 0 && (
                      <span className="ml-2 text-sm text-gray-400 line-through">${plan.price.monthly}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2">
                      {f.included
                        ? <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        : <X className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" />}
                      <span className={`text-sm ${f.included ? "text-gray-700" : "text-gray-400"}`}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/sign-up">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition ${
                      plan.ctaVariant === "primary"
                        ? "gradient-bg text-white hover:opacity-90"
                        : plan.ctaVariant === "green"
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 text-sm font-medium text-gray-500 w-1/3">Feature</th>
                  <th className="text-center py-4 text-sm font-medium text-gray-500">Free</th>
                  <th className="text-center py-4 text-sm font-medium text-[#D32F2F]">Premium</th>
                  <th className="text-center py-4 text-sm font-medium text-green-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-4 text-sm font-medium text-gray-800">{row.feature}</td>
                    {([row.free, row.premium, row.enterprise] as (string | boolean)[]).map((val, i) => (
                      <td key={i} className="py-4 text-center text-sm text-gray-600">
                        {val === false ? <X className="w-4 h-4 text-red-300 mx-auto" /> : val === true ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Billing History + Payment */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Billing History</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {["Date", "Description", "Amount", "Status", "Invoice"].map((h) => (
                    <th key={h} className="text-left py-3 text-sm font-medium text-gray-500">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BILLING_HISTORY.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-600">{row.date}</td>
                    <td className="py-3 text-sm font-medium text-gray-800">{row.desc}</td>
                    <td className="py-3 text-sm text-gray-600">{row.amount}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Paid</span>
                    </td>
                    <td className="py-3">
                      <button className="flex items-center gap-1 text-[#D32F2F] text-sm font-medium hover:underline">
                        <Download className="w-3 h-3" /> Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Payment Method</h2>
              <div className="border border-gray-200 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VISA</span>
                    </div>
                    <span className="font-medium text-gray-800 text-sm">Visa ending in 4242</span>
                  </div>
                  <span className="text-xs bg-red-50 text-[#D32F2F] px-2 py-0.5 rounded">Default</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Expires 05/2025</p>
                <div className="mt-3 flex gap-3">
                  <button className="text-xs text-[#D32F2F] font-medium hover:underline">Edit</button>
                  <button className="text-xs text-gray-500 font-medium hover:underline">Remove</button>
                </div>
              </div>
              <button className="w-full py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">
                + Add Payment Method
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Billing Information</h2>
              <div className="space-y-3">
                <div><p className="text-xs font-medium text-gray-500 mb-0.5">Email</p><p className="text-sm text-gray-700">john.smith@example.com</p></div>
                <div><p className="text-xs font-medium text-gray-500 mb-0.5">Billing Address</p><p className="text-sm text-gray-700">123 Main Street, London, UK</p></div>
                <div><p className="text-xs font-medium text-gray-500 mb-0.5">Tax ID</p><p className="text-sm text-gray-700">GB123456789</p></div>
              </div>
              <button className="w-full mt-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">
                Update Billing Information
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-gray-800 mb-1">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            Still have questions?{" "}
            <Link href="/help" className="text-[#D32F2F] font-medium hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>

        {/* Security badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gray-100 px-5 py-2.5 rounded-xl">
            <div className="bg-linear-to-br from-[#635bff] to-[#5433ff] px-3 py-1 rounded text-white text-xs font-semibold flex items-center gap-1">
              <Lock className="w-3 h-3" /> Secure
            </div>
            <p className="text-sm text-gray-600">All payments are securely processed by Stripe</p>
          </div>
        </div>

      </div>
    </div>
  );
}
