import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Eye, Heart} from 'lucide-react';
import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';


export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
   <div className="min-h-screen bg-linear-to-b from-background via-gray-50/30 to-background dark:via-gray-900/10 py-9">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          asChild
          className="group relative overflow-hidden rounded-full border border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-x-1"
        >
          <Link href="/blog" className="flex items-center gap-2.5 px-5 py-3">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Blog</span>
          </Link>
        </Button>
      </div>

      <article className="relative">
        {/* Article Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="relative mb-12 lg:mb-16">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 lg:mb-8 leading-tight">
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {page.data.title}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 lg:mb-10 leading-relaxed max-w-3xl">
              {page.data.description}
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sticky Sidebar - TOC & Tools */}
            <div className="lg:col-span-3 space-y-8">
              {/* Table of Contents */}
              <div className="sticky top-24">
                <div className="rounded-2xl border border-gray-200/40 dark:border-gray-800/40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Contents
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {page.data.toc?.length || 0} sections
                    </span>
                  </div>
                  <Separator className="mb-4" />
                  <InlineTOC
                    items={page.data.toc}
                    className="space-y-2"
                  />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-h2:border-b prose-h2:pb-3 prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:bg-linear-to-r prose-blockquote:from-primary/5 prose-blockquote:to-transparent
                prose-code:rounded-lg prose-code:px-2 prose-code:py-1 prose-code:bg-gray-100 dark:prose-code:bg-gray-800
                prose-pre:rounded-2xl prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-800
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:border prose-img:border-gray-200 dark:prose-img:border-gray-800
                prose-ul:space-y-2 prose-ol:space-y-2
                prose-li:marker:text-primary
              ">
                <Mdx components={defaultMdxComponents} />
              </div>

              {/* Article Footer */}
              <div className="mt-16 pt-12 border-t border-gray-200/60 dark:border-gray-800/60">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">1.2k views</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">342 likes</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      asChild
                      className="group gap-3 rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:translate-x-1"
                    >
                      <Link href="/blog">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Blog
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mt-20 mb-16">
          <div className="border-t border-gray-200/60 dark:border-gray-800/60 pt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">More to read</h2>
                <p className="text-muted-foreground mt-2">Discover related articles</p>
              </div>
              <Button variant="ghost" asChild className="gap-2 group">
                <Link href="/blog">
                  View all
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Add your related posts component here */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Example related post cards */}
              <div className="p-6 rounded-2xl border border-gray-200/40 dark:border-gray-800/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2">Next Article Title</h3>
                <p className="text-muted-foreground text-sm">Short description of the next article...</p>
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
    title: page.data.title,
    description: page.data.description,
  };
}
