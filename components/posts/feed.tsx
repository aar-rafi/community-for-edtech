"use client";

import PostCard from "@/components/posts/post-card";
import { Post, Reaction } from "@/lib/types";
import { useState } from "react";
import PostForm from "./post-form";
import Image from "next/image";
import PostSomething from "./post-something";

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
      "আমার নাম কি ? ফিজিক্সের সাথে এর কোন সম্পরক আছে? এই বিশয়ে কেউ আমাকে সাহায্য করবে।",
    poll: {
      question:
        "বাংলাদেশের সবার মুক্তিযুদ্ধের সময় মুক্তিবাহিনীর সরকারের প্রধানমন্ত্রীর ভূমিকা কে পালন করেছিলেন?",
      options: [
        { id: "1", text: "সৈয়দ নজরুল ইসলাম", votes: 15 },
        { id: "2", text: "সৈয়দ নজরুল ইসলাম", votes: 8 },
        { id: "3", text: "মাওলানা ভাসানী", votes: 12 },
        { id: "4", text: "জিয়াউর রহমান", votes: 5 },
      ],
      totalVotes: 40,
    },
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
            "https://images.unsplash.com/photo-1535713875002-d3d416303d12?w=400",
          role: "Student",
        },
        timestamp: "4m ago",
        isFollowing: true,
      },
    ],
    likes_count: 1400,
    comment_count: 43,
    comments: [],
    shares: 12,
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
  { name: "বিষয় ভিত্তিক", icon: "/library.svg" },
  { name: "কোর্স সম্পর্কিত", icon: "/message-question.svg" },
  { name: "অন্যান্য", icon: "/saturn.svg" },
];

export default function Feed() {
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);
  const [feedPosts, setFeedPosts] = useState<Post[]>(posts);

  const handleNewPost = (post: Partial<Post>) => {
    const newPost: Post = {
      id: feedPosts.length + 1,
      author: {
        id: 1,
        name: "আমান হাসান",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        role: "Admin",
      },
      ...post,
    } as Post;

    setFeedPosts([newPost, ...feedPosts]);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-4">
      <PostSomething onClick={() => setIsPostFormOpen(true)} />

      <PostForm
        isOpen={isPostFormOpen}
        onClose={() => setIsPostFormOpen(false)}
        onSubmit={handleNewPost}
      />

      {feedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
