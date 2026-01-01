import * as motion from "framer-motion/client";
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Database, RefreshCw } from 'lucide-react';
import Link from 'next/link'

export default function FooterCTA() {
  return (
    <section className="py-24 bg-linear-to-br from-indigo-600 via-primary to-indigo-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
            <Database className="w-6 h-6 text-white" />
          </div>
          <RefreshCw className="w-6 h-6 text-white/60" />
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-bold">AT</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to Stop Wrestling with Database Sync?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-blue-200 mb-6"
        >
          <span className="flex items-center gap-2">
            <Check />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <Check />
            50% off for founding users
          </span>
          <span className="flex items-center gap-2">
            <Check />
            Cancel anytime
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" variant='secondary' className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
            <Link
              href="/waitlist"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-sm text-indigo-200"
        >
          Join 500+ teams already syncing with DBPiper
        </motion.p>
      </div>

      {/* Footer */}
      <div className="relative mt-24 border-t border-white/10 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <RefreshCw className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">DBPiper</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-indigo-200">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Status</a>
            </div>

            <p className="text-sm text-indigo-200">
              © 2026 DBPiper. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
