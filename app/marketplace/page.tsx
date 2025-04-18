import MainLayout from "@/components/mainlayout";
import Image from "next/image";
import React from "react";

const marketpalce = () => {
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
      <Image
        src="marketplace.svg"
        alt="Marketplace"
        width={270}
        height={1500}
        className="w-full object-cover m-8 p-8"
      />
    </MainLayout>
  );
};

export default marketpalce;
