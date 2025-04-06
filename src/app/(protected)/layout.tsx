'use client';

import { useState } from 'react';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ReduxProvider } from '@/redux/provider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ReduxProvider>
      <div className="h-full flex flex-col">
        <Header setSidebar={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isVisible={isSidebarOpen} closeSidebar={toggleSidebar} />
          <main className="w-full bg-secondary p-6 overflow-y-auto scrollbar-hide">
            {children}
          </main>
        </div>
      </div>
    </ReduxProvider>
  );
}
