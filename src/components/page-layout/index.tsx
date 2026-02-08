import { Footer } from '../footer';
import { FooterV2 } from '../footer/v2';
import { Navbar } from '../navbar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      {children}
      <FooterV2 />
    </div>
  );
}
