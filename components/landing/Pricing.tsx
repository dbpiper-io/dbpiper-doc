import * as motion from "framer-motion/client";
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Start free, scale as you grow. No enterprise sales calls.",
    features: [
      "500 records/month",
      "1 sync",
      "5-minute sync interval",
      "Community support",
      "Conflict resolution",
      "Basic sync logs",
    ],
    cta: 'Try It Out',
    popular: false

  },
  {
    name: 'Starter',
    price: 15,
    description: 'Perfect for small teams and side projects',
    features: [
      '10,000 records/month',
      '3 syncs',
      'Real-time sync',
      'Full sync logs',
      'Conflict resolution',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Pro',
    price: 40,
    description: 'For growing teams with more data needs',
    features: [
      '50,000 records/month',
      '10 syncs',
      '100,000 rows per table',
      'Real-time sync',
      'Priority support',
      'Advanced logs & analytics',
      'Custom conflict strategies',
      'Slack integration',
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'For organizations with advanced requirements',
    features: [
      'Unlimited connections',
      'Unlimited tables & rows',
      'Sub-second sync latency',
      'Dedicated support manager',
      'Custom SLA',
      'SSO / SAML',
      'Audit logs',
      'On-premise deployment option'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.popular
                ? 'bg-primary text-white shadow-xl shadow-indigo-200 scale-105'
                : 'bg-white border border-slate-200'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-semibold">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.popular ? 'text-indigo-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.price != null ? (
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={`ml-2 ${plan.popular ? 'text-indigo-100' : 'text-slate-500'}`}>
                      /month
                    </span>
                  </div>
                ) : (
                  <div className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    Custom
                  </div>
                )}
              </div>

              <ul className="space-y-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-white/20' : 'bg-indigo-100'
                      }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-indigo-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-indigo-50' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
