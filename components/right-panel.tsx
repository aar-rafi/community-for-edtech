// "use client"

import { Bell } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'

const notifications = [
  {
    id: 1,
    content: 'Sarah Johnson commented on your post',
    time: '5m ago'
  },
  {
    id: 2,
    content: 'New resource added to Web Development course',
    time: '1h ago'
  }
]

const friends = [
  {
    id: 1,
    name: 'Alex Thompson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    status: 'online'
  },
  {
    id: 2,
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    status: 'offline'
  }
]

export default function RightPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">Notifications</h3>
          <Bell className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3">
              <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
              <div>
                <p className="text-sm">{notification.content}</p>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <h3 className="mb-4 font-semibold">Friends</h3>
        <div className="space-y-4">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <img src={friend.avatar} alt={friend.name} className="rounded-full" />
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{friend.name}</p>
                <span className={`text-xs ${friend.status === 'online' ? 'text-green-500' : 'text-muted-foreground'}`}>
                  {friend.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}