import { Metadata } from "next";
import SwiftLookup from "./swift-lookup";

export const metadata: Metadata = {
  title: "SWIFT Code Lookup | Find Bank Details",
  description:
    "Enter a SWIFT code to quickly find bank details including bank name, address, and more. Essential for international wire transfers.",
  keywords:
    "sbi swift code,hdfc bank swift code, swift code of sbi, SWIFT code, BIC, bank lookup, international transfer, wire transfer",
};

export default function Home() {
  return <SwiftLookup />;
}
