"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SignInWithGoogleButton from "./SignInWithGoogleButton";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
        <CardDescription className="text-center">
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <SignInWithGoogleButton />
      </CardContent>
    </Card>
  );
}
