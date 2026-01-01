"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle2, Loader2 } from 'lucide-react';
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

  const handleEmailChange = (e: any) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    setEmailValid(validateEmail(email));
  };

  const isFormValid = formData.email && emailValid && formData.syncing_what;



  const handleSubmit = async (e: any) => {
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
    <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-transparent bg-linear-to-b from-white to-indigo-50/30 relative">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-xl" />

      <div className="relative">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
          Reserve Your Spot
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Address */}
          <div>
            <Label htmlFor="email" className="text-slate-900 font-semibold mb-2 block">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleEmailChange}
                className="pr-10 text-lg py-6"
                required
              />
              {emailValid && (
                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              )}
            </div>
          </div>

          {/* What are you syncing */}
          <div>
            <Label htmlFor="syncing" className="text-slate-900 font-semibold mb-2 block">
              What are you syncing? <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.syncing_what}
              onValueChange={(value) => setFormData({ ...formData, syncing_what: value })}
            >
              <SelectTrigger className="text-lg py-6">
                <SelectValue placeholder="Select your database" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="postgres">Airtable ↔ Postgres</SelectItem>
                <SelectItem value="mysql">Airtable ↔ MySQL</SelectItem>
                <SelectItem value="mongodb">Airtable ↔ MongoDB</SelectItem>
                <SelectItem value="other">Other (please specify below)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Are you a Sequin customer */}
          <div>
            <Label className="text-slate-900 font-semibold mb-3 block">
              Are you a Sequin customer?
            </Label>
            <RadioGroup
              value={formData.is_sequin_customer}
              onValueChange={(value) => setFormData({ ...formData, is_sequin_customer: value })}
            >
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="yes" id="sequin-yes" />
                <Label htmlFor="sequin-yes" className="font-normal cursor-pointer">
                  Yes - I need to migrate by October 23
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="no" id="sequin-no" />
                <Label htmlFor="sequin-no" className="font-normal cursor-pointer">
                  No - I'm looking for a new solution
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="never-heard" id="sequin-never" />
                <Label htmlFor="sequin-never" className="font-normal cursor-pointer">
                  I've never heard of Sequin
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Company size */}
          <div>
            <Label htmlFor="company-size" className="text-slate-900 font-semibold mb-2 block">
              Company size
            </Label>
            <Select
              value={formData.company_size}
              onValueChange={(value) => setFormData({ ...formData, company_size: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Just me (solo founder)</SelectItem>
                <SelectItem value="2-10">2-10 people</SelectItem>
                <SelectItem value="11-50">11-50 people</SelectItem>
                <SelectItem value="51-200">51-200 people</SelectItem>
                <SelectItem value="200+">200+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sync challenge */}
          <div>
            <Label htmlFor="challenge" className="text-slate-900 font-semibold mb-2 block">
              What's your biggest sync challenge?
            </Label>
            <Textarea
              id="challenge"
              placeholder="e.g., Zapier is too slow, custom scripts keep breaking, need bidirectional sync..."
              value={formData.sync_challenge}
              onChange={(e) => setFormData({ ...formData, sync_challenge: e.target.value })}
              rows={3}
              className="resize-none"
            />
          </div>

          {/* Monthly records */}
          <div>
            <Label htmlFor="records" className="text-slate-900 font-semibold mb-2 block">
              Expected monthly records to sync
            </Label>
            <Select
              value={formData.monthly_records}
              onValueChange={(value) => setFormData({ ...formData, monthly_records: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select volume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<1k">Less than 1K</SelectItem>
                <SelectItem value="1k-10k">1K - 10K</SelectItem>
                <SelectItem value="10k-50k">10K - 50K</SelectItem>
                <SelectItem value="50k-100k">50K - 100K</SelectItem>
                <SelectItem value="100k+">100K+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Willing to pay */}
          <div>
            <Label htmlFor="willing-to-pay" className="text-slate-900 font-semibold mb-2 block">
              How much would you be willing to pay?
            </Label>
            <Select
              value={formData.willing_to_pay}
              onValueChange={(value) => setFormData({ ...formData, willing_to_pay: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-29">$0-29/month</SelectItem>
                <SelectItem value="29-79">$29-79/month</SelectItem>
                <SelectItem value="79-149">$79-149/month</SelectItem>
                <SelectItem value="149-299">$149-299/month</SelectItem>
                <SelectItem value="299+">$299+/month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Suggestions */}
          <div>
            <Label htmlFor="suggestions" className="text-slate-900 font-semibold mb-2 block">
              Any suggestions or feature requests?
            </Label>
            <Textarea
              id="suggestions"
              placeholder="Let us know what features matter most to you..."
              value={formData.suggestions}
              onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
              rows={3}
              className="resize-none"
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            disabled={!isFormValid || loading}
            className="w-full py-6 text-lg font-semibold bg-linear-to-r from-indigo-600 to-primary hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Joining...
              </>
            ) : (
              'Join the Waitlist →'
            )}
          </Button>

          {/* Small print */}
          <div className="text-center text-sm text-slate-500 space-y-1">
            <p>✓ No credit card required  ✓ Unsubscribe anytime</p>
            <p>✓ We'll email you when we launch</p>
          </div>
        </form>
      </div>
    </div>
  );
}
