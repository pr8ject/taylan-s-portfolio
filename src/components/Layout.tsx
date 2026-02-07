import { ReactNode } from "react";
import Navigation from "./Navigation";
import { TransitionProvider } from "./PageTransition";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <TransitionProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>{children}</main>
      </div>
    </TransitionProvider>
  );
};

export default Layout;
