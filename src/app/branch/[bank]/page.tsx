import { Metadata } from "next";
import BankBranchLookup from "../BankBranchLookup";

export const metadata: Metadata = {
  title: "Bank Branch Lookup | Find Bank Details",
  description:
    "Select a bank and branch to quickly find bank details including IFSC code, MICR code, address, and more.",
  keywords:
    "bank lookup,bank branch name, airtel payment bank branch, rbl bank branch list, branch details, sbi micr code, union bank micr code, bank micr code, indian bank micr code, hdfc micr code, bank of baroda micr code, IFSC code, MICR code, Indian banks, bank of baroda ifsc code, indian bank ifsc code, sbi ifsc code, india post payment bank ifsc code, airtel payment bank ifsc code",
  openGraph: {
    title: "Bank Branch Lookup | Find Bank Details",
    description:
      "Select a bank and branch to quickly find bank details including IFSC code, MICR code, address, and more.",
    images: [
      "https://res.cloudinary.com/dqquvmo2p/image/upload/v1741378503/DALL_E_2025-03-08_01.43.59_-_A_modern_Indian_bank_building_with_a_grand_entrance_large_glass_windows_and_a_traditional_yet_contemporary_design._The_building_features_the_Indian_czu3br.webp",
    ],
    url: "https://ifsccodeb.com/branch",
  },
};

export default function BankBranchLookupPage() {
  return <BankBranchLookup />;
}
