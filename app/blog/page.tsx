import Link from 'next/link';
import { blog } from '@/lib/source';
import { ArrowRight, Clock, Tag, Zap } from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function Home() {
  const posts = blog.getPages();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm hover:text-[#FF4500] transition-colors font-bold uppercase tracking-wider"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white mb-6">
            <Zap className="w-4 h-4 text-[#FF4500]" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Insights & Stories</span>
          </div>

          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            No-Code Database Insights
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <p className="text-xl text-gray-600">
              Discover perspectives, tutorials, and ideas about syncing databases with Airtable. Built for makers and no-code enthusiasts.
            </p>

            <div className="border-2 border-black bg-black text-white p-6">
              <div className="font-mono text-xs uppercase tracking-wider opacity-80 mb-2">Latest Article</div>
              <h3 className="font-heading font-bold text-lg uppercase mb-2">
                {posts[0]?.data.title || "Getting Started with DBPiper"}
              </h3>
              <Link
                href={posts[0]?.url || "#"}
                className="inline-flex items-center gap-2 text-[#FF4500] font-bold uppercase tracking-wider text-sm hover:underline"
              >
                Read Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.url}
              className="group"
            >
              <Link
                href={post.url}
                className="block h-full"
              >
                <div className="border-2 border-black bg-white hover:shadow-[8px_8px_0px_0px_#000] transition-all h-full group-hover:-translate-y-2">
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 border-2 border-black px-3 py-1 bg-white">
                        <Tag className="w-3.5 h-3.5" />
                        <span className="font-mono text-xs uppercase tracking-wider">{'General'}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {'5'} min
                        </span>

                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading font-bold text-2xl uppercase mb-3 group-hover:text-[#FF4500] transition-colors">
                      {post.data.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.data.description}
                    </p>

                    {/* Author */}
                    {post.data.author && (
                      <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 border border-gray-200">
                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-sm">
                          {post.data.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{post.data.author}</div>
                          <div className="text-xs text-gray-500">Author</div>
                        </div>
                      </div>
                    )}

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-4 border-t-2 border-black">
                      <span className="font-heading font-bold text-sm uppercase tracking-wider group-hover:text-[#FF4500] transition-colors">
                        Read Article
                      </span>
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center group-hover:bg-[#FF4500] transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="border-2 border-black bg-[#FF4500] text-white p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading font-black text-3xl uppercase mb-4">Start Syncing Today</h2>
                <p className="opacity-90">
                  Ready to try DBPiper? Start your free trial and sync your first database in 5 minutes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/waitlist"
                  className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
