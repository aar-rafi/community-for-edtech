"use clinet";

import Image from "next/image";
import { Ellipsis } from "lucide-react";

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

export default function FriendList() {
  return (
    <div className="rounded-2xl border bg-card p-4">
      <div className="mb-4 flex justify-between">
        <h3 className="font-medium text-xl p-2">আপনার সহপাঠী</h3>
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
  );
}
