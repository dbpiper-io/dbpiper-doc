import * as motion from "framer-motion/client";
import { RefreshCw, Zap, Filter, Shield, Database, MousePointer, Sparkles, Clock, Settings, CheckCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Bidirectional Sync',
      description: 'Changes flow both ways automatically. Update in Airtable or your database — both stay in sync.',
      delay: 0
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-Time Updates',
      description: 'Webhooks detect changes instantly. Your data syncs in under 5 seconds, automatically.',
      delay: 0.1
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: 'Smart Filtering',
      description: 'Only sync records that match your criteria. Filter by price, status, date, or any field.',
      delay: 0.2
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Conflict Resolution',
      description: 'Choose how to handle conflicts: last-write-wins or source-priority. You decide.',
      delay: 0.3
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Auto-Create Tables',
      description: 'No existing table? DBPiper creates it automatically with the right schema. Magic.',
      delay: 0.4
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: 'Visual Interface',
      description: 'Point and click to configure everything. No code, no CLI, no configuration files.',
      delay: 0.5
    },
  ];

  const stats = [
    {
      value: '< 5s',
      label: 'Sync Time',
      icon: <Clock className="w-4 h-4" />
    },
    {
      value: '5 min',
      label: 'Setup Time',
      icon: <Settings className="w-4 h-4" />
    },
    {
      value: '99.9%',
      label: 'Uptime',
      icon: <CheckCircle className="w-4 h-4" />
    },
    {
      value: '0',
      label: 'Code Required',
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 border-y-2 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#FF4500]" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tight mb-4"
          >
            Built for No-Code Makers
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to sync data without writing a single line of code. Built for speed and simplicity.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 border-2 border-black bg-white text-center hover:shadow-[4px_4px_0px_0px_#000] transition-all cursor-default"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-[#FF4500]">
                  {stat.icon}
                </div>
                <div className="font-heading font-black text-3xl">{stat.value}</div>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="p-8 border-2 border-black bg-white hover:shadow-[8px_8px_0px_0px_#000] transition-all cursor-default group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-16 h-16 bg-[#FF4500] text-white flex items-center justify-center mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-heading font-bold text-xl uppercase mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              
              {/* Hover indicator */}
              <motion.div 
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="h-0.5 bg-[#FF4500] mt-4"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 border-2 border-black bg-black text-white p-8 hover:shadow-[8px_8px_0px_0px_#FF4500] transition-shadow"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border-2 border-[#FF4500] px-4 py-2 bg-black mb-6">
                <Zap className="w-4 h-4 text-[#FF4500]" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-white">Power Feature</span>
              </div>
              <h3 className="font-heading font-bold text-2xl uppercase mb-4">Smart Error Recovery</h3>
              <p className="text-gray-300 mb-6">
                When syncs fail (they sometimes do), DBPiper automatically retries with exponential backoff and sends you notifications. No data loss, ever.
              </p>
              <ul className="space-y-3">
                {[
                  'Automatic retry with exponential backoff',
                  'Email and Slack notifications',
                  'Detailed error logs with context',
                  'Manual override when needed',
                  'Data validation before sync'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-5 h-5 bg-[#FF4500] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-white text-black p-6 border-2 border-white"
            >
              <div className="font-mono text-xs uppercase tracking-wider mb-4 text-gray-500">Sync Status Dashboard</div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#00C853] animate-pulse"></div>
                    <span className="font-mono text-sm">Sync #2451</span>
                  </div>
                  <span className="text-xs text-gray-500">Completed</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#FF4500] animate-pulse"></div>
                    <span className="font-mono text-sm">Sync #2452</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Retrying in 30s</span>
                    <RefreshCw className="w-3 h-3 text-[#FF4500] animate-spin" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#00C853]"></div>
                    <span className="font-mono text-sm">Sync #2453</span>
                  </div>
                  <span className="text-xs text-gray-500">Completed</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200">
                <p className="text-sm text-black">
                  <strong>Auto-recovery:</strong> Failed syncs automatically retry 3 times before alerting you.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
