import { Metadata } from "next";
import IFSCLookup from "./ifsc-lookup";

export const metadata: Metadata = {
  title: "IFSC Code Lookup | Find Bank Details",
  description:
    "Enter your IFSC code to quickly find bank details including branch name, address, and more.",
  keywords: "IFSC, bank details, branch lookup, Indian Financial System Code",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* <h1 className="text-4xl font-bold mb-8">IFSC Code Lookup</h1> */}
      <IFSCLookup />
    </main>
  );
}
