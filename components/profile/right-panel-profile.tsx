"use client";

import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "বিজ্ঞান",
    description: "বিজ্ঞান সম্পর্কে জানুন",
    image: "/course-cover.jpg",
    enrolled: "1000",
    completed: "100%",
  },
  {
    id: 2,
    title: "গণিত",
    description: "গণিত সম্পর্কে জানুন",
    image: "/course-cover.jpg",
    enrolled: "2024",
    completed: "50%",
  },
];

export default function RightPanelProfile() {
  return (
    <div className="space-y-6 w-[96%]">
      <div className="rounded-2xl border bg-card p-4">
        {/* <div> */}
        <p className="pb-2 font-medium text-xl">এনরোল্ড কোর্স</p>
        {/* </div> */}
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="rounded-xl w-36 h-20 object-cover"
                  width={628}
                  height={444}
                />
              </div>
              <div className="flex-1">
                <p className="text-lg font-regular">{course.title}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {course.description}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {course.enrolled} enrolled• {course.completed} completed
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border bg-card p-4">
        <p className="pb-2 font-medium text-xl">জয়েন্ড গ্রুপস </p>
      </div>
      <div className="rounded-2xl border bg-card p-4">
        <p className="pb-2 font-medium text-xl">জয়েন্ড ক্লাবস</p>
      </div>
    </div>
  );
}
