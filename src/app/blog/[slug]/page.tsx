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
      case "paragraph":
        return (
          <p
            key={index}
            className={block.customStyle ? block.customStyle : "mb-4"}
          >
            {block.content}
          </p>
        );
      case "heading":
        return (
          <h1 key={index} className="text-2xl font-semibold mt-6 mb-4">
            {block.content}
          </h1>
        );
      case "subheading":
        return (
          <h2
            key={index}
            className={
              block.customStyle
                ? block.customStyle
                : "text-xl font-semibold mt-4 mb-2"
            }
          >
            {block.content}
          </h2>
        );
      case "list":
        return (
          <ul key={index} className="list-disc pl-6 my-4">
            {block.content.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case "image":
        const [src, alt] = block.content.split("|");
        return (
          <figure key={index} className="my-4">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={800}
              height={400}
              className="rounded-lg"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {alt}
            </figcaption>
          </figure>
        );
      case "table":
        return (
          <div key={index} className="overflow-x-auto my-4">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  {block.content[0].map((header: string, i: number) => (
                    <th key={i} className="py-2 px-4 border-b">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.content.slice(1).map((row: string[], i: number) => (
                  <tr key={i}>
                    {row.map((cell: string, j: number) => (
                      <td key={j} className="py-2 px-4 border-b">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "mahakhumb":
        return <div key={index}>{block.content()}</div>;
      case "airtelpaymentbank":
        return <div key={index}>{block.content()}</div>;
      case "indiapostbank":
        return <div key={index}>{block.content()}</div>;
      case "swiftcode":
        return <div key={index}>{block.content()}</div>;
      case "ifsccode":
        return <div key={index}>{block.content()}</div>;
      default:
        return null; // Return null for unsupported block types
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
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
    </main>
  );
}
