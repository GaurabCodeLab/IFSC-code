"use server";

import { z } from "zod";

const micrSchema = z.string().regex(/^\d{9}$/);
const baseUrl = process.env.API_BASE_URL;

export async function lookupMICR(prevState: any, formData: FormData) {
  if (formData.get) {
    const micr = formData.get("micr");
    if (!micr) {
      return { error: "MICR code is required" };
    }
    if (prevState && prevState.MICR ? prevState.MICR !== micr : true) {
      try {
        micrSchema.parse(micr);
      } catch (error) {
        return { error: "Invalid MICR code format" };
      }

      try {
        // Note: This is a placeholder URL. Replace with the actual API endpoint for MICR lookup
        const response = await fetch(`${baseUrl}/api/micr/${micr}`);

        if (!response.ok) {
          throw new Error("Failed to fetch bank d Please try again.etails");
        }

        const data = await response.json();
        return { data };
      } catch (error) {
        return { error: "Failed to fetch bank details." };
      }
    }
  }
}
