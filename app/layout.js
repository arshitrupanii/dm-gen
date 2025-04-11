import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from './components/UserContext';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DmGenie - AI-Powered Message Generation",
  description: "Generate personalized messages effortlessly with DMGenie. Leverage AI to craft messages for LinkedIn, Twitter, WhatsApp, Instagram, and Email.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
          <Analytics/>
    </html>
  );
}