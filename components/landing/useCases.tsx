import * as motion from "framer-motion/client";

const useCases = [
  {
    emoji: '🚀',
    title: 'SaaS Startups',
    scenario: 'Production app on Postgres. Operations team on Airtable. Need them synced.',
    result: 'Save 10+ hours/week maintaining custom scripts'
  },
  {
    emoji: '🏢',
    title: 'Agencies',
    scenario: 'Multiple clients with different databases. Clients love Airtable dashboards.',
    result: 'Manage 10+ client syncs from one dashboard'
  },
  {
    emoji: '🛒',
    title: 'E-commerce',
    scenario: 'Inventory in MySQL. Customer service team uses Airtable for support.',
    result: 'Real-time inventory updates prevent overselling'
  }
];

export default function UseCases() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Built for Teams Like Yours
          </h2>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-6 text-center">{useCase.emoji}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                {useCase.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500 font-semibold mb-2">Scenario:</p>
                  <p className="text-slate-700">{useCase.scenario}</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-indigo-600 font-semibold mb-2">Result:</p>
                  <p className="text-slate-900 font-medium">{useCase.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
