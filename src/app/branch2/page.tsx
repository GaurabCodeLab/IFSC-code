import { Metadata } from "next";
import BankBranchLookup from "./BankBranchLookup";

export const metadata: Metadata = {
  title: "Bank Branch Lookup | Find IFSC and MICR Codes",
  description:
    "Easily find bank branch details, IFSC codes, and MICR codes for Indian banks. Search and select your bank and branch to get accurate information.",
};

export default function BankBranchLookupPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Bank Branch Lookup
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              What is an IFSC code?
            </h2>
            <p className="text-gray-700">
              IFSC (Indian Financial System Code) is an 11-digit alphanumeric
              code that uniquely identifies a bank branch in India. It's
              essential for electronic fund transfers like NEFT, RTGS, and IMPS.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">What is a MICR code?</h2>
            <p className="text-gray-700">
              MICR (Magnetic Ink Character Recognition) code is a 9-digit code
              that appears on cheques. It helps in the electronic clearing of
              cheques and identifies the bank branch uniquely.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <BankBranchLookup />
        </div>
      </div>
    </div>
  );
}
