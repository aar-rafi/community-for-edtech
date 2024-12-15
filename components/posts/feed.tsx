"use client";

import PostCard from "@/components/posts/post-card";
import { Post, Reaction } from "@/lib/types";
import { useState } from "react";
import PostForm from "./post-form";
import Image from "next/image";

const posts: Post[] = [
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
    image: "post-img-1.png",
    timestamp: "6m ago",
    reactions: [
      {
        type: "like" as Reaction,
        user: {
          id: 2,
          name: "রহিম আহমেদ",
          avatar:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
          role: "Bangla",
        },
        timestamp: "5m ago",
        isFollowing: false,
      },
      {
        type: "love" as Reaction,
        user: {
          id: 3,
          name: "করিম খান",
          avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
          role: "Student",
        },
        timestamp: "4m ago",
        isFollowing: true,
      },
    ],
    likes_count: 24,
    comment_count: 8,
    comments: [
      {
        id: "1",
        author: {
          id: 4,
          name: "রহিম উদ্দিন",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        },
        content: "এই পোস্টটি খুবই তথ্যবহুল। ধন্যবাদ!",
        timestamp: "২ ঘন্টা আগে",
        satisfiedCount: 5,
        replies: [
          {
            id: "1-1",
            author: {
              id: 5,
              name: "করিম আহমেদ",
              avatar:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
            },
            content: "আমি একমত। খুব ভালো পোস্ট!",
            timestamp: "১ ঘন্টা আগে",
          },
          {
            id: "1-2",
            author: {
              id: 5,
              name: "করিম আহমেদ",
              avatar:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
            },
            content: "আমি একমত। খুব ভালো পোস্ট!",
            timestamp: "১ ঘন্টা আগে",
          },
        ],
      },
      {
        id: "2",
        author: {
          id: 5,
          name: "সুমন চৌধুরী",
          avatar:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
        },
        content: "খুব সুন্দর লেখা!",
        timestamp: "৩ ঘন্টা আগে",
        satisfiedCount: 3,
      },
      {
        id: "3",
        author: {
          id: 5,
          name: "সুমন চৌধুরী",
          avatar:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
        },
        content: "খুব সুন্দর লেখা!",
        timestamp: "৩ ঘন্টা আগে",
        satisfiedCount: 3,
      },
      {
        id: "4",
        author: {
          id: 5,
          name: "সুমন চৌধুরী",
          avatar:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
        },
        content: "খুব সুন্দর লেখা!",
        timestamp: "৩ ঘন্টা আগে",
        satisfiedCount: 3,
        replies: [
          {
            id: "4-1",
            author: {
              id: 5,
              name: "করিম আহমেদ",
              avatar:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
            },
            content: "আমি একমত। খুব ভালো পোস্ট!",
            timestamp: "১ ঘন্টা আগে",
          },
        ],
      },
    ],
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
    reactions: [
      {
        type: "wow" as Reaction,
        user: {
          id: 4,
          name: "সালমা বেগম",
          avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
          role: "Student",
        },
        timestamp: "25m ago",
        isFollowing: false,
      },
      {
        type: "haha" as Reaction,
        user: {
          id: 5,
          name: "জামিল হক",
          avatar:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400",
          role: "Student",
        },
        timestamp: "20m ago",
        isFollowing: true,
      },
      {
        type: "sad" as Reaction,
        user: {
          id: 1,
          name: "আমান হাসান",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
          role: "Higher Math",
        },
        timestamp: "15m ago",
        isFollowing: false,
      },
    ],
    likes_count: 15,
    comment_count: 3,
    comments: [],
    shares: 1,
  },
];

const postFormTabs = [
  { name: "বিষয় ভিত্তিক", icon: "library.svg" },
  { name: "কোর্স সম্পর্কিত", icon: "message-question.svg" },
  { name: "অন্যান্য", icon: "saturn.svg" },
];

export default function Feed() {
  const [formModalOpen, setFormModalOpen] = useState(false);

  const handleModalToggle = () => {
    setFormModalOpen((prev) => !prev);
  };

  return (
    <div className="space-y-4 overflow-y-auto">
      <div
        onClick={handleModalToggle}
        className="p-4 border rounded-lg shadow cursor-pointer bg-white items-center justify-between"
      >
        <div className="flex items-center p-1 flex-shrink-0">
          <Image
            src={
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
            }
            alt="avatar"
            width={50}
            height={50}
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-4">
            <p className="text-lg font-medium">রহিম আহমেদ</p>
            <p className="text-gray-500 text-sm mt-1">
              কমিউনিটিতে কিছু জিজ্ঞাসা করুন!
            </p>
          </div>
        </div>
        <hr className="border-t border-dashed border-gray-300 my-4" />
        <div className="flex items-center justify-between mt-3">
          {postFormTabs.map((tab) => (
            <div key={tab.name} className="flex items-center text-lg p-2">
              <Image
                src={tab.icon}
                alt={tab.name}
                width={24}
                height={24}
                className="mr-1"
              />
              {tab.name}
            </div>
          ))}
        </div>
      </div>

      <PostForm
        isOpen={formModalOpen}
        onClose={() => setFormModalOpen(false)}
      />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
