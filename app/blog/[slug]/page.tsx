import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Zap } from 'lucide-react';
import { Metadata } from 'next';
import { Logo } from '@/components/Logo';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex items-center gap-4">
              <Link
                href="/blog"
                className="text-sm hover:text-[#FF4500] transition-colors font-bold uppercase tracking-wider"
              >
                ← Back to Blog
              </Link>
              <Link
                href="/"
                className="btn-secondary text-sm"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <article className="pt-24 px-6 md:px-12 lg:px-24">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white hover:bg-black hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-heading font-bold text-sm uppercase tracking-wider">Back to Blog</span>
            </Link>
          </div>

          {/* Title */}
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
            {page.data.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-8 p-4 border-2 border-black bg-white">
            {page.data.author && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-sm">{page.data.author}</div>
                  <div className="text-xs text-gray-500">Author</div>
                </div>
              </div>
            )}

            <div className="h-8 w-0.5 bg-gray-300"></div>

            {page.data.date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="font-mono text-sm">{page.data.date.toLocaleString()}</span>
              </div>
            )}


            <div className="h-8 w-0.5 bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-500" />
              <span className="font-mono text-sm uppercase tracking-wider">General</span>
            </div>
          </div>

          {/* Description */}
          <div className="border-2 border-black bg-gray-50 p-6 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#FF4500]" />
              <span className="font-heading font-bold text-sm uppercase tracking-wider">Overview</span>
            </div>
            <p className="text-lg text-gray-600">
              {page.data.description}
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sticky Sidebar - TOC */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="border-2 border-black bg-white p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-[#FF4500]"></div>
                    <h3 className="font-heading font-bold text-lg uppercase">Contents</h3>
                  </div>

                  <div className="h-0.5 bg-black mb-4"></div>

                  <InlineTOC
                    items={page.data.toc}
                    className="space-y-3"
                  />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="border-2 border-black bg-white p-6 md:p-8">
                {/* Prose content */}
                <div className="prose prose-lg max-w-none 
                  prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h1:border-b-2 prose-h1:border-black prose-h1:pb-4 prose-h1:mb-8
                  prose-h2:text-3xl prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3 prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-700
                  prose-a:text-[#FF4500] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-4 prose-blockquote:border-[#FF4500] prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:bg-gray-50 prose-blockquote:italic
                  prose-code:font-mono prose-code:text-sm prose-code:bg-black prose-code:text-white prose-code:px-2 prose-code:py-1 prose-code:rounded-none
                  prose-pre:border-2 prose-pre:border-black prose-pre:bg-black prose-pre:text-white prose-pre:rounded-none
                  prose-img:border-2 prose-img:border-black prose-img:my-8
                  prose-ul:space-y-2 prose-ul:pl-5
                  prose-ol:space-y-2 prose-ol:pl-5
                  prose-li:marker:text-[#FF4500] prose-li:marker:font-bold
                  prose-table:border-2 prose-table:border-black prose-table:w-full
                  prose-th:border-2 prose-th:border-black prose-th:bg-gray-100 prose-th:p-3 prose-th:text-left
                  prose-td:border-2 prose-td:border-black prose-td:p-3
                ">
                  <Mdx components={defaultMdxComponents} />
                </div>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t-2 border-black">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white hover:bg-black hover:text-white transition-colors group"
                      >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-heading font-bold text-sm uppercase tracking-wider">All Articles</span>
                      </Link>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-gray-500">Found this useful?</span>
                      <Link
                        href="/waitlist"
                        className="btn-primary text-sm"
                      >
                        Try DBPiper
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-8">
                <div className="border-2 border-black bg-white p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-heading font-bold text-2xl uppercase mb-2">More to Read</h3>
                      <p className="text-gray-600">Discover related articles about no-code database sync</p>
                    </div>
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 bg-white hover:bg-black hover:text-white transition-colors group"
                    >
                      <span className="font-heading font-bold text-sm uppercase tracking-wider">All Posts</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {blog.getPages().slice(0, 2).map((post) => (
                      <Link
                        key={post.url}
                        href={post.url}
                        className="border-2 border-black bg-white p-4 hover:shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-y-1"
                      >
                        <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-2">
                          {'General'}
                        </div>
                        <h4 className="font-heading font-bold text-lg uppercase mb-2 hover:text-[#FF4500] transition-colors">
                          {post.data.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {post.data.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: `${page.data.title} | DBPiper Blog`,
    description: page.data.description,
  };
}
