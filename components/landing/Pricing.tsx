'use client'
import * as motion from "framer-motion/client";
import { Check, Star, Zap, Shield, Users, Globe } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: '$0', yearly: '$0' },
      description: 'Perfect for trying out',
      features: [
        '500 records/month',
        '1 sync configuration',
        '2 connections',
        'Daily sync only',
        'Community support',
      ],
      cta: 'Get Started',
      ctaVariant: 'secondary' as const,
      borderColor: 'border-black',
      popular: false
    },
    {
      name: 'Basic',
      price: { monthly: '$15', yearly: '$12' },
      description: 'For small teams',
      features: [
        '5,000 records/month',
        '3 sync configurations',
        '5 connections',
        'Hourly sync',
        'Email support',
        'Basic filters',
      ],
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const,
      borderColor: 'border-black',
      popular: false
    },
    {
      name: 'Pro',
      price: { monthly: '$24', yearly: '$19' },
      description: 'For growing businesses',
      features: [
        '25,000 records/month',
        '10 sync configurations',
        'Unlimited connections',
        'Real-time sync',
        'Priority support',
        'Advanced filters',
        'Webhooks',
      ],
      cta: 'Start Free Trial',
      ctaVariant: 'primary' as const,
      borderColor: 'border-[#FF4500]',
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: '$50', yearly: '$40' },
      description: 'Full power, no limits',
      features: [
        'Unlimited records',
        'Unlimited syncs',
        'Unlimited connections',
        'Real-time sync',
        '24/7 priority support',
        'All filter types',
        'Custom integrations',
        'Dedicated manager',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      ctaVariant: 'enterprise' as const,
      borderColor: 'border-black',
      popular: false,
      dark: true
    }
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Real-time Sync',
      description: 'Data updates propagate instantly between sources'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant, data encrypted at rest and in transit'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Team Collaboration',
      description: 'Share sync configurations with your entire team'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Global Infrastructure',
      description: 'Servers in 5 regions for low-latency sync'
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6"
          >
            <Star className="w-4 h-4 text-[#FF4500]" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tight mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-4 mt-8 bg-gray-100 border-2 border-black p-1"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all ${billingCycle === 'monthly'
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-black'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all ${billingCycle === 'yearly'
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-black'
                }`}
            >
              Yearly <span className="text-[#FF4500]">(Save 20%)</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8 }}
              className={`relative p-6 border-2 ${plan.borderColor} ${plan.dark ? 'bg-black text-white' : 'bg-white'} hover:shadow-[8px_8px_0px_0px_#000] transition-all`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF4500] text-white px-4 py-1 font-bold text-xs uppercase"
                >
                  Most Popular
                </motion.div>
              )}

              <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-2">{plan.name}</div>
              <div className="font-heading font-black text-4xl mb-1">
                {plan.price[billingCycle]}
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <p className={`text-sm mb-6 ${plan.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-2"
                  >
                    <Check className={`w-4 h-4 shrink-0 ${plan.dark ? 'text-[#FF4500]' : 'text-[#00C853]'}`} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href={'/waitlist'}
                className={`block w-full text-center py-3 font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 ${plan.ctaVariant === 'primary'
                  ? 'btn-primary'
                  : plan.ctaVariant === 'enterprise'
                    ? 'bg-[#FF4500] text-white hover:bg-white hover:text-black'
                    : 'btn-secondary'
                  } ${plan.dark ? 'border-white text-white hover:bg-white hover:text-black' : ''}`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 border-2 border-black bg-white p-6">
            <div className="w-12 h-12 bg-[#FF4500] text-white flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-lg uppercase">14-day free trial</p>
              <p className="text-gray-600 text-sm">No credit card required • Cancel anytime</p>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-12 border-t-2 border-black"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-2xl uppercase mb-4">Included in all plans</h3>
            <p className="text-gray-600">Every plan comes with these essential features</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-[#FF4500] text-white flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-heading font-bold text-lg uppercase mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
