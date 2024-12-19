"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface LeaderboardItem {
  id: number;
  name: string;
  score: number;
  time: string;
  position: number;
  avatarUrl: string;
}

const leaderboardData: LeaderboardItem[] = [
  {
    id: 1,
    name: "আমান হাসান",
    score: 452,
    time: "০২:৩৭ মিনিট",
    position: 1,
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    id: 2,
    name: "আমান হাসান",
    score: 452,
    time: "০২:৩৭ মিনিট",
    position: 2,
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    id: 3,
    name: "আমান হাসান",
    score: 452,
    time: "০২:৩৭ মিনিট",
    position: 3,
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  ...Array(7).fill({
    id: 4,
    name: "মুজিবুল হাসান",
    score: 452,
    time: "",
    position: 4,
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  }),
];

export default function Leaderboard() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Dropdown */}
      <Menu as="div" className="relative inline-block text-left mb-4">
        <div>
          <MenuButton className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            টপ সংগ্রহ
            <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </MenuButton>
        </div>
        <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ disabled }) => (
                <a
                  href="#"
                  className={`${
                    disabled ? "text-gray-700" : "bg-gray-100 text-gray-900"
                  } block px-4 py-2 text-sm`}
                >
                  টপ সংগ্রহ
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ disabled }) => (
                <a
                  href="#"
                  className={`${
                    disabled ? "text-gray-700" : "bg-gray-100 text-gray-900"
                  } block px-4 py-2 text-sm`}
                >
                  টপ পরিসংখ্যান
                </a>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>

      {/* Top 3 Section */}
      <div className="flex justify-between items-end text-center mb-12">
        {/* 2nd Place */}
        <div className="flex flex-col items-center translate-y-8">
          <Image
            src={leaderboardData[1].avatarUrl}
            alt="2nd"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="relative">
            <span className="text-gray-700 text-lg font-medium">
              {leaderboardData[1].name}
            </span>
            <p className="text-gray-500 text-sm">{leaderboardData[1].score}</p>
          </div>
          <div className="text-green-500 font-bold text-xl">🥈</div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center">
          <Image
            src={leaderboardData[0].avatarUrl}
            alt="1st"
            width={100}
            height={100}
            className="w-24 h-24 rounded-full border-4 border-yellow-400"
          />
          <div className="relative -top-6">
            <span className="text-gray-900 text-lg font-bold">
              {leaderboardData[0].name}
            </span>
            <p className="text-gray-500 text-sm">{leaderboardData[0].score}</p>
          </div>
          <div className="text-yellow-400 font-bold text-2xl">🥇</div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <Image
            src={leaderboardData[2].avatarUrl}
            alt="3rd"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full"
          />
          <div className="relative -top-4">
            <span className="text-gray-700 text-lg font-medium">
              {leaderboardData[2].name}
            </span>
            <p className="text-gray-500 text-sm">{leaderboardData[2].score}</p>
          </div>
          <div className="text-blue-500 font-bold text-xl">🥉</div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {leaderboardData.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(index)}
            className={`flex items-center p-4 cursor-pointer ${
              selectedItem === index ? "bg-orange-100" : "hover:bg-gray-50"
            }`}
          >
            {/* Rank */}
            <div className="w-6 flex justify-center items-center text-gray-500">
              {index + 1}
            </div>

            {/* Avatar */}
            <Image
              src={item.avatarUrl}
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full mx-4"
            />

            {/* Name and Score */}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
            </div>

            {/* Score */}
            <div className="text-gray-500 text-sm">{item.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
