import {
  RefreshCw,
  Zap,
  Users,
  Target,
  Sparkles,
  Shield,
  Rocket,
  Code2,
  Database,
  Clock,
  Check,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
export default function AboutPage() {
  const values = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'No-Code First',
      description: 'Everything should be accessible without writing code. We believe powerful tools should be simple.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Speed Matters',
      description: 'Fast setup, fast sync, fast support. We optimize for your time, not just our technology.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Trust & Security',
      description: "Your data is your business. We never store it, we just help move it securely between your systems."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Driven',
      description: 'We build for and with our community. Your feedback directly shapes our roadmap.'
    }
  ];

  const milestones = [
    { year: '2026', event: 'DBPiper founded to solve our own Airtable sync problems' },
  ];

  const stats = [
    { value: '5,000+', label: 'Records Synced Daily', icon: <Database className="w-4 h-4" /> },
    { value: '< 5s', label: 'Average Sync Time', icon: <Clock className="w-4 h-4" /> },
    { value: '99.9%', label: 'Uptime', icon: <Shield className="w-4 h-4" /> },
    { value: '0', label: 'Lines of Code Required', icon: <Code2 className="w-4 h-4" /> }
  ];

  const team = [
    {
      name: 'Ali Amer',
      role: 'Founder & Builder',
      bio: 'Previously built multiple no-code tools and APIs. Believes every maker should have access to powerful database tools.',
      initials: 'AA'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-black text-xl uppercase tracking-tight">DBPiper</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm hover:text-[#FF4500] transition-colors font-bold uppercase tracking-wider">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6 md:px-12 lg:px-24">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6">
              <Target className="w-4 h-4 text-[#FF4500]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">About DBPiper</span>
            </div>

            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
              Built for Makers
              <span className="block text-[#FF4500]">By Makers</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              DBPiper is the no-code platform that syncs your databases with Airtable in real-time.
              We believe powerful tools should be simple, fast, and accessible to everyone.
            </p>

            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Start Free Trial
              <Rocket className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* The Problem */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6">
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#FF4500]">The Problem</span>
              </div>

              <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                Databases are powerful.<br />
                Airtable is flexible.<br />
                Why choose?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF4500] text-white flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-bold">Complex Integration</p>
                    <p className="text-gray-600">Connecting databases to Airtable required custom code, middleware, or unreliable Zapier workflows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-bold">Slow & Unreliable</p>
                    <p className="text-gray-600">Existing solutions had 15+ minute delays, frequent failures, and no real-time updates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF4500] text-white flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-bold">No-Code Gap</p>
                    <p className="text-gray-600">Makers and startups needed database power without hiring developers or learning complex tools.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black bg-gray-50 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg">Before DBPiper</p>
                    <p className="text-gray-600 text-sm">Custom scripts, Zapier delays, manual exports</p>
                  </div>
                </div>

                <div className="h-1 w-full bg-linear-to-r from-black via-[#FF4500] to-black"></div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF4500] text-white flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg">With DBPiper</p>
                    <p className="text-gray-600 text-sm">Point, click, sync in under 5 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Solution */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="border-2 border-black bg-black text-white p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 border-2 border-[#FF4500] px-4 py-2 bg-black mb-6">
                  <Zap className="w-4 h-4 text-[#FF4500]" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold text-white">The Solution</span>
                </div>

                <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                  Real-Time Sync.<br />
                  Zero Code.
                </h2>

                <p className="text-gray-300 mb-8">
                  DBPiper connects your databases directly to Airtable with a visual interface.
                  No middleware, no custom code, no engineering time required.
                  Changes sync in under 5 seconds, automatically.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-white p-4">
                    <div className="font-heading font-black text-2xl mb-1">5 min</div>
                    <div className="font-mono text-xs uppercase tracking-wider opacity-80">Setup Time</div>
                  </div>
                  <div className="border-2 border-white p-4">
                    <div className="font-heading font-black text-2xl mb-1">&lt;5s</div>
                    <div className="font-mono text-xs uppercase tracking-wider opacity-80">Sync Time</div>
                  </div>
                </div>
              </div>

              <div className="bg-white text-black p-6 border-2 border-white">
                <h3 className="font-heading font-bold text-xl uppercase mb-4">How It Works</h3>
                <div className="space-y-3">
                  {[
                    'Connect your database (PostgreSQL, MySQL, MongoDB, etc.)',
                    'Authorize Airtable access to your base',
                    'Select tables to sync with visual field mapping',
                    'Enable sync and watch data flow automatically'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-black text-white flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="border-2 border-black bg-white p-6 text-center hover:shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-[#FF4500]">
                    {stat.icon}
                  </div>
                  <div className="font-heading font-black text-3xl">{stat.value}</div>
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-4xl uppercase tracking-tight mb-4">Our Values</h2>
            <p className="text-gray-600">What drives everything we build</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="border-2 border-black bg-white p-6 hover:shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#FF4500] text-white flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-heading font-bold text-xl uppercase mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Journey */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="border-2 border-black bg-white p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6">
                  <TrendingUp className="w-4 h-4 text-[#FF4500]" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">Our Journey</span>
                </div>

                <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-6">
                  Built from a<br />
                  Real Problem
                </h2>

                <p className="text-gray-600 mb-6">
                  DBPiper started as an internal tool to solve our own frustration with syncing Airtable to databases.
                  After helping other makers with similar problems, we realized this needed to exist for everyone.
                </p>
              </div>

              <div>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-16 h-8 bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {milestone.year}
                      </div>
                      <div className="pt-1">
                        <p className="font-bold">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Team */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-4xl uppercase tracking-tight mb-4">The Builders</h2>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="border-2 border-black bg-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-xl">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-black bg-[#FF4500] text-white p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading font-black text-3xl uppercase tracking-tight mb-4">
                  Ready to Sync Your<br />
                  Databases?
                </h2>
                <p className="opacity-90 mb-6">
                  Join thousands of makers who use DBPiper to keep their data in sync.
                  Start your free trial today — no credit card required.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/waitlist"
                    className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>

              <div className="bg-white text-black p-6 border-2 border-white">
                <h3 className="font-heading font-bold text-xl uppercase mb-4">What You'll Get</h3>
                <div className="space-y-3">
                  {[
                    '14-day free trial of all Pro features',
                    '50% off founding user pricing (limited time)',
                    'Priority support and feature requests',
                    'No code, no configuration, just sync'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#FF4500] text-white flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
