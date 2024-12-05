"use client"

import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'

interface PostCardProps {
  post: {
    id: number
    author: {
      name: string
      avatar: string
      role: string
    }
    content: string
    timestamp: string
    likes: number
    comments: number
  }
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-start space-x-4">
        <Avatar className="h-10 w-10">
          <img src={post.author.avatar} alt={post.author.name} className="rounded-full" />
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">{post.author.name}</h4>
              <p className="text-sm text-muted-foreground">{post.author.role}</p>
            </div>
            <span className="text-sm text-muted-foreground">{post.timestamp}</span>
          </div>
          <p className="mt-2">{post.content}</p>
          <div className="mt-4 flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
              <Heart className="h-4 w-4" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}