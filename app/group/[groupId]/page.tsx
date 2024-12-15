import MainLayout from "@/components/mainlayout";
import React from "react";

export default function groupPage({ params }: { params: { groupId: string } }) {
  return (
    <MainLayout
      heroSection={
        <div className="w-full h-48 bg-card rounded-xl overflow-hidden">
          <img
            src="/post-img-1.png"
            alt="Group cover"
            className="w-full h-full object-cover"
          />
        </div>
      }
    >
      <div className="max-w-2xl bg-white rounded-2xl border-[1px] p-5 space-y-4" />
    </MainLayout>
  );
}
