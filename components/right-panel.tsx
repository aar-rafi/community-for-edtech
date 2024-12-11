"use client";

import { Bell, Ellipsis } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

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
    isActive: true,
  },
  {
    id: 7,
    avatar: "/api/placeholder/40/40",
    content: "মার্শা এবং 4 জন আপনার ইভেন্টে অংশগ্রহণের জন্য RSVP করেছেন।",
    isActive: false,
  },
];

const friends = [
  {
    id: 1,
    name: "আমান হাসান",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    isActive: true,
  },
  {
    id: 2,
    name: "করিম খান",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    isActive: false,
  },
];

export default function RightPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-card p-5">
        <div className="mb-4 flex justify-between">
          <h3 className="font-semibold text-xl">আপনার নোটিফিকেশন</h3>
          <Ellipsis className="text-muted-foreground" />
        </div>
        <TabGroup className={"pb-3 mb-2"}>
          <TabList className={"flex space-x-2 h-8"}>
            {["এনাউন্সমেন্ট", "অ্যাক্টিভিটি"].map((type) => (
              <Tab
                key={type}
                className={({ selected }) => `
                flex items-center px-4 py-2 text-lg border rounded-full focus:outline-none
                ${
                  selected
                    ? "border-green-500 text-green-500"
                    : "border-gray-300"
                }
              `}
              >
                <span>{type}</span>
              </Tab>
            ))}
          </TabList>

          {/* <TabPanels>
            <TabPanel>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start space-x-3"
                  >
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-lg text-gray-800">
                        {notification.content}
                      </p>
                      {/* <span className="text-xs text-muted-foreground">
                  {notification.time}
                </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </TabPanels>*/}
        </TabGroup>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex gap-3 items-center">
              <div className="relative flex-shrink-0 w-122">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                  }
                  alt="Avatar"
                  className="rounded-full w-12 h-12"
                  width={40}
                  height={40}
                />
                {notification.isActive && (
                  <span className="bottom-0 right-0 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-lg break-words text-gray-700">
                  {notification.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-4">
        <div className="mb-4 flex justify-between">
          <h3 className="font-semibold text-xl p-2">আপনার সহপাঠী</h3>
          <Ellipsis className="text-muted-foreground" />
        </div>
        <div className="space-y-4">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src={friend.avatar}
                  alt={friend.name}
                  className="rounded-full w-12 h-12"
                  width={64}
                  height={43}
                />
                {friend.isActive && (
                  <span className="bottom-0 left-9 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-lg font-regular">{friend.name}</p>
                {/* <span
                  className={`text-xs ${
                    friend.status === "online"
                      ? "text-green-500"
                      : "text-muted-foreground"
                  }`}
                >
                  {friend.status}
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
