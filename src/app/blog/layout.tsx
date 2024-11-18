import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © 2024 Bank & IFSC Code Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
