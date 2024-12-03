import { Metadata } from "next";
import BankBranchLookup from "./BankBranchLookup";

export const metadata: Metadata = {
  title: "Bank Branch Lookup | Find Bank Details",
  description:
    "Select a bank and branch to quickly find bank details including IFSC code, MICR code, address, and more.",
  keywords:
    "bank lookup, branch details, IFSC code, MICR code, Indian banks, bank of baroda ifsc code, indian bank ifsc code, sbi ifsc code, india post payment bank ifsc code",
};

export default function BankBranchLookupPage() {
  return <BankBranchLookup />;
}
