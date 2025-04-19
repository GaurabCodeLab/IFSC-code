import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        "/api/",
        "/Rss.php",
        "/rss.xml",
        "/pincode/",
        "/pincode/Patancheru-Ie-pincode_502319.html",
        "/pincode/mahadevpur-lohit-pincode_792105.html",
        "/pincode/Joygopal-Pur-N-Bazar-pincode_743312.html",
        "/blog/maha-kumbh-mela-2025",
      ],
    },
    sitemap: "https://ifsccodeb.com/sitemap.xml",
  };
}
