"use client";

import { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import { getBanks, getBranches, getBranchDetails } from "./bankActions";
import { useDebounce } from "./useDebounce";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Chatbot from "@/components/common/ChatBot";
import { useParams } from "next/navigation";
import Ifsc from "@/components/common/Ifsc";
import Micr from "@/components/common/Micr";

interface Option {
  value: string;
  label: string;
}

interface BranchDetails {
  BANK?: string;
  IFSC?: string;
  BRANCH?: string;
  CENTRE?: string;
  DISTRICT?: string;
  STATE?: string;
  ADDRESS?: string;
  CONTACT?: string;
  IMPS?: boolean;
  RTGS?: boolean;
  CITY?: string;
  ISO3166?: string;
  NEFT?: boolean;
  MICR?: string; // Updated: MICR is now a string
  UPI?: boolean;
  SWIFT?: string;
}

export default function BankBranchLookup() {
  const [banks, setBanks] = useState<Option[]>([]);
  const [branches, setBranches] = useState<Option[]>([]);
  const [selectedBank, setSelectedBank] = useState<Option | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Option | null>(null);
  const [bankSearch, setBankSearch] = useState("");
  const [branchSearch, setBranchSearch] = useState("");
  const [branchDetails, setBranchDetails] = useState<BranchDetails | null>(
    null
  );
  const [isLoadingBanks, setIsLoadingBanks] = useState(false);
  const [isLoadingBranches, setIsLoadingBranches] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const debouncedBankSearch = useDebounce(bankSearch, 300);
  const debouncedBranchSearch = useDebounce(branchSearch, 300);
  const { bank } = useParams();

  console.log("params hai", bank);

  const fetchBanks = useCallback(async (search: any) => {
    setIsLoadingBanks(true);
    const searchStr = search?.split("-")?.join(" ") || "";
    try {
      const data = await getBanks(searchStr);
      setBanks(data.map((bank) => ({ value: bank.id, label: bank.name })));
      if (bank) {
        const tempBankDetails = data.map((bank) => ({
          value: bank.id,
          label: bank.name,
        }))[0];
        setSelectedBank(tempBankDetails);
      }
    } catch (error) {
      console.error("Error fetching banks:", error);
    } finally {
      setIsLoadingBanks(false);
    }
  }, []);

  const fetchBranches = useCallback(
    async (bankName: string, search: string) => {
      setIsLoadingBranches(true);
      try {
        const data = await getBranches(bankName, search);
        setBranches(
          data.map((branch) => ({ value: branch.id, label: branch.name }))
        );
      } catch (error) {
        console.error("Error fetching branches:", error);
      } finally {
        setIsLoadingBranches(false);
      }
    },
    []
  );

  const fetchBranchDetails = useCallback(
    async (bankName: string, branchName: string) => {
      setIsLoadingDetails(true);
      try {
        const data = await getBranchDetails(bankName, branchName);
        setBranchDetails(data as BranchDetails);
      } catch (error) {
        console.error("Error fetching branch details:", error);
        setBranchDetails(null);
      } finally {
        setIsLoadingDetails(false);
      }
    },
    []
  );
  useEffect(() => {
    fetchBanks(bank ? bank : "");
  }, [fetchBanks]);

  useEffect(() => {
    if (debouncedBankSearch) {
      fetchBanks(debouncedBankSearch);
    }
  }, [debouncedBankSearch, fetchBanks]);

  useEffect(() => {
    if (selectedBank && debouncedBranchSearch) {
      fetchBranches(selectedBank.label, debouncedBranchSearch);
    }
  }, [selectedBank, debouncedBranchSearch, fetchBranches]);

  const handleBankChange = (option: Option | null) => {
    setSelectedBank(option);
    setSelectedBranch(null);
    setBranchDetails(null);
    setBranches([]);
    if (option) {
      fetchBranches(option.label, "");
    }
  };

  const handleBranchChange = (option: Option | null) => {
    setSelectedBranch(option);
    if (selectedBank && option) {
      fetchBranchDetails(selectedBank.label, option.label);
    } else {
      setBranchDetails(null);
    }
  };

  const renderBankDetail = (
    label: string,
    value: string | number | boolean | undefined
  ) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== "N/A" &&
      value !== "" &&
      value !== 0
    ) {
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
      <div className="md:grid md:grid-cols-2 gap-6 flex flex-col-reverse">
        <div className="space-y-6">
          <Ifsc />
          <Micr />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Bank Details Lookup</CardTitle>
            <CardDescription>
              Select a bank name and branch name to find bank details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <label
                htmlFor="bank-select"
                className="block text-sm font-medium text-gray-700"
              >
                Search and Select a bank
              </label>
              <Select
                id="bank-select"
                options={banks}
                value={selectedBank}
                onChange={handleBankChange}
                onInputChange={setBankSearch}
                placeholder="Search and select a bank"
                isClearable
                isSearchable
                isLoading={isLoadingBanks}
                className="react-select-container"
                classNamePrefix="react-select"
              />
              <div className="space-y-2">
                <label
                  htmlFor="branch-select"
                  className="block text-sm font-medium text-gray-700"
                >
                  Search and Select a branch
                </label>
                <Select
                  id="branch-select"
                  options={branches}
                  value={selectedBranch}
                  onChange={handleBranchChange}
                  onInputChange={setBranchSearch}
                  placeholder="Search and select a branch"
                  isClearable
                  isSearchable
                  isLoading={isLoadingBranches}
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
              {selectedBank && selectedBranch && (
                <Card>
                  <CardHeader>
                    <CardTitle>Branch Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isLoadingDetails ? (
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[180px]" />
                        <Skeleton className="h-4 w-[300px]" />
                      </div>
                    ) : branchDetails ? (
                      <div className="mt-0 space-y-2">
                        <div className="grid gap-2">
                          {renderBankDetail("Bank", branchDetails.BANK)}
                          {renderBankDetail("Branch", branchDetails.BRANCH)}
                          {renderBankDetail("IFSC", branchDetails.IFSC)}
                          {renderBankDetail("MICR", branchDetails.MICR)}
                          {renderBankDetail("SWIFT", branchDetails.SWIFT)}
                          {renderBankDetail("Address", branchDetails.ADDRESS)}
                          {renderBankDetail("City", branchDetails.CITY)}
                          {renderBankDetail("State", branchDetails.STATE)}
                          {renderBankDetail("Contact", branchDetails.CONTACT)}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Select a bank and branch to view details.
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </CardContent>
        </Card>
        <Chatbot />
      </div>
    </div>
  );
}
