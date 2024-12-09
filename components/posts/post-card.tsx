"use client";

import { Bookmark, MessageCircle, Flag, Send } from "lucide-react";
// import { Avatar } from '@/components/ui/avatar'
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

interface PostCardProps {
  post: {
    id: number;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
    content: string;
    timestamp: string;
    likes_count: number;
    comments: number;
    shares: number;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="max-w-2xl bg-white rounded-2xl border-[1px] shadow-sm p-5 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3 pt-2">
          <div className="relative">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold text-xl text-gray-900">
                {post.author.name}
              </h2>
              <span className="text-xl">·</span>
              <span className="text-green-600 font-medium text-lg">Follow</span>
            </div>
            <div className="flex items-center space-x-2 text-md text-gray-500">
              <span>{post.author.role}</span>
              <span>·</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72 p-3">
            <DropdownMenuItem className="flex items-center gap-2 text-xl text-gray-600">
              <Flag className="w-4 h-4" />
              <span>অ্যাডমিনকে রিপোর্ট করুন</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-xl text-gray-600">
              <Bookmark className="w-4 h-4" />
              <span>বুকমার্ক করুন</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <div className="text-gray-800 text-xl">{post.content}</div>

      {/* Image */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/post-img-1.png"
          alt="Post image"
          width={458}
          height={217}
          className="w-full object-cover"
        />
      </div>

      {/* Engagement Stats */}
      <div className="flex items-center justify-between pt-2 pr-2">
        {/* <div className="flex items-center space-x-2"> */}
        <button className="flex items-center space-x-1 text-gray-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span>
            {post.likes_count >= 1000
              ? `${(post.likes_count / 1000).toFixed(1)}k`
              : post.likes_count}
          </span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600">
          <Send className="w-5 h-5" />
          <span>{post.shares}</span>
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
