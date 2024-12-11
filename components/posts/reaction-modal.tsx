// components/post/reaction-modal.tsx
"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { X } from "lucide-react";
import { PostReaction, Reaction } from "@/lib/types";

interface ReactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  reactions: PostReaction[];
  //   reactionCounts: Record<Reaction, number>;
}

export default function ReactionModal({
  isOpen,
  onClose,
  reactions,
}: //   reactionCounts,
ReactionModalProps) {
  const reactionTypes: Record<string, { emoji: string; label: string }> = {
    all: { emoji: "সব রিয়েক্ট", label: "👥" },
    like: { emoji: "👍", label: "লাইক" },
    love: { emoji: "❤️", label: "লাভ" },
    haha: { emoji: "😄", label: "হাহা" },
    wow: { emoji: "😮", label: "ওয়াও" },
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-lg w-full max-w-lg max-h-[80vh] overflow-hidden">
          <div className="flex justify-between items-center p-4">
            <DialogTitle className="text-lg font-medium">রিয়েকশন</DialogTitle>
            <button onClick={onClose} className="p-2 hover:bg-gray-100">
              <X className="text-gray-500" />
            </button>
          </div>

          <TabGroup>
            <TabList className="flex px-3 gap-2 h-8">
              {Object.entries(reactionTypes).map(([type, { emoji, label }]) => (
                <Tab
                  key={type}
                  className={({ selected }) => `
                    flex items-center gap-2 px-4 py-2 text-lg border rounded-full focus:outline-none
                    ${
                      selected
                        ? "border-green-500 text-green-500"
                        : "border-gray-300"
                    }
                  `}
                >
                  <span>{emoji}</span>
                  {/* <span>{label}</span> */}
                  {/* <span className="text-sm text-gray-500">
                    {type === "all"
                      ? reactions.length
                      : reactionCounts?.[type as Reaction] || 0}
                  </span> */}
                </Tab>
              ))}
            </TabList>

            <TabPanels className="overflow-y-auto py-3 max-h-[60vh]">
              {Object.keys(reactionTypes).map((type) => (
                <TabPanel key={type} className="p-4 space-y-3">
                  {(type === "all"
                    ? reactions
                    : reactions?.filter((r) => r.type === type)
                  ).map((reaction, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={reaction.user.avatar}
                          alt={reaction.user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{reaction.user.name}</p>
                          <p className="text-sm text-gray-500">
                            {reaction.timestamp}
                          </p>
                        </div>
                      </div>

                      <button
                        className={`px-4 py-2 rounded-full text-sm font-medium
                            ${
                              reaction.isFollowing
                                ? "text-gray-700 bg-gray-100"
                                : "text-green-700 bg-green-500/35 hover:bg-gray-300"
                            }`}
                      >
                        {reaction.isFollowing ? "Following" : "Follow"}
                      </button>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* <div className="border-t p-4">
            <button
              onClick={onClose}
              className="w-full py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Close✖️
            </button>
          </div> */}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
