"use client"

import { Bell, MessageSquare, Search, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image src="Logo.svg" alt="ACS" width={41} height={50} style={{objectFit:"contain"}} />
            </Link>
            {/* <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="h-10 w-[300px] rounded-full bg-secondary pl-10 pr-4 text-sm focus:outline-none"
              />
            </div> */}
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 hover:bg-secondary">
              <Bell className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-secondary">
              <MessageSquare className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-secondary">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}