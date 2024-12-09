import "./globals.css";

export const metadata = {
  title: "Hair Fixing Business Management",
  description:
    "Manage your hair fixing business customers across multiple branches",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
