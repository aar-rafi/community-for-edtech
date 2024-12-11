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
    <>
      {heroSection && <div className="w-full">{heroSection}</div>}
      <main className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-[27%_auto] lg:grid-cols-[27%_43%_27%] gap-6">
          <div className="hidden md:block auto-cols-max">
            <Sidebar />
          </div>
          <div className="auto-cols-max">{children}</div>
          {rightPanel && (
            <div className="hidden lg:block auto-cols-max">{rightPanel}</div>
          )}
        </div>
      </main>
    </>
  );
}
