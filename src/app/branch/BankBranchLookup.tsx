"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchBanks, fetchBranches, lookupBankBranch } from "./actions";

interface Bank {
  id: number;
  name: string;
}

interface Branch {
  _id: string;
  BANK: string;
  IFSC: string;
  BRANCH: string;
  CENTRE: string;
  DISTRICT: string;
  STATE: string;
  ADDRESS: string;
  CONTACT: string;
  IMPS: boolean;
  RTGS: boolean;
  CITY: string;
  ISO3166: string;
  NEFT: boolean;
  MICR: number;
  UPI: boolean;
  SWIFT: string;
}

export default function BankBranchLookup() {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [isBanksLoading, setIsBanksLoading] = useState(true);
  const [isBranchesLoading, setIsBranchesLoading] = useState(false);
  const [banksError, setBanksError] = useState<string | null>(null);
  const [branchesError, setBranchesError] = useState<string | null>(null);
  const [state, formAction] = useFormState(lookupBankBranch, null);

  useEffect(() => {
    loadBanks();
  }, []);

  useEffect(() => {
    if (selectedBank) {
      loadBranches(selectedBank);
    }
  }, [selectedBank]);

  const loadBanks = async () => {
    setIsBanksLoading(true);
    setBanksError(null);
    try {
      const data = await fetchBanks();
      setBanks(data);
    } catch (error) {
      setBanksError("Failed to load banks. Please try again.");
    } finally {
      setIsBanksLoading(false);
    }
  };

  const loadBranches = async (bankName: string) => {
    setIsBranchesLoading(true);
    setBranchesError(null);
    try {
      const data = await fetchBranches(bankName);
      setBranches(data);
    } catch (error) {
      setBranchesError("Failed to load branches. Please try again.");
    } finally {
      setIsBranchesLoading(false);
    }
  };

  const handleBankChange = (value: string) => {
    setSelectedBank(value);
    setSelectedBranch("");
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

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Bank Branch Lookup
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
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
                <strong>Example:</strong> ABHY0065012 (Abhyudaya Co-operative
                Bank, WADALA Branch)
              </p>
            </CardContent>
          </Card>
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
                <strong>Example:</strong> 400065012 (Abhyudaya Co-operative
                Bank, WADALA Branch)
              </p>
              <p className="mt-4">
                MICR codes are printed on cheques using special magnetic ink,
                allowing for quick and accurate processing of financial
                documents.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bank Details Lookup</CardTitle>
            <CardDescription>
              Select a bank and branch to find details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="bank-select" className="text-sm font-medium">
                  Select Bank
                </label>
                {isBanksLoading ? (
                  <Skeleton className="h-10 w-full" />
                ) : banksError ? (
                  <p className="text-red-500">{banksError}</p>
                ) : (
                  <Select
                    name="bank"
                    value={selectedBank}
                    onValueChange={handleBankChange}
                  >
                    <SelectTrigger id="bank-select">
                      <SelectValue placeholder="Select a bank" />
                    </SelectTrigger>
                    <SelectContent>
                      {banks.map((bank) => (
                        <SelectItem key={bank.id} value={bank.name}>
                          {bank.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="branch-select" className="text-sm font-medium">
                  Select Branch
                </label>
                {isBranchesLoading ? (
                  <Skeleton className="h-10 w-full" />
                ) : branchesError ? (
                  <p className="text-red-500">{branchesError}</p>
                ) : (
                  <Select
                    name="branch"
                    value={selectedBranch}
                    onValueChange={setSelectedBranch}
                    disabled={!selectedBank}
                  >
                    <SelectTrigger id="branch-select">
                      <SelectValue placeholder="Select a branch" />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((branch) => (
                        <SelectItem key={branch._id} value={branch.BRANCH}>
                          {branch.BRANCH}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={!selectedBank || !selectedBranch}
              >
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
                    {renderBankDetail("SWIFT", state.data.SWIFT)}
                    {renderBankDetail("Address", state.data.ADDRESS)}
                    {renderBankDetail("City", state.data.CITY)}
                    {renderBankDetail("State", state.data.STATE)}
                    {renderBankDetail("Contact", state.data.CONTACT)}
                    {renderBankDetail("IMPS", state.data.IMPS)}
                    {renderBankDetail("RTGS", state.data.RTGS)}
                    {renderBankDetail("NEFT", state.data.NEFT)}
                    {renderBankDetail("UPI", state.data.UPI)}
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
