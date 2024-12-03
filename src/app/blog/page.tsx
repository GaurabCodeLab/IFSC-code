import { Metadata } from "next";
import BlogPost from "./BlogPost";
import { getAllBlogPosts } from "./lib/api";

export const metadata: Metadata = {
  title: "Our Blog | Your Company Name",
  description:
    "Read our latest articles and stay up to date with industry trends and insights.",
  openGraph: {
    title: "Our Blog | Your Company Name",
    description:
      "Read our latest articles and stay up to date with industry trends and insights.",
    type: "website",
    url: "https://yourwebsite.com/blog",
    images: [
      {
        url: "https://yourwebsite.com/images/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Our Blog",
      },
    ],
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <header>
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blogs</h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
