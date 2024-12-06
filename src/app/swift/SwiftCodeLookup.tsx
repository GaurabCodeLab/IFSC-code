"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { lookupSwiftCode } from "./actions";
import { X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Searching..." : "Search"}
    </Button>
  );
}

export default function SwiftCodeLookup() {
  const [swiftCode, setSwiftCode] = useState("");
  const [state, formAction] = useFormState(lookupSwiftCode, null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().slice(0, 11);
    setSwiftCode(value);
  };

  const handleClear = () => {
    setSwiftCode("");
    formAction({ type: "reset" } as any);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">SWIFT Code Lookup</h1>
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
            <CardTitle>Bank Details Lookup</CardTitle>
            <CardDescription>
              Enter a SWIFT code to find bank details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="swift-input" className="text-sm font-medium">
                  SWIFT Code
                </label>
                <div className="relative">
                  <Input
                    id="swift-input"
                    name="swiftCode"
                    value={swiftCode}
                    onChange={handleInputChange}
                    placeholder="Enter SWIFT code"
                    maxLength={11}
                    pattern="^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$"
                    title="Please enter a valid SWIFT code"
                    required
                  />
                  {swiftCode && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                      onClick={handleClear}
                      aria-label="Clear IFSC Code"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <SubmitButton />
              <ResultsArea state={state} />
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ResultsArea({ state }: { state: any }) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <div className="space-y-2" aria-live="polite" aria-busy="true">
        <h2 className="text-xl font-semibold">Bank Details</h2>
        <Skeleton className="h-4 w-[250px] bg-gray-300" />
        <Skeleton className="h-4 w-[200px] bg-gray-300" />
        <Skeleton className="h-4 w-[150px] bg-gray-300" />
        <Skeleton className="h-4 w-[180px] bg-gray-300" />
        <Skeleton className="h-4 w-[300px] bg-gray-300" />
      </div>
    );
  }

  if (state?.error) {
    return (
      <p className="text-red-500" role="alert">
        {state.error}
      </p>
    );
  }

  if (state?.data) {
    return (
      <div className="mt-4 space-y-2" aria-live="polite">
        <h2 className="text-xl font-semibold">Bank Details</h2>
        <div className="grid gap-2">
          {renderBankDetail("Bank", state.data.bank_name)}
          {state.data.branch && renderBankDetail("Branch", state.data.branch)}
          {renderBankDetail("City", state.data.city)}
          {renderBankDetail("IFSC", state.data.IFSC)}
          {renderBankDetail("Country", state.data.country)}
          {renderBankDetail("Country Code", state.data.country_code)}
          {renderBankDetail("Swift Code", state.data.swift_code)}
        </div>
      </div>
    );
  }

  return null;
}

function renderBankDetail(label: string, value: string | undefined) {
  if (value && value !== "N/A") {
    return (
      <p>
        <strong>{label}:</strong> {value}
      </p>
    );
  }
  return null;
}
