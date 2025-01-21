"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Navbar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />

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
