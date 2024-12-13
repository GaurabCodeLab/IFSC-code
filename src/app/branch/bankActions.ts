"use server";

import { revalidatePath } from "next/cache";

interface Bank {
  id: string;
  name: string;
}

interface Branch {
  id: string;
  name: string;
}

interface BranchDetails {
  BANK: string;
  BRANCH: string;
  IFSC: string;
  MICR: string;
  ADDRESS: string;
}
const baseUrl = process.env.API_BASE_URL;
export async function getBanks(search: string = ""): Promise<Bank[]> {
  try {
    const response = await fetch(`${baseUrl}/api/branch/banks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch banks");
    }

    const data = await response.json();
    revalidatePath("/bank-branch-lookup");
    return data;
  } catch (error) {
    console.error("Error fetching banks:", error);
    throw error;
  }
}

export async function getBranches(
  BANK: string,
  search: string = ""
): Promise<Branch[]> {
  try {
    const response = await fetch(`${baseUrl}/api/branch/branches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ BANK, search }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch branches");
    }

    const data = await response.json();
    revalidatePath("/bank-branch-lookup");
    return data;
  } catch (error) {
    console.error("Error fetching branches:", error);
    throw error;
  }
}
1;
export async function getBranchDetails(
  BANK: string,
  BRANCH: string
): Promise<BranchDetails> {
  try {
    const response = await fetch(`${baseUrl}/api/branch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ BANK, BRANCH }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch branch details");
    }

    const data = await response.json();
    revalidatePath("/bank-branch-lookup");
    return data;
  } catch (error) {
    console.error("Error fetching branch details:", error);
    throw error;
  }
}
