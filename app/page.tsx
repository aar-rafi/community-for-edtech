import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import Feed from '@/components/feed'
import RightPanel from '@/components/right-panel'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-7"> 
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-6">
            <Feed />
          </div>
          <div className="col-span-3">
            <RightPanel />
          </div>
        </div>
      </main>
    </div>
  )
}