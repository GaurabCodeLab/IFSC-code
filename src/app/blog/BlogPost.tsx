import Link from "next/link";
import Image from "next/image";

interface BlogPostProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    coverImage2?: string;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.coverImage2 ? post.coverImage2 : post.coverImage}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <header>
          <h2 className="text-2xl font-semibold mb-2">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
        </header>
        <div className="mb-4">
          <p className="text-gray-600">{post.excerpt}</p>
        </div>
      </div>
    </article>
  );
}
