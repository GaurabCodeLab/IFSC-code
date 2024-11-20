import { Metadata } from "next";
import BlogListingPage from "./BlogListingPage";
import { getAllBlogPosts } from "./lib/blog";

export const metadata: Metadata = {
  title: "Banking Blog | Latest Insights on IFSC, MICR, and SWIFT Codes",
  description:
    "Explore our latest articles about banking codes, financial transactions, and banking technology in India.",
  openGraph: {
    title: "Banking Blog | Latest Insights on IFSC, MICR, and SWIFT Codes",
    description:
      "Explore our latest articles about banking codes, financial transactions, and banking technology in India.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking Blog | Latest Insights on IFSC, MICR, and SWIFT Codes",
    description:
      "Explore our latest articles about banking codes, financial transactions, and banking technology in India.",
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Banking Blog</h1>
      <BlogListingPage posts={posts} />
    </div>
  );
}
