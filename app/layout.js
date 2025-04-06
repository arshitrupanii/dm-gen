import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from './components/UserContext';

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
    </html>
  );
}