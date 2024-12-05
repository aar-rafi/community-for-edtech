"use client"

import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import PostCard from '@/components/post-card'

const posts = [
  {
    id: 1,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      role: 'Web Development Instructor'
    },
    content: 'Just uploaded a new tutorial on React Hooks! Check it out in the resources section. Let me know if you have any questions! 🚀',
    timestamp: '2 hours ago',
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400',
      role: 'Student'
    },
    content: 'Working on my final project for the JavaScript course. Here\'s a sneak peek of what I\'ve built so far!',
    timestamp: '4 hours ago',
    likes: 15,
    comments: 3,
  },
]

export default function Feed() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-4">
        <textarea
          placeholder="Share something with the community..."
          className="min-h-[100px] w-full resize-none rounded-lg border bg-background p-3 text-sm focus:outline-none"
        />
        <div className="mt-3 flex justify-end">
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            Post
          </button>
        </div>
      </div>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}