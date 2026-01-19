import { ReactNode } from "react";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
