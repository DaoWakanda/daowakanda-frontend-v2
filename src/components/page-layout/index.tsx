import { FooterV2 } from '../footer/v2';
import { NavbarV2 } from '../navbar-v2';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarV2 />
      {children}
      <FooterV2 />
    </div>
  );
}
