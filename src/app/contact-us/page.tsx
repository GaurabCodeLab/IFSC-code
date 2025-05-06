import type React from "react";
import type { Metadata } from "next";

import ContactUs from "@/components/common/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us | BankInfo Hub",
  description:
    "Get in touch with BankInfo Hub for questions about IFSC codes, MICR codes, or SWIFT codes. Report data issues, suggest improvements, or inquire about our banking information services.",
  keywords: [
    "contact BankInfo Hub",
    "banking information help",
    "IFSC code support",
    "report banking data issues",
    "banking information inquiry",
    "bank branch details help",
  ],
  alternates: {
    canonical: "https://ifsccodeb.com/contact-us",
  },
  openGraph: {
    title: "Contact Us | BankInfo Hub",
    description:
      "Get in touch with BankInfo Hub for questions about IFSC codes, MICR codes, or SWIFT codes.",
    url: "https://ifsccodeb.com/contact-us",
    siteName: "BankInfo Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | BankInfo Hub",
    description:
      "Get in touch with BankInfo Hub for questions about IFSC codes, MICR codes, or SWIFT codes.",
  },
};

export default function Contact() {
  return <ContactUs />;
}
