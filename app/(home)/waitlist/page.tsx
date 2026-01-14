import { Crown, Rocket, Sparkles, Zap, Users, CheckCircle } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

export default function Waitlist() {
  const spotsRemaining = 27;

  const benefits = [
    {
      icon: Crown,
      title: 'Founding User Perks',
      description: '50% off for life, priority support, and early feature access',
      color: 'bg-[#FF4500]'
    },
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Be first to use DBPiper when we launch. Skip the public waitlist.',
      color: 'bg-black'
    },
    {
      icon: Sparkles,
      title: 'Free Migration',
      description: "Switching from Sequin or another tool? We'll migrate your data for free.",
      color: 'bg-[#FF4500]'
    },
    {
      icon: Users,
      title: 'Direct Founder Access',
      description: 'Get direct access to our founders for feedback and support.',
      color: 'bg-black'
    }
  ];

  const timeline = [
    { step: '01', text: "Join the founding user waitlist", icon: <Users className="w-5 h-5" /> },
    { step: '02', text: "Get early access before public launch", icon: <Rocket className="w-5 h-5" /> },
    { step: '03', text: "Start syncing in 5 minutes", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  return (
      <div className="pt-40">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6">
              <Rocket className="w-4 h-4 text-[#FF4500]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Early Access</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight mb-6">
              Join 50 Founding Users
            </h1>

            <div className="inline-flex items-center gap-2 bg-[#FF4500] text-white px-6 py-3 mb-8">
              <span className="font-heading font-black text-2xl">{spotsRemaining}</span>
              <span className="font-mono text-sm uppercase tracking-wider">spots remaining out of 50</span>
            </div>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Real-time Airtable ↔ Database sync launching soon. Lock in founding user pricing and perks.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="border-2 border-black bg-white p-6 hover:shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${benefit.color} text-white flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg uppercase mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="border-2 border-black bg-black text-white p-8 mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-heading font-black text-4xl text-[#FF4500] mb-2">50</div>
                <div className="font-mono text-xs uppercase tracking-wider opacity-80">Founding Users</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-4xl mb-2">50%</div>
                <div className="font-mono text-xs uppercase tracking-wider opacity-80">Lifetime Discount</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-4xl mb-2">5</div>
                <div className="font-mono text-xs uppercase tracking-wider opacity-80">Minute Setup</div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Timeline */}
            <div>
              <div className="border-2 border-black bg-white p-8 mb-8">
                <h2 className="font-heading font-black text-2xl uppercase mb-6">How It Works</h2>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-heading font-bold text-lg mb-1">{item.text}</div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          {item.icon}
                          <span>~ {index === 0 ? 'Now' : index === 1 ? '1 week' : '5 minutes'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Proof */}
              <div className="border-2 border-black bg-white p-6">
                <h3 className="font-heading font-bold text-lg uppercase mb-4">Already Joined</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    {['S', 'M', 'A', 'J', 'T'].map((initial, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 bg-[#FF4500] text-white rounded-none border border-black flex items-center justify-center font-bold text-xs"
                      >
                        {initial}
                      </div>
                    ))}
                  </div>
                  <div className="font-mono text-sm">
                    +{50 - spotsRemaining} makers
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Join Sarah, Mike, Alex and other no-code builders waiting for early access.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
  );
}
