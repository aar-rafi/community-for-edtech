"use client";

import MainLayout from "@/components/mainlayout";
import Image from "next/image";
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { useState } from "react";
import RightPanelProfile from "@/components/profile/right-panel-profile";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
// Tab Categories & Content
const tabs = [{ name: "ড্যাশবোর্ড" }, { name: "আমার পোস্ট" }];

// Feed Content for each tab
const feeds = [
  [
    { id: 1, content: "Content for আমার পোস্ট tab goes here." },
    { id: 2, content: "More content for আমার পোস্ট tab." },
  ],
  [
    { id: 1, content: "Content for জাস্টরেডি tab goes here." },
    { id: 2, content: "More content for জাস্টরেডি tab." },
  ],
];

const user = [
  {
    name: "মুহিদুল হাসান",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    isFollowing: false,
  },
  {
    name: "মুহিদুল হাসান",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    isFollowing: true,
  },
  {
    name: "মুহিদুল হাসান",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    isFollowing: false,
  },
  {
    name: "মুহিদুল হাসান",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    isFollowing: true,
  },
  {
    name: "মুহিদুল হাসান",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    isFollowing: false,
  },
  {
    name: "মুহিদুল হাসান",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    isFollowing: true,
  },
  {
    name: "মুহিদুল হাসান",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    isFollowing: false,
  },
  {
    name: "মুহিদুল হাসান",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    isFollowing: true,
  },
];

export default function Profile() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <MainLayout
      heroSection={
        <div className="w-full h-80 bg-card border-[1px] rounded-2xl overflow-hidden">
          {/* Cover Image */}
          <div className="w-full h-56 relative overflow-hidden">
            <Image
              src="/post-img-1.png"
              alt="Cover background"
              width={800}
              height={400}
              className="w-full h-full object-cover opacity-95"
            />
          </div>
          <div className="relative flex items-center p-4 space-x-4 -mt-20">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" // Replace with actual image path
                alt="Profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Stats */}
            <div className="mt-16 pt-2">
              <h2 className="text-xl font-semibold text-gray-800">
                মুহিদুল হাসান{" "}
                <span className="text-yellow-500 text-sm font-medium bg-gray-200/45 rounded-full px-2 mx-2">
                  ⭐ Top Solver
                </span>
              </h2>
              <div className="flex items-center space-x-2">
                <p
                  onClick={() => setIsModalOpen(true)}
                  className="text-gray-500 text-md mt-1"
                >
                  16 Followers
                </p>
                <p
                  onClick={() => setIsModalOpen(true)}
                  className="text-gray-500 text-md mt-1"
                >
                  12 Following
                </p>
              </div>
            </div>

            {/* Tabs Section */}
            <div
              className="mt-[80px] pt-2"
              style={{ marginLeft: "auto", marginRight: "0.5rem" }}
            >
              <TabGroup
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
              >
                <TabList className="flex bg-gray-100 rounded-full p-1 w-full">
                  {tabs.map((tab, index) => (
                    <Tab
                      key={index}
                      className={({ selected }) =>
                        classNames(
                          "px-8 py-2 text-lg font-medium leading-5 rounded-full focus:outline-none",
                          selected
                            ? "bg-white shadow text-gray-800"
                            : "text-gray-500 hover:bg-gray-200 hover:text-gray-800"
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </TabList>
              </TabGroup>
            </div>

            {/* Modal */}
            <Dialog
              open={isModalOpen}
              onClose={setIsModalOpen}
              className="relative z-10"
            >
              <div className="fixed inset-0 bg-black/30" />
              <div className="fixed inset-0 flex items-center justify-center">
                <DialogPanel className="bg-white rounded-lg w-full p-4 max-w-lg max-h-[80vh] overflow-hidden">
                  <DialogTitle className="text-lg font-medium text-gray-800">
                    Followers
                  </DialogTitle>
                  {user.map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{user.name}</p>
                        </div>
                      </div>

                      <button
                        className={`px-4 py-2 rounded-full text-sm font-medium
                            ${
                              user.isFollowing
                                ? "text-gray-700 bg-gray-100"
                                : "text-green-700 bg-green-500/35 hover:bg-gray-300"
                            }`}
                      >
                        {user.isFollowing ? "Following" : "Follow"}
                      </button>
                    </div>
                  ))}
                </DialogPanel>
              </div>
            </Dialog>
          </div>
        </div>
      }
      rightPanel={<RightPanelProfile />}
    >
      <div className="mt-4 px-4">
        <div className="bg-white shadow rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Feed Content</h3>
          {feeds[selectedIndex].map((post) => (
            <div
              key={post.id}
              className="p-2 bg-gray-50 rounded mb-2 shadow-sm"
            >
              {post.content}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
