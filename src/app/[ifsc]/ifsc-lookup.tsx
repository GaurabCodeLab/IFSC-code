"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { IFSC_API } from "@/utils/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Shimmer from "@/components/common/Shimmer";
import Chatbot from "@/components/common/ChatBot";
import { useRouter } from "next/navigation";
import Ifsc from "@/components/common/Ifsc";

// Define types for bank details
interface BranchDetails {
  IFSC: string;
  BANK: string;
  BRANCH: string;
  MICR?: string;
  SWIFT?: string;
  BRANCH_CODE?: string;
  CONTACT?: string;
  ADDRESS?: string;
  CITY?: string;
  STATE?: string;
}

function SubmitButton() {
  return (
    <Button type="submit" className="w-[90%] mx-auto block mb-2">
      Search More
    </Button>
  );
}

export default function IFSCLookup() {
  const [branchDetails, setBranchDetails] = useState<BranchDetails | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const params = useParams();
  const router = useRouter();
  const ifsc = params.ifsc as string | undefined; // Ensure ifsc is treated as string or undefined

  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        if (!ifsc) return;
        const response = await fetch(`${IFSC_API}${ifsc}`);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result: BranchDetails = await response.json();
        setBranchDetails(result);
        setErrorMessage(null);
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to fetch bank details");
      }
    };

    if (ifsc === "find-branch-by-ifsc-code") {
      router.push("/");
    } else if (ifsc && /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc.toUpperCase())) {
      fetchBankDetails();
    } else {
      setErrorMessage("IFSC Code is in wrong format");
    }
  }, [ifsc]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">IFSC Code Lookup</h1>
      <div className="md:grid md:grid-cols-2 gap-6 flex flex-col-reverse">
        <Ifsc />
        <Card>
          <CardHeader>
            <CardTitle>Bank Details:-</CardTitle>
          </CardHeader>
          <CardContent>
            {errorMessage ? (
              <p className="text-red-600 text-center text-xl">{errorMessage}</p>
            ) : (
              <ResultsArea branchDetails={branchDetails} />
            )}
          </CardContent>
          <Link href="https://otieu.com/4/9572317">
            <SubmitButton />
          </Link>
        </Card>
        <Chatbot />
      </div>
    </div>
  );
}

function ResultsArea({
  branchDetails,
}: {
  branchDetails: BranchDetails | null;
}) {
  if (!branchDetails) {
    return <Shimmer />;
  }

  return (
    <div className="mt-0 space-y-1" aria-live="polite">
      <h2 className="text-xl font-semibold">
        IFSC Code: {branchDetails.IFSC}, {branchDetails.BANK}
      </h2>
      <div className="grid gap-2">
        {renderBankDetail("Bank", branchDetails.BANK)}
        {renderBankDetail("Branch", branchDetails.BRANCH)}
        {renderBankDetail("MICR", branchDetails.MICR)}
        {renderBankDetail("IFSC", branchDetails.IFSC)}
        {renderBankDetail("Swift Code", branchDetails.SWIFT)}
        {renderBankDetail("Branch Code", branchDetails.BRANCH_CODE)}
        {renderBankDetail("Contact", branchDetails.CONTACT)}
        {renderBankDetail("Address", branchDetails.ADDRESS)}
        {renderBankDetail("City", branchDetails.CITY)}
        {renderBankDetail("State", branchDetails.STATE)}
      </div>
    </div>
  );
}

function renderBankDetail(label: string, value?: string) {
  if (value && value !== "N/A") {
    return (
      <p>
        <strong>{label}:</strong> {value}
      </p>
    );
  }
  return null;
}
