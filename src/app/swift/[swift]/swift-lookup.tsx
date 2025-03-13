"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SWIFT_API } from "@/utils/constants";
import Link from "next/link";
import Shimmer from "@/components/Shimmer";
import Chatbot from "@/components/ChatBot";

// Define types for bank details
interface BranchDetails {
  swift_code?: string;
  bank_name?: string;
  branch?: string;
  city?: string;
  IFSC?: string;
  country?: string;
  country_code?: string;
}

function SubmitButton() {
  return (
    <Button type="submit" className="w-[90%] mx-auto block mb-2">
      Search More
    </Button>
  );
}

export default function SwiftLookup() {
  const [branchDetails, setBranchDetails] = useState<BranchDetails | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const params = useParams();
  const swift = params?.swift as string | undefined; // Ensure swift is treated as string or undefined

  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        if (!swift) return;
        const response = await fetch(`${SWIFT_API}${swift}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "DXM6GzhpXoYj3bIZaOZ24A==iinGYOxOED2YVsBq",
          },
        });
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result: BranchDetails[] = await response.json();
        setBranchDetails(result[0]);
        setErrorMessage(null);
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to fetch bank details");
      }
    };

    if (
      swift &&
      /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(swift.toUpperCase())
    ) {
      fetchBankDetails();
    } else {
      setErrorMessage("Swift Code is in wrong format");
    }
  }, [swift]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Swift Code Lookup</h1>
      <div className="md:grid md:grid-cols-2 gap-6 flex flex-col-reverse">
        <Card>
          <CardHeader>
            <CardTitle>What is a SWIFT code?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              SWIFT (Society for Worldwide Interbank Financial
              Telecommunication) code, also known as BIC (Bank Identifier Code),
              is a unique identification code for banks and financial
              institutions worldwide.
            </p>
            <p className="mb-2">
              <strong>Format:</strong> AAAABBCCXXX
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>First 4 characters (AAAA): Bank code</li>
              <li>Next 2 characters (BB): Country code</li>
              <li>Next 2 characters (CC): Location code</li>
              <li>Last 3 characters (XXX): Branch code (optional)</li>
            </ul>
            <p>
              <strong>Example:</strong> BOFAUS3NXXX (Bank of America, USA)
            </p>
            <p className="mt-4">
              SWIFT codes are essential for international wire transfers and
              help ensure that funds are sent to the correct bank and account.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bank Details:</CardTitle>
          </CardHeader>
          <CardContent>
            {errorMessage ? (
              <p className="text-red-600 text-center text-xl">{errorMessage}</p>
            ) : (
              <ResultsArea branchDetails={branchDetails} />
            )}
          </CardContent>
          <Link href="/swift">
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
    <div className="mt-0 space-y-2" aria-live="polite">
      <h2 className="text-xl font-semibold">
        Swift Code: {branchDetails.swift_code}
      </h2>
      <div className="grid gap-2">
        {renderBankDetail("Branch", branchDetails.branch)}
        {renderBankDetail("City", branchDetails.city)}
        {renderBankDetail("IFSC", branchDetails.IFSC)}
        {renderBankDetail("Country", branchDetails.country)}
        {renderBankDetail("Country Code", branchDetails.country_code)}
        {renderBankDetail("Swift Code", branchDetails.swift_code)}
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
