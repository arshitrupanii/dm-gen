import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from './components/UserContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DM Gen",
  description: "Generate personalized messages with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
      {/* <Analytics/> */}
    </html>
  );
}