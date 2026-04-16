import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — OpenIELTS",
  description: "Learn how OpenIELTS collects, uses, and protects your personal data. Read our full Privacy Policy.",
  alternates: { canonical: "https://openielts.org/privacy" },
};

const EFFECTIVE_DATE = "April 16, 2026";
const CONTACT_EMAIL = "privacy@openielts.org";
const SITE_URL = "https://openielts.org";

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    content: [
      `OpenIELTS ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use the OpenIELTS platform at ${SITE_URL}.`,
      "By using our Service, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not use the Service.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: [
      "We collect several categories of information to provide and improve the Service:",
    ],
    subsections: [
      {
        heading: "Information you provide directly",
        items: [
          "Account registration data — name, email address, and password (stored as a secure hash)",
          "Profile information — display name, profile photo (if provided)",
          "Practice submissions — essays, answers, and responses you submit for feedback",
          "Communications — messages you send to our support team",
        ],
      },
      {
        heading: "Information collected automatically",
        items: [
          "Usage data — pages visited, features used, time spent, actions taken within the platform",
          "Device information — browser type, operating system, IP address, and device identifiers",
          "Session data — authentication tokens and session duration",
          "Performance data — error logs and diagnostic information to maintain Service quality",
        ],
      },
      {
        heading: "Information from third parties",
        items: [
          "Google OAuth — if you sign in with Google, we receive your name, email address, and profile photo from Google in accordance with the permissions you grant",
          "Payment processors — we receive transaction confirmation and limited billing information from our payment providers; we do not store full card details",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
    ],
    list: [
      "To create and manage your account and provide you with access to the Service",
      "To deliver and personalise your IELTS practice experience, including progress tracking and study recommendations",
      "To generate AI-powered feedback on your writing, listening, reading, and speaking submissions",
      "To process subscription payments and manage billing",
      "To communicate with you about your account, updates, and support requests",
      "To send optional product updates and educational content (you may opt out at any time)",
      "To detect, prevent, and respond to fraud, security incidents, and abuse",
      "To analyse usage patterns and improve the Service",
      "To comply with applicable legal obligations",
    ],
  },
  {
    id: "data-storage",
    title: "4. Data Storage and Security",
    content: [
      "Your data is stored using Google Firebase (Firestore and Firebase Storage), which provides industry-standard security infrastructure. Your password is never stored in plain text — it is hashed using bcrypt before being stored.",
      "We implement technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction, or alteration. These measures include encrypted data transmission (HTTPS), access controls, and regular security reviews.",
      "Despite our efforts, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security and encourage you to use a strong, unique password for your account.",
      "We retain your data for as long as your account is active or as needed to provide the Service. If you request account deletion, we will delete your personal data within 30 days, except where we are required by law to retain certain records.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies and Tracking",
    content: [
      "We use cookies and similar tracking technologies to operate and improve the Service. Cookies are small data files stored on your device.",
    ],
    subsections: [
      {
        heading: "Types of cookies we use",
        items: [
          "Essential cookies — required for authentication and core functionality (e.g. session tokens). The Service cannot function without these.",
          "Analytics cookies — used to understand how visitors interact with the Service (e.g. pages visited, time on site). This data is aggregated and anonymous.",
          "Preference cookies — remember your settings and customisations between visits.",
        ],
      },
    ],
    afterSubsections: "You can control cookies through your browser settings. Disabling essential cookies will prevent you from signing in to the Service.",
  },
  {
    id: "sharing",
    title: "6. Sharing Your Information",
    content: [
      "We do not sell your personal data. We share your information only in the following limited circumstances:",
    ],
    list: [
      "Service providers — we share data with trusted third-party providers who help us operate the Service (e.g. Firebase for database/storage, payment processors for billing). These providers are contractually required to protect your data and use it only for the services we request.",
      "Legal requirements — we may disclose your information if required by law, court order, or governmental authority, or if we believe disclosure is necessary to protect the rights, safety, or property of OpenIELTS, our users, or the public.",
      "Business transfers — in the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity. We will notify you via email or a prominent notice on the Service before your data is transferred or becomes subject to a different privacy policy.",
      "With your consent — we may share your information for other purposes with your explicit consent.",
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights and Choices",
    content: [
      "Depending on your location, you may have the following rights regarding your personal data:",
    ],
    list: [
      "Access — request a copy of the personal data we hold about you",
      "Correction — request correction of inaccurate or incomplete data",
      "Deletion — request deletion of your personal data (subject to legal obligations)",
      "Portability — request your data in a structured, machine-readable format",
      "Objection — object to processing of your data for certain purposes, including direct marketing",
      "Withdrawal of consent — withdraw consent at any time where processing is based on consent",
    ],
    afterList: `To exercise any of these rights, please contact us at ${CONTACT_EMAIL}. We will respond to your request within 30 days. We may need to verify your identity before processing your request.`,
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: [
      "The Service is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete it promptly.",
      `If you are a parent or guardian and believe your child has provided us with personal information, please contact us at ${CONTACT_EMAIL}.`,
    ],
  },
  {
    id: "international",
    title: "9. International Data Transfers",
    content: [
      "Our Service is operated using infrastructure that may process data in various countries. By using the Service, you consent to your information being transferred to and processed in countries other than your country of residence, which may have different data protection laws.",
      "Where required, we take steps to ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place to protect your information.",
    ],
  },
  {
    id: "third-party",
    title: "10. Third-Party Links and Services",
    content: [
      "The Service may contain links to third-party websites and services. This Privacy Policy applies only to OpenIELTS. We are not responsible for the privacy practices of third-party sites and encourage you to review their privacy policies before providing any personal information.",
      "Our AI feedback features may be powered by third-party AI providers. Any data processed by these providers is subject to our data processing agreements with them and is used solely to generate the requested feedback.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email or by posting a prominent notice on the Service before the change takes effect. The effective date at the top of this page will always reflect the most recent version.",
      "Your continued use of the Service after changes are posted constitutes your acceptance of the updated Privacy Policy.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
    ],
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="gradient-bg pt-28 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-200 text-sm mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Privacy Policy
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
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-sm text-blue-800">
              <strong>Your privacy matters to us.</strong> We collect only what we need to provide
              the Service, and we never sell your personal data. This policy explains exactly what
              we collect and why.
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

                  {section.subsections?.map((sub) => (
                    <div key={sub.heading} className="mt-3">
                      <p className="text-sm font-semibold text-gray-900 mb-2">{sub.heading}</p>
                      <ul className="space-y-1.5 pl-1">
                        {sub.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {section.afterSubsections && (
                    <p className="text-sm text-gray-700 leading-relaxed mt-2">
                      {section.afterSubsections}
                    </p>
                  )}

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

                  {section.afterList && (
                    <p className="text-sm text-gray-700 leading-relaxed mt-2">
                      {section.afterList}
                    </p>
                  )}

                  {section.contact && (
                    <div className="bg-white border border-gray-200 rounded-xl p-4 mt-2">
                      <p className="text-sm font-semibold text-gray-900 mb-1">OpenIELTS Privacy Team</p>
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
                <Link href="/terms" className="text-[#D32F2F] hover:underline font-medium">
                  Terms of Service
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
