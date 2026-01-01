import * as motion from "framer-motion/client";
import { Crown, Rocket, Sparkles, Zap } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import WaitlistForm from "@/components/WaitlistForm";

export default function Waitlist() {
  const spotsRemaining = 27;

  const benefits = [
    {
      icon: Crown,
      title: 'Founding User Perks',
      description: '50% off for life, priority support, influence roadmap',
      color: 'text-amber-600'
    },
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Soon. Skip the waitlist when we launch.',
      color: 'text-indigo-600'
    },
    {
      icon: Sparkles,
      title: 'Free Migration',
      description: "Switching from Sequin? We'll migrate you for free (white-glove support)",
      color: 'text-green-600'
    }
  ];

  const timeline = [
    { step: 1, text: "We'll email you when we launch" },
    { step: 2, text: "Get exclusive early access link" },
    { step: 3, text: "Start syncing in 10 minutes" }
  ];


  return (
    <div className="min-h-screen bg-linear-to-b from-white via-indigo-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-primary text-white border-0 mb-6 text-sm p-4 py-5">
            <Rocket className="w-4 h-4 mr-2 inline" />
            EARLY ACCESS
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Join 50 Founding Users<br />Getting DBPiper First
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Real-time Airtable ↔ Database sync launching October 2025.<br />
            Lock in 50% founding user discount.
          </p>

          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-orange-200">
            <span className="text-2xl">🔥</span>
            <span className="font-bold text-orange-600">{spotsRemaining}</span>
            <span className="text-slate-600">spots remaining out of 50</span>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <benefit.icon className={`w-10 h-10 ${benefit.color} mb-4`} />
              <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <WaitlistForm />
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            {/* Overlapping avatars */}
            <div className="flex -space-x-3">
              {['from-purple-500 to-pink-500', 'from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500'].map((gradient, idx) => (
                <div key={idx} className={`w-10 h-10 rounded-full bg-linear-to-br ${gradient} border-2 border-white flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{['S', 'M', 'A', 'J'][idx]}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 text-sm">
            Join Sarah, Mike, Alex and {50 - spotsRemaining} others waiting for early access
          </p>
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">What Happens Next</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <p className="text-slate-700">{item.text}</p>
                </div>
                {item.step < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mini FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-4"
        >
        </motion.div>
      </div>
    </div>
  )
}
