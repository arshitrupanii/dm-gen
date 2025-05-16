"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "lib/auth-actions";
import React from "react";

const SignInWithGoogleButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      size="default"
      className="w-full"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;
