import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BankInfo Hub | Banking Information Resource",
  description:
    "Learn about BankInfo Hub, your trusted source for IFSC codes, MICR codes, and SWIFT codes for Indian banks. Discover our mission, data sources, and commitment to accuracy.",
  keywords: [
    "about BankInfo Hub",
    "banking information",
    "IFSC code lookup",
    "MICR code database",
    "SWIFT code directory",
    "Indian banks",
    "bank branch details",
  ],
  alternates: {
    canonical: "https://ifsccodeb.com/about-us",
  },
  openGraph: {
    title: "About BankInfo Hub | Banking Information Resource",
    description:
      "Your trusted source for accurate IFSC, MICR, and SWIFT codes for all Indian banks and branches.",
    url: "https://ifsccodeb.com/about-us",
    siteName: "BankInfo Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BankInfo Hub | Banking Information Resource",
    description:
      "Your trusted source for accurate IFSC, MICR, and SWIFT codes for all Indian banks and branches.",
  },
};

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">About BankInfo Hub</h1>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At BankInfo Hub, we are dedicated to providing accurate and up-to-date
          banking information to help users easily access critical banking
          details. Our platform specializes in IFSC codes, MICR codes, and SWIFT
          codes lookup services, making it simple for users to find the
          information they need for secure banking transactions.
        </p>

        <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Comprehensive database of Indian bank branches with accurate IFSC
            codes
          </li>
          <li>MICR code lookup for cheque processing information</li>
          <li>SWIFT code directory for international banking transactions</li>
          <li>Branch finder tool to locate banking services near you</li>
          <li>
            Educational blog posts about banking, finance, and digital payments
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Our Commitment</h2>
        <p className="mb-4">
          We strive to maintain the most accurate database of banking
          information available. Our team regularly updates our records to
          ensure that all IFSC, MICR, and SWIFT codes are current and valid. We
          understand the importance of accurate information for financial
          transactions and are committed to providing reliable data.
        </p>

        <h2 className="text-xl font-semibold mb-4">Data Sources</h2>
        <p className="mb-4">
          Our information is sourced directly from official banking channels,
          the Reserve Bank of India (RBI), and other authoritative financial
          institutions. While we make every effort to ensure accuracy, we always
          recommend verifying critical information with your bank before making
          important financial transactions.
        </p>

        <h2 className="text-xl font-semibold mb-4">Why Trust Us</h2>
        <p>
          BankInfo Hub has been helping thousands of people with their banking
          information needs. Our commitment to accuracy, user privacy, and
          educational content has made us a trusted resource in the banking
          information sector.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Have Questions?</h2>
        <p className="mb-4">
          We're here to help! If you have any questions about our services or
          need assistance, please contact on linkedin{" "}
          <a
            href="https://www.linkedin.com/in/gaurabfrontendmagic/"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/gaurabfrontendmagic
          </a>{" "}
          or visit our{" "}
          <Link href="/contact-us" className="text-blue-600 hover:underline">
            Contact Us
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
