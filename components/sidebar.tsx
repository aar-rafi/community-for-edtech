"use client";

import { BookOpen, Users, Trophy, Bell, Folder, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "ফিড", href: "/", icon: "home.svg" },
  { name: "গ্রুপ", href: "/group", icon: "user-group.svg" },
  { name: "লিডারবোর্ড", href: "#", icon: "ranking.svg" },
  { name: "নোটিস", href: "#", icon: "notice.svg" },
  { name: "মার্কেটপ্লেস", href: "/marketplace", icon: "shopping-bag.svg" },
];

const Subjects = [
  { name: "সকল বিষয়", icon: "all-sub.svg" },
  { name: "বাংলা", icon: "bangla.svg" },
  { name: "ইংরেজি", icon: "english.svg" },
  { name: "উচ্চতর গণিত", icon: "higher_math.svg" },
  { name: "পদার্থবিজ্ঞান", icon: "phy.svg" },
  { name: "সাধারণ গণিত", icon: "general_math.svg" },
  { name: "জীববিজ্ঞান", icon: "biology.svg" },
  // { name: "সামাজিক বিজ্ঞান", icon: "social-science.svg" },
  // { name: "ধর্ম", icon: "religion.svg" },
  // { name: "শারীরিক শিক্ষা", icon: "physical-education.svg" },
  // { name: "কৃষি শিক্ষা", icon: "agriculture.svg" },
  // { name: "কারিগরি শিক্ষা", icon: "vocational-education.svg" },
  // { name: "সংগীত", icon: "music.svg" },
  // { name: "চিত্রকলা", icon: "art.svg" },
  // { name: "কম্পিউটার", icon: "computer.svg" },
  // { name: "হিসাব", icon: "accounting.svg" },
  // { name: "ব্যবসায় শিক্ষা", icon: "business-studies.svg" },
  // { name: "সাংস্কৃতিক শিক্ষা", icon: "cultural-education.svg" },
  // { name: "স্বাস্থ্য শিক্ষা", icon: "health-education.svg" },
  // { name: "পর্যবেক্ষণ", icon: "observation.svg" },
  // { name: "প্রযুক্তি", icon: "technology.svg" },
  // { name: "পরিবেশ শিক্ষা", icon: "environmental-education.svg" },
  // { name: "কার্যকর শিক্ষা", icon: "effective-education.svg" },
  // { name: "সমাজ বিজ্ঞান", icon: "social-science.svg" },
];

export default function Sidebar() {
  const [selected, setSelected] = useState("ফিড");
  const pathname = usePathname();
  const [selectedSubject, setSelectedSubject] = useState("সকল বিষয়");

  const isLinkActive = (href: string) => {
    if (href === "/" && pathname === "/") {
      return true;
    }
    if (href !== "/" && pathname.startsWith(href)) {
      return true;
    }
    return false;

    // return pathname.includes(href);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-card p-6">
        <h1 className="text-xl font-medium text-black pl-2 pb-4">
          ফিউচার কমিউনিটি
        </h1>
        {/* <div className="flex items-center w-full h-[40px] mb-4">
          <Search className="flex items-center justify-center" />
          <input
            type="search"
            placeholder="Search..."
            className="flex-1 w-full h-10 shadow-sm border rounded-full bg-secondary pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-green-700"
          />
        </div> */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full h-[42px] mb-4 focus-within:border-green-500">
          <div className="flex items-center justify-center pl-2">
            <Search />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="flex-1 h-full pl-4 text-gray-800 focus:outline-none "
          />
        </div>

        {/* nav links */}
        {/* <nav className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setSelected(item.name)}
              className={`flex items-center pl-2 space-x-2 border-none rounded-lg py-2 text-lg transition-colors ${
                item.name === selected ? "bg-emerald-100" : "hover:bg-gray-100"
              }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className={`w-5 h-5 ${
                  selected ? "text-emerald-700" : "text-gray-700"
                }`}
                style={{
                  filter:
                    item.name === selected
                      ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(90%)"
                      : "",
                  fill: item.name === selected ? "#059669" : "",
                }}
              />
              <span
                className={`px-1 ${
                  item.name === selected ? "text-emerald-700" : "text-gray-700"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav> */}
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = isLinkActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center pl-2 space-x-2 border-none rounded-lg py-2 text-lg transition-colors ${
                  isActive ? "bg-emerald-100" : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`w-5 h-5 ${
                    isActive ? "text-emerald-700" : "text-gray-700"
                  }`}
                  style={{
                    filter: isActive
                      ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(90%)"
                      : "",
                    fill: isActive ? "#059669" : "",
                  }}
                />
                <span
                  className={`px-1 ${
                    isActive ? "text-emerald-700" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h3 className="pl-2 pb-3 text-xl font-semibold">My Groups</h3>
        <div className="space-y-2">
          {Subjects.map((subject) => (
            <Link
              onClick={() => setSelectedSubject(subject.name)}
              key={subject.name}
              href="#"
              className={`flex rounded-lg py-1 ${
                subject.name === selectedSubject
                  ? "bg-emerald-100"
                  : "hover:bg-accent"
              }`}
            >
              <Image
                src={subject.icon}
                alt={subject.name}
                width={40}
                height={40}
              />
              <span
                className={`p-2 text-lg ${
                  selectedSubject === subject.name
                    ? "text-green-700"
                    : "text-gray-700"
                }`}
              >
                {subject.name}{" "}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const navigation = [
//   {
//     name: "ফিড",
//     href: "#",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "গ্রুপ",
//     href: "#",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 14.25c-2.485 0-4.5-2.015-4.5-4.5S9.515 5.25 12 5.25s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "লিডারবোর্ড",
//     href: "#",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 14.25c-2.485 0-4.5-2.015-4.5-4.5S9.515 5.25 12 5.25s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "নোটিস",
//     href: "#",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 14.25c-2.485 0-4.5-2.015-4.5-4.5S9.515 5.25 12 5.25s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "মার্কেটপ্লেস",
//     href: "#",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 14.25c-2.485 0-4.5-2.015-4.5-4.5S9.515 5.25 12 5.25s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function Sidebar() {
//   const [selected, setSelected] = useState("ফিড");

//   return (
//     <div className="space-y-6">
//       <div className="rounded-2xl border bg-card p-6">
//         <h1 className="text-xl font-medium text-black pl-2 pb-4">
//           ফিউচার কমিউনিটি
//         </h1>
//         <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full h-[42px] mb-4 focus-within:border-green-500">
//           <div className="flex items-center justify-center pl-2">
//             <img src="/icons/search.svg" alt="Search" className="h-5 w-5" />
//           </div>
//           <input
//             type="search"
//             placeholder="Search..."
//             className="flex-1 h-full pl-4 text-gray-800 focus:outline-none"
//           />
//         </div>

//         {/* nav links */}
//         <nav className="space-y-2">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => setSelected(item.name)}
//               className={`flex items-center pl-2 space-x-2 border-none rounded-lg py-2 text-lg transition-colors ${
//                 item.name === selected ? "bg-emerald-100" : "hover:bg-gray-100"
//               }`}
//             >
//               <span
//                 // className={`w-5 h-5 ${
//                 //   item.name === selected ? "text-emerald-700" : "text-gray-700"
//                 // }`}
//                 style={{
//                   fill: item.name === selected ? "#10b981" : "#ffffff",
//                 }}
//               >
//                 {item.icon}
//               </span>
//               <span
//                 className={
//                   item.name === selected ? "text-emerald-700" : "text-gray-700"
//                 }
//               >
//                 {item.name}
//               </span>
//             </Link>
//           ))}
//         </nav>
//       </div>

//       <div className="rounded-2xl border bg-card p-4">
//         <h3 className="mb-3 font-semibold">My Groups</h3>
//         <div className="space-y-2">
//           {["Web Development", "Data Science", "UI/UX Design"].map((group) => (
//             <Link
//               key={group}
//               href="#"
//               className="block rounded-lg px-3 py-2 text-sm hover:bg-accent"
//             >
//               {group}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
