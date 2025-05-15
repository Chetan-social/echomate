
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        {!isMobile && (
          <Sidebar className="hidden md:block w-64 shrink-0" />
        )}
        <main className="flex-1 max-w-full md:max-w-2xl lg:max-w-3xl mx-auto border-x border-border">
          {children}
        </main>
        {!isMobile && (
          <RightSidebar className="hidden lg:block w-72 shrink-0" />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
