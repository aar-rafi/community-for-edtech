"use client";

import MainLayout from "@/components/mainlayout";
import PostSomething from "@/components/posts/post-something";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import {
  Earth,
  Ellipsis,
  EllipsisVertical,
  Globe,
  LogOut,
  Send,
  UserRoundPlus,
  Users,
} from "lucide-react";
import FriendList from "@/components/friendlist";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Feed from "@/components/posts/feed";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// interface GroupInfo {
//   name: string;
//   cover: string;
//   members: number;
//   // posts: number;
//   isPublic: boolean;
//   description: string;
// }

const groupInfodata = {
  name: "বাংলা উইথ মুহুদুল হাসান",
  cover: "",
  members: 252,
  isPublic: true,
  description:
    "বাংলা গ্রুপ এ বাংলা ভাষায় কিছু লিখুন বাংলা গ্রুপ এ বাংলা ভাষায় কিছু লিখুনবাংলা গ্রুপ এ বাংলা ভাষায় কিছু লিখুন বাংলা গ্রুপ এ বাংলা ভাষায় কিছু লিখুনবাংলা গ্রুপ এ বাংলা ভাষায় কিছু লিখুন",
};

export default function GroupPage({ params }: { params: { groupId: string } }) {
  // const [groupInfo, setGroupInfo] = useState<GroupInfo | null>(null);
  // const [showDropdown, setShowDropdown] = useState(false);
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState(false);

  // const { data, error } = useSWR(`/api/groups/${params.groupId}`, fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <MainLayout
      heroSection={
        <div className="w-full border-[1px] h-80 bg-card rounded-xl overflow-hidden">
          <Image
            src="/post-img-1.png"
            alt="Group cover"
            width={458}
            height={217}
            className="w-full h-60 object-cover"
          />
          <div className="px-4 py-2 flex justify-between items-center">
            <div>
              <p className="text-2xl font-medium text-black">
                {/* গ্রুপের নাম {params.groupId}  */}
                {groupInfodata.name}
              </p>
              <div className="flex items-center text-gray-500 mt-1 font-medium">
                <div className="flex items-center space-x-2">
                  <Earth strokeWidth={"2px"} size={18} />
                  <span>
                    {groupInfodata.isPublic ? "Public Group" : "Private Group"}{" "}
                    {/* {groupInfodata.members} Members */}
                  </span>
                </div>
                <div className="flex items-center space-x-2 ml-5">
                  <Users strokeWidth={"2px"} size={18} />
                  <span>{groupInfodata.members} Members</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 ml-auto mr-2">
              <button className="px-4 py-1 border-[1px] border-gray-400 text-sm font-medium text-gray-700 rounded-full hover:bg-gray-100 flex items-center gap-2">
                <UserRoundPlus strokeWidth={"2px"} size={18} />
                ইনভাইট করুন
              </button>
              <button className="px-4 py-1 border-[1px] border-gray-400 text-sm font-medium text-gray-700 rounded-full hover:bg-gray-100 flex items-center gap-2">
                <Send strokeWidth={"2px"} size={18} />
                গ্রুপ শেয়ার করুন
              </button>
            </div>

            <Popover className="relative">
              <PopoverButton className="block focus:outline-none">
                <Ellipsis strokeWidth={"2px"} size={24} />
              </PopoverButton>
              <PopoverPanel
                anchor={"bottom"}
                className="-translate-x-16 translate-y-5 bg-card border-[1px] border-gray-300 rounded-lg shadow-lg w-auto"
              >
                <div
                  onClick={() => setIsLeaveDialogOpen(true)}
                  className="text-lg text-red-500 text-left px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer"
                >
                  <LogOut strokeWidth={"2px"} size={18} className="mr-2" />
                  গ্রুপ থেকে বের হোন
                </div>
              </PopoverPanel>
            </Popover>
            <Dialog
              open={isLeaveDialogOpen}
              onClose={() => setIsLeaveDialogOpen(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

              <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="mx-auto max-w-sm rounded-lg bg-white p-6">
                  <DialogTitle className="text-lg font-medium mb-4">
                    {groupInfodata.name} গ্রুপ থেকে বের হতে চান?
                  </DialogTitle>

                  <p className="text-gray-600 mb-6">
                    আপনি কি নিশ্চিত যে আপনি এই গ্রুপ থেকে বের হতে চান?
                  </p>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setIsLeaveDialogOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg border-[1px]"
                    >
                      বাতিল করুন
                    </button>
                    <button
                      onClick={() => {
                        setIsLeaveDialogOpen(false);
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 "
                    >
                      বের হোন
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          </div>
        </div>
      }
      rightPanel={
        <div className="space-y-6 w-[96%]">
          <div className="rounded-2xl border bg-card p-4">
            <div className="mb-4">
              <h3 className="font-medium text-xl p-2">গ্রুপ সম্পর্কে</h3>
            </div>
            <div className="p-2">
              <p>{groupInfodata.description}</p>
            </div>
          </div>
          <FriendList />
        </div>
      }
    >
      {/* <div className="max-w-2xl bg-white rounded-2xl border-[1px] p-5 space-y-4" /> */}
      {/* <PostSomething /> */}
      <Feed />
    </MainLayout>
  );
}
