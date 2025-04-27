import { NextResponse } from "next/server";
import Contact from "../../../model/contact";
import dbConnection from "@/lib/dbConnection";

export async function POST(request: Request) {
  try {
    // Connect to the database
    await dbConnection();

    // Parse the request body
    const body = await request.json();

    // Validate required fields
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new contact entry
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      status: "new",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact request submitted successfully",
        id: contact._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while submitting your request",
      },
      { status: 500 }
    );
  }
}
