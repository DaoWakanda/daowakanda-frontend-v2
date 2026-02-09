import { FAQ } from '@/components/faq';
import { Blog } from './components/blog';
import { HeroSection } from './components/hero-section';
import { HowItWorks } from './components/how-it-works';
import { Join } from './components/join';
import { WhatWeDo } from './components/what-we-do';

export const HomeV2 = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhatWeDo />
      <HowItWorks />
      <Join />
      <Blog />
      <FAQ />
    </div>
  );
};
