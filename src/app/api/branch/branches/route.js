import { NextResponse } from "next/server";
import dbConnection from "@/lib/dbConnection";
import Bank from "@/model/bank";

const POST = async (req) => {
  await dbConnection();
  try {
    const { BANK, search = "" } = await req.json();
    if (!BANK) {
      return NextResponse.json(
        { error: "Bank name is required" },
        { status: 400 }
      );
    }
    const branches = await Bank.find({
      BANK,
      BRANCH: { $regex: search, $options: "i" },
    })
      .limit(10)
      .select("BRANCH -_id");
    return NextResponse.json(
      branches.map((value, index) => {
        return { id: index + 1, name: value.BRANCH };
      }),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export { POST };
