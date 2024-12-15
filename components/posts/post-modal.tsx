import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { X, Send } from "lucide-react";
import { PostReaction, User, Comment, Post } from "@/lib/types";
import Image from "next/image";

// type Comment = {
//   id: string;
//   author: {
//     name: string;
//     avatar: string;
//   };
//   content: string;
//   timestamp: string;
//   replies?: Comment[];
//   satisfiedCount?: number;
// };
// const demoComments: Comment[] = [
//     {
//         id: '1',
//         author: {
//             name: 'রহিম উদ্দিন',
//             avatar: 'https://example.com/avatar1.png',
//         },
//         content: 'এই পোস্টটি খুবই তথ্যবহুল। ধন্যবাদ!',
//         timestamp: '২ ঘন্টা আগে',
//         satisfiedCount: 5,
//         replies: [
//             {
//                 id: '1-1',
//                 author: {
//                     name: 'করিম আহমেদ',
//                     avatar: 'https://example.com/avatar2.png',
//                 },
//                 content: 'আমি একমত। খুব ভালো পোস্ট!',
//                 timestamp: '১ ঘন্টা আগে',
//             },
//         ],
//     },
//     {
//         id: '2',
//         author: {
//             name: 'সুমন চৌধুরী',
//             avatar: 'https://example.com/avatar3.png',
//         },
//         content: 'খুব সুন্দর লেখা!',
//         timestamp: '৩ ঘন্টা আগে',
//         satisfiedCount: 3,
//     },
// ];

// type Post = {
//   id: string;
//   author: User;
//   content: string;
//   image?: string;
//   timestamp: string;
//   reactions: PostReaction[];
//   likes_count: number;
//   comment_count: number;
//   comments: Comment[];
//   shares: number;
// };

interface PostModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
}

function CommentComponent({
  comment,
  onReply,
}: {
  comment: Comment;
  onReply: (parentId: string) => void;
}) {
  return (
    <div className="py-3 relative">
      {/* <div className="absolute left-0 translate-x-7 top-14 w-8 h-1/2"> */}
      {/* <div className="absolute left-0 top-0 h-full border-l-2 border-b-2 border-gray-200 rounded-bl-xl" /> */}
      {/* </div> */}
      <div className="flex items-start space-x-3">
        <Image
          src={comment.author.avatar}
          alt={comment.author.name}
          width={48}
          height={48}
          className="w-8 h-8 rounded-full object-cover"
        />
        {comment.replies && comment.replies.length > 0 && (
          <div className="absolute left-1 top-12 bottom-0 w-[2px] border-l-2 rounded-bl-lg border-gray-200 bg-gray-200"></div>
        )}
        <div className="flex-1">
          <div className="bg-gray-100 rounded-2xl px-4 py-2">
            <h4 className="font-medium text-sm">{comment.author.name}</h4>
            <p className="text-xl text-gray-800">{comment.content}</p>
          </div>

          {/* <div className="absolute top-0 left-0 bottom-0 w-lg xs:w-xl flex justify-center items-center z-0 cursor-pointer group mb-sm"> */}
          {/* <div className="w-[1px] h-full group-hover:bg-tone-2 bg-tone-4"></div> */}
          {/* <div className="box-border h-md border-0 border-tone-4 border-solid border-b-[1px] cursor-pointer w-[calc(50%+0.5px)] border-l-[1px] rounded-bl-[12px]"></div> */}
          {/* </div> */}

          <div className="flex items-center space-x-4 mt-1 ml-2 text-sm text-gray-600">
            {comment.satisfiedCount && (
              <span className="flex items-center space-x-1">
                <span>Satisfied</span>
                <span>{comment.satisfiedCount}</span>
              </span>
            )}
            <button
              className="hover:text-gray-900"
              onClick={() => onReply(comment.id)}
            >
              Reply
            </button>
            <span>{comment.timestamp}</span>
          </div>

          {/* Nested replies */}
          {
            comment.replies &&
              comment.replies.length > 0 &&
              // <div className="relative pl-4">
              // <div className="absolute left-0 top-4 w-8 h-6">
              // <div className="absolute left-0 top-0 w-4 h-full border-l-2 border-b-2 border-gray-200 rounded-bl-xl" />
              // </div>
              comment.replies.map((reply) => (
                <CommentComponent
                  key={reply.id}
                  comment={reply}
                  onReply={onReply}
                />
              ))
            // </div>
          }
        </div>
      </div>
    </div>
  );
}

function CommentInput({
  onSubmit,
  placeholder,
  defaultValue = "",
}: {
  onSubmit: (content: string) => void;
  placeholder?: string;
  defaultValue?: string;
}) {
  const [comment, setComment] = useState(defaultValue);

  const handleSubmit = () => {
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <div className="flex items-start space-x-2 p-4 bg-white sticky bottom-0">
      {/* <Image
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
        alt="Your avatar"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full object-cover"
      /> */}
      {/* <div className="flex-1 relative items-center"> */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder={placeholder || "Write a comment..."}
        className="w-full items-center block resize-none rounded-2xl bg-gray-100 px-4 py-2 pr-12 text-sm focus:outline-none min-h-[40px] max-h-36"
        rows={1}
      />
      {/* </div> */}
      <button
        onClick={handleSubmit}
        className="right-3 py-2 text-green-500 hover:text-green-700"
        disabled={!comment.trim()}
      >
        <Send size={20} />
      </button>
    </div>
  );
}

export default function PostModal({ post, isOpen, onClose }: PostModalProps) {
  const [localPost, setLocalPost] = useState<Post | null>(null);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  useState(() => {
    if (post) setLocalPost(post);
  });

  if (!localPost) return null;

  const handleNewComment = (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      author: {
        id: 999, // This would normally come from the authenticated user
        name: "Current User",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
      content,
      timestamp: "Just now",
      satisfiedCount: 0,
    };

    setLocalPost((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        comments: [newComment, ...prev.comments],
        comment_count: prev.comment_count + 1,
      };
    });
  };

  const handleReply = (parentId: string) => {
    setReplyingTo(parentId);
  };

  const submitReply = (content: string) => {
    if (!replyingTo) return;

    const newReply: Comment = {
      id: Date.now().toString(),
      author: {
        id: 999,
        name: "Current User",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
      content,
      timestamp: "Just now",
    };

    setLocalPost((prev) => {
      if (!prev) return null;

      const updateComments = (comments: Comment[]): Comment[] => {
        return comments.map((comment) => {
          if (comment.id === replyingTo) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply],
            };
          }
          if (comment.replies) {
            return {
              ...comment,
              replies: updateComments(comment.replies),
            };
          }
          return comment;
        });
      };

      return {
        ...prev,
        comments: updateComments(prev.comments),
        comment_count: prev.comment_count + 1,
      };
    });

    setReplyingTo(null);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-2xl max-h-[80vh] transform overflow-y-auto no-scrollbar rounded-2xl bg-white shadow-xl transition-all">
                {/* Close button */}
                <div className="flex justify-between p-4 items-center sticky top-0 bg-white z-10">
                  <DialogTitle className="text-lg font-medium flex-1 text-center">
                    {localPost.author.name} পোস্ট
                  </DialogTitle>
                  <button
                    onClick={onClose}
                    className="focus:outline-none rounded-lg hover:bg-gray-100"
                  >
                    <X className="text-gray-500" />
                  </button>
                </div>

                {/* Post content */}
                <div className="mb-4 p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="relative">
                      <Image
                        src={localPost.author.avatar}
                        alt={localPost.author.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h2 className="font-semibold text-xl text-gray-900">
                          {localPost.author.name}
                        </h2>
                        <span className="text-xl">·</span>
                        <span className="text-green-600 font-medium text-lg">
                          Follow
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-md text-gray-500">
                        <span>{localPost.author.role}</span>
                        <span>·</span>
                        <span>{localPost.timestamp}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-800 mb-4 text-xl">
                    {localPost.content}
                  </p>

                  {localPost.image && (
                    <Image
                      src="/post-img-1.png"
                      alt="Post image"
                      width={458}
                      height={217}
                      className="w-full object-cover"
                    />
                  )}

                  {/* Reactions */}
                  <div className="flex items-center space-x-4 border-b pb-4">
                    {localPost.reactions.map((reaction, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <span>{reaction.type}</span>
                        <span>{localPost.likes_count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comments section */}
                <div className="max-h-[60vh] overflow-y-auto no-scrollbar">
                  <div className="px-4">
                    {replyingTo && (
                      <div className="sticky top-0 bg-white z-10 pb-2">
                        <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                          <span className="text-sm text-gray-600">
                            Replying to comment
                          </span>
                          <button
                            onClick={() => setReplyingTo(null)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <CommentInput
                          onSubmit={submitReply}
                          placeholder="Write a reply..."
                        />
                      </div>
                    )}

                    {/* <div className="relative pl-2"> */}
                    {localPost.comments.map((comment) => (
                      <CommentComponent
                        key={comment.id}
                        comment={comment}
                        onReply={handleReply}
                      />
                    ))}
                    {/* </div> */}
                  </div>
                </div>

                {/* Comment input */}
                {!replyingTo && <CommentInput onSubmit={handleNewComment} />}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
