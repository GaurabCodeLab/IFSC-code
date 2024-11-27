"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
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

export default function SwiftCodeLookup() {
  const [swiftCode, setSwiftCode] = useState("");
  const [state, formAction] = useFormState(lookupSwiftCode, null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    await formAction(formData);
  };

  const handleChange = (e: any) => {
    setSwiftCode(e.target.value.toUpperCase());
    setLoading(false);
  };

  const handleClear = () => {
    setSwiftCode("");
    setLoading(false);
  };

  const renderBankDetail = (
    label: string,
    value: string | number | boolean | undefined
  ) => {
    if (value !== undefined && value !== "") {
      return (
        <p>
          <strong>{label}:</strong> {value.toString()}
        </p>
      );
    }
    return null;
  };
  console.log("loading hai", loading);
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
            <form
              action={handleSubmit}
              className="space-y-4"
              onSubmit={() => setLoading(true)}
            >
              <div className="space-y-2">
                <label htmlFor="swift-input" className="text-sm font-medium">
                  SWIFT Code
                </label>
                <div className="relative">
                  <Input
                    id="swift-input"
                    name="swiftCode"
                    value={swiftCode}
                    onChange={handleChange}
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
              <Button type="submit" className="w-full">
                Search
              </Button>
              {state?.error && (
                <p className="text-red-500" role="alert">
                  {state.error}
                </p>
              )}
              {state?.data ? (
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
              ) : loading && !state?.error ? (
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Bank Details</h2>
                  <Skeleton className="h-4 w-[250px] bg-gray-300" />
                  <Skeleton className="h-4 w-[200px] bg-gray-300" />
                  <Skeleton className="h-4 w-[150px] bg-gray-300" />
                  <Skeleton className="h-4 w-[180px] bg-gray-300" />
                  <Skeleton className="h-4 w-[300px] bg-gray-300" />
                </div>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
