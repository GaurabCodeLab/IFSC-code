import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ifsccodeb.com";

  const mainPages = [
    {
      path: "", // Homepage
      lastModified: new Date("2025-01-31"), // Use actual date of last significant update
      changeFrequency: "monthly" as const, // Homepage likely changes monthly with new content
      priority: 1.0, // Highest priority
    },
    {
      path: "branch", // Branch finder tool
      lastModified: new Date("2025-01-31"), // Date when branch data was last updated
      changeFrequency: "monthly" as const, // Branch data might update weekly
      priority: 0.9, // Very high priority - likely a key user tool
    },
    {
      path: "blog", // Blog index
      // Use the date of your most recent blog post
      lastModified: new Date("2025-03-04"),
      changeFrequency: "weekly" as const, // If you publish regularly
      priority: 0.9, // High priority content hub
    },
  ];

  const bankingInfoPages = [
    {
      path: "micr", // MICR code information
      lastModified: new Date("2025-01-31"), // When MICR data was last verified/updated
      changeFrequency: "monthly" as const, // Banking codes change infrequently
      priority: 0.7, // Important reference content
    },
    {
      path: "swift", // SWIFT code information
      lastModified: new Date("2025-02-18"), // When SWIFT data was last verified/updated
      changeFrequency: "monthly" as const, // Banking codes change infrequently
      priority: 0.7, // Important reference content
    },
    // Add other banking information pages here
    // {
    //   path: "ifsc", // IFSC code lookup main page
    //   lastModified: new Date("2025-01-05"), // When IFSC data was last verified/updated
    //   changeFrequency: "monthly" as const,
    //   priority: 0.8, // Slightly higher priority as it's likely your main service
    // },
    // {
    //   path: "bank-holidays", // If you have this content
    //   lastModified: new Date("2025-01-02"), // Bank holidays update periodically
    //   changeFrequency: "monthly" as const,
    //   priority: 0.7,
    // },
  ];

  // =========================================================================
  // BLOG POSTS - Individual articles with accurate timestamps
  // =========================================================================
  const blogPosts = [
    {
      slug: "understanding-micr-code-banking",
      title:
        "Understanding MICR Code: Essential Guide for Banking Transactions",
      publishedAt: "2025-01-18",
      updatedAt: null, // Use null if never updated after publishing
      image:
        "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733173292/DALL_E_2024-12-03_02.28.06_-_A_user-friendly_and_simple_illustration_for_a_blog_about_MICR_codes_in_banking._The_image_features_a_magnifying_glass_hovering_over_a_cheque_clearly_r5evzq.webp",
      priority: 0.6, // Standard for evergreen content
      changeFrequency: "yearly" as const, // Informational content rarely changes
    },
    {
      slug: "ifsc-code-guide-indian-banking",
      title: "IFSC Code: Complete Guide for Indian Banking Transactions",
      publishedAt: "2025-01-22",
      updatedAt: null,
      image:
        "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733083665/DALL_E_2024-12-02_01.37.27_-_An_illustrative_image_of_a_cheque_book_with_a_highlighted_IFSC_code_paired_with_digital_icons_representing_online_transactions_like_a_mobile_phone_a_xku7ch.webp",
      priority: 0.7,
      changeFrequency: "yearly" as const,
    },
    {
      slug: "maha-kumbh-mela-2025",
      title: "Maha Kumbh Mela 2025: Significance, Dates & Financial Insights",
      publishedAt: "2025-03-04",
      updatedAt: null, // No updates yet
      image:
        "https://res.cloudinary.com/dqquvmo2p/image/upload/v1740843277/DALL_E_2025-03-01_21.04.22_-_A_grand_scene_of_the_Maha_Kumbh_Mela_featuring_millions_of_devotees_gathered_at_the_riverbanks_taking_a_holy_dip_in_the_sacred_river._Sadhus_holy_m_q6brd4.webp",
      priority: 0.8, // Higher priority for trending/current content
      changeFrequency: "monthly" as const, // Event coverage might update frequently
    },
    {
      slug: "airtel-payment-bank",
      title: "Airtel Payment Bank: IFSC Code, Customer Care & Complete Guide",
      publishedAt: "2025-03-24",
      updatedAt: "2025-04-03", // No updates yet
      image:
        "https://res.cloudinary.com/dqquvmo2p/image/upload/v1742658005/airtel-bank-office-pusa-samastipur-payment-banks-airtel-kubs12m6fb_pluh21.jpg",

      priority: 0.9, // Higher priority for trending/current content
      changeFrequency: "monthly" as const, // Event coverage might update frequently
    },
    {
      slug: "indian-post-payment-bank",
      title:
        "India Post Payment Bank: Complete Guide , Banking Services & IFSC Code",
      publishedAt: "2025-04-03",
      updatedAt: null, // No updates yet
      image:
        "https://res.cloudinary.com/dqquvmo2p/image/upload/v1743494944/post1_qi050y.png",

      priority: 0.9, // Higher priority for trending/current content
      changeFrequency: "monthly" as const, // Event coverage might update frequently
    },
    {
      slug: "swift-code-finder",
      title:
        "SWIFT Code Finder: Complete Guide to Bank SWIFT Codes in India | IFSC Code",
      publishedAt: "2025-04-12",
      updatedAt: null, // No updates yet
      image:
        "https://res.cloudinary.com/dqquvmo2p/image/upload/v1744300654/swiftcode_isoxom.webp",

      priority: 0.9, // Higher priority for trending/current content
      changeFrequency: "monthly" as const, // Event coverage might update frequently
    },
    // Add more blog posts here
    // {
    //   slug: "digital-banking-trends-2025",
    //   title: "Digital Banking Trends for 2025",
    //   publishedAt: "2024-12-28",
    //   updatedAt: null,
    //   image: "digital-banking-trends.jpg",
    //   priority: 0.7,
    //   changeFrequency: "monthly" as const, // Trends might need updates
    // },
    // {
    //   slug: "upi-payment-system-explained",
    //   title: "UPI Payment System Explained",
    //   publishedAt: "2024-08-15",
    //   updatedAt: "2024-11-10",
    //   image: "upi-payment-system.jpg",
    //   priority: 0.6,
    //   changeFrequency: "yearly" as const,
    // },
  ];

  // =========================================================================
  // UTILITY PAGES - Lower priority supporting content
  // =========================================================================
  // const utilityPages = [
  //   {
  //     path: "about",
  //     lastModified: new Date("2024-06-15"), // When about page was last updated
  //     changeFrequency: "yearly" as const, // Rarely changes
  //     priority: 0.5, // Medium priority
  //   },
  //   {
  //     path: "contact",
  //     lastModified: new Date("2024-08-22"), // When contact info was last updated
  //     changeFrequency: "yearly" as const, // Rarely changes
  //     priority: 0.5, // Medium priority
  //   },
  //   {
  //     path: "privacy-policy",
  //     lastModified: new Date("2024-09-30"), // When policy was last updated
  //     changeFrequency: "yearly" as const, // Rarely changes
  //     priority: 0.3, // Lower priority
  //   },
  //   {
  //     path: "terms-of-service",
  //     lastModified: new Date("2024-09-30"), // When terms were last updated
  //     changeFrequency: "yearly" as const, // Rarely changes
  //     priority: 0.3, // Lower priority
  //   },
  //   {
  //     path: "faq",
  //     lastModified: new Date("2024-10-15"), // When FAQs were last updated
  //     changeFrequency: "monthly" as const, // Might update with new questions
  //     priority: 0.6, // Medium-high priority as users often seek FAQs
  //   },
  // ];

  // =========================================================================
  // BANK-SPECIFIC PAGES - Dynamic content based on your database
  // =========================================================================
  // In a real implementation, you would fetch this from your database
  // const banks = await getBanks();
  // const topBanks = [
  //   {
  //     slug: "sbi",
  //     name: "State Bank of India",
  //     lastModified: new Date("2025-01-05"),
  //   },
  //   {
  //     slug: "hdfc-bank",
  //     name: "HDFC Bank",
  //     lastModified: new Date("2025-01-05"),
  //   },
  //   {
  //     slug: "icici-bank",
  //     name: "ICICI Bank",
  //     lastModified: new Date("2025-01-05"),
  //   },
  //   {
  //     slug: "axis-bank",
  //     name: "Axis Bank",
  //     lastModified: new Date("2025-01-05"),
  //   },
  //   {
  //     slug: "punjab-national-bank",
  //     name: "Punjab National Bank",
  //     lastModified: new Date("2025-01-05"),
  //   },
  // ];

  // =========================================================================
  // GENERATE SITEMAP ENTRIES
  // =========================================================================

  // Main pages entries
  const mainPagesEntries = mainPages.map((page) => ({
    url: `${baseUrl}${page.path ? `/${page.path}` : ""}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Banking info pages entries
  const bankingInfoEntries = bankingInfoPages.map((page) => ({
    url: `${baseUrl}/${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Blog posts entries with images for rich snippets
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt
      ? new Date(post.updatedAt)
      : new Date(post.publishedAt),
    changeFrequency: post.changeFrequency,
    priority: post.priority,
    // Adding images improves rich snippets in search results
    images: [post.image],
  }));

  // Utility pages entries
  // const utilityEntries = utilityPages.map((page) => ({
  //   url: `${baseUrl}/${page.path}`,
  //   lastModified: page.lastModified,
  //   changeFrequency: page.changeFrequency,
  //   priority: page.priority,
  // }));

  // Bank-specific pages
  // const bankEntries = topBanks.map((bank) => ({
  //   url: `${baseUrl}/bank/${bank.slug}`,
  //   lastModified: bank.lastModified,
  //   changeFrequency: "monthly" as const,
  //   priority: 0.7,
  // }));

  // Combine all entries
  return [
    ...mainPagesEntries,
    ...bankingInfoEntries,
    ...blogEntries,
    // ...utilityEntries,
    //  ...bankEntries,
  ];
}
