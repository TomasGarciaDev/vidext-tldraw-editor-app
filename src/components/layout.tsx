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
    <div className='flex flex-col h-screen bg-gray-100'>
      <Navbar />

      <ResizablePanelGroup direction='horizontal' className='flex-grow'>
        <ResizableHandle />
        <ResizablePanel defaultSize={75} minSize={50}>
          <main className='h-full p-4 overflow-auto'>{children}</main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Layout;
