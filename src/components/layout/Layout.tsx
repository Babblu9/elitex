import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  currentPath?: string;
}

export const Layout = ({ children, currentPath }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPath={currentPath} />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
};
