"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "utils/supabase/client";
import { Sparkles, Menu, X, User } from "lucide-react";
import { useRouter } from 'next/navigation';
import { signout } from "lib/auth-actions";
import { Button } from "./ui/button";
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/dashboard');
  };

  return (
    <nav className="w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Logo className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-blue-100 dark:bg-blue-900/30 rounded-full blur opacity-0 group-hover:opacity-50 transition-all duration-300" />
              </div>
              <span className="ml-3 text-xl font-bold text-blue-600 dark:text-blue-400">Dmgenie</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {user && (
              <Link
                href="/personal-details"
                className="flex items-center px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 font-medium group"
              >
                <User className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Profile
              </Link>
            )}
            {user ? (
              <div className="flex items-center space-x-2">
                <p className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30 font-medium">
                  Hello, <span className="font-bold">{user?.user_metadata?.full_name ?? "User"}</span>!
                </p>
                <Button onClick={handleLogout}>Log out</Button>
              </div>
            ) : (
              <Button variant="outline" onClick={() => router.push("/login")}>
                Login
              </Button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 border-t border-gray-100 dark:border-gray-800" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {user && (
            <Link
              href="/personal-details"
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-5 h-5 mr-2" />
              Profile
            </Link>
          )}
          {user ? (
            <div className="flex items-center space-x-2">
              <p className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30 font-medium">
                Hello, <span className="font-bold">{user?.user_metadata?.full_name ?? "User"}</span>!
              </p>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                router.push("/login");
                setIsMenuOpen(false);
              }}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;