"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "utils/supabase/client";
import { Sparkles, Menu, X, User, LogIn } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Button } from "./ui/button";

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
    router.push('/logout');
  };

  const navLinks = [
    { href: "/personal-details", label: "Profile", icon: <User className="w-5 h-5 mr-2" /> },
  ];

  const UserGreeting = () => (
    <div className="flex items-center space-x-2">
      <p className="px-4 py-2 rounded-lg text-gray-700 bg-blue-50 font-medium">
        Hello, <span className="font-bold">{user?.user_metadata?.full_name ?? "User"}</span>!
      </p>
      <Button
        onClick={() => {
          signout();
          setUser(null);
        }}
      >
        Log out
      </Button>
    </div>
  );

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-blue-100 rounded-full blur opacity-0 group-hover:opacity-50 transition-all duration-300" />
              </div>
              <span className="ml-3 text-xl font-bold text-blue-600">Dm Genie</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            {user ? (
              <UserGreeting />
            ) : (
              <Button
      variant="outline"
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center space-x-2">
              <p className="px-4 py-2 rounded-lg text-gray-700 bg-blue-50 font-medium">
                Hello, <span className="font-bold">{user?.user_metadata?.full_name ?? "User"}</span>!
              </p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="w-5 h-5 mr-2" />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;