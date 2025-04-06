import { Metadata } from "next";
import SwiftCodeLookup from "../../components/common/SwiftCodeLookup";

export const metadata: Metadata = {
  title: "SWIFT Code finder | Find Bank Details",
  description:
    "Enter a SWIFT code to quickly find bank details including bank name, address, and more. Essential for international wire transfers.",
  keywords:
    "swift code, sbi swift code, what is swift code of bank, what is swift code, swift code sbi, hdfc bank swift code, hdfc swift code, ifsc swift code, swift code of sbi, state bank of india swift code, punjab national bank swift code, axis bank swift code, bank of baroda swift code",
  openGraph: {
    title: "swift code finder",
    description:
      "Enter your swift code to quickly find bank details including branch name, address, and more.",
    images: [
      {
        url: "https://res.cloudinary.com/dqquvmo2p/image/upload/v1741377429/DALL_E_2025-03-08_01.26.07_-_A_futuristic_digital_finance_concept_showcasing_SWIFT_codes_glowing_on_a_cyber-tech_interface._The_background_includes_a_holographic_Earth_with_bankin_uho6sm.webp",
        width: 1200,
        height: 630,
        alt: "SWIFT Code finder",
      },
    ],
    url: "https://ifsccodeb.com/swift",
  },
};

export default function SwiftCodeLookupPage() {
  return <SwiftCodeLookup />;
}
