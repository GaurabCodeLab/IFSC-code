"use server";

import { z } from "zod";

const swiftCodeSchema = z.string().regex(/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/);

const bankDetailsSchema = z.object({
  BANK: z.string(),
  SWIFT: z.string(),
  CITY: z.string(),
  BRANCH: z.string().optional(),
  ADDRESS: z.string(),
  IFSC: z.string().optional(),
  MICR: z.number().optional(),
  BRANCH_CODE: z.number().optional(),
  CONTACT: z.string().optional(),
  STATE: z.string(),
});

export async function lookupSwiftCode(prevState: any, formData: FormData) {
  if (formData.get) {
    const swiftCode = formData.get("swiftCode");
    try {
      swiftCodeSchema.parse(swiftCode);
    } catch (error) {
      return { error: "Invalid SWIFT code format" };
    }

    if (prevState && prevState.SWIFT ? prevState.SWIFT !== swiftCode : true) {
      try {
        // Replace this URL with your actual API endpoint
        const response = await fetch(
          "https://ifsc-backend.vercel.app/api/swift",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ swiftCode }),
          }
        );

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
  }
}
