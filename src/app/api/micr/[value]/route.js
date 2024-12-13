import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import Bank from "@/model/bank";

const GET = async (req, context) => {
  await dbConnection();
  try {
    const MICR = context.params.value;

    // Check for invalid or missing parameters
    if (!MICR || !/^\d{9}$/.test(MICR)) {
      return NextResponse.json(
        { message: "Invalid MICR code. It should be a 9-digit number." },
        { status: 400 }
      );
    }

    const bankDetails = await Bank.findOne({ MICR }, { _id: 0 });

    // Check if bank details were found
    if (!bankDetails) {
      return NextResponse.json(
        { message: "No bank details found for the given input." },
        { status: 404 }
      );
    }

    return NextResponse.json(bankDetails, { status: 200 });
  } catch (error) {
    console.error("Error fetching bank details:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "An error occurred on the server.", error },
      { status: 500 }
    );
  }
};

export { GET };
