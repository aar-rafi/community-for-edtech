import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Feed from "@/components/posts/feed";
import RightPanel from "@/components/right-panel";
import MainLayout from "@/components/mainlayout";

export default function Home() {
  return (
    // <div className="min-h-screen bg-background">
    //   <Navbar />
    //   <main className="container mx-auto py-6">
    //     <div className="grid grid-cols-1 md:grid-cols-[27%_43%_27%] gap-6">
    //       <div className="hidden md:block auto-cols-max">
    //         <Sidebar />
    //       </div>
    //       <div className="auto-cols-max">
    //         <Feed />
    //       </div>
    //       <div className="hidden md:block auto-cols-max">
    //         <RightPanel />
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <MainLayout rightPanel={<RightPanel />}>
      <Feed />
    </MainLayout>
  );
}
