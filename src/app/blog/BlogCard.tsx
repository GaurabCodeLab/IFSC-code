import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  author,
  authorImage,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
          <div className="flex items-center space-x-4">
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
          <p className="text-gray-600">{excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
