import { MDXRemote } from "next-mdx-remote/rsc";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  author: string;
  authorImage: string;
  introduction: string;
  takeaways: string[];
  cta: {
    text: string;
    link: string;
  };
  prevPost?: { slug: string; title: string };
  nextPost?: { slug: string; title: string };
}

export default function BlogPost({
  title,
  date,
  content,
  author,
  authorImage,
  introduction,
  takeaways,
  cta,
  prevPost,
  nextPost,
}: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2">{title}</CardTitle>
          <div className="flex items-center space-x-4 mb-4">
            <Image
              src={authorImage}
              alt={author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">{author}</p>
              <time className="text-sm text-gray-500">{date}</time>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-semibold mb-4">{introduction}</p>
            <MDXRemote source={content} />
            {/* <section>
              <h2 className="text-xl font-bold mb-2">
                Decoding SWIFT Codes: Your Key to Seamless International
                Transfers
              </h2>
              <p>
                Picture this: You're sipping coffee in Mumbai, tapping a few
                buttons on your phone, and within moments, your friend in New
                York receives the money you owed her. Sounds like magic, right?
                Well, behind this seemingly simple transaction lies a complex
                network, and at its heart are SWIFT codes.
              </p>
            </section> */}
            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc pl-5 space-y-2">
              {takeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Next Steps</h3>
              <Link href={cta.link} className="text-blue-600 hover:underline">
                {cta.text}
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 flex justify-between">
        {prevPost && (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="flex items-center text-blue-600 hover:underline"
          >
            <ChevronLeft className="mr-2" />
            <span>Previous: {prevPost.title}</span>
          </Link>
        )}
        {nextPost && (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="flex items-center text-blue-600 hover:underline ml-auto"
          >
            <span>Next: {nextPost.title}</span>
            <ChevronRight className="ml-2" />
          </Link>
        )}
      </div>
    </article>
  );
}
