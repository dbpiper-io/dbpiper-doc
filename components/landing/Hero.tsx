import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, RefreshCw, Clock } from 'lucide-react';
import * as motion from "framer-motion/client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-indigo-50/30 to-teal-50/20" />

      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8"
          >
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">Sync in under 5 seconds</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight max-w-4xl mx-auto"
          >
            Real-Time Database Sync
            <span className="block mt-2 bg-linear-to-r from-primary to-teal-500 bg-clip-text text-transparent">
              for Airtable
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed pb-5"
          >
            Two-way sync between Postgres, MySQL, MongoDB and Airtable.
            Update data in one tool, and DBPiper mirrors it in the other — instantly.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto transition-all duration-700 delay-100 opacity-100`}
          >
            Postgres • MySQL • MongoDB | 10-minute setup | $15/month
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
              <Link
                href="/waitlist"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-500" />
              <span>10 minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-teal-500" />
              <span>Bidirectional sync</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-teal-500" />
              <span>No code required</span>
            </div>
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-teal-500/20 rounded-3xl blur-2xl" />

            {/* Main card */}
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-white rounded-lg text-xs text-slate-400 border border-slate-200">
                    app.dbpiper.io
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="p-6 sm:p-8 bg-linear-to-br from-slate-50 to-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Source panel */}
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-sm">PG</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">PostgreSQL</p>
                        <p className="text-xs text-slate-500">Source Database</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-slate-100 rounded w-full" />
                      <div className="h-2 bg-slate-100 rounded w-3/4" />
                      <div className="h-2 bg-slate-100 rounded w-5/6" />
                    </div>
                  </div>

                  {/* Sync animation */}
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary-500 to-teal-500 flex items-center justify-center shadow-lg shadow-primary-200">
                        <RefreshCw className="w-7 h-7 text-white animate-spin" style={{ animationDuration: '3s' }} />
                      </div>
                      <div className="absolute -inset-2 bg-linear-to-r from-indigo-500/20 to-teal-500/20 rounded-full blur-lg animate-pulse" />
                    </div>
                  </div>

                  {/* Destination panel */}
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                        <span className="text-teal-600 font-bold text-sm">AT</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Airtable</p>
                        <p className="text-xs text-slate-500">Destination</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-teal-100 rounded w-full" />
                      <div className="h-2 bg-teal-100 rounded w-3/4" />
                      <div className="h-2 bg-teal-100 rounded w-5/6" />
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="mt-6 flex items-center justify-between px-4 py-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-green-700">Syncing in real-time</span>
                  </div>
                  <span className="text-xs text-green-600">Last sync: 2 seconds ago</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
