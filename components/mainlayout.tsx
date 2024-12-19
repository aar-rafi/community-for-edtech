import Sidebar from "./sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
  rightPanel?: React.ReactNode;
  heroSection?: React.ReactNode;
};

export default function MainLayout({
  children,
  rightPanel,
  heroSection,
}: MainLayoutProps) {
  return (
    <main className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-[27%_auto] lg:grid-cols-[27%_43%_27%] gap-5">
        {/* Sidebar - Always visible */}
        <div className="hidden md:block auto-cols-max">
          <Sidebar />
        </div>

        {/* Main content area with hero section and content */}
        <div className="lg:col-span-2">
          {/* Hero section spans middle + right columns */}
          {heroSection && <div className="w-full mb-4">{heroSection}</div>}

          {/* Content grid for middle and right sections */}
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-5">
            <div className="auto-cols-max">{children}</div>
            {rightPanel && (
              <div className="hidden md:block auto-cols-max">{rightPanel}</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
