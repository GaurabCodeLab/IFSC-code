import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
      <main>
        <div className="max-w-7xl mx-auto py-0 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
