import * as motion from "framer-motion/client";
import { ArrowRight, ChevronDown, Database, Folders, Link2, Settings, Zap } from 'lucide-react';
type ColorKey = keyof typeof colorClasses;
const steps = [
  {
    number: '01',
    icon: Database,
    title: 'Connect Your Database',
    description: 'Add your Postgres, MySQL, or MongoDB connection string. We support read replicas and connection pooling.',
    color: 'indigo'
  },
  {
    number: '02',
    icon: Link2,
    title: 'Link Your Airtable Base',
    description: 'Authorize DBPiper to access your Airtable workspace. Select the base and tables you want to sync.',
    color: 'purple'
  },
  {
    number: '03',
    icon: Folders,
    title: 'Select Tables',
    description: 'Choose which Airtable table and database table to sync. We show you all available options.',
    color: 'red',
    visual: <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 space-y-2">
      <div className="bg-white rounded px-2 py-1.5 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
        <span>Customers</span>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </div>
      <div className="bg-white rounded px-2 py-1.5 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
        <span>users</span>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </div>
    </div>
  },
  {
    number: '04',
    icon: Settings,
    title: 'Map Your Fields',
    description: 'Use our visual mapper to connect database columns to Airtable fields. Handle type conversions automatically.',
    color: 'teal',
    visual: <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 space-y-2">
      <div className="flex items-center gap-2 text-xs">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Name</span>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">name</span>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Email</span>
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">email</span>
      </div>
    </div>
  },
  {
    number: '05',
    icon: Zap,
    title: 'Start Syncing',
    description: 'Enable your sync and watch data flow in real-time. Get instant notifications for any sync issues.',
    color: 'green',
    visual: <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 space-y-1">
      <div className="flex items-center gap-2 text-xs">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
        <span className="text-slate-600">Synced 245 rows</span>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
        <span className="text-slate-600">Real-time active</span>
      </div>
    </div>
  }
];

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-500',
    light: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-200'
  },
  purple: {
    bg: 'bg-purple-500',
    light: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200'
  },
  teal: {
    bg: 'bg-teal-500',
    light: 'bg-teal-50',
    text: 'text-teal-600',
    border: 'border-teal-200'
  },
  green: {
    bg: 'bg-green-500',
    light: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200'
  },
  primary: {
    bg: 'bg-green-500',
    light: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200'
  },
  red: {
    bg: 'bg-red-500',
    light: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-200'
  }
};

export default function HowItWorks() {
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
            Getting Started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Up and running in 10 minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            No complex configurations or engineering time required. Just connect, map, and sync.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-indigo-200 via-purple-200 to-green-200 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as ColorKey];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative lg:flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.light} ${colors.text} text-sm font-semibold mb-4`}>
                      Step {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                    {step.visual && step.visual}
                  </div>

                  {/* Center icon */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Mobile icon */}
                  <div className="lg:hidden flex items-center gap-4 mt-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
