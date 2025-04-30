import { Metadata } from "next";
import BlogPost from "./BlogPost";
import { getAllBlogPosts } from "./lib/api";

export const metadata: Metadata = {
  title: "Our Blogs | BankInfo Hub",
  description:
    "Discover detailed blogs on IFSC codes, MICR codes, SWIFT codes, and banking procedures in India. Stay updated with practical guides, code explanations, and financial system insights.",
  keywords:
    "ifsc code blogs, micr code articles, swift code information, bank code blog, bank branch code articles, ifsc code guide, micr code guide, swift code blog, indian banking system blog, financial code articles, bank blogs India, RBI code information, banking tutorials, financial identification codes, bank transfer codes India",
  openGraph: {
    title: "Our Blogs | BankInfo Hub",
    description:
      "Discover detailed blogs on IFSC codes, MICR codes, SWIFT codes, and banking procedures in India. Stay updated with practical guides, code explanations, and financial system insights.",
    type: "website",
    url: "https://ifsccodeb.com/blog",
    images: [
      {
        url: "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733082538/cover_u0ivck.webp",
        width: 1200,
        height: 630,
        alt: "Our Blogs",
      },
    ],
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blogs</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
