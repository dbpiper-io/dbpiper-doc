import * as motion from "framer-motion/client";
import { ChevronDown, Database, Folders, Link2, Settings, Zap, RefreshCw, Check, ArrowLeftRight } from 'lucide-react';

type ColorKey = keyof typeof colorClasses;

const steps = [
  {
    number: '01',
    icon: Database,
    title: 'Connect Your Database',
    description: 'Add your Postgres, MySQL, or MongoDB connection string. We support read replicas and connection pooling.',
    color: 'orange',
    visual: (
      <div className="mt-4 border-2 border-black bg-white p-3 space-y-2">
        <div className="bg-gray-50 border border-gray-200 px-3 py-2 text-xs font-mono flex items-center justify-between hover:bg-gray-100 transition-colors cursor-default">
          <span>postgresql://user:pass@host:5432/db</span>
          <Check className="w-3 h-3 text-[#00C853]" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></div>
          <span className="text-gray-600">Connection verified</span>
        </div>
      </div>
    )
  },
  {
    number: '02',
    icon: Link2,
    title: 'Link Your Airtable Base',
    description: 'Authorize DBPiper to access your Airtable workspace. Select the base and tables you want to sync.',
    color: 'black',
    visual: (
      <div className="mt-4 border-2 border-black bg-white p-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-[#FCE4A4] border border-black flex items-center justify-center font-bold text-sm">
            AT
          </div>
          <div>
            <p className="font-bold text-sm">My Airtable Base</p>
            <p className="text-xs text-gray-500">5 tables available</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-[#00C853]"></div>
          <span className="text-gray-600">Connected to Airtable</span>
        </div>
      </div>
    )
  },
  {
    number: '03',
    icon: Folders,
    title: 'Select Tables',
    description: 'Choose which Airtable table and database table to sync. We show you all available options.',
    color: 'orange',
    visual: (
      <div className="mt-4 border-2 border-black bg-gray-50 p-3 space-y-2">
        <div className="bg-white px-3 py-2 border-2 border-black text-sm flex items-center justify-between hover:bg-gray-50 cursor-default">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FCE4A4] border border-black flex items-center justify-center text-xs font-bold">
              AT
            </div>
            <span>Products Table</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <div className="bg-white px-3 py-2 border-2 border-black text-sm flex items-center justify-between hover:bg-gray-50 cursor-default">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#336791] text-white border border-black flex items-center justify-center text-xs font-bold">
              PG
            </div>
            <span>products table</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    )
  },
  {
    number: '04',
    icon: Settings,
    title: 'Map Your Fields',
    description: 'Use our visual mapper to connect database columns to Airtable fields. Handle type conversions automatically.',
    color: 'black',
    visual: (
      <div className="mt-4 border-2 border-black bg-gray-50 p-3 space-y-2">
        <div className="flex items-center gap-2 text-sm justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-[#FCE4A4] text-black px-2 py-1 font-medium border border-black">Name</span>
            <ArrowLeftRight className="w-4 h-4 text-[#FF4500]" />
            <span className="bg-[#336791] text-white px-2 py-1 font-medium border border-black">name</span>
          </div>
          <Check className="w-4 h-4 text-[#00C853]" />
        </div>
        <div className="flex items-center gap-2 text-sm justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-[#FCE4A4] text-black px-2 py-1 font-medium border border-black">Price</span>
            <ArrowLeftRight className="w-4 h-4 text-[#FF4500]" />
            <span className="bg-[#336791] text-white px-2 py-1 font-medium border border-black">price</span>
          </div>
          <Check className="w-4 h-4 text-[#00C853]" />
        </div>
      </div>
    )
  },
  {
    number: '05',
    icon: Zap,
    title: 'Start Syncing',
    description: 'Enable your sync and watch data flow in real-time. Get instant notifications for any sync issues.',
    color: 'orange',
    visual: (
      <div className="mt-4 border-2 border-black bg-gray-50 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse"></div>
            <span className="text-gray-600">Synced 1,247 rows</span>
          </div>
          <RefreshCw className="w-4 h-4 text-[#FF4500] animate-spin" style={{ animationDuration: '2s' }} />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></div>
          <span className="text-gray-600">Real-time sync active</span>
        </div>
      </div>
    )
  }
];

const colorClasses = {
  orange: {
    bg: 'bg-[#FF4500]',
    light: 'bg-orange-50',
    text: 'text-[#FF4500]',
    border: 'border-[#FF4500]',
    badge: 'border-[#FF4500] text-[#FF4500]'
  },
  black: {
    bg: 'bg-black',
    light: 'bg-gray-100',
    text: 'text-black',
    border: 'border-black',
    badge: 'border-black text-black'
  }
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-y-2 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6"
          >
            <Zap className="w-4 h-4 text-[#FF4500]" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Getting Started</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tight mb-4"
          >
            Up and running in 5 minutes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            No complex configurations or engineering time required. Just connect, map, and sync.
          </motion.p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical connection line - desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#FF4500] via-black to-[#FF4500] hidden lg:block transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as ColorKey];
              const isEven = index % 2 === 0;
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative lg:flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:min-h-50`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-20 lg:text-right' : 'lg:pl-20 lg:text-left'}`}>
                    <div className={`inline-flex items-center gap-2 border-2 ${colors.badge} px-4 py-2 font-bold uppercase tracking-wider text-sm mb-4`}>
                      Step {step.number}
                    </div>
                    <h3 className="font-heading font-bold text-2xl uppercase mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    {step.visual && (
                      <div className={`${isEven ? 'lg:ml-auto' : ''} max-w-xs ${isEven ? 'lg:ml-auto' : ''}`}>
                        {step.visual}
                      </div>
                    )}
                  </div>

                  {/* Center icon - desktop */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 ${colors.bg} flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] border-2 border-black`}
                    >
                      <StepIcon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Mobile icon and visual indicator */}
                  <div className="lg:hidden flex items-center gap-4 mt-4 mb-6">
                    <div className={`w-14 h-14 ${colors.bg} flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] border-2 border-black`}>
                      <StepIcon className="w-7 h-7 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-0.5 bg-linear-to-r from-gray-300 to-transparent" />
                    )}
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-24 pt-12 border-t-2 border-black"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Zero Code Required',
                description: 'Everything is point and click. No configuration files, no CLI, no coding.',
                icon: <Zap className="w-6 h-6 text-[#FF4500]" />
              },
              {
                title: '5 Minute Setup',
                description: 'From signup to first sync in under 5 minutes. Really.',
                icon: <Settings className="w-6 h-6 text-[#FF4500]" />
              },
              {
                title: 'Real-Time Sync',
                description: 'Changes sync instantly between Airtable and your database.',
                icon: <RefreshCw className="w-6 h-6 text-[#FF4500]" />
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="p-6 border-2 border-black bg-white hover:shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 cursor-default"
              >
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="font-heading font-bold text-xl uppercase mb-3">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA after steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 border-2 border-black bg-white p-6 hover:shadow-[8px_8px_0px_0px_#000] transition-shadow">
            <div className="w-12 h-12 bg-[#FF4500] text-white flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-lg uppercase">Ready to start syncing?</p>
              <p className="text-gray-600 text-sm">Start your free trial and sync your first database in minutes.</p>
            </div>
            <button className="btn-primary ml-4">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
