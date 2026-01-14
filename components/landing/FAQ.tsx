import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Setup & Integration",
    items: [
      {
        question: "How long does it take to set up DBPiper?",
        answer: "Most users are up and running in under 5 minutes. Simply connect your database, authorize Airtable, map your fields, and start syncing. No complex configurations or engineering time required."
      },
      {
        question: "What databases does DBPiper support?",
        answer: "DBPiper supports PostgreSQL, MySQL, MongoDB, Supabase, and SQLite natively. We also support Webflow CMS, Google Sheets, and offer custom integrations for other databases. All connections are direct—no middleware required."
      },
      {
        question: "Do I need to install any software or libraries?",
        answer: "No installation required. DBPiper is a cloud-based platform that connects directly to your databases via secure SSL connections. Everything runs in your browser—no CLI, no configuration files, no dependencies."
      },
      {
        question: "Can I sync multiple Airtable bases with one database?",
        answer: "Yes! You can create multiple sync configurations from one database to different Airtable bases or tables. Each sync configuration is independent and can have its own field mappings and sync schedules."
      }
    ]
  },
  {
    category: "Features & Capabilities",
    items: [
      {
        question: "How real-time is the sync?",
        answer: "Changes sync in under 5 seconds. For PostgreSQL and MySQL, we use database triggers and listen for changes. For other databases, we poll for changes at configurable intervals (as frequent as 5 seconds). Airtable changes are captured instantly via webhooks."
      },
      {
        question: "Can I sync data both ways (bidirectional)?",
        answer: "Absolutely. DBPiper supports bidirectional sync by default. Changes in Airtable sync to your database, and database changes sync back to Airtable. You can also configure one-way sync if preferred."
      },
      {
        question: "How do you handle data type conversions?",
        answer: "DBPiper automatically handles type conversions between database types and Airtable field types. For example: PostgreSQL timestamps become Airtable date fields, JSONB becomes rich text, and we handle all common data type mappings automatically."
      },
      {
        question: "Can I filter which records get synced?",
        answer: "Yes. You can create filter rules to only sync records that match specific conditions (price > $100, status = 'active', created after Jan 1, etc.). Filters can use AND/OR logic and support text, numbers, dates, and booleans."
      }
    ]
  },
  {
    category: "Security & Reliability",
    items: [
      {
        question: "Is my data secure with DBPiper?",
        answer: "Yes. We use bank-level 256-bit encryption for all data in transit and at rest. Database credentials are encrypted using AWS KMS. We never store your actual database data—only sync metadata. We're SOC 2 compliant and all connections use SSL/TLS."
      },
      {
        question: "What happens during connection failures or downtime?",
        answer: "DBPiper automatically retries failed syncs with exponential backoff. All pending changes are queued and processed once connectivity is restored. You receive notifications for any extended outages, and we guarantee 99.9% uptime for our sync infrastructure."
      },
      {
        question: "How do you handle conflicting changes?",
        answer: "You choose the conflict resolution strategy: last-write-wins, source-priority (Airtable or database), or manual review. All conflicts are logged with before/after values, and you can configure automatic resolution rules based on field-level priorities."
      },
      {
        question: "Can I roll back changes if something goes wrong?",
        answer: "Yes. DBPiper maintains a full audit log of all changes with before/after values. You can roll back individual records or entire sync sessions to any point in the last 30 days (90 days on Pro+ plans)."
      }
    ]
  },
  {
    category: "Pricing & Support",
    items: [
      {
        question: "What's included in the free plan?",
        answer: "The free plan includes 500 records/month, 1 sync configuration, 2 connections (e.g., 1 database + 1 Airtable), daily sync frequency, and community support. Perfect for testing and small projects."
      },
      {
        question: "How does the 14-day free trial work?",
        answer: "Start with any paid plan and use all Pro features for 14 days, no credit card required. If you don't upgrade at the end of the trial, you automatically revert to the free plan. No charges unless you manually upgrade."
      },
      {
        question: "What kind of support do you offer?",
        answer: "All plans include email support with 24-hour response time. Pro and Enterprise plans include priority support with 4-hour response time, dedicated Slack channel access, and technical account management for Enterprise customers."
      },
      {
        question: "Can I cancel or change my plan anytime?",
        answer: "Yes. Upgrade, downgrade, or cancel anytime from your dashboard. Changes take effect immediately, and we prorate charges. No contracts, no commitments, no hidden fees."
      }
    ]
  },
  {
    category: "Advanced Use Cases",
    items: [
      {
        question: "Can DBPiper create database tables automatically?",
        answer: "Yes. If you're syncing from Airtable to a database and the table doesn't exist, DBPiper can automatically create it with the appropriate schema (columns, data types, constraints) based on your Airtable fields."
      },
      {
        question: "Does DBPiper handle large databases and high-volume syncs?",
        answer: "Absolutely. We've tested with databases containing millions of records. DBPiper uses intelligent batching, incremental syncs, and optimized queries to handle high-volume workloads efficiently without impacting your database performance."
      },
      {
        question: "Can I use DBPiper for data migration between systems?",
        answer: "Yes. Many users use DBPiper for one-time data migrations between legacy systems and Airtable or between different databases. You can run a full sync to migrate all data, then continue with real-time sync for ongoing changes."
      },
      {
        question: "Do you offer custom integrations or APIs?",
        answer: "Yes. Enterprise plans include custom integration development. We also offer a REST API for programmatic management of sync configurations, monitoring sync status, and accessing audit logs. Webhooks are available for sync completion events."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-y-2 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6">
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#FF4500]">FAQ</span>
          </div>

          <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about syncing databases with Airtable. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* SEO-optimized FAQ structure with schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.flatMap(category =>
                category.items.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              )
            })
          }}
        />

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-[#FF4500]"></div>
                <h2 className="font-heading font-bold text-2xl uppercase">
                  {category.category}
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.items.map((faq, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`${categoryIndex}-${itemIndex}`}
                    className="border-2 border-black bg-white hover:shadow-[4px_4px_0px_0px_#000] transition-all"
                  >
                    <AccordionTrigger className="text-left font-heading font-bold text-lg uppercase hover:text-[#FF4500] p-6 data-[state=open]:text-[#FF4500]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 p-6 pt-0 mb-4 leading-relaxed">
                      <div className="prose prose-gray max-w-none">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
