"use server";

import { redirect } from "next/navigation";
import { createClient } from "utils/supabase/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; // fallback for dev

export async function signout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Sign-out error:", error);
    redirect("/error");
  }

  redirect("/"); // or "/dashboard" depending on your UX
}

export async function signInWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
 // ✅ Use a centralized callback handler
    },
  });

  if (error) {
    console.error("Google Sign-In Error:", error);
    redirect("/error");
  }

  redirect(data.url); // Redirect to Supabase auth URL
}
