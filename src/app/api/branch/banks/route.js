import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import Bank from "@/model/bank";

const POST = async (req) => {
  await dbConnection();
  try {
    const { search } = await req.json();
    let banks;
    if (!search) {
      banks = [
        { _id: "Airtel Payments Bank" },
        { _id: "Bank of Baroda" },
        { _id: "State Bank of India" },
        { _id: "Indian Bank" },
        { _id: "Canara Bank" },
        { _id: "India Post Payments Bank" },
        { _id: "Union Bank of India" },
        { _id: "Punjab National Bank" },
        { _id: "Bank of India" },
        { _id: "HDFC Bank" },
        { _id: "ICICI Bank" },
      ];
    } else {
      banks = await Bank.aggregate([
        { $match: { BANK: { $regex: search, $options: "i" } } },
        { $group: { _id: "$BANK" } },
        { $limit: 10 },
      ]);
    }
    return NextResponse.json(
      banks.map((b, index) => {
        return {
          id: index + 1,
          name: b._id,
        };
      }),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export { POST };
