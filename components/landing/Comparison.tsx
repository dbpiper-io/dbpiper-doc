import * as motion from "framer-motion/client";
import { Check, X, Minus } from 'lucide-react';

const features = [
  { name: 'Real-time sync (<5 sec)', dbpiper: true, zapier: false, whalesync: true, bracket: true },
  { name: 'Bidirectional sync', dbpiper: true, zapier: false, whalesync: true, bracket: true },
  { name: 'Direct Postgres connection', dbpiper: true, zapier: false, whalesync: false, bracket: true },
  { name: 'Direct MySQL connection', dbpiper: true, zapier: false, whalesync: false, bracket: true },
  { name: 'Direct MongoDB connection', dbpiper: true, zapier: false, whalesync: false, bracket: false },
  { name: 'No-code setup', dbpiper: true, zapier: true, whalesync: true, bracket: false },
  { name: 'Starting price', dbpiper: '$15/mo', zapier: '$19/mo*', whalesync: '$49/mo', bracket: '$400/mo' },
];

const competitors = [
  { id: 'dbpiper', name: 'DBPiper', highlight: true },
  { id: 'zapier', name: 'Zapier' },
  { id: 'whalesync', name: 'Whalesync' },
  { id: 'bracket', name: 'Bracket' },
];

export default function Comparison() {
  const renderValue = (value: string | boolean, isHighlight = false) => {
    if (value === true) {
      return (
        <div className={`w-6 h-6 rounded-full ${isHighlight ? 'bg-green-500' : 'bg-green-100'} flex items-center justify-center mx-auto`}>
          <Check className={`w-4 h-4 ${isHighlight ? 'text-white' : 'text-green-600'}`} />
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
          <X className="w-4 h-4 text-slate-400" />
        </div>
      );
    }
    if (value === 'partial') {
      return (
        <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">
          <Minus className="w-4 h-4 text-yellow-600" />
        </div>
      );
    }
    return <span className={`text-sm font-medium ${isHighlight ? 'text-indigo-600' : 'text-slate-600'}`}>{value}</span>;
  };

  return (
    <section className="py-24 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3"
          >
            Comparison
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            How we stack up
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            DBPiper offers the best combination of features, performance, and price for database-to-Airtable sync.
          </motion.p>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto"
        >
          <div className="inline-block min-w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-5 gap-4 p-4 bg-slate-50 border-b border-slate-100">
                <div className="font-semibold text-slate-900">Features</div>
                {competitors.map((comp) => (
                  <div key={comp.id} className="text-center">
                    <span className={`font-semibold ${comp.highlight ? 'text-indigo-600' : 'text-slate-700'}`}>
                      {comp.name}
                    </span>
                    {comp.highlight && (
                      <span className="block text-xs text-indigo-500 mt-0.5">Recommended</span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Rows */}
              {features.map((feature, index) => (
                <div 
                  key={feature.name}
                  className={`grid grid-cols-5 gap-4 p-4 items-center ${index !== features.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  <div className="text-sm text-slate-700">{feature.name}</div>
                  <div className="text-center">{renderValue(feature.dbpiper, true)}</div>
                  <div className="text-center">{renderValue(feature.zapier)}</div>
                  <div className="text-center">{renderValue(feature.whalesync)}</div>
                  <div className="text-center">{renderValue(feature.bracket)}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-6"
        >
          * Zapier pricing for basic plan with 15-minute sync intervals. Real-time sync requires higher tiers.
        </motion.p>
      </div>
    </section>
  );
}
