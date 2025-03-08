import { Metadata } from "next";
import MICRLookup from "./micr-lookup";

export const metadata: Metadata = {
  title: "MICR code search | Find Bank Details",
  description:
    "Enter your MICR code to quickly find bank details including branch name, address, and more.",
  keywords:
    "micr code, micr code on cheque, micr code in cheque, what is micr code, micr code of bank, micr code means, micr code sbi, sbi micr code, union bank micr code, bank micr code, indian bank micr code, hdfc micr code, bank of baroda micr code",
};

export default function Home() {
  return <MICRLookup />;
}
