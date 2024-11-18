import { Metadata } from "next";
import BlogCard from "./BlogCard";
import { getAllBlogPosts } from "./lib/blog";

export const metadata: Metadata = {
  title: "Bank & IFSC Code Blog",
  description:
    "Explore our latest articles about banking, IFSC codes, and financial transactions in India.",
  openGraph: {
    title: "Bank & IFSC Code Blog",
    description:
      "Explore our latest articles about banking, IFSC codes, and financial transactions in India.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank & IFSC Code Blog",
    description:
      "Explore our latest articles about banking, IFSC codes, and financial transactions in India.",
  },
};

export default async function BlogListingPage() {
  const blogPosts = await getAllBlogPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
