"use client"
import { CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function SuccessState() {
  return (
      <div className="max-w-3xl mx-auto w-full">
        <div className="border-2 border-black bg-white p-8 md:p-12 hover:shadow-[8px_8px_0px_0px_#000] transition-shadow">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#FF4500] text-white flex items-center justify-center border-2 border-black">
              <CheckCircle2 className="w-16 h-16" />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6">
              <Sparkles className="w-4 h-4 text-[#FF4500]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Welcome Aboard</span>
            </div>
            
            <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tight mb-4">
              You're In! 🎉
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Check your email - we just sent you a confirmation and next steps.
            </p>
          </div>

          {/* Next Steps */}
          <div className="border-2 border-black bg-black text-white p-6 mb-8">
            <h2 className="font-heading font-bold text-xl uppercase mb-4">What happens next?</h2>
            <div className="space-y-4">
              {[
                { step: '1', text: 'You\'ll receive a welcome email within 5 minutes' },
                { step: '2', text: 'We\'ll notify you when founding user access opens' },
                { step: '3', text: 'Get 50% off for life when you upgrade' }
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#FF4500] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-8 flex items-center justify-center">
            <Link
              href="/"
              className="btn-secondary text-center"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Additional Info */}
          <div className="border-2 border-gray-200 bg-gray-50 p-4">
            <p className="text-center text-gray-600 text-sm">
              Have questions? Email us at{' '}
              <a href="mailto:aliamer19ali@gmail.com" className="text-[#FF4500] font-bold hover:underline">
                aliamer19ali@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
  );
}
