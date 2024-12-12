import MainLayout from "@/components/mainlayout";
import RightPanel from "@/components/right-panel";
import Image from "next/image";

export default function group() {
  return (
    <MainLayout rightPanel={<RightPanel />}>
      <Image
        src="marketplace.svg"
        alt="Marketplace"
        width={270}
        height={1500}
        className="w-full object-cover m-8 p-8"
      />
    </MainLayout>
  );
}
