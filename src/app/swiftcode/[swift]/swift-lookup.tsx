"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SWIFT_API } from "@/utils/constants";
import Link from "next/link";
import Shimmer from "@/components/common/Shimmer";
import Chatbot from "@/components/common/ChatBot";
import Swift from "@/components/common/Swift";

// Define types for bank details
interface BranchDetails {
  address: string;
  branch_name: string;
  bank: any;
  city: any;
  country: any;
  id: string;
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
            Accept: "application/json",
            "X-Api-Key":
              "sk_a167bc18b91c1d2d3a3e4e982e5859cdc676e68e70f10d20a68bac16abab1302",
          },
        });
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result = await response.json();
        setBranchDetails(result.data);
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
        <Swift />
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
          <Link href="/swiftcode">
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
      <h2 className="text-xl font-semibold">Swift Code: {branchDetails.id}</h2>
      <div className="grid gap-2">
        {branchDetails.bank &&
          renderBankDetail("Bank", branchDetails.bank.name)}
        {renderBankDetail("Branch", branchDetails.branch_name)}
        {renderBankDetail("City", branchDetails.city.name)}
        {renderBankDetail("Address", branchDetails.address)}
        {renderBankDetail("Country", branchDetails.country.name)}
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
