import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug } from "../lib/api";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

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
          url: post.coverImage || "", // Handle undefined coverImage
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

function formatText(
  text: string,
  format?: { bold?: string[]; italic?: string[] }
) {
  if (!format) return text;

  let formattedText = text;

  if (format.bold) {
    format.bold.forEach((boldText) => {
      formattedText = formattedText.replace(
        new RegExp(`\\b${boldText}\\b`, "g"),
        `<strong>${boldText}</strong>`
      );
    });
  }

  if (format.italic) {
    format.italic.forEach((italicText) => {
      formattedText = formattedText.replace(
        new RegExp(`\\b${italicText}\\b`, "g"),
        `<em>${italicText}</em>`
      );
    });
  }

  return formattedText;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

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
          <figure>
            {post.coverImage ? (
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 rounded-lg" />
            )}
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {post.title} - Featured Image
            </figcaption>
          </figure>
        </header>
        <section className="prose prose-lg max-w-none">
          {post.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                const paragraphContent = Array.isArray(block.content)
                  ? block.content.join(" ")
                  : block.content;
                const format = (block as any).format; // Safely access format
                return (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: formatText(paragraphContent, format),
                    }}
                  />
                );
              case "heading":
                return (
                  <h2 key={index} className="text-2xl font-semibold mt-6 mb-4">
                    {block.content}
                  </h2>
                );
              case "subheading":
                return (
                  <h3 key={index} className="text-xl font-semibold mt-4 mb-2">
                    {block.content}
                  </h3>
                );
              case "list":
                return (
                  <ul
                    key={index}
                    className="list-disc pl-6 my-4"
                    dangerouslySetInnerHTML={{
                      __html: block.content as string,
                    }}
                  />
                );
              case "image":
                if (typeof block.content === "string") {
                  const [src, alt] = block.content.split("|");
                  return (
                    <figure key={index} className="my-4">
                      <Image
                        src={src}
                        alt={alt}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                      <figcaption className="text-center text-sm text-gray-500 mt-2">
                        {alt}
                      </figcaption>
                    </figure>
                  );
                }
                return null;
              case "navigation":
                return (
                  <nav
                    key={index}
                    className="my-4"
                    dangerouslySetInnerHTML={{
                      __html: block.content as string,
                    }}
                  />
                );
              default:
                return null;
            }
          })}
        </section>
      </article>
    </main>
  );
}
