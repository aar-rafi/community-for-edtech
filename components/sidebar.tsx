"use client"

import { BookOpen, Users, Trophy, Bell, Folder, Search } from 'lucide-react'
import Link from 'next/link'

const navigation = [
  { name: 'My Feed', href: '#', icon: BookOpen },
  { name: 'Groups', href: '#', icon: Users },
  { name: 'Leaderboard', href: '#', icon: Trophy },
  { name: 'Notifications', href: '#', icon: Bell },
  { name: 'Resources', href: '#', icon: Folder },
]

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-4">
        <nav className="space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="flex h-10 rounded-full bg-secondary pl-10 pr-4 text-sm focus:outline-none"
            />
          </div>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="rounded-lg border bg-card p-4">
        <h3 className="mb-3 font-semibold">My Groups</h3>
        <div className="space-y-2">
          {['Web Development', 'Data Science', 'UI/UX Design'].map((group) => (
            <Link
              key={group}
              href="#"
              className="block rounded-lg px-3 py-2 text-sm hover:bg-accent"
            >
              {group}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}