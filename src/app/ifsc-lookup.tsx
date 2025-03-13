"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";
import { lookupIFSC } from "./actions";
import Shimmer from "@/components/Shimmer";
import Chatbot from "@/components/ChatBot";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Searching..." : "Search"}
    </Button>
  );
}

export default function IFSCLookup() {
  const [ifscCode, setIfscCode] = useState("");
  const [state, formAction] = useFormState(lookupIFSC, null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().slice(0, 11);
    setIfscCode(value);
  };

  const handleClear = () => {
    setIfscCode("");
    formAction({ type: "reset" } as any);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">IFSC Code Lookup</h1>
      <div className="md:grid md:grid-cols-2 gap-6 flex flex-col-reverse">
        <Card>
          <CardHeader>
            <CardTitle>What is an IFSC code?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              IFSC (Indian Financial System Code) is an 11-character code that
              uniquely identifies a bank branch in India. It's used for
              electronic funds transfers and is essential for NEFT, RTGS, and
              IMPS transactions.
            </p>
            <p className="mb-2">
              <strong>Format:</strong> AAAABCCXXX
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>First 4 characters (AAAA): Bank code</li>
              <li>5th character (B): 0 (zero)</li>
              <li>Last 6 characters (CCXXX): Branch code</li>
            </ul>
            <p>
              <strong>Example:</strong> AIRP0000001 (
              <strong>airtel payment bank ifsc code</strong>)
            </p>
            <p>
              The IFSC (Indian Financial System Code) uniquely identifies bank
              branches for electronic payments in India, ensuring secure
              transactions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bank Details Lookup</CardTitle>
            <CardDescription>
              Enter an IFSC code to find bank details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  name="ifsc"
                  value={ifscCode}
                  onChange={handleInputChange}
                  placeholder="Enter IFSC Code"
                  required
                  pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
                  title="Please enter a valid IFSC code (e.g., SBIN0000001)"
                  className="pr-10"
                  maxLength={11}
                  aria-label="IFSC Code"
                />
                {ifscCode && (
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
              <SubmitButton />
              <ResultsArea state={state} />
            </form>
          </CardContent>
        </Card>
        <Chatbot />
      </div>
    </div>
  );
}

function ResultsArea({ state }: { state: any }) {
  const { pending } = useFormStatus();

  if (pending) {
    return <Shimmer />;
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
          {renderBankDetail("Bank", state.data.BANK)}
          {renderBankDetail("Branch", state.data.BRANCH)}
          {renderBankDetail("MICR", state.data.MICR)}
          {renderBankDetail("IFSC", state.data.IFSC)}
          {renderBankDetail("Swift Code", state.data.SWIFT)}
          {renderBankDetail("Branch Code", state.data.BRANCH_CODE)}
          {renderBankDetail("Contact", state.data.CONTACT)}
          {renderBankDetail("Address", state.data.ADDRESS)}
          {renderBankDetail("City", state.data.CITY)}
          {renderBankDetail("State", state.data.STATE)}
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
