"use client";

import { Bell, MessageSquare, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState("কমিউনিটি");
  const navItems = [
    { label: "হোম", href: "/" },
    { label: "বার্ষিক পরিক্ষার প্রস্তুতি", href: "/exam" },
    { label: "শিক্ষাক্রম", href: "/curriculum" },
    { label: "আমাদের দল", href: "/team" },
    { label: "কমিউনিটি", href: "/community" },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          <div className="container flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/Logo.svg"
                alt="ACS"
                width={49}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <div className="relative hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(item.label)}
                  className={`px-3 py-2 rounded-md text-xl font-medium transition-colors
                    ${
                      item.label === selected
                        ? "text-green-600 after:content-[''] after:block after:w-8 after:h-1 after:bg-green-500 after:mx-auto"
                        : "text-gray-700 hover:text-green-500"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="h-10 w-[300px] rounded-full bg-secondary pl-10 pr-4 text-sm focus:outline-none"
              />
            </div> */}
          </div>
          <div className="flex items-center">
            <button className="rounded-full p-2 hover:bg-secondary">
              <Bell className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-secondary">
              <MessageSquare className="h-5 w-5" />
            </button>
            <Link
              href={"/profile"}
              className="rounded-full p-2 hover:bg-secondary"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
