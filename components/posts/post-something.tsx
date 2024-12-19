"use client";
import { useState } from "react";
import PostForm from "./post-form";
import Image from "next/image";

const postFormTabs = [
  { name: "বিষয় ভিত্তিক", icon: "/library.svg" },
  { name: "কোর্স সম্পর্কিত", icon: "/message-question.svg" },
  { name: "অন্যান্য", icon: "/saturn.svg" },
];

export default function PostSomething() {
  const [formModalOpen, setFormModalOpen] = useState(false);

  const handleModalToggle = () => {
    setFormModalOpen((prev) => !prev);
  };

  return (
    <div>
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
    </div>
  );
}
