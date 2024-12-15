import MainLayout from "@/components/mainlayout";
import RightPanel from "@/components/right-panel";
import Image from "next/image";
import Link from "next/link";

const groups = [
  {
    id: 1,
    coverImage: "group-icon.svg",
    title: "অনিরুদ্ধ ২৪",
    membersCount: 100,
    lastPostTime: "2 hours ago",
  },
  {
    id: 2,
    coverImage: "group-icon.svg",
    title: "অনিরুদ্ধ ২৪",
    membersCount: 200,
    lastPostTime: "1 day ago",
  },
  // Add more groups as needed
];

const suggestedGroups = [
  {
    id: 3,
    coverImage: "group-icon.svg",
    title: "অনিরুদ্ধ ২৪",
    membersCount: 300,
    lastPostTime: "3 hours ago",
    joined: false,
    pending: true,
  },
  {
    id: 4,
    coverImage: "group-icon.svg",
    title: "অনিরুদ্ধ ২৪",
    membersCount: 400,
    lastPostTime: "4 hours ago",
    joined: true,
    pending: false,
  },
  {
    id: 4,
    coverImage: "group-icon.svg",
    title: "অনিরুদ্ধ ২৪",
    membersCount: 400,
    lastPostTime: "4 hours ago",
    joined: false,
    pending: false,
  },
  // Add more groups as needed
];

export default function group() {
  return (
    <MainLayout rightPanel={<RightPanel />}>
      <div className="max-w-2xl bg-white rounded-2xl border-[1px] p-5 space-y-4">
        <div>
          <p className="text-xl font-medium">তোমার গ্রুপ</p>
        </div>
        <div className="space-y-4">
          {groups.map((group) => (
            <Link
              href={`/group/${group.id}`}
              key={group.id}
              className="flex items-center space-x-4"
            >
              <Image
                src={group.coverImage}
                alt={group.title}
                width={50}
                height={50}
                className="rounded-2xl"
              />
              <div className="flex-1">
                <p className="text-lg font-medium">{group.title}</p>
                <p className="text-sm text-gray-500">
                  {group.membersCount} members • Last post {group.lastPostTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-2xl bg-white rounded-2xl border-[1px] p-5 space-y-4 mt-3">
        <div>
          <p className="text-xl font-medium">সকল গ্রুপ</p>
        </div>
        <div className="space-y-4">
          {suggestedGroups.map((group) => (
            <div key={group.id} className="flex items-center space-x-4">
              <Image
                src={group.coverImage}
                alt={group.title}
                width={50}
                height={50}
                className="rounded-2xl"
              />
              <div className="flex-1">
                <p className="text-lg font-medium">{group.title}</p>
                <p className="text-sm text-gray-500">25+ new posts</p>
              </div>
              <button
                className={`rounded-full w-24 py-1 text-lg font-medium
                ${
                  group.joined
                    ? "bg-gray-200 text-gray-500"
                    : group.pending
                    ? "bg-red-100 text-red-700"
                    : "bg-green-400/35 text-emerald-600"
                }`}
              >
                {group.joined ? "Joined" : group.pending ? "Pending" : "Join"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
