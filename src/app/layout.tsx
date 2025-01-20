import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ifsc code search",
  description:
    "Enter your IFSC code to quickly find bank details including branch name, address, and more.",
  keywords:
    "IFSC, bank details, ifsc code kya hota hai, branch lookup, Indian Financial System Code, airtel payment bank ifsc code, bank of baroda ifsc code, sbi ifsc code, indian bank ifsc code, ifsc code sbi, canara bank ifsc code, india post payment bank ifsc code",
  openGraph: {
    title: "ifsc code search",
    description:
      "Enter your IFSC code to quickly find bank details including branch name, address, and more.",
    images: [
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1737315122/ifsc_vgmhx4.webp",
    ],
    url: "https://ifsccodeb.com/",
  },
  twitter: {
    title: "ifsc code search",
    description:
      "Enter your IFSC code to quickly find bank details including branch name, address, and more.",
    images: [
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1737315122/ifsc_vgmhx4.webp",
    ],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DBM0HBZ9K7"
        ></Script>
        <Script>
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DBM0HBZ9K7');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100vh]`}
      >
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-4ZN9EPJDT1" />
      </body>
    </html>
  );
}
