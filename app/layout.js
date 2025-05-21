import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DmGenie - AI-Powered Message Generation",
  description: "Generate personalized messages effortlessly with DMGenie. Leverage AI to craft messages for LinkedIn, Twitter, WhatsApp, Instagram, and Email.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
          {children}
          <Analytics />
      </body>
    </html>
  );
}