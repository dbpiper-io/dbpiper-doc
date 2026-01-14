"use client";

import * as motion from "framer-motion/client";
import { ArrowRight, Users, Sparkles, Zap } from 'lucide-react';
import Link from "next/link";

const CTA = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-linear-to-br from-[#FF4500] to-orange-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-10 right-20 w-32 h-32 border-2 border-white/20 rounded-full"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border-2 border-white px-4 py-2 bg-transparent mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold">Join Now</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tight mb-6"
        >
          Ready to Sync Your Data?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8 opacity-90"
        >
          Join makers and no-code builders who use DBPiper to keep their databases in sync.
          Start your free trial today — no credit card required.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { value: '500+', label: 'Makers' },
            { value: '10K+', label: 'Records Synced' },
            { value: '99.9%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-black text-3xl mb-1">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-wider opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#FF4500] transition-all"
            >
              View Pricing
            </button>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: <Zap className="w-5 h-5" />,
              title: '5-Minute Setup',
              description: 'Get started in minutes, not hours'
            },
            {
              icon: <Sparkles className="w-5 h-5" />,
              title: 'No Code Required',
              description: 'Everything is point and click'
            },
            {
              icon: <Users className="w-5 h-5" />,
              title: '14-Day Free Trial',
              description: 'No credit card required'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="w-10 h-10 bg-white text-[#FF4500] flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div className="text-left">
                <div className="font-bold text-sm uppercase">{feature.title}</div>
                <div className="text-sm opacity-80">{feature.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
