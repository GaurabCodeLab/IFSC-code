"use server";

import { z } from "zod";

const bankSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  })
);

const branchSchema = z.array(
  z.object({
    _id: z.string(),
    BANK: z.string(),
    IFSC: z.string(),
    BRANCH: z.string(),
    CENTRE: z.string(),
    DISTRICT: z.string(),
    STATE: z.string(),
    ADDRESS: z.string(),
    CONTACT: z.string(),
    IMPS: z.boolean(),
    RTGS: z.boolean(),
    CITY: z.string(),
    ISO3166: z.string(),
    NEFT: z.boolean(),
    MICR: z.number(),
    UPI: z.boolean(),
    SWIFT: z.string(),
  })
);

const bankDetailsSchema = z.object({
  _id: z.string(),
  BANK: z.string(),
  IFSC: z.string(),
  BRANCH: z.string(),
  CENTRE: z.string(),
  DISTRICT: z.string(),
  STATE: z.string(),
  ADDRESS: z.string(),
  CONTACT: z.string(),
  IMPS: z.boolean(),
  RTGS: z.boolean(),
  CITY: z.string(),
  ISO3166: z.string(),
  NEFT: z.boolean(),
  MICR: z.number(),
  UPI: z.boolean(),
  SWIFT: z.string(),
});

export async function fetchBanks() {
  try {
    const response = await fetch("http://localhost:3001/api/bank", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch banks");
    }

    const data = await response.json();
    return bankSchema.parse(data);
  } catch (error) {
    console.error("Error fetching banks:", error);
    throw new Error("Failed to fetch banks");
  }
}

export async function fetchBranches(bank: string) {
  try {
    const response = await fetch("http://localhost:3001/api/branchList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bank }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch branches");
    }

    const data = await response.json();
    return branchSchema.parse(data);
  } catch (error) {
    console.error("Error fetching branches:", error);
    throw new Error("Failed to fetch branches");
  }
}

export async function lookupBankBranch(prevState: any, formData: FormData) {
  const BANK = formData.get("bank");
  const BRANCH = formData.get("branch");

  if (!BANK || !BRANCH) {
    return { error: "Bank and branch must be selected" };
  }

  try {
    const response = await fetch("http://localhost:3001/api/branch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ BANK, BRANCH }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch bank details");
    }

    const data = await response.json();
    const validatedData = bankDetailsSchema.parse(data);
    return { data: validatedData };
  } catch (error) {
    console.error("Error fetching bank details:", error);
    return { error: "Failed to fetch bank details. Please try again." };
  }
}
