import * as motion from "framer-motion/client";
import { ArrowLeftRight } from 'lucide-react';

const databases = [
  {
    name: 'PostgreSQL',
    abbr: 'PG',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600'
  },
  {
    name: 'MySQL',
    abbr: 'MY',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600'
  },
  {
    name: 'MongoDB',
    abbr: 'MG',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  }
];

export default function Databases() {
  return (
    <section className="py-24 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3"
          >
            Supported Databases
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Connect your database directly
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            No need for middleware or hosted database providers. DBPiper connects directly to your existing databases.
          </motion.p>
        </div>

        {/* Database visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Databases column */}
            <div className="flex flex-col gap-4">
              {databases.map((db, index) => (
                <motion.div
                  key={db.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 pr-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${db.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{db.abbr}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{db.name}</p>
                    <p className="text-sm text-slate-500">Direct connection</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connection arrows */}
            <div className="flex flex-col items-center gap-4 py-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary-500 via-primary-500 to-teal-500 flex items-center justify-center shadow-xl">
                  <ArrowLeftRight className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-3 bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-teal-500/20 rounded-full blur-xl" />
              </motion.div>
              <div className="text-center">
                <p className="text-sm font-semibold text-indigo-600">DBPiper</p>
                <p className="text-xs text-slate-500">Real-time sync</p>
              </div>
            </div>

            {/* Airtable */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-teal-400 via-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">AT</span>
                </div>
                <div>
                  <p className="font-bold text-xl text-slate-900">Airtable</p>
                  <p className="text-sm text-slate-500">Any base or table</p>
                </div>
              </div>

              {/* Airtable preview */}
              <div className="mt-6 bg-slate-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded bg-green-400" />
                  <span className="text-xs font-medium text-slate-600">Live Table</span>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="h-6 bg-slate-200 rounded flex-1" />
                    <div className="h-6 bg-slate-200 rounded flex-1" />
                    <div className="h-6 bg-slate-200 rounded flex-1" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-teal-100 rounded flex-1" />
                    <div className="h-6 bg-teal-100 rounded flex-1" />
                    <div className="h-6 bg-teal-100 rounded flex-1" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-teal-100 rounded flex-1" />
                    <div className="h-6 bg-teal-100 rounded flex-1" />
                    <div className="h-6 bg-teal-100 rounded flex-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
