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
import { lookupSwiftCode } from "../../app/swiftcode/actions";
import { X } from "lucide-react";
import Shimmer from "@/components/common/Shimmer";
import Chatbot from "@/components/common/ChatBot";
import Swift from "./Swift";

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
        <Swift />
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
          {state.data.bank && renderBankDetail("Bank", state.data.bank.name)}
          {renderBankDetail("Branch", state.data.branch_name)}
          {renderBankDetail("City", state.data.city.name)}
          {renderBankDetail("Address", state.data.address)}
          {renderBankDetail("Country", state.data.country.name)}
          {renderBankDetail("Swift Code", state.data.id)}
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
