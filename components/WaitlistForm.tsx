"use client"
import { useState } from 'react';
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import SuccessState from './SuccessState';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: '',
    syncing_what: '',
    is_sequin_customer: '',
    company_size: '',
    sync_challenge: '',
    monthly_records: '',
    willing_to_pay: '',
    suggestions: ''
  });
  const [isSuccess, setIsSuccess] = useState(false)
  const [emailValid, setEmailValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    setEmailValid(validateEmail(email));
  };

  const isFormValid = formData.email && emailValid && formData.syncing_what;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    try {
      await supabase.from("waitlist").insert(formData)
      toast.success('Welcome to the waitlist! 🎉');
      setIsSuccess(true)
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  if (isSuccess) return <SuccessState />

  return (
    <div id="waitlist-form" className="border-2 border-black bg-white p-8 hover:shadow-[8px_8px_0px_0px_#000] transition-shadow">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-4">
          <span className="font-mono text-xs uppercase tracking-widest font-bold">Founding User Form</span>
        </div>
        <h2 className="font-heading font-black text-3xl uppercase mb-2">Join the Waitlist</h2>
        <p className="text-gray-600">Reserve your spot and lock in founding user pricing.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Address */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">
            Email Address <span className="text-[#FF4500]">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleEmailChange}
              className="w-full border-2 border-black px-4 py-3 text-sm focus:outline-none focus:border-[#FF4500]"
              required
            />
            {emailValid && (
              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00C853]" />
            )}
          </div>
        </div>

        {/* What are you syncing */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">
            What are you syncing? <span className="text-[#FF4500]">*</span>
          </label>
          <select
            value={formData.syncing_what}
            onChange={(e) => setFormData({ ...formData, syncing_what: e.target.value })}
            className="w-full border-2 border-black px-4 py-3 text-sm focus:outline-none focus:border-[#FF4500] bg-white"
            required
          >
            <option value="">Select your database</option>
            <option value="postgres">Airtable ↔ PostgreSQL</option>
            <option value="mysql">Airtable ↔ MySQL</option>
            <option value="mongodb">Airtable ↔ MongoDB</option>
            <option value="supabase">Airtable ↔ Supabase</option>
            <option value="other">Other (please specify below)</option>
          </select>
        </div>

        {/* Are you a Sequin customer */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-3">
            Are you a Sequin customer?
          </label>
          <div className="space-y-2">
            {[
              { value: 'yes', label: 'Yes - I need to migrate by October 23' },
              { value: 'no', label: 'No - I\'m looking for a new solution' },
              { value: 'never-heard', label: 'I\'ve never heard of Sequin' }
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sequin_customer"
                  value={option.value}
                  checked={formData.is_sequin_customer === option.value}
                  onChange={(e) => setFormData({ ...formData, is_sequin_customer: e.target.value })}
                  className="w-4 h-4 text-[#FF4500] focus:ring-[#FF4500]"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Company size */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">
            Company size
          </label>
          <select
            value={formData.company_size}
            onChange={(e) => setFormData({ ...formData, company_size: e.target.value })}
            className="w-full border-2 border-black px-4 py-3 text-sm focus:outline-none focus:border-[#FF4500] bg-white"
          >
            <option value="">Select company size</option>
            <option value="solo">Just me (solo founder)</option>
            <option value="2-10">2-10 people</option>
            <option value="11-50">11-50 people</option>
            <option value="51-200">51-200 people</option>
            <option value="200+">200+ people</option>
          </select>
        </div>

        {/* Sync challenge */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">
            What's your biggest sync challenge?
          </label>
          <textarea
            placeholder="e.g., Zapier is too slow, custom scripts keep breaking, need bidirectional sync..."
            value={formData.sync_challenge}
            onChange={(e) => setFormData({ ...formData, sync_challenge: e.target.value })}
            rows={3}
            className="w-full border-2 border-black px-4 py-3 text-sm focus:outline-none focus:border-[#FF4500] resize-none"
          />
        </div>

        {/* Monthly records */}
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">
            Expected monthly records to sync
          </label>
          <select
            value={formData.monthly_records}
            onChange={(e) => setFormData({ ...formData, monthly_records: e.target.value })}
            className="w-full border-2 border-black px-4 py-3 text-sm focus:outline-none focus:border-[#FF4500] bg-white"
          >
            <option value="">Select volume</option>
            <option value="<1k">Less than 1K</option>
            <option value="1k-10k">1K - 10K</option>
            <option value="10k-50k">10K - 50K</option>
            <option value="50k-100k">50K - 100K</option>
            <option value="100k+">100K+</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={!isFormValid || loading}
          className={`w-full btn-primary flex items-center justify-center gap-2 ${
            (!isFormValid || loading) ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Small print */}
        <div className="text-center space-y-1">
          <p className="text-xs text-gray-500">
            ✓ No credit card required ✓ Unsubscribe anytime
          </p>
          <p className="text-xs text-gray-500">
            We'll email you when we launch
          </p>
        </div>
      </form>
    </div>
  );
}
