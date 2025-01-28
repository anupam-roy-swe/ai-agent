'use client';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { NavigationProvider } from '@/lib/context/navigation';
import { Authenticated } from 'convex/react';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationProvider>
      <div className='flex h-screen'>
        <Authenticated>
          <Sidebar />
        </Authenticated>
        <div className='flex-1 flex flex-col min-w-0'>
          <Header />
        </div>

        <main className='flex-1 overflow-y-auto'>{children}</main>
      </div>
    </NavigationProvider>
  );
};

export default layout;
