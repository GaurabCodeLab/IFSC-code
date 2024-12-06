"use server";

import { z } from "zod";

const swiftCodeSchema = z.string().regex(/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/);

const bankDetailsSchema = z.object({
  bank_name: z.string(),
  city: z.string(),
  country: z.string(),
  country_code: z.string(),
  swift_code: z.string(),
  branch: z.string().optional(),
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
          `https://api.api-ninjas.com/v1/swiftcode?swift=${swiftCode}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "DXM6GzhpXoYj3bIZaOZ24A==iinGYOxOED2YVsBq",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch bank details");
        }

        const data = await response.json();
        const validatedData = bankDetailsSchema.parse(data[0]);
        return { data: validatedData };
      } catch (error) {
        console.error("Error fetching bank details:", error);
        return { error: "Failed to fetch bank details." };
      }
    }
  }
}
