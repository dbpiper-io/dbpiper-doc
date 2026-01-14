import { FileText, AlertTriangle, CheckCircle, BookOpen, Clock, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  const effectiveDate = "December 15, 2023";

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6">
              <FileText className="w-4 h-4 text-[#FF4500]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Terms of Service</span>
            </div>
            
            <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tight mb-6">
              Terms of Service
            </h1>
            
            <p className="text-gray-600 mb-4">
              Effective Date: <span className="font-bold">{effectiveDate}</span>
            </p>
            <p className="text-gray-600">
              Please read these terms carefully before using DBPiper.
            </p>
          </div>

          {/* Important Notice */}
          <div className="border-2 border-black bg-yellow-50 p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-xl uppercase mb-2">Important Notice</h3>
                <p className="text-gray-700 mb-2">
                  By accessing or using DBPiper, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not use our service.
                </p>
                <p className="text-sm text-gray-600">
                  These terms contain important information about your rights and obligations, 
                  including limitations of liability and dispute resolution.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="border-2 border-black bg-white p-4 text-center">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="font-bold mb-1">Acceptable Use</div>
              <div className="text-sm text-gray-600">Legal, authorized purposes only</div>
            </div>
            <div className="border-2 border-black bg-white p-4 text-center">
              <div className="w-10 h-10 bg-[#FF4500] text-white flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <div className="font-bold mb-1">Your Responsibilities</div>
              <div className="text-sm text-gray-600">Secure credentials, comply with laws</div>
            </div>
            <div className="border-2 border-black bg-white p-4 text-center">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <div className="font-bold mb-1">Cancellation</div>
              <div className="text-sm text-gray-600">Cancel anytime, no contracts</div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 - Agreement */}
            <section className="mb-12">
              <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                1. Agreement to Terms
              </h2>
              
              <div className="border-2 border-black bg-white p-6">
                <p className="mb-4">
                  These Terms of Service constitute a legally binding agreement made between you, 
                  whether personally or on behalf of an entity ("you") and DBPiper Inc. ("we," "us" or "our"), 
                  concerning your access to and use of the DBPiper service.
                </p>
                
                <div className="p-4 bg-gray-50 border border-gray-200">
                  <h4 className="font-bold mb-2">By using our Service, you confirm that:</h4>
                  <ul className="space-y-2">
                    <li>• You are at least 18 years old</li>
                    <li>• You have the legal capacity to enter into this agreement</li>
                    <li>• You will comply with these Terms of Service</li>
                    <li>• You will not use the Service for illegal purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 - Account Terms */}
            <section className="mb-12">
              <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                2. Account Registration
              </h2>
              
              <div className="border-2 border-black bg-white p-6">
                <h3 className="font-heading font-bold text-xl uppercase mb-4">Account Requirements</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                    <span><strong>Accurate Information:</strong> You must provide accurate and complete information when creating an account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                    <span><strong>Account Security:</strong> You are responsible for maintaining the security of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                    <span><strong>Account Activity:</strong> You are responsible for all activities under your account</span>
                  </li>
                </ul>
                
                <h3 className="font-heading font-bold text-xl uppercase mb-4">Prohibited Activities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border-2 border-red-200 bg-red-50">
                    <div className="font-bold text-red-700 mb-2">You May Not:</div>
                    <ul className="space-y-1 text-sm">
                      <li>• Use the Service for illegal purposes</li>
                      <li>• Violate others' intellectual property</li>
                      <li>• Attempt to gain unauthorized access</li>
                      <li>• Interfere with Service operation</li>
                    </ul>
                  </div>
                  <div className="p-4 border-2 border-green-200 bg-green-50">
                    <div className="font-bold text-green-700 mb-2">You Must:</div>
                    <ul className="space-y-1 text-sm">
                      <li>• Comply with all applicable laws</li>
                      <li>• Respect others' privacy</li>
                      <li>• Keep credentials secure</li>
                      <li>• Report security issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 - Service Terms */}
            <section className="mb-12">
              <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                3. Service Description
              </h2>
              
              <div className="border-2 border-black bg-white p-6">
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-xl uppercase mb-4">What DBPiper Provides</h3>
                  <p className="mb-4">
                    DBPiper is a no-code platform that enables real-time synchronization between databases 
                    and Airtable. The Service includes:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li>• Database connection management</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Visual field mapping interface</li>
                    <li>• Sync monitoring and logging</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-yellow-50 border border-yellow-200">
                  <h4 className="font-bold mb-2">Important Limitations</h4>
                  <p className="text-sm text-gray-700">
                    DBPiper acts as a conduit between your systems. We do not guarantee the accuracy, 
                    completeness, or reliability of data being synced. You are responsible for the data 
                    you choose to sync and the systems you connect.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 - Payments & Refunds */}
            <section className="mb-12">
              <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                4. Payments & Refunds
              </h2>
              
              <div className="border-2 border-black bg-white p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">Pricing</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                        <span>All prices are in USD unless otherwise specified</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                        <span>Prices may change with 30 days notice</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                        <span>Existing customers keep current pricing for 12 months</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">Refund Policy</h3>
                    <div className="p-4 bg-gray-50 border border-gray-200">
                      <div className="font-bold mb-2">14-Day Money-Back Guarantee</div>
                      <p className="text-sm text-gray-600">
                        If you're not satisfied with DBPiper within the first 14 days of a paid subscription, 
                        contact us for a full refund. No questions asked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 - Liability */}
            <section className="mb-12">
              <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                5. Limitation of Liability
              </h2>
              
              <div className="border-2 border-black bg-black text-white p-8">
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-xl text-white uppercase mb-4">Important Disclaimer</h3>
                  <p className="opacity-90 mb-4">
                    To the maximum extent permitted by law, DBPiper shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  <ul className="space-y-2 opacity-90">
                    <li>• Loss of profits, data, or use</li>
                    <li>• Business interruption</li>
                    <li>• Personal injury or property damage</li>
                    <li>• Any damages related to your use of the Service</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-white/10">
                  <h4 className="font-bold mb-2 text-white">Maximum Liability</h4>
                  <p className="text-sm opacity-90">
                    In no event shall DBPiper's total liability to you for all claims exceed the amount 
                    paid by you to DBPiper for the Service in the twelve (12) months prior to the claim.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 - Termination */}
            <section className="mb-12">
              <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                6. Termination
              </h2>
              
              <div className="border-2 border-black bg-white p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">By You</h3>
                    <p className="mb-3">
                      You may terminate your account at any time by canceling your subscription 
                      in your account settings or contacting us.
                    </p>
                    <div className="text-sm text-gray-600">
                      Upon termination, your access to paid features will end immediately. 
                      You may continue to use the free tier if available.
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">By Us</h3>
                    <p className="mb-3">
                      We may suspend or terminate your account if you violate these Terms of Service.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 30-day notice for non-payment</li>
                      <li>• Immediate termination for violations</li>
                      <li>• Right to refuse service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 - Changes to Terms */}
            <section className="mb-12">
              <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                7. Changes to Terms
              </h2>
              
              <div className="border-2 border-black bg-white p-6">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-[#FF4500] shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase mb-3">We May Update These Terms</h3>
                    <p className="mb-4">
                      We reserve the right to modify these Terms of Service at any time. 
                      We will notify you of any material changes by:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                        <span>Sending an email to the address associated with your account</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                        <span>Posting a notice on our website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#FF4500] shrink-0 mt-0.5" />
                        <span>Updating the "Effective Date" at the top of these Terms</span>
                      </li>
                    </ul>
                    <div className="p-4 bg-gray-50 border border-gray-200">
                      <p className="text-sm text-gray-700">
                        <strong>Your continued use of DBPiper after changes become effective</strong> 
                        constitutes your acceptance of the new Terms. If you do not agree to the new Terms, 
                        you must stop using the Service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8 - Contact */}
            <section className="mb-12">
              <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                8. Contact Information
              </h2>
              
              <div className="border-2 border-black bg-[#FF4500] text-white p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">Questions About Terms?</h3>
                    <p className="mb-6 opacity-90">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <div className="font-bold">Legal Department</div>
                        <a href="mailto:aliamer19ali@gmail.com" className="opacity-90 hover:underline">
                          aliamer19ali@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white text-black p-6">
                    <h3 className="font-heading font-bold text-xl uppercase mb-4">Legal Notices</h3>
                    <p className="mb-4 text-sm">
                      For formal legal notices, please use the address above. 
                      All legal notices must be in writing and sent via certified mail.
                    </p>
                    <div className="text-xs text-gray-600">
                      <strong>Jurisdiction:</strong> These Terms are governed by California law.
                      <br />
                      <strong>Arbitration:</strong> Disputes will be resolved through binding arbitration.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Acceptance & Acknowledgment */}
          <div className="mt-12 p-6 border-2 border-black bg-white">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-4">
                <BookOpen className="w-4 h-4 text-[#FF4500]" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Acceptance</span>
              </div>
              <h3 className="font-heading font-bold text-xl uppercase mb-4">By using DBPiper, you acknowledge that:</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border-2 border-gray-200">
                <div className="font-bold mb-2">✓ You have read these Terms</div>
                <div className="text-sm text-gray-600">You understand and agree to all provisions</div>
              </div>
              <div className="p-4 border-2 border-gray-200">
                <div className="font-bold mb-2">✓ You are authorized to agree</div>
                <div className="text-sm text-gray-600">You have the legal authority to enter this agreement</div>
              </div>
              <div className="p-4 border-2 border-gray-200">
                <div className="font-bold mb-2">✓ You accept the Privacy Policy</div>
                <div className="text-sm text-gray-600">You agree to our data practices as described</div>
              </div>
              <div className="p-4 border-2 border-gray-200">
                <div className="font-bold mb-2">✓ You comply with laws</div>
                <div className="text-sm text-gray-600">Your use complies with all applicable laws</div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 pt-8 border-t-2 border-black">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy" className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
