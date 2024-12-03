import { Metadata } from "next";
import MICRlOOKUP from "./micr-lookup";

export const metadata: Metadata = {
  title: "MICR Code Lookup | Find Bank Details",
  description:
    "Enter your MICR code to quickly find bank details including branch name, address, and more.",
  keywords:
    "micr code, micr code on cheque, micr code in cheque, what is micr code, micr code of bank, micr code means",
};

export default function Home() {
  return <MICRlOOKUP />;
}
