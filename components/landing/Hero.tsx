import * as motion from "framer-motion/client";
import Link from "next/link"
import { ArrowRight, MousePointer, Code2 } from 'lucide-react';
import Image from 'next/image'

export default function Hero() {

  const databases = [
    {
      name: 'Webflow',
      abbr: 'WF',
      color: 'bg-[#4353FF]',
      bgColor: 'bg-[#4353FF]/10',
      borderColor: 'border-[#4353FF]/20',
      textColor: 'text-[#4353FF]'
    },
    {
      name: 'PostgreSQL',
      abbr: 'PG',
      color: 'bg-[#336791]',
      bgColor: 'bg-[#336791]/10',
      borderColor: 'border-[#336791]/20',
      textColor: 'text-[#336791]'
    },
    {
      name: 'MongoDB',
      abbr: 'MG',
      color: 'bg-[#00ED64]',
      bgColor: 'bg-[#00ED64]/10',
      borderColor: 'border-[#00ED64]/20',
      textColor: 'text-[#00ED64]'
    },
    {
      name: 'Supabase',
      abbr: 'SB',
      color: 'bg-[#3ECF8E]',
      bgColor: 'bg-[#3ECF8E]/10',
      borderColor: 'border-[#3ECF8E]/20',
      textColor: 'text-[#3ECF8E]'
    },
    {
      name: 'Google Sheets',
      abbr: 'GS',
      color: 'bg-[#0F9D58]',
      bgColor: 'bg-[#0F9D58]/10',
      borderColor: 'border-[#0F9D58]/20',
      textColor: 'text-[#0F9D58]'
    },
    {
      name: 'MySQL',
      abbr: 'MY',
      color: 'bg-[#FF4500]',
      bgColor: 'bg-[#FF4500]/10',
      borderColor: 'border-[#FF4500]/20',
      textColor: 'text-[#FF4500]'
    }
  ];

  return (<section className="pt-28 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF4500]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>

    <div className="max-w-7xl mx-auto relative">
      {/* Badge for vibe coders */}
      <div className="flex justify-center mb-8 animate-fade-in">
        <div className="inline-flex items-center gap-3 border-2 border-black px-6 py-3 bg-white hover:shadow-[4px_4px_0px_0px_#000] transition-shadow cursor-default">
          <div className="flex items-center gap-2">
            <MousePointer className="w-4 h-4 text-[#FF4500]" />
            <span className="font-bold">Point & Click Setup</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#FF4500]" />
            <span className="text-gray-600">Zero Code Required</span>
          </div>
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-none mb-6 animate-slide-up">
          Sync Your Databases
          <span className="block text-[#FF4500] animate-gradient-text">In Real-Time</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The <strong>no-code</strong> way to sync Airtable with PostgreSQL, Supabase, MongoDB & more.
          Built for <strong>vibe coders</strong> and makers who ship fast.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/waitlist"
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4 hover:scale-105 transition-transform"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 animate-bounce-x" />
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center group cursor-default">
            <div className="font-heading font-black text-4xl text-[#FF4500] group-hover:scale-110 transition-transform">&lt;5s</div>
            <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mt-1">Sync Time</div>
          </div>
          <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
          <div className="text-center group cursor-default">
            <div className="font-heading font-black text-4xl group-hover:scale-110 transition-transform">5 min</div>
            <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mt-1">Setup Time</div>
          </div>
          <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
          <div className="text-center group cursor-default">
            <div className="font-heading font-black text-4xl group-hover:scale-110 transition-transform">99.9%</div>
            <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mt-1">Uptime</div>
          </div>
          <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
          <div className="text-center group cursor-default">
            <div className="font-heading font-black text-4xl group-hover:scale-110 transition-transform">0</div>
            <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mt-1">Lines of Code</div>
          </div>
        </div>
      </div>

      {/* Visual Demo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        {/* Connection lines background - desktop only */}
        <div className="hidden lg:block absolute inset-0">
          <div className="absolute left-1/4 top-1/2 w-1/2 h-0.5 bg-linear-to-r from-black via-[#FF4500] to-black"></div>
          <div className="absolute left-1/2 top-1/2 w-0.5 h-1/4 bg-linear-to-b from-black via-[#FF4500] to-black"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Databases column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="mb-6">
              <h3 className="font-heading font-bold text-xl uppercase mb-3 text-center lg:text-left">Your Databases</h3>
              <p className="text-gray-600 text-sm">Connect directly to any of these</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {databases.slice(0, 4).map((db, index) => (
                <motion.div
                  key={db.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`border-2 border-black p-4 bg-white hover:shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 cursor-default ${db.bgColor}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${db.color} text-white flex items-center justify-center font-bold text-sm border-2 border-black`}>
                      {db.abbr}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{db.name}</p>
                      <p className="text-xs text-gray-500">Direct</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center sync hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center py-8 lg:py-0"
          >
            <div className="relative">
              <div className="w-24 h-24 border-4 border-black bg-white flex items-center justify-center hover:shadow-[8px_8px_0px_0px_#FF4500] transition-shadow group">
                <Image
                  width={25}
                  height={25}
                  src="/logo.svg"
                  className="w-20 h-20 text-[#FF4500] group-hover:rotate-180 transition-transform duration-300"
                  alt="DBPiper Logo"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-[#FF4500] animate-ping opacity-20"></div>
            </div>

            <div className="mt-6 text-center">
              <p className="font-heading font-black text-xl uppercase">DBPiper</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse"></div>
                <p className="font-mono text-xs uppercase tracking-widest text-gray-500">Real-Time Sync</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="font-heading font-black text-2xl text-[#FF4500]">&lt;5s</div>
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">Sync Time</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-2xl">99.9%</div>
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">Uptime</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-2xl">0</div>
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">Setup Time</div>
              </div>
            </div>
          </motion.div>

          {/* Airtable column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="space-y-4"
          >
            <div className="mb-6 text-center lg:text-right">
              <h3 className="font-heading font-bold text-xl uppercase mb-3">Your Airtable</h3>
              <p className="text-gray-600 text-sm">Sync with any base or table</p>
            </div>

            <div className="border-2 border-black bg-[#FCE4A4] hover:shadow-[8px_8px_0px_0px_#000] transition-all p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-black text-white flex items-center justify-center font-bold text-xl border-2 border-black">
                  AT
                </div>
                <div>
                  <p className="font-heading font-bold text-xl uppercase">Airtable</p>
                  <p className="font-mono text-sm text-gray-600">products table</p>
                </div>
              </div>

              {/* Airtable preview */}
              <div className="bg-white border-2 border-black p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#FF4500] rounded-full"></div>
                    <span className="font-mono text-xs uppercase tracking-wider">Live Table</span>
                  </div>
                  <span className="text-xs bg-gray-100 px-2 py-1 font-mono">1,247 records</span>
                </div>

                <div className="space-y-2">
                  {/* Header row */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-6 bg-black text-white text-xs font-bold flex items-center justify-center px-2">ID</div>
                    <div className="h-6 bg-black text-white text-xs font-bold flex items-center justify-center px-2">NAME</div>
                    <div className="h-6 bg-black text-white text-xs font-bold flex items-center justify-center px-2">PRICE</div>
                  </div>

                  {/* Data rows */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-6 bg-gray-50 border border-gray-200 text-xs flex items-center justify-center">#001</div>
                    <div className="h-6 bg-gray-50 border border-gray-200 text-xs flex items-center justify-center">Widget A</div>
                    <div className="h-6 bg-gray-50 border border-gray-200 text-xs flex items-center justify-center">$29.99</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-6 bg-gray-50 border border-gray-200 text-xs flex items-center justify-center">#002</div>
                    <div className="h-6 bg-gray-50 border border-gray-200 text-xs flex items-center justify-center">Widget B</div>
                    <div className="h-6 bg-gray-50 border border-gray-200 text-xs flex items-center justify-center">$49.99</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional databases row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-12 border-t-2 border-black"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-xl uppercase mb-3">And Many More</h3>
            <p className="text-gray-600">Plus custom integrations for your specific needs</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Airtable', color: 'bg-[#FCE4A4]', text: 'text-black', icon: 'AT' },
              { name: 'PostgreSQL', color: 'bg-[#336791]', text: 'text-white', icon: 'PG' },
              { name: 'Supabase', color: 'bg-[#3ECF8E]', text: 'text-white', icon: 'SB' },
              { name: 'MongoDB', color: 'bg-[#00ED64]', text: 'text-black', icon: 'MO' },
              { name: 'Webflow', color: 'bg-[#4353FF]', text: 'text-white', icon: 'WF' },
              { name: 'Google Sheets', color: 'bg-[#0F9D58]', text: 'text-white', icon: 'GS' },
            ].map((db, index) => (
              <motion.div
                key={db.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className={`flex items-center gap-3 px-5 py-3 bg-white border-2 border-black hover:shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1 cursor-default`}
              >
                <div className={`w-10 h-10 ${db.color} ${db.text} flex items-center justify-center font-bold text-sm border border-black`}>
                  {db.name.slice(0, 2)}
                </div>
                <span className="font-bold text-sm">{db.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>);
}
