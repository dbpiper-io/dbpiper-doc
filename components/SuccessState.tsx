import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessState() {


  return (
    <div className="min-h-screen bg-linear-to-b from-white via-green-50/30 to-white relative overflow-hidden flex items-center justify-center">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-8"
          >
            <CheckCircle2 className="w-16 h-16 text-green-600" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            You're In! 🎉
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Check your email - we just sent you a confirmation.
          </p>

          <p className="text-slate-600">
            Have questions?{' '}
            <a href="mailto:aliamer19ali@gmail.com" className="text-primary  font-semibold">
              Email us at aliamer19ali@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
