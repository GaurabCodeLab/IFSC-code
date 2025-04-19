import AirtelPaymentBank from "@/components/blogs/AirtelPaymentBank";
import IndiaPostBank from "@/components/blogs/IndiaPostBank";
import SwiftCode from "@/components/blogs/SwiftCode";
import MicrCode from "@/components/blogs/MicrCode";
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
  | {
      type: "paragraph" | "heading" | "subheading";
      content: string;
      customStyle?: string;
    }
  | { type: "list"; content: string[] }
  | { type: "image"; content: string }
  | { type: "airtelpaymentbank"; content: any }
  | { type: "indiapostbank"; content: any }
  | { type: "swiftcode"; content: any }
  | { type: "micrcode"; content: any }
  | { type: "table"; content: string[][] };

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
    slug: "understanding-micr-code-banking",
    title: "MICR Code: Complete Guide to Bank MICR Codes in India | IFSC Code",
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

  {
    slug: "ifsc-code-guide-indian-banking",
    title: "IFSC Code: Complete Guide for Indian Banking Transactions",
    excerpt:
      "Learn about IFSC codes, their importance in online banking, and how to find them for major banks like SBI, Bank of Baroda, and more. Essential knowledge for seamless fund transfers.",
    coverImage:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733083665/DALL_E_2024-12-02_01.37.27_-_An_illustrative_image_of_a_cheque_book_with_a_highlighted_IFSC_code_paired_with_digital_icons_representing_online_transactions_like_a_mobile_phone_a_xku7ch.webp",
    content: [
      {
        type: "paragraph",
        content:
          "In the world of Indian banking, IFSC codes play a crucial role in facilitating online transactions. Whether you're transferring money via NEFT, RTGS, or IMPS, understanding IFSC codes is essential. This comprehensive guide will explain everything you need to know about IFSC codes, including how to find them for major banks like SBI, Bank of Baroda, and more.",
      },
      {
        type: "heading",
        content: "What is an IFSC Code?",
      },
      {
        type: "paragraph",
        content:
          "IFSC stands for Indian Financial System Code. It's a unique 11-character code assigned to bank branches in India, used to identify the bank and branch for electronic fund transfers.",
      },
      {
        type: "heading",
        content: "Understanding the IFSC Code Structure",
      },
      {
        type: "paragraph",
        content: "An IFSC code consists of 11 characters:",
      },
      {
        type: "list",
        content: [
          "First 4 characters: Alphabets representing the bank name",
          "5th character: 0 (zero)",
          "Last 6 characters: Alphanumeric representing the branch",
        ],
      },
      {
        type: "paragraph",
        content:
          'For example, in the IFSC code BARB0VJVADI, "BARB" represents Bank of Baroda, "0" is the default fifth character, and "VJVADI" identifies the specific branch.',
      },
      {
        type: "heading",
        content: "IFSC Codes for Major Indian Banks",
      },
      {
        type: "subheading",
        content: "SBI IFSC Code",
      },
      {
        type: "paragraph",
        content:
          'State Bank of India (SBI) is India\'s largest public sector bank. The IFSC code for SBI always starts with "SBIN". For example, the IFSC code SBI main branch in Mumbai is SBIN0000300.',
      },
      {
        type: "subheading",
        content: "Bank of Baroda IFSC Code",
      },
      {
        type: "paragraph",
        content:
          'Bank of Baroda IFSC codes start with "BARB". For instance, the IFSC code for Bank of Baroda\'s main branch in Vadodara is BARB0VJVADI.',
      },
      {
        type: "subheading",
        content: "Canara Bank IFSC Code",
      },
      {
        type: "paragraph",
        content:
          'Canara Bank IFSC codes begin with "CNRB". An example IFSC code for Canara Bank is CNRB0000001 for its main branch in Bengaluru.',
      },
      {
        type: "subheading",
        content: "Indian Bank IFSC Code",
      },
      {
        type: "paragraph",
        content:
          'Indian Bank uses "IDIB" as the first four characters of its IFSC code. For example, IDIB000A001 is the IFSC code for Indian Bank\'s main branch in Chennai.',
      },
      {
        type: "subheading",
        content: "Union Bank IFSC Code",
      },
      {
        type: "paragraph",
        content:
          'Union Bank of India IFSC codes start with "UBIN". An example is UBIN0531839 for a Union Bank branch in Mumbai.',
      },
      {
        type: "heading",
        content: "IFSC Codes for New-Age Banks",
      },
      {
        type: "subheading",
        content: "Airtel Payment Bank IFSC Code",
      },
      {
        type: "paragraph",
        content:
          'Airtel Payment Bank, a relatively new entrant, uses "AIRP" as the first four characters of its IFSC code. For example, AIRP0000001 is used for Airtel Payment Bank transactions.',
      },
      {
        type: "subheading",
        content: "India Post Payment Bank IFSC Code",
      },
      {
        type: "paragraph",
        content:
          'India Post Payment Bank IFSC codes start with "IPOS". An example IFSC code for India Post Payment Bank is IPOS0000001.',
      },
      {
        type: "heading",
        content: "How to Find Your Bank's IFSC Code",
      },
      {
        type: "list",
        content: [
          "Check your cheque book or bank passbook",
          "Log in to your net banking account",
          "Use the bank's mobile banking app",
          "Visit the official website of your bank",
          "Use the RBI's IFSC finder tool",
        ],
      },
      {
        type: "heading",
        content: "Importance of IFSC Codes in Online Banking",
      },
      {
        type: "paragraph",
        content: "IFSC codes are crucial for:",
      },
      {
        type: "list",
        content: [
          "NEFT (National Electronic Funds Transfer) transactions",
          "RTGS (Real Time Gross Settlement) transfers",
          "IMPS (Immediate Payment Service) for instant transfers",
          "Direct Benefit Transfers (DBT) from government schemes",
          "Automated clearing house (ACH) transactions",
        ],
      },
      {
        type: "heading",
        content: "Frequently Asked Questions",
      },
      {
        type: "subheading",
        content: "Q: Can IFSC codes change?",
      },
      {
        type: "paragraph",
        content:
          "A: Yes, IFSC codes can change if a bank branch relocates or merges with another branch. Always verify the current IFSC code before making a transaction.",
      },
      {
        type: "subheading",
        content: "Q: Are IFSC codes case-sensitive?",
      },
      {
        type: "paragraph",
        content:
          "A: Yes, IFSC codes are case-sensitive. Always enter them in capital letters to avoid any transaction errors.",
      },
      {
        type: "subheading",
        content: "Q: Can I use the same IFSC code for all branches of a bank?",
      },
      {
        type: "paragraph",
        content:
          "A: No, each branch has its unique IFSC code. Using the wrong IFSC code may result in failed transactions or delays.",
      },
      {
        type: "heading",
        content: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "Understanding IFSC codes is crucial for smooth online banking transactions in India. Whether you're using SBI, Bank of Baroda, Canara Bank, or any other bank, always ensure you have the correct IFSC code before initiating a fund transfer. By familiarizing yourself with IFSC codes, you can ensure faster, more secure, and error-free online banking experiences.",
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
