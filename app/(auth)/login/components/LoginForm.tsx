"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SignInWithGoogleButton from "./SignInWithGoogleButton";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">Welcome back</CardTitle>
        <CardDescription className="text-center text-gray-600 dark:text-gray-300">
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <SignInWithGoogleButton />
      </CardContent>
    </Card>
  );
}
