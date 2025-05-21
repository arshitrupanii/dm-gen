import { createClient } from "utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Unauthorized - Please sign in" },
        { status: 401 }
      );
    }

    const data = await request.json();
    const { fullName, jobTitle, companyName, experienceLevel } = data;

    if (!fullName || !jobTitle) {
      return NextResponse.json(
        { error: "Full name and job title are required" },
        { status: 400 }
      );
    }

    // UPSERT logic – will insert if not exists, else update
    const { data: userDetails, error } = await supabase
      .from("user_details")
      .upsert(
        [
          {
            user_id: user.id,
            fullName,
            jobTitle,
            companyName: companyName || null,
            experienceLevel,
          },
        ],
        {
          onConflict: "user_id", // assumes user_id is primary or unique
        }
      )
      .select();

    if (error) {
      console.error("Error storing user details:", error);
      return NextResponse.json(
        { error: "Failed to store user details" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "User details stored/updated successfully",
      data: userDetails[0],
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
