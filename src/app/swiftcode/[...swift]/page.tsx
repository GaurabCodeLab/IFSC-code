import { Metadata } from "next";
import SwiftCodeLookup from "@/components/SwiftCodeLookup";

export const metadata: Metadata = {
  title: "SWIFT Code finder | Find Bank Details",
  description:
    "Enter a SWIFT code to quickly find bank details including bank name, address, and more. Essential for international wire transfers.",
  keywords:
    "swift code, sbi swift code, what is swift code of bank, what is swift code, swift code sbi, hdfc bank swift code, hdfc swift code, ifsc swift code, swift code of sbi, state bank of india swift code, punjab national bank swift code, axis bank swift code, bank of baroda swift code",
};

export default function Home() {
  return <SwiftCodeLookup />;
}
