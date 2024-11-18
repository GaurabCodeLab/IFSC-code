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
  prevPost?: { slug: string; title: string };
  nextPost?: { slug: string; title: string };
}

export default function BlogPost({
  title,
  date,
  content,
  author,
  authorImage,
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
            <MDXRemote source={content} />
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
