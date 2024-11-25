"use client";

import { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import { getBanks, getBranches, getBranchDetails } from "./bankActions";
import { useDebounce } from "./useDebounce";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Option {
  value: string;
  label: string;
}

interface BranchDetails {
  BANK: string;
  BRANCH: string;
  IFSC: string;
  MICR: string;
  ADDRESS: string;
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

  const debouncedBankSearch = useDebounce(bankSearch, 300);
  const debouncedBranchSearch = useDebounce(branchSearch, 300);

  const fetchBanks = useCallback(async (search: string) => {
    try {
      const data = await getBanks(search);
      setBanks(data.map((bank) => ({ value: bank.id, label: bank.name })));
    } catch (error) {
      console.error("Error fetching banks:", error);
    }
  }, []);

  const fetchBranches = useCallback(
    async (bankName: string, search: string) => {
      try {
        const data = await getBranches(bankName, search);
        console.log("bankName hai jee", bankName);
        console.log("data hai jee", data);

        setBranches(
          data.map((branch) => ({ value: branch.id, label: branch.name }))
        );
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    },
    []
  );

  const fetchBranchDetails = useCallback(
    async (bankName: string, branchName: string) => {
      try {
        const data = await getBranchDetails(bankName, branchName);
        setBranchDetails(data);
      } catch (error) {
        console.error("Error fetching branch details:", error);
      }
    },
    []
  );

  useEffect(() => {
    fetchBanks("");
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
    console.log("option hai", option);
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
      console.log("selected bank and option", selectedBank, option);
      fetchBranchDetails(selectedBank.label, option.label);
    } else {
      setBranchDetails(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="bank-select"
          className="block text-sm font-medium text-gray-700"
        >
          Select a bank
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
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      {selectedBank && (
        <div className="space-y-2">
          <label
            htmlFor="branch-select"
            className="block text-sm font-medium text-gray-700"
          >
            Select a branch
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
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
      )}

      {branchDetails && (
        <Card>
          <CardHeader>
            <CardTitle>Branch Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Bank Name</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {branchDetails.BANK}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Branch Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {branchDetails.BRANCH}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">IFSC Code</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {branchDetails.IFSC}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">MICR Code</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {branchDetails.MICR}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {branchDetails.ADDRESS}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
