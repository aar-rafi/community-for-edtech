// "use client"

import { Bell } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const notifications = [
  {
    id: 1,
    avatar: "/api/placeholder/40/40",
    content: "মার্শা এবং 5 জন বন্ধু আপনার পোস্টে লাইক দিয়েছেন।",
    isActive: true,
  },
  {
    id: 2,
    avatar: "/api/placeholder/40/40",
    content: "মার্শা আপনার ছবিতে মন্তব্য করেছেন।",
    isActive: true,
  },
  {
    id: 3,
    avatar: "/api/placeholder/40/40",
    content: "মার্শা এবং 3 জন আপনার স্ট্যাটাস শেয়ার করেছেন।",
    isActive: true,
  },
  {
    id: 4,
    avatar: "/api/placeholder/40/40",
    content: "মার্শা আপনার ভিডিওতে 10 জনের সাথে যুক্ত হয়েছেন।",
    isActive: true,
  },
  {
    id: 5,
    avatar: "/api/placeholder/40/40",
    content: "মার্শা এবং 2 জন আপনার পোস্টে রিভ্যাক্ট করেছেন।",
    isActive: false,
  },
  {
    id: 6,
    avatar: "/api/placeholder/40/40",
    content: "মার্শা আপনার গল্পে দেখা দিয়েছেন।",
    isActive: false,
  },
  {
    id: 7,
    avatar: "/api/placeholder/40/40",
    content: "মার্শা এবং 4 জন আপনার ইভেন্টে অংশগ্রহণের জন্য RSVP করেছেন।",
    isActive: true,
  },
];

const friends = [
  {
    id: 1,
    name: "Alex Thompson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    status: "online",
  },
  {
    id: 2,
    name: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    status: "offline",
  },
];

export default function RightPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-card p-4">
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
                {/* <span className="text-xs text-muted-foreground">
                  {notification.time}
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-4">
        <h3 className="mb-4 font-semibold">Friends</h3>
        <div className="space-y-4">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="rounded-full"
                />
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{friend.name}</p>
                <span
                  className={`text-xs ${
                    friend.status === "online"
                      ? "text-green-500"
                      : "text-muted-foreground"
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
