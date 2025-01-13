"use client";

import {
  Bookmark,
  MessageCircle,
  Flag,
  Send,
  MessageCircleMore,
  ThumbsUp,
} from "lucide-react";
// import { Avatar } from '@/components/ui/avatar'
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Post, PostReaction } from "@/lib/types";
import { useState } from "react";
import ReactionModal from "./reaction-modal";
import PostModal from "./post-modal";

// interface PostCardProps {
//   post: {
//     id: number;
//     author: {
//       name: string;
//       avatar: string;
//       role: string;
//     };
//     content: string;
//     timestamp: string;
//     // reaction: {
//     likes_count: number;
//     comments: number;
//     shares: number;
//   };
// }

export default function PostCard({ post }: { post: Post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [postModalOpen, setPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const [selectedPollOption, setSelectedPollOption] = useState<string | null>(
    post.poll?.userVote || null
  );

  const handleVote = (optionId: string) => {
    // In a real app, this would make an API call to update the vote
    setSelectedPollOption(optionId);
  };

  const hadlePostClick = (post: Post) => {
    setSelectedPost(post);
    setPostModalOpen((prev) => !prev);
  };

  // const reactionCounts = post.reaction?.reduce((acc, reaction) => {
  //   acc[reaction.type] = (acc[reaction.type] || 0) + 1;
  //   return acc;
  // }, {} as Record<Reaction, number>);

  return (
    <>
      <div className="max-w-2xl bg-white rounded-2xl border-[1px] shadow-sm p-5 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3 pt-2">
            <div className="relative">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-semibold text-xl text-gray-900">
                  {post.author.name}
                </h2>
                <span className="text-xl">·</span>
                <span className="text-green-600 font-medium text-lg">
                  Follow
                </span>
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

        {/* Poll */}
        {post.poll && (
          <div className="mt-4 rounded-lg border p-4">
            <h3 className="mb-4 font-medium">{post.poll.question}</h3>
            <div className="space-y-2">
              {post.poll.options?.map((option) => {
                const percentage =
                  post.poll?.totalVotes ?? 0 > 0
                    ? Math.round(
                        (option.votes / (post.poll?.totalVotes ?? 0)) * 100
                      )
                    : 0;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleVote(option.id)}
                    disabled={selectedPollOption !== null}
                    className={`relative w-full rounded-lg border p-3 text-left ${
                      selectedPollOption === option.id
                        ? "border-primary bg-primary/10"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <span>{option.text}</span>
                      {selectedPollOption !== null && (
                        <span className="text-sm font-medium">
                          {percentage}%
                        </span>
                      )}
                    </div>
                    {selectedPollOption !== null && (
                      <div
                        className="absolute inset-0 rounded-lg bg-gray-100"
                        style={{
                          width: `${percentage}%`,
                          transition: "width 0.3s ease-in-out",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {post.poll.totalVotes} votes
            </p>
          </div>
        )}

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
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-1 text-gray-600"
          >
            <ThumbsUp className="w-7 h-7" />
            <span>
              {post.likes_count >= 1000
                ? `${(post.likes_count / 1000).toFixed(1)}k`
                : post.likes_count}
            </span>
          </button>
          <button
            onClick={() => setPostModalOpen(true)}
            className="flex items-center space-x-1 text-gray-600"
          >
            <MessageCircleMore strokeWidth={"1.5px"} className="w-7 h-7" />
            <span>{post.comment_count}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <Send className="w-5 h-5" />
            <span>{post.shares}</span>
          </button>
          {/* </div> */}
        </div>
        <ReactionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          reactions={post.reactions}
          // reactionCounts={reactionCounts}
        />
      </div>
      <PostModal
        post={post}
        isOpen={postModalOpen}
        onClose={() => {
          setPostModalOpen(false);
          setSelectedPost(null);
        }}
      />
    </>
  );
}
