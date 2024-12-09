"use client";

import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import PostCard from "@/components/posts/post-card";

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "আমান হাসান",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      role: "Higher Math",
    },
    content:
      "আমার নাম কি ? ফিজিক্সের সাথে এর কোন সম্পরক আছে? এই বিশয়ে কেউ আমাকে সাহায্য করবে।",
    timestamp: "6m ago",
    likes_count: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    author: {
      id: 2,
      name: "আমান হাসান",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
      role: "Student",
    },
    content:
      "একটি বুলেটকে 40 ms¹ বেগে খাড়া উপরের দিকে নিক্ষেপ করা হলো। ভূমি হতে 45 m উচ্চতায় একটি পাতলা কাঠ থাকায়  এখানে কাঠের কাঠ না পুরুত্ব ও কাঠ ভেদ করার সময় অতি নগণ্য। গ.সর্বোচ্চ উচ্চতায় উঠতে বুলেটটির কত সময় লাগবে? ঘ. বুলেটের গতিপথে পাতলা কাঠ না থাকলে বুলেটটি একই উচ্চতায় উঠতো কিনা - বিশ্লেষণ কর।",
    timestamp: "30m ago",
    reaction: [],
    likes_count: 15,
    comments: 3,
    shares: 1,
  },
];

export default function Feed() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border bg-card p-4">
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
  );
}
