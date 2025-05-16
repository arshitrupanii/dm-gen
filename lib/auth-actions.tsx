"use server";

import { redirect } from "next/navigation";
import { createClient } from "utils/supabase/server";


export async function signout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
    redirect("/error");
  }

  redirect("/dashboard");
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
    },
  });
  console.log(data)

  if(error?.status === 400) {
    console.log(error, "error in signInWithGoogle");
    redirect("/error");
  }

  if (error) {
    // console.log(error, "error logfjkflds"); 
    redirect("/error");
  }
  redirect(data.url);
  
}
