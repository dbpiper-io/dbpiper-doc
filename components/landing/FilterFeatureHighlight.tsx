import * as motion from "framer-motion/client";
import { Check, Filter, Zap, Database, Settings, Sliders } from 'lucide-react';

export default function FilterFeatureHighlight() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 xl:gap-16"
        >
          {/* Left Column - Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border-2 border-[#FF4500] px-4 py-2 bg-black mb-6"
            >
              <Filter className="w-4 h-4 text-[#FF4500]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Powerful Feature</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mb-4"
            >
              Smart Data<br />
              <span className="text-[#FF4500]">Filtering</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg mb-6 md:mb-8"
            >
              Only sync the data you need. Create powerful filter rules to sync records based on any condition — no formulas required.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3 md:space-y-4 mb-8"
            >
              {[
                { icon: <Database className="w-4 h-4" />, text: 'Filter by numbers: price > 100, quantity < 10' },
                { icon: <Sliders className="w-4 h-4" />, text: 'Filter by text: status equals "Active"' },
                { icon: <Settings className="w-4 h-4" />, text: 'Filter by dates: created after Jan 1, 2024' },
                { icon: <Zap className="w-4 h-4" />, text: 'Combine filters with AND/OR logic' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-8 h-8 bg-[#FF4500] flex items-center justify-center shrink-0 mt-0.5"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            >
              {[
                { value: '10x', label: 'Faster Setup' },
                { value: '90%', label: 'Less Data' },
                { value: '100%', label: 'Customizable' },
              ].map((stat, index) => (
                <div key={index} className="border-2 border-white/20 p-3 md:p-4 text-center hover:border-[#FF4500] transition-colors">
                  <div className="font-heading font-black text-xl md:text-2xl text-[#FF4500]">{stat.value}</div>
                  <div className="font-mono text-xs uppercase tracking-wider opacity-80 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Interactive Example */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="lg:w-1/2"
          >
            <div className="bg-white text-black p-4 md:p-6 border-2 border-white hover:shadow-[4px_4px_0px_0px_#FF4500] md:hover:shadow-[8px_8px_0px_0px_#FF4500] transition-shadow">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">Filter Example</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse"></div>
                  <span className="font-mono text-xs">Live Preview</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {/* Filter Rule 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap items-center gap-2 md:gap-3 p-3 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-black text-white flex items-center justify-center font-bold text-xs md:text-sm">
                    1
                  </div>
                  <span className="font-mono text-xs md:text-sm flex-1">price</span>
                  <span className="px-2 py-1 bg-[#FF4500] text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                    GREATER THAN
                  </span>
                  <span className="font-mono text-xs md:text-sm bg-gray-100 px-2 py-1">100</span>
                </motion.div>

                {/* AND Connector */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65 }}
                  className="text-center font-bold text-gray-400 flex items-center justify-center gap-2"
                >
                  <div className="h-px w-6 md:w-8 bg-gray-300"></div>
                  AND
                  <div className="h-px w-6 md:w-8 bg-gray-300"></div>
                </motion.div>

                {/* Filter Rule 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap items-center gap-2 md:gap-3 p-3 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-black text-white flex items-center justify-center font-bold text-xs md:text-sm">
                    2
                  </div>
                  <span className="font-mono text-xs md:text-sm flex-1">status</span>
                  <span className="px-2 py-1 bg-[#FF4500] text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                    EQUALS
                  </span>
                  <span className="font-mono text-xs md:text-sm bg-gray-100 px-2 py-1">"active"</span>
                </motion.div>
              </div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-4 p-3 bg-yellow-50 border border-yellow-200"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-[#FF4500]" />
                  <span className="font-bold text-xs md:text-sm">Result:</span>
                </div>
                <p className="text-xs md:text-sm">
                  Only sync products where price &gt; $100 AND status is "active"
                </p>
              </motion.div>

              {/* Preview Data */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="mt-6"
              >
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-2">Filtered Data</div>
                <div className="space-y-2">
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-xs md:text-sm">
                    <span className="truncate">Product A - $150 - Active</span>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-2 h-2 rounded-full bg-[#00C853] shrink-0"
                    ></motion.div>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-xs md:text-sm text-gray-400">
                    <span className="truncate">Product B - $80 - Active</span>
                    <div className="text-xs text-gray-500">Filtered out</div>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-xs md:text-sm">
                    <span className="truncate">Product C - $200 - Active</span>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                      className="w-2 h-2 rounded-full bg-[#00C853] shrink-0"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Filter Types */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 pt-8 md:pt-12 lg:pt-16 border-t border-white/20"
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="font-heading font-bold text-xl md:text-2xl uppercase mb-2 md:mb-4">More Filter Types</h3>
            <p className="text-gray-400 text-sm md:text-base">Advanced filtering options for complex scenarios</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: 'Range Filters',
                description: 'Filter values between specific ranges (price between $50 and $200)',
                icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />,
                examples: ['Date ranges', 'Number ranges', 'Time periods']
              },
              {
                title: 'Pattern Matching',
                description: 'Filter using wildcards and regex patterns (email like *@gmail.com)',
                icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
                examples: ['Wildcards', 'Regex patterns', 'Partial matches']
              },
              {
                title: 'Multi-Select',
                description: 'Filter by multiple values at once (status in ["active", "pending", "review"])',
                icon: <Filter className="w-5 h-5 md:w-6 md:h-6" />,
                examples: ['Multiple values', 'Exclusion lists', 'Combined conditions']
              },
            ].map((filter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="border-2 border-white/20 bg-white/5 p-4 md:p-6 hover:border-[#FF4500] hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF4500] text-white flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {filter.icon}
                </div>
                <h4 className="font-heading font-bold text-lg md:text-xl uppercase mb-2">{filter.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{filter.description}</p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {filter.examples.map((example, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 text-xs font-mono">
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
