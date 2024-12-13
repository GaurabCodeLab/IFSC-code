"use server";

import { z } from "zod";
import { IFSC_API } from "@/utils/constants";

const ifscSchema = z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/);

export async function lookupIFSC(prevState: any, formData: FormData) {
  if (formData.get) {
    const ifsc = formData.get("ifsc");
    if (!ifsc) {
      return { error: "IFSC code is required" };
    }
    if (prevState && prevState.IFSC ? prevState.IFSC !== ifsc : true) {
      try {
        ifscSchema.parse(ifsc);
      } catch (error) {
        return { error: "Invalid IFSC code format" };
      }
      try {
        const response = await fetch(IFSC_API + ifsc);

        if (!response.ok) {
          throw new Error("Failed to fetch bank details");
        }

        const data = await response.json();
        return { data };
      } catch (error) {
        return { error: "Failed to fetch bank details." };
      }
    }
  }
}
