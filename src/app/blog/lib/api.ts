interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage?: string;
  content: {
    type: string;
    content: string | string[];
  }[];
  metadata: {
    description: string;
    keywords: string[];
    author: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    slug: "ifsc-codes-explained",
    title: "IFSC Codes Explained: A Complete Guide for Indian Bank Customers",
    excerpt:
      "From Bank of Baroda IFSC Code to SBI IFSC Code, we've got you covered!",
    date: "2024-05-15", // Example date
    author: "Gaurab Kumar",
    coverImage:
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733082538/cover_u0ivck.webp",
    content: [
      {
        type: "navigation",
        content: `
          <ul>
            <li>What is an IFSC Code?</li>
            <li>Why Are IFSC Codes Important?</li>
            <li>Popular Bank IFSC Codes</li>
            <li>Frequently Asked Questions</li>
      </ul>
        `,
      },
      {
        type: "heading",
        content: "What is an IFSC Code?",
      },
      {
        type: "paragraph",
        content:
          "The Indian Financial System Code, or IFSC code, is an 11-character code assigned to every bank branch in India. This unique code is used to identify specific branches for online transactions such as NEFT, RTGS, and IMPS. For example, the Bank of Baroda IFSC Code for a branch in Mumbai will differ from a branch in Delhi.",
      },
      {
        type: "emphasis",
        content: ["IFSC code", "Bank of Baroda IFSC Code"],
      },
      {
        type: "heading",
        content: "Why Are IFSC Codes Important?",
      },
      {
        type: "paragraph",
        content:
          "Think of an IFSC code as a unique postal address for your bank branch. It ensures:",
      },
      {
        type: "list",
        content: `
          <li>Quick and accurate processing of online transactions.</li>
          <li>Minimized errors during fund transfers.</li>
          <li>Secure and efficient money transfers between accounts.</li>
        `,
      },
      {
        type: "image",
        content:
          "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733083665/DALL_E_2024-12-02_01.37.27_-_An_illustrative_image_of_a_cheque_book_with_a_highlighted_IFSC_code_paired_with_digital_icons_representing_online_transactions_like_a_mobile_phone_a_xku7ch.webp",
      },
      {
        type: "heading",
        content: "Popular Bank IFSC Codes",
      },
      {
        type: "paragraph",
        content: "Here's a list of some commonly searched IFSC codes:",
      },
      {
        type: "subheading",
        content: "Bank of Baroda IFSC Code",
      },
      {
        type: "paragraph",
        content:
          "Known for its widespread network, the <strong>Bank of Baroda IFSC Code</strong> for your branch can be found on the bank's website, cheque book, or account statement.",
      },
      {
        type: "subheading",
        content: "SBI IFSC Code",
      },
      {
        type: "paragraph",
        content:
          "The <strong>SBI IFSC Code</strong> is crucial for seamless transactions. You can use the SBI app or online portal to locate the correct code for your branch.",
      },
      {
        type: "subheading",
        content: "Airtel Payment Bank IFSC Code",
      },
      {
        type: "paragraph",
        content:
          "Despite being a newer player, Airtel Payment Bank provides IFSC codes for secure online payments. Find yours on their mobile app or by contacting customer care.",
      },
      {
        type: "subheading",
        content: "Canara Bank IFSC Code",
      },
      {
        type: "paragraph",
        content:
          "Searching for the <strong>Canara Bank IFSC Code</strong>? The official website or mobile banking app will provide accurate branch-wise details.",
      },
      {
        type: "subheading",
        content: "India Post Payment Bank IFSC Code",
      },
      {
        type: "paragraph",
        content:
          "For rural banking needs, the <strong>India Post Payment Bank IFSC Code</strong> ensures reliable digital transactions. Look for it on your account documents.",
      },
      {
        type: "subheading",
        content: "Union Bank IFSC Code",
      },
      {
        type: "paragraph",
        content:
          "The <strong>Union Bank IFSC Code</strong> is essential for customers making IMPS or NEFT transfers. Access it via their website or branch visit.",
      },
      {
        type: "heading",
        content: "Frequently Asked Questions",
      },
      {
        type: "subheading",
        content: "Where can I find my bank's IFSC code?",
      },
      {
        type: "paragraph",
        content:
          "You can find it on your cheque book, account statement, or the official bank website. For example, the <strong>IFSC code for Bank of Baroda</strong> is easily available online.",
      },
      {
        type: "subheading",
        content: "Are IFSC codes the same for all branches?",
      },
      {
        type: "paragraph",
        content:
          "No, each branch of a bank has a unique IFSC code. This helps identify the branch during online fund transfers.",
      },
    ],
    metadata: {
      description:
        "Learn the importance of IFSC codes for banks like Bank of Baroda, SBI, Canara Bank, and more. A complete guide to making seamless online transactions.",
      keywords: [
        "Bank of Baroda IFSC Code",
        "Airtel Payment Bank IFSC Code",
        "SBI IFSC Code",
        "Indian Bank IFSC Code",
        "Canara Bank IFSC Code",
        "Union Bank IFSC Code",
        "IFSC Code SBI",
        "IFSC Code Bank of Baroda",
        "India Post Payment Bank IFSC Code",
      ],
      author: "Your Name",
    },
  },
  // Add more blog posts here
];

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // In a real application, you would fetch this data from a database or API
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  // In a real application, you would fetch this data from a database or API
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }
  return post;
}
