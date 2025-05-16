"use client";

import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "lib/auth-actions";
import SignInWithGoogleButton from "../../login/components/SignInWithGoogleButton";

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("first-name")?.toString().trim();
    const lastName = formData.get("last-name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    if (!firstName || !lastName || !email || !password) {
      toast.error("All fields are required");
      setIsSubmitting(false);
      return;
    }

    const result = await signup(formData);
    if (result?.error) {
      toast.error(result.error);
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="">
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription className="">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="" htmlFor="first-name">First name</Label>
                <Input className="" name="first-name" id="first-name" placeholder="Max" type="text" />
              </div>
              <div className="grid gap-2">
                <Label className="" htmlFor="last-name">Last name</Label>
                <Input className="" name="last-name" id="last-name" placeholder="Robinson" type="text" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="" htmlFor="email">Email</Label>
              <Input className="" name="email" id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label className="" htmlFor="password">Password</Label>
              <Input className="" name="password" id="password" type="password" />
            </div>
            <Button
              type="submit"
              className="w-full"
              variant="default"
              size="default"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create an account"}
            </Button>
          <SignInWithGoogleButton />
          </div>

        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
      <ToastContainer position="top-right" autoClose={3000} />
    </Card>
  );
}
