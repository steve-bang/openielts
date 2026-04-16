import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — OpenIELTS",
  description: "Read the OpenIELTS Terms of Service. These terms govern your use of the OpenIELTS platform and services.",
  alternates: { canonical: "https://openielts.org/terms" },
};

const EFFECTIVE_DATE = "April 16, 2026";
const CONTACT_EMAIL = "legal@openielts.org";
const SITE_URL = "https://openielts.org";

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      `By accessing or using OpenIELTS ("the Service", "we", "us", or "our") at ${SITE_URL}, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.`,
      "These Terms apply to all visitors, registered users, and anyone who accesses or uses any part of the Service. We reserve the right to update or modify these Terms at any time. Continued use of the Service after changes are posted constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    id: "description",
    title: "2. Description of Service",
    content: [
      "OpenIELTS is an online IELTS preparation platform that provides practice tests, study resources, AI-powered feedback tools, and educational content for candidates preparing for the International English Language Testing System (IELTS) examination.",
      "We offer both free and paid subscription tiers. The availability of specific features depends on your subscription plan. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time with reasonable notice.",
    ],
  },
  {
    id: "accounts",
    title: "3. User Accounts",
    content: [
      "To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately at " + CONTACT_EMAIL + " if you suspect any unauthorised use of your account.",
      "You must be at least 13 years of age to create an account. If you are under 18, you confirm that you have obtained parental or guardian consent to use the Service.",
      "We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or remain inactive for an extended period.",
    ],
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use",
    content: [
      "You agree to use the Service only for lawful purposes and in a manner consistent with these Terms. You must not:",
    ],
    list: [
      "Reproduce, distribute, or publicly display any part of the Service or its content without prior written permission",
      "Attempt to gain unauthorised access to any part of the Service, its servers, or related systems",
      "Use automated tools, bots, scrapers, or similar means to access or collect data from the Service",
      "Upload, transmit, or share content that is unlawful, harmful, abusive, defamatory, or otherwise objectionable",
      "Impersonate any person or entity or misrepresent your affiliation with any person or entity",
      "Interfere with or disrupt the integrity or performance of the Service or its infrastructure",
      "Use the Service to send unsolicited communications or spam",
      "Circumvent, disable, or interfere with any security-related features of the Service",
    ],
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    content: [
      "All content on the Service — including but not limited to text, graphics, logos, icons, audio, video, practice questions, blog articles, and software — is the property of OpenIELTS or its content suppliers and is protected by applicable intellectual property laws.",
      "We grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your personal, non-commercial IELTS preparation purposes. This licence does not permit you to reproduce, modify, distribute, sell, or create derivative works from any content on the Service.",
      "If you submit feedback, suggestions, or other communications about the Service, you grant us an unrestricted, perpetual, royalty-free licence to use and incorporate that feedback into the Service without any obligation to you.",
    ],
  },
  {
    id: "subscriptions",
    title: "6. Subscriptions and Payments",
    content: [
      "Some features of the Service are available only through a paid subscription. Subscription fees are charged in advance on a monthly or annual basis depending on your selected plan.",
      "All fees are stated in US dollars and are exclusive of any applicable taxes. You are responsible for paying any taxes applicable to your use of the Service.",
      "We use third-party payment processors to handle transactions. By providing payment information, you authorise us to charge your chosen payment method for the applicable fees.",
      "Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period — no partial refunds are issued for unused time.",
      "We reserve the right to change subscription pricing at any time. We will provide at least 30 days' notice before any price change takes effect for existing subscribers.",
    ],
  },
  {
    id: "disclaimers",
    title: "7. Disclaimers and Limitation of Liability",
    content: [
      "The Service is provided on an \"as is\" and \"as available\" basis without warranties of any kind, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.",
      "OpenIELTS is an independent preparation platform and is not affiliated with, endorsed by, or officially connected with the British Council, IDP Education, or Cambridge Assessment English, which are the organisations responsible for administering the official IELTS examination.",
      "Band score predictions generated by our AI tools are estimates only. We do not guarantee that your performance on the OpenIELTS platform will reflect your performance on the official IELTS examination. Results may vary.",
      "To the fullest extent permitted by applicable law, OpenIELTS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising from your use of or inability to use the Service.",
    ],
  },
  {
    id: "privacy",
    title: "8. Privacy",
    content: [
      "Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at " + SITE_URL + "/privacy to understand our practices.",
    ],
  },
  {
    id: "termination",
    title: "9. Termination",
    content: [
      "We may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice, if we believe you have violated these Terms or if required by applicable law.",
      "You may terminate your account at any time by contacting us at " + CONTACT_EMAIL + ". Upon termination, your right to use the Service will immediately cease. Sections of these Terms that by their nature should survive termination will continue to apply.",
    ],
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the Service shall be resolved through good-faith negotiation. If a dispute cannot be resolved informally, it shall be submitted to binding arbitration in accordance with applicable rules.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: [
      "If you have any questions about these Terms of Service, please contact us at:",
    ],
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="gradient-bg pt-28 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-200 text-sm mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-red-100 text-sm">
            Effective date: <span className="text-white font-medium">{EFFECTIVE_DATE}</span>
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 items-start">

          {/* Table of contents — sticky sidebar */}
          <aside className="hidden lg:block sticky top-24">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">
                Contents
              </p>
              <nav className="space-y-1.5">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-xs text-gray-600 hover:text-[#D32F2F] transition leading-snug py-0.5"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3 space-y-10">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800">
              <strong>Please read these terms carefully</strong> before using OpenIELTS. By
              creating an account or using any part of this platform, you agree to be bound by
              the terms below.
            </div>

            {SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-sm text-gray-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2 mt-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D32F2F] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.contact && (
                    <div className="bg-white border border-gray-200 rounded-xl p-4 mt-2">
                      <p className="text-sm font-semibold text-gray-900 mb-1">OpenIELTS</p>
                      <p className="text-sm text-gray-600">
                        Email:{" "}
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="text-[#D32F2F] hover:underline"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">
                        Website:{" "}
                        <a
                          href={SITE_URL}
                          className="text-[#D32F2F] hover:underline"
                        >
                          {SITE_URL}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Footer nav */}
            <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
              <p className="text-gray-500">Last updated: {EFFECTIVE_DATE}</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="text-[#D32F2F] hover:underline font-medium">
                  Privacy Policy
                </Link>
                <Link href="/help" className="text-gray-500 hover:text-gray-700">
                  Help & Support
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
