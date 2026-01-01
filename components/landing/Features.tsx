import * as motion from "framer-motion/client";
import { Zap, RefreshCw, Database, Clock, FileText, Map } from 'lucide-react';

type ColorKey = keyof typeof colorClasses;
const features = [
  {
    icon: Zap,
    title: 'Real-Time (<5 seconds)',
    description: 'Not 15 minutes like Zapier. True real-time using webhooks and database triggers. See changes propagate instantly.',
    color: 'indigo',
    metric: '<5s'
  },
  {
    icon: RefreshCw,
    title: 'Two-Way Sync',
    description: 'Changes in Airtable instantly appear in your database. Changes in your database instantly appear in Airtable. True bidirectional sync.',
    color: 'purple',
    metric: '2-way'
  },
  {
    icon: Database,
    title: 'Direct Database Support',
    description: 'Postgres, MySQL, MongoDB support. Not locked to Supabase like Whale Sync. Works with your existing infrastructure.',
    color: 'teal',
    metric: '3 DBs'
  },
  {
    icon: Clock,
    title: 'Simple 10-Min Setup',
    description: 'Connect your database and Airtable base, map your fields, and start syncing immediately.',
    color: 'orange',
    metric: '10 min'
  },
  {
    icon: FileText,
    title: 'Sync Logs & Monitoring',
    description: 'See every change. Know exactly what synced when. Debug issues instantly with detailed activity logs and error tracking.',
    color: 'green',
    metric: '<5s'

  },
  {
    icon: Map,
    title: 'Smart Conflicts',
    description: 'Intelligent handling of simultaneous updates. Choose your strategy: last-write-wins, Airtable-wins, database-wins, or manual review.',
    color: 'rose',
    metric: '0 code'
  }
];

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    icon: 'text-indigo-600',
    metric: 'text-indigo-600'
  },
  purple: {
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    icon: 'text-purple-600',
    metric: 'text-purple-600'
  },
  teal: {
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    icon: 'text-teal-600',
    metric: 'text-teal-600'
  },
  orange: {
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    icon: 'text-orange-600',
    metric: 'text-orange-600'
  },
  green: {
    bg: 'bg-green-50',
    iconBg: 'bg-green-100',
    icon: 'text-green-600',
    metric: 'text-green-600'
  },
  rose: {
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    icon: 'text-rose-600',
    metric: 'text-rose-600'
  }
};

export default function Features() {
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
            Why DBPiper
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Built for teams who need
            <span className="text-primary"> Reliable sync</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            Stop dealing with stale data and broken automations. DBPiper keeps everything in sync, automatically.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as ColorKey];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
              >
                {/* Metric badge */}
                <div className={`absolute top-6 right-6 px-2.5 py-1 rounded-full ${colors.bg}`}>
                  <span className={`text-xs font-bold ${colors.metric}`}>{feature.metric}</span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
