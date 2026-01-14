import { Shield, Lock, Eye, Mail, Database, Users, CheckCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "December 25, 2026";

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6">
              <Lock className="w-4 h-4 text-[#FF4500]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Privacy Policy</span>
            </div>

            <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tight mb-6">
              Privacy Policy
            </h1>

            <p className="text-gray-600 mb-4">
              Last Updated: <span className="font-bold">{lastUpdated}</span>
            </p>
            <p className="text-gray-600">
              This Privacy Policy explains how DBPiper collects, uses, and protects your information.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="border-2 border-black bg-white p-6 mb-8">
            <h2 className="font-heading font-bold text-xl uppercase mb-4">Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { number: '1', title: 'Information We Collect' },
                { number: '2', title: 'How We Use Information' },
                { number: '3', title: 'Data Security' },
                { number: '4', title: 'Your Rights' },
                { number: '5', title: 'Contact Us' },
              ].map((item) => (
                <a
                  key={item.number}
                  href={`#section-${item.number}`}
                  className="flex items-center gap-3 p-3 border-2 border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-sm">
                    {item.number}
                  </div>
                  <span className="font-bold">{item.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Policy Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section id="section-1" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h2 className="font-heading font-black text-3xl uppercase tracking-tight m-0">
                  Information We Collect
                </h2>
              </div>

              <div className="border-2 border-black bg-white p-6">
                <h3 className="font-heading font-bold text-xl uppercase mb-4">Account Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                    <span><strong>Basic Information:</strong> Name, email address, company name when you create an account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                    <span><strong>Payment Information:</strong> Billing address, payment method details (processed by Paddle)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                    <span><strong>Usage Data:</strong> How you use our service, sync configurations, and performance metrics</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-gray-50 border border-gray-200">
                  <h4 className="font-bold mb-2">Important: We Do NOT Store Your Database Data</h4>
                  <p className="text-sm text-gray-600">
                    DBPiper acts as a conduit between your databases and Airtable. We never store your actual database records,
                    content, or sensitive business data. We only store connection metadata and sync configurations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h2 className="font-heading font-black text-3xl uppercase tracking-tight m-0">
                  How We Use Information
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-black bg-white p-6">
                  <div className="w-12 h-12 bg-[#FF4500] text-white flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl uppercase mb-3">Service Operation</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide and maintain our service</li>
                    <li>• Process transactions and send invoices</li>
                    <li>• Send service-related notifications</li>
                    <li>• Monitor service performance</li>
                  </ul>
                </div>

                <div className="border-2 border-black bg-white p-6">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl uppercase mb-3">Communication</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Respond to your inquiries</li>
                    <li>• Send product updates and news</li>
                    <li>• Conduct user research and surveys</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 - Data Security */}
            <section id="section-3" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h2 className="font-heading font-black text-3xl uppercase tracking-tight m-0">
                  Data Security
                </h2>
              </div>

              <div className="border-2 border-black bg-black text-white p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">Security Measures</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                        <span><strong>Encryption:</strong> All data in transit uses TLS 1.2+ encryption</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                        <span><strong>Access Control:</strong> Role-based access and authentication</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                        <span><strong>Audit Logs:</strong> Comprehensive activity logging</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">Data Processing</h3>
                    <div className="p-4 bg-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-[#FF4500]" />
                        <span className="font-bold">Database Credentials</span>
                      </div>
                      <p className="text-sm opacity-90">
                        Database connection strings and API keys are encrypted using AES-256 encryption
                        and stored securely in AWS KMS. We never log or store plaintext credentials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 - Your Rights */}
            <section id="section-4" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h2 className="font-heading font-black text-3xl uppercase tracking-tight m-0">
                  Your Rights
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-black bg-white p-6">
                  <h3 className="font-heading font-bold text-xl uppercase mb-4">GDPR & CCPA Rights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                      <span><strong>Access:</strong> Request a copy of your personal data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                      <span><strong>Correction:</strong> Update inaccurate or incomplete data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                      <span><strong>Deletion:</strong> Request deletion of your personal data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                      <span><strong>Opt-out:</strong> Opt out of marketing communications</span>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-black bg-white p-6">
                  <h3 className="font-heading font-bold text-xl uppercase mb-4">Exercising Your Rights</h3>
                  <p className="mb-4">To exercise any of these rights, please contact us:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#FF4500]" />
                      <a href="mailto:aliamer19ali@gmail.com" className="text-[#FF4500] hover:underline font-bold">
                        aliamer19ali@gmail.com
                      </a>
                    </div>
                    <div className="text-sm text-gray-600">
                      We respond to all requests within 30 days. Please include your email address and account details for verification.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Continue with remaining sections... */}

            {/* Section 5 - Contact */}
            <section id="section-5" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <h2 className="font-heading font-black text-3xl uppercase tracking-tight m-0">
                  Contact Us
                </h2>
              </div>

              <div className="border-2 border-black bg-[#FF4500] text-white p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">Questions About Privacy?</h3>
                    <p className="mb-6 opacity-90">
                      If you have any questions about this Privacy Policy or our data practices,
                      please contact our Data Protection Officer:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <div className="font-bold">Email</div>
                        <a href="mailto:aliamer19ali@gmail.com" className="opacity-90 hover:underline">
                          aliamer19ali@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white text-black p-6">
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">Data Protection Officer</h3>
                    <p className="mb-4">
                      Our Data Protection Officer oversees compliance with data protection laws and regulations.
                    </p>
                    <div className="text-sm text-gray-600">
                      For GDPR-specific inquiries from EU residents, please include "GDPR Inquiry" in your subject line.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Verification Seal */}
          <div className="mt-12 p-6 border-2 border-black bg-white text-center">
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-4">
              <Shield className="w-4 h-4 text-[#FF4500]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Compliance</span>
            </div>
            <p className="text-gray-600 mb-4">
              DBPiper complies with GDPR, CCPA, and other data protection regulations.
              We regularly review and update our privacy practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-gray-100 border border-gray-300">GDPR Compliant</div>
              <div className="px-4 py-2 bg-gray-100 border border-gray-300">CCPA Compliant</div>
              <div className="px-4 py-2 bg-gray-100 border border-gray-300">Data Minimization</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
