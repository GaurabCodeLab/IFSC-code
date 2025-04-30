import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug } from "../lib/api";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Define the types for params and searchParams
type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>; // Async params type
  searchParams: Promise<Record<string, string | string[] | undefined>>; // Async searchParams type
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // Resolve params
  const post = await getBlogPostBySlug(resolvedParams.slug);

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: `${post.title}`,
      description: post.excerpt,
      type: "article",
      url: `https://ifsccodeb.com/blog/${post.slug}`,
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

// Render the blog post page
export default async function BlogPostPage({ params, searchParams }: Props) {
  const resolvedParams = await params; // Resolve params
  const resolvedSearchParams = await searchParams; // Resolve searchParams if needed

  const post = await getBlogPostBySlug(resolvedParams.slug);

  // Function to render content blocks dynamically
  const renderContent = (block: any, index: number): React.ReactNode => {
    switch (block.type) {
      case "airtelpaymentbank":
        return <div key={index}>{block.content()}</div>;
      case "indiapostbank":
        return <div key={index}>{block.content()}</div>;
      case "swiftcode":
        return <div key={index}>{block.content()}</div>;
      case "micrcode":
        return <div key={index}>{block.content()}</div>;
      case "ifsccode":
        return <div key={index}>{block.content()}</div>;
      default:
        return null; // Return null for unsupported block types
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" passHref>
        <Button
          variant="ghost"
          className="mb-4 flex items-center border bg-slate-400"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={30}
            className="rounded-lg shadow-md"
          />
        </header>
        <section className="prose prose-lg max-w-none">
          {post.content.map((block, index) => renderContent(block, index))}
        </section>
      </article>
    </div>
  );
}
