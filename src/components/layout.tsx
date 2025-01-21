"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col h-screen'>
      <nav className='bg-gray-800 text-white p-4'>
        This is going to be the Navbar
      </nav>
      <ResizablePanelGroup direction='horizontal' className='flex-grow'>
        <ResizableHandle />
        <ResizablePanel>
          <main className='h-full p-4 overflow-auto'>{children}</main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Layout;
