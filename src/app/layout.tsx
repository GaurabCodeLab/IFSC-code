import type React from "react";
import localFont from "next/font/local";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="monetag" content="26c438de7d2ee6ef6c8a43f3b36b713b"></meta>
        <script
          src="https://fpyf8.com/88/tag.min.js"
          data-zone="155554"
          async
          data-cfasync="false"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100vh]`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
        {/* Choose ONE Google Analytics ID - I'm using the one from the GoogleAnalytics component */}
        <GoogleAnalytics gaId="G-4ZN9EPJDT1" />
      </body>
    </html>
  );
}
