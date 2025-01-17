import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug } from "../lib/api";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>; // Updated to accommodate async behavior
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // Resolve params here if necessary
  const post = await getBlogPostBySlug(resolvedParams.slug);

  return {
    title: `${post.title} | Your Company Name`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Your Company Name`,
      description: post.excerpt,
      type: "article",
      url: `https://yourwebsite.com/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params; // Resolve params for usage
  const post = await getBlogPostBySlug(resolvedParams.slug);

  const renderContent = (block: any, index: number) => {
    // (Content rendering logic stays the same)
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/blog" passHref>
        <Button variant="ghost" className="mb-4 flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex justify-between items-center text-gray-500 mb-4">
            <address className="not-italic">
              By <span className="font-semibold">{post.author}</span>
            </address>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
          </div>
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={630}
            className="rounded-lg shadow-md"
          />
        </header>
        <section className="prose prose-lg max-w-none">
          {post.content.map(
            (block, index) => renderContent(block, index) ?? null
          )}
        </section>
      </article>
    </main>
  );
}
