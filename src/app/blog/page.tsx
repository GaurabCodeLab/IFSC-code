import { Metadata } from "next";
import BlogPost from "./BlogPost";
import { getAllBlogPosts } from "./lib/api";

export const metadata: Metadata = {
  title: "Our Blogs | BankInfo Hub",
  description:
    "Read our latest articles and stay up to date with industry trends and insights.",
  keywords:
    "airtel payment bank ifsc codec, maha kumbh, maha kumbh mela, maha kumbh mela 2025, bank of baroda ifsc code, ifsc code kya hai, how to check ifsc code, micr code on cheque, micr code kya hota hai, where is micr code on cheque",
  openGraph: {
    title: "Our Blogs | BankInfo Hub",
    description:
      "Read our latest articles and stay up to date with industry trends and insights.",
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
