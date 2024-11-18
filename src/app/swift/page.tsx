import { Metadata } from "next";
import SwiftCodeLookup from "./SwiftCodeLookup";

export const metadata: Metadata = {
  title: "SWIFT Code Lookup | Find Bank Details",
  description:
    "Enter a SWIFT code to quickly find bank details including bank name, address, and more. Essential for international wire transfers.",
  keywords:
    "SWIFT code, BIC, bank lookup, international transfer, wire transfer",
};

export default function SwiftCodeLookupPage() {
  return <SwiftCodeLookup />;
}
