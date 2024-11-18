"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
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

export default function IFSCLookup() {
  const [ifscCode, setIfscCode] = useState("");
  const [state, formAction] = useFormState(lookupIFSC, null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().slice(0, 11);
    setIfscCode(value);
  };

  const handleClear = () => {
    setIfscCode("");
  };

  const renderBankDetail = (label: string, value: string | undefined) => {
    if (value && value !== "N/A") {
      return (
        <p>
          <strong>{label}:</strong> {value}
        </p>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">IFSC Code Lookup</h1>
      <div className="grid md:grid-cols-2 gap-6">
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
              <strong>Example:</strong> SBIN0000001 (State Bank of India, Main
              Branch, Mumbai)
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
              <Button type="submit" className="w-full">
                Search
              </Button>
              {state?.error && (
                <p className="text-red-500" role="alert">
                  {state.error}
                </p>
              )}
              {state?.data && (
                <div className="mt-4 space-y-2">
                  <h2 className="text-xl font-semibold">Bank Details</h2>
                  <div className="grid gap-2">
                    {renderBankDetail("Bank", state.data.BANK)}
                    {renderBankDetail("Branch", state.data.BRANCH)}
                    {renderBankDetail("IFSC", state.data.IFSC)}
                    {renderBankDetail("MICR", state.data.MICR)}
                    {renderBankDetail("Swift Code", state.data.SWIFT)}
                    {renderBankDetail("Branch Code", state.data.BRANCH_CODE)}
                    {renderBankDetail("Contact", state.data.CONTACT)}
                    {renderBankDetail("Address", state.data.ADDRESS)}
                    {renderBankDetail("City", state.data.CITY)}
                    {renderBankDetail("State", state.data.STATE)}
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
