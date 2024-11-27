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
import { lookupMICR } from "./actions";
import { Skeleton } from "@/components/ui/skeleton";

export default function MICRLookup() {
  const [micrCode, setMicrCode] = useState("");
  const [state, formAction] = useFormState(lookupMICR, null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 9);
    setMicrCode(value);
    setLoading(false);
  };

  const handleClear = () => {
    setMicrCode("");
    setLoading(false);
  };

  const handleSubmit = (): void => {
    setLoading(true);
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
  console.log("loading data hai", loading, state);
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">MICR Code Lookup</h1>
      <div className="md:grid md:grid-cols-2 gap-6 flex flex-col-reverse">
        <Card>
          <CardHeader>
            <CardTitle>What is a MICR code?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              MICR (Magnetic Ink Character Recognition) code is a 9-digit code
              that uniquely identifies a bank branch in India. It's primarily
              used for processing cheques and other documents.
            </p>
            <p className="mb-2">
              <strong>Format:</strong> CCCBBBSSS
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>First 3 digits (CCC): City code</li>
              <li>Next 3 digits (BBB): Bank code</li>
              <li>Last 3 digits (SSS): Branch code</li>
            </ul>
            <p>
              <strong>Example:</strong> 400002002 (State Bank of India, Main
              Branch, Mumbai)
            </p>
            <p className="mt-4">
              MICR codes are printed on cheques using special magnetic ink,
              allowing for quick and accurate processing of financial documents.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bank Details Lookup</CardTitle>
            <CardDescription>
              Enter a MICR code to find bank details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={formAction}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <Input
                  type="text"
                  name="micr"
                  value={micrCode}
                  onChange={handleInputChange}
                  placeholder="Enter MICR Code"
                  required
                  pattern="^\d{9}$"
                  title="Please enter a valid 9-digit MICR code"
                  className="pr-10"
                  maxLength={9}
                  aria-label="MICR Code"
                />
                {micrCode && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                    onClick={handleClear}
                    aria-label="Clear MICR Code"
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
              {loading || (state?.error ? !state?.error : false) ? (
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Bank Details</h2>
                  <Skeleton className="h-4 w-[250px] bg-gray-300" />
                  <Skeleton className="h-4 w-[200px] bg-gray-300" />
                  <Skeleton className="h-4 w-[150px] bg-gray-300" />
                  <Skeleton className="h-4 w-[180px] bg-gray-300" />
                  <Skeleton className="h-4 w-[300px] bg-gray-300" />
                </div>
              ) : state?.data ? (
                <div className="mt-4 space-y-2">
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
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
