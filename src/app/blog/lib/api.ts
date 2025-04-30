import AirtelPaymentBank from "@/components/blogs/AirtelPaymentBank";
import IndiaPostBank from "@/components/blogs/IndiaPostBank";
import SwiftCode from "@/components/blogs/SwiftCode";
import MicrCode from "@/components/blogs/MicrCode";
import IfscCode from "@/components/blogs/IfscCode";
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverImage2?: string;
  keywords?: string;
  content: BlogContent[];
}

type BlogContent =
  | { type: "airtelpaymentbank"; content: any }
  | { type: "indiapostbank"; content: any }
  | { type: "swiftcode"; content: any }
  | { type: "micrcode"; content: any }
  | { type: "ifsccode"; content: any };

const blogPosts: BlogPost[] = [
  {
    slug: "swift-code-finder",
    title:
      "SWIFT Code Finder: Complete Guide to Bank SWIFT Codes in India | IFSC Code",
    excerpt:
      "Learn what SWIFT codes are, how they differ from IFSC codes, and find SWIFT codes for major Indian banks like SBI, HDFC, and Kotak. Use our free SWIFT code finder tool for international transactions.",
    coverImage:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1744300654/swiftcode_isoxom.webp",
    coverImage2:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1744300654/swiftcode_isoxom.webp",
    keywords:
      "swift code finder, state bank of india swift code, hdfc bank swift code, kotak bank swift code, is swift code and ifsc code same, what is swift code of sbi, what is swift code of hdfc bank, swift code kya hota hai, what is a swift code for a bank",
    content: [
      {
        type: "swiftcode",
        content: SwiftCode,
      },
    ],
  },
  {
    slug: "indian-post-payment-bank",
    title:
      "India Post Payment Bank: Complete Guide , Banking Services & IFSC Code",
    excerpt:
      "Comprehensive guide to India Post Payment Bank, IFSC code (IPOS0000001), banking services, balance check methods, and account opening process. Everything you need to know about IPPB.",
    coverImage:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1743494944/post1_qi050y.png",
    coverImage2:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1743494944/post1_qi050y.png",
    keywords:
      "india post payment bank, india post payment bank ifsc code, indian post payment bank, india post payment bank ifsc code ipos0000001, ifsc code india post payment bank, india post payment bank balance check, india post payment bank customer care number, india post payment bank ka ifsc code kya hai",
    content: [
      {
        type: "indiapostbank",
        content: IndiaPostBank,
      },
    ],
  },
  {
    slug: "airtel-payment-bank",
    title: "Airtel Payment Bank: IFSC Code, Customer Care & Complete Guide",
    excerpt:
      "Everything you need to know about Airtel Payment Bank - IFSC code (AIRP0000001), customer care number, account opening process, branches, app features, and retailer network. Your complete guide to banking with Airtel.",
    coverImage:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1742658005/airtel-bank-office-pusa-samastipur-payment-banks-airtel-kubs12m6fb_pluh21.jpg",
    coverImage2:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1742658005/airtel-bank-office-pusa-samastipur-payment-banks-airtel-kubs12m6fb_pluh21.jpg",
    keywords:
      "airtel payment bank ifsc code, airtel payment bank customer care number, airtel payment bank account open, ifsc code airtel payment bank, airtel payment bank customer number, airtel payment bank branch, airtel payment bank app, airtel payment bank retailer",
    content: [
      {
        type: "airtelpaymentbank",
        content: AirtelPaymentBank,
      },
    ],
  },

  {
    slug: "sbi-ifsc-code",
    title:
      "SBI IFSC Code: Complete Guide to State Bank of India IFSC Codes | IFSC Code",
    excerpt:
      "Find SBI IFSC codes for all branches. Learn how to check IFSC code in SBI Yono app, net banking, and more. Use our free SBI IFSC code finder tool.",
    coverImage:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1744722075/ifsc_1_mypyzg.png",
    coverImage2:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1744722075/ifsc_1_mypyzg.png",
    keywords:
      "sbi ifsc code, sbi bank ifsc code, sbi main branch ifsc code, sbi branch ifsc code, sbi ifsc code finder, how to check ifsc code in sbi yono app, what is ifsc code of sbi, how to check ifsc code in sbi, where to check ifsc code in sbi online banking, how to find ifsc code in sbi net banking",
    content: [
      {
        type: "ifsccode",
        content: IfscCode,
      },
    ],
  },

  {
    slug: "understanding-micr-code-banking",
    title: "MICR Code: Complete Guide to Bank MICR Codes in India | MICR Code",
    excerpt:
      "Learn what MICR code is, how to find it on your cheque, and why it's important for banking transactions. Find MICR codes for SBI, Union Bank, and more.",
    coverImage:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733173292/DALL_E_2024-12-03_02.28.06_-_A_user-friendly_and_simple_illustration_for_a_blog_about_MICR_codes_in_banking._The_image_features_a_magnifying_glass_hovering_over_a_cheque_clearly_r5evzq.webp",
    coverImage2:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733173292/DALL_E_2024-12-03_02.28.06_-_A_user-friendly_and_simple_illustration_for_a_blog_about_MICR_codes_in_banking._The_image_features_a_magnifying_glass_hovering_over_a_cheque_clearly_r5evzq.webp",
    keywords:
      "micr code, micr code on cheque, sbi micr code, state bank of india micr code, union bank of india micr code, what is micr code in cheque book, what is micr code of bank, how to find micr code on cheque, how to find micr code of sbi, micr code consists of how many digits",
    content: [
      {
        type: "micrcode",
        content: MicrCode,
      },
    ],
  },
];

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }
  return post;
}
