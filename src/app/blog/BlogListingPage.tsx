import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorImage: string;
  introduction: string;
}

interface BlogListingPageProps {
  posts: BlogPost[];
}

export default function BlogListingPage({ posts }: BlogListingPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <CardTitle>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-2xl font-bold hover:underline"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <div className="flex items-center space-x-4 mt-2">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <time className="text-sm text-gray-500">{post.date}</time>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{post.introduction}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
