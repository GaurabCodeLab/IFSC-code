"use server";

import { z } from "zod";

const ifscSchema = z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/);

export async function lookupIFSC(prevState: any, formData: FormData) {
  const ifsc = formData.get("ifsc");

  try {
    ifscSchema.parse(ifsc);
  } catch (error) {
    return { error: "Invalid IFSC code format" };
  }

  try {
    const response = await fetch(`https://ifsc.razorpay.com/${ifsc}`);

    if (!response.ok) {
      throw new Error("Failed to fetch bank details");
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: "Failed to fetch bank details. Please try again." };
  }
}
