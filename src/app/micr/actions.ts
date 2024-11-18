"use server";

import { z } from "zod";

const micrSchema = z.string().regex(/^\d{9}$/);

export async function lookupMICR(prevState: any, formData: FormData) {
  const micr = formData.get("micr");

  try {
    micrSchema.parse(micr);
  } catch (error) {
    return { error: "Invalid MICR code format" };
  }

  try {
    // Note: This is a placeholder URL. Replace with the actual API endpoint for MICR lookup
    const response = await fetch(
      `https://ifsc-backend.vercel.app/api/micr/${micr}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch bank details");
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: "Failed to fetch bank details. Please try again." };
  }
}
