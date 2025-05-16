'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage = () => {
  const router = useRouter();
  router.push("/");
};

export default LogoutPage;