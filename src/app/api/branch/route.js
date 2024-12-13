import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import Bank from "@/model/bank";

const POST = async (req) => {
  await dbConnection();
  try {
    const { BANK, BRANCH } = await req.json();

    // Check for invalid or missing parameters
    if (!BANK || !BRANCH) {
      return NextResponse.json(
        { message: "Invalid or missing parameters." },
        { status: 400 }
      );
    }

    // Case-insensitive search for BANK and BRANCH
    const bankDetails = await Bank.findOne(
      {
        BANK,
        BRANCH,
      },
      { _id: 0 } // Exclude the _id field
    );

    return NextResponse.json(bankDetails, { status: 200 });
  } catch (error) {
    console.error("Error fetching bank details:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "An error occurred on the server.", error },
      { status: 500 }
    );
  }
};

export { POST };
