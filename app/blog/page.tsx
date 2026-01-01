import Link from 'next/link';
import { blog } from '@/lib/source';
import { ArrowRight, Clock, Tag, User, TrendingUp } from 'lucide-react';

export default function Home() {
  const posts = blog.getPages();

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-gray-50/30 dark:from-background dark:to-gray-900/20">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            Latest Updates
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Insights & Stories
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover perspectives, tutorials, and ideas from our community
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.url}
              className="group relative"
              style={{ viewTransitionName: `blog-card-${index}` }}
            >
              <Link
                href={post.url}
                className="block h-full"
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/40 dark:border-gray-800/50 shadow-lg shadow-gray-200/10 dark:shadow-gray-900/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="p-6 lg:p-7">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                        <Tag className="h-3.5 w-3.5" />
                        <span>{'General'}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {'5'} min read
                        </span>
                      </div>
                    </div>

                    {post.data.author && (
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                          <User className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm text-muted-foreground">{post.data.author}</span>
                      </div>
                    )}

                    {/* Title & Description */}
                    <h2 className="text-xl lg:text-2xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.data.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {post.data.description}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                      <span className="text-primary font-medium group-hover:underline underline-offset-4">
                        Read article
                      </span>
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
                        <ArrowRight className="h-5 w-5 text-primary relative transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-2xl pointer-events-none transition-all duration-500" />
                  <div className="absolute -inset-0.5 bg-linear-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-700 pointer-events-none" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
