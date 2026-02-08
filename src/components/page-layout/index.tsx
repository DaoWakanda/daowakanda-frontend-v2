import { Footer } from '../footer';
import { Navbar } from '../navbar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}
