import { Metadata } from "next";
import IFSCLookup from "./ifsc-lookup";

export const metadata: Metadata = {
  title: "IFSC Code Lookup | Find Bank Details",
  description:
    "Enter your IFSC code to quickly find bank details including branch name, address, and more.",
  keywords: "IFSC, bank details, branch lookup, Indian Financial System Code",
};

export default function Home() {
  return <IFSCLookup />;
}
