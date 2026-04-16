import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, BookOpen, MessageCircle, Settings, CreditCard,
  Mic, PenLine, Headphones, ChevronDown, Mail, Clock, CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Help & Support — OpenIELTS",
  description: "Get help with OpenIELTS — FAQs, guides, and contact support.",
};

const CATEGORIES = [
  { icon: BookOpen, label: "Getting Started", count: 12, color: "bg-blue-50 text-blue-600" },
  { icon: PenLine, label: "Writing Practice", count: 8, color: "bg-red-50 text-[#D32F2F]" },
  { icon: Headphones, label: "Listening & Reading", count: 7, color: "bg-green-50 text-green-600" },
  { icon: Mic, label: "Speaking Practice", count: 6, color: "bg-purple-50 text-purple-600" },
  { icon: CreditCard, label: "Billing & Payments", count: 9, color: "bg-yellow-50 text-yellow-600" },
  { icon: Settings, label: "Account & Settings", count: 11, color: "bg-gray-100 text-gray-600" },
];

const FAQS = [
  {
    q: "How do I get started with OpenIELTS?",
    a: "Sign up for a free account, complete the initial assessment to determine your current level, then follow your personalized study plan. You can start practicing immediately after registration.",
  },
  {
    q: "How does AI feedback work for Writing?",
    a: "Our AI analyzes your essay against the official IELTS Band Descriptors — Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy. You receive a predicted band score with detailed, actionable feedback for each criterion.",
  },
  {
    q: "Can I practice Speaking without a partner?",
    a: "Yes! Our AI speaking coach uses voice recognition to evaluate your responses. You can practice Part 1, 2, and 3 questions anytime, receiving feedback on fluency, pronunciation, vocabulary, and grammar.",
  },
  {
    q: "How accurate are the AI band score predictions?",
    a: "Our predictions are within ±0.5 bands of actual IELTS scores for 85%+ of users. The AI is continuously improved based on feedback from certified IELTS examiners.",
  },
  {
    q: "What's the difference between Free and Premium?",
    a: "Free gives you 5 practice tests/month and access to basic resources. Premium ($19/month) unlocks unlimited tests, unlimited AI writing feedback, speaking practice, full mock tests, and advanced analytics.",
  },
  {
    q: "Can I download my results and feedback?",
    a: "Yes. All your submissions, band scores, and AI feedback can be exported as PDF from your Dashboard. Premium users can also export detailed analytics reports.",
  },
];

const TICKETS = [
  { id: "#4821", subject: "AI feedback not loading", status: "Open", priority: "High", updated: "2h ago", color: "border-green-500" },
  { id: "#4803", subject: "Can't access Premium features after payment", status: "Pending", priority: "Medium", updated: "1d ago", color: "border-yellow-500" },
  { id: "#4782", subject: "Question about Annual billing", status: "Resolved", priority: "Low", updated: "3d ago", color: "border-[#D32F2F]" },
];

export default function HelpPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="gradient-bg text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-red-100 text-lg mb-8">Search our knowledge base or browse categories below</p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 text-sm outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Categories */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  href="#"
                  className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${cat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{cat.label}</p>
                    <p className="text-sm text-gray-500">{cat.count} articles</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* FAQ */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl shadow-sm group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-gray-800 hover:text-[#D32F2F] transition">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>

            {/* Support Tickets */}
            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">My Support Tickets</h2>
            <div className="space-y-3">
              {TICKETS.map((t) => (
                <div key={t.id} className={`bg-white rounded-xl shadow-sm p-5 border-l-4 ${t.color} hover:-translate-y-0.5 hover:shadow-md transition-all`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800">{t.subject}</p>
                      <p className="text-xs text-gray-500 mt-1">Ticket {t.id} · Updated {t.updated}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        t.status === "Open" ? "bg-green-50 text-green-700" :
                        t.status === "Pending" ? "bg-yellow-50 text-yellow-700" :
                        "bg-red-50 text-[#D32F2F]"
                      }`}>{t.status}</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        t.priority === "High" ? "bg-red-50 text-red-600" :
                        t.priority === "Medium" ? "bg-yellow-50 text-yellow-600" :
                        "bg-gray-100 text-gray-600"
                      }`}>{t.priority}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-4">Contact Support</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Live Chat</p>
                    <p className="text-xs text-gray-500">Avg. response: 5 min</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Email Support</p>
                    <p className="text-xs text-gray-500">support@openielts.com</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-5 py-3 gradient-bg text-white font-semibold rounded-xl text-sm hover:opacity-90 transition">
                Submit a Ticket
              </button>
            </div>

            {/* Status Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-4">System Status</h3>
              <div className="space-y-3">
                {["Web Application", "AI Feedback Engine", "Writing Module", "Speaking Module"].map((s) => (
                  <div key={s} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{s}</span>
                    <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" /> Operational
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-3">Support Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D32F2F]" /> Mon–Fri: 9am–6pm UTC</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /> Sat–Sun: 10am–4pm UTC</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
