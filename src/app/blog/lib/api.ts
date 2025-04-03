import MahaKhumb from "@/components/blogs/MahaKhumb";
import AirtelPaymentBank from "@/components/blogs/AirtelPaymentBank";
import IndiaPostBank from "@/components/blogs/IndiaPostBank";
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
  | { type: "mahakhumb"; content: any }
  | { type: "airtelpaymentbank"; content: any }
  | { type: "indiapostbank"; content: any }
  | { type: "table"; content: string[][] };

const blogPosts: BlogPost[] = [
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
    slug: "maha-kumbh-mela-2025",
    title: "Maha Kumbh Mela 2025: Significance, Dates & Financial Insights",
    excerpt:
      "Explore the Maha Kumbh Mela 2025, a rare spiritual gathering in Prayagraj. This guide covers dates, significance, and economic impact, including the importance of IFSC codes for secure transactions.",
    coverImage:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1740851841/7f1gjoe_maha-kumbh_160x120_15_January_25_ioajo9.webp",
    coverImage2:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1740843277/DALL_E_2025-03-01_21.04.22_-_A_grand_scene_of_the_Maha_Kumbh_Mela_featuring_millions_of_devotees_gathered_at_the_riverbanks_taking_a_holy_dip_in_the_sacred_river._Sadhus_holy_m_q6brd4.webp",
    keywords:
      "maha kumbh, maha kumbh mela, maha kumbh mela 2025, maha kumbh 2025, maha kumbh mela stampede, prayagraj maha kumbh mela, when is the next maha kumbh mela 144 years, maha kumbh mela 2025 date and place, after how many years maha kumbh is held, when is the next maha kumbh mela 144 years after 2025, why maha kumbh is celebrated, which among the following astronomical bodies location decides the timing of maha kumbh mela, when is maha kumbh mela 2025",
    content: [
      {
        type: "mahakhumb",
        content: MahaKhumb,
      },
    ],
  },

  {
    slug: "understanding-micr-code-banking",
    title: "Understanding MICR Code: Essential Guide for Banking Transactions",
    excerpt:
      "Discover what MICR code means, its importance in banking, and how to find it on your cheque. Learn everything about MICR codes and their role in secure transactions.",
    coverImage:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733173292/DALL_E_2024-12-03_02.28.06_-_A_user-friendly_and_simple_illustration_for_a_blog_about_MICR_codes_in_banking._The_image_features_a_magnifying_glass_hovering_over_a_cheque_clearly_r5evzq.webp",
    content: [
      {
        type: "paragraph",
        content:
          'In the world of banking, you may have come across the term "MICR code" on your cheque or during transactions. But what is MICR code, and why is it so important? This comprehensive guide will explain everything you need to know about MICR codes and their significance in modern banking.',
      },
      {
        type: "heading",
        content: "What is MICR Code?",
      },
      {
        type: "paragraph",
        content:
          "MICR stands for Magnetic Ink Character Recognition. It's a technology used by banks to enhance the security and efficiency of cheque processing. The MICR code is a unique series of numbers printed at the bottom of a cheque using special magnetic ink.",
      },
      {
        type: "paragraph",
        content:
          'When you hear "MICR code means," it refers to this special code that helps in the automated processing of cheques and other bank documents.',
      },
      {
        type: "heading",
        content: "Understanding the MICR Code on Cheque",
      },
      {
        type: "paragraph",
        content:
          "The MICR code on cheque is typically a 9-digit number divided into three parts:",
      },
      {
        type: "list",
        content: [
          "City Code (3 digits): Represents the city where the bank branch is located.",
          "Bank Code (3 digits): Identifies the specific bank.",
          "Branch Code (3 digits): Uniquely identifies the particular branch of the bank.",
        ],
      },
      {
        type: "paragraph",
        content:
          "For example, if you see a MICR code like 400002002, it can be broken down as:",
      },
      {
        type: "list",
        content: [
          "400: City code (e.g., Mumbai)",
          "002: Bank code (e.g., State Bank of India)",
          "002: Branch code (e.g., Main Branch)",
        ],
      },
      {
        type: "heading",
        content: "Importance of MICR Code in Banking",
      },
      {
        type: "paragraph",
        content:
          "The MICR code of bank plays a crucial role in various banking operations:",
      },
      {
        type: "list",
        content: [
          "Faster Cheque Processing: MICR codes enable quick and accurate reading of cheque information.",
          "Reduced Errors: The magnetic ink and standardized format minimize errors in cheque processing.",
          "Enhanced Security: MICR codes are difficult to forge, adding an extra layer of security to transactions.",
          "Automated Clearing: It facilitates automated clearing house (ACH) operations, speeding up inter-bank transactions.",
        ],
      },
      {
        type: "heading",
        content: "How to Find MICR Code in Cheque",
      },
      {
        type: "paragraph",
        content:
          "Locating the MICR code in cheque is straightforward. Look at the bottom of your cheque, and you'll see a series of numbers printed in a special font. The MICR code is typically the second set of numbers from the left, following the cheque number.",
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733173993/Screenshot_from_2024-12-03_02-42-49_pqmvta.png",
      },
      {
        type: "heading",
        content: "MICR Code vs. IFSC Code: Understanding the Difference",
      },
      {
        type: "paragraph",
        content:
          "While both MICR and IFSC codes are important in banking, they serve different purposes:",
      },
      {
        type: "table",
        content: [
          ["Feature", "MICR Code", "IFSC Code"],
          [
            "Full Form",
            "Magnetic Ink Character Recognition",
            "Indian Financial System Code",
          ],
          ["Length", "9 digits", "11 characters (alphanumeric)"],
          [
            "Primary Use",
            "Cheque processing and clearance",
            "Online fund transfers (NEFT, RTGS, IMPS)",
          ],
          ["Format", "Numeric only", "Alphanumeric"],
          [
            "Location",
            "Printed on cheques",
            "Not on cheques; found on bank websites or statements",
          ],
        ],
      },
      {
        type: "heading",
        content: "Frequently Asked Questions About MICR Codes",
      },
      {
        type: "subheading",
        content: "Q: Can I find my MICR code without a cheque?",
      },
      {
        type: "paragraph",
        content:
          "A: Yes, you can find your MICR code without a cheque. Check your bank statement, contact your bank's customer service, or look it up on your bank's official website.",
      },
      {
        type: "subheading",
        content: "Q: Is the MICR code the same for all branches of a bank?",
      },
      {
        type: "paragraph",
        content:
          "A: No, each branch has its unique MICR code. The last three digits of the MICR code (branch code) differ for each branch of the same bank.",
      },
      {
        type: "subheading",
        content: "Q: Can MICR codes change?",
      },
      {
        type: "paragraph",
        content:
          "A: Yes, MICR codes can change if a bank branch relocates or merges with another branch. Always verify the current MICR code with your bank.",
      },
      {
        type: "heading",
        content: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "Understanding what MICR code means and its importance in banking can help you navigate financial transactions more effectively. Whether you're writing a cheque or setting up direct deposits, knowing how to find and use the MICR code on your cheque is valuable knowledge for any bank account holder.",
      },
      {
        type: "paragraph",
        content:
          "Remember, while MICR codes are crucial for cheque processing, they work alongside other banking codes like IFSC to ensure smooth, secure, and efficient banking operations in the digital age.",
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
