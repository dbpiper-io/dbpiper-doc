import * as motion from "framer-motion/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const leftColumnFaqs = [
  {
    question: 'How does real-time sync work?',
    answer: 'DBPiper uses database triggers and webhooks to detect changes instantly. When a row is inserted, updated, or deleted in your database, we capture that change and push it to Airtable within seconds. The same works in reverse — changes in Airtable are pushed to your database automatically.'
  },
  {
    question: 'How is this different from Zapier?',
    answer: 'Zapier has 15-minute delays and isn\'t built for database sync. DBPiper uses real-time webhooks and database triggers for <5 second sync times. Plus, we\'re 10x more reliable for database operations.'
  },
  {
    question: 'Why not just use Whale Sync?',
    answer: 'Whale Sync only works with Supabase. If you have Postgres, MySQL, or MongoDB, you\'d need to migrate your entire database to Supabase. DBPiper works with your existing infrastructure.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We use bank-level encryption (AES-256) for all credentials. Database connections are SSL-encrypted. We never store your actual data - just sync it in real-time between your systems.'
  },
  {
    question: 'What happens if both sides change at once?',
    answer: 'You choose the conflict resolution strategy: last-write-wins, Airtable-wins, database-wins, or manual review. All conflicts are logged for your review.'
  },
  {
    question: 'Can I sync multiple tables?',
    answer: 'Yes! Starter plan includes 3 syncs, Pro includes 10. Each sync can be a different table pair (e.g., Customers, Orders, Products).'
  }
];


const rightColumnFaqs = [
  {
    question: 'What if I need to sync with multiple Airtable bases?',
    answer: 'Each database can sync to multiple Airtable bases, and each Airtable base can receive data from multiple databases. There\'s no limit on the number of sync configurations within your plan\'s connection limits.'
  },
  {
    question: 'Do you support MySQL and MongoDB?',
    answer: 'Yes! We support Postgres, MySQL, and MongoDB. More databases coming soon based on demand.'
  },
  {
    question: 'What if I\'m a Sequin customer?',
    answer: 'We\'re offering free migration assistance and 50% off for 3 months. Book a migration call and we\'ll handle the entire transition'
  },
  {
    question: 'How do I get started?',
    answer: 'Join the beta waitlist now. We\'re launching soon and accepting 50 founding users. You\'ll get priority access and founding user perks.'
  },
  {
    question: 'What\'s your refund policy?',
    answer: '30-day money-back guarantee, no questions asked. If DBPiper doesn\'t work for you, we\'ll refund your first month immediately.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, absolutely. No contracts, no commitments. Cancel with one click from your dashboard.'
  }
];


export default function FAQ() {
  return (
    <section className="py-24 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary uppercase tracking-wide mb-3"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            Everything you need to know about DBPiper
          </motion.p>
        </div>

        {/* Two Column FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumnFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`left-${index}`}
                  className="bg-white rounded-xl border border-slate-100 px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-24 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {rightColumnFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`right-${index}`}
                  className="bg-white rounded-xl border border-slate-100 px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-24 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center bg-linear-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Still have questions?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div
              className="bg-primary text-white p-2 rounded-lg"
            >
              Email us at aliamer19ali@gmail.com
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
