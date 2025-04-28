"use server";

import { z } from "zod";
import { SWIFT_API } from "@/utils/constants";

const swiftCodeSchema = z.string().regex(/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/);

const bankDetailsSchema = z.object({
  address: z.string(),
  branch_name: z.string(),
  bank: z.object({
    name: z.string(),
  }),
  city: z.object({
    name: z.string(),
  }),
  country: z.object({
    name: z.string(),
  }),
  id: z.string(),
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
        const options = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "X-Api-Key": "your-api-key-here",
          },
        };
        const response = await fetch(SWIFT_API + swiftCode, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "X-Api-Key": String(process.env.SWIFT_API_KEY),
          },
        });

        console.log("response hai", response);

        if (!response.ok) {
          throw new Error("Failed to fetch bank details");
        }

        const data = await response.json();
        const validatedData = bankDetailsSchema.parse(data.data);
        return { data: validatedData };
      } catch (error) {
        console.error("Error fetching bank details:", error);
        return { error: "Failed to fetch bank details." };
      }
    }
  }
}
