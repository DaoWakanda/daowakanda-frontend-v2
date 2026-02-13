'use client';

import Link from 'next/link';
import { PageMaxWidth } from '../page-max-width';
import { LargeDaowakandaTextIcon } from '@/assets/daowakanda.icon';

export const FooterV2 = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col bg-black relative overflow-hidden pt-10 pb-6 min-h-0 lg:pt-[76px] lg:h-[363px] lg:pb-0">
      <PageMaxWidth>
        <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-[50px]">
            <Link
              href="/terms-and-privacy-policy"
              className="text-white font-medium leading-[20px] text-[12px] font-plusJarkata lg:text-[14px]"
            >
              Terms & Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-white font-medium leading-[20px] text-[12px] font-plusJarkata lg:text-[14px]"
            >
              Twitter
            </Link>

            <Link
              href="#"
              className="text-white font-medium leading-[20px] text-[12px] font-plusJarkata lg:text-[14px]"
            >
              Facebook
            </Link>

            <Link
              href="#"
              className="text-white font-medium leading-[20px] text-[12px] font-plusJarkata lg:text-[14px]"
            >
              LinkedIn
            </Link>
          </div>

          <p className="text-[#868C98] font-[500] leading-[20px] text-[12px] font-plusJarkata lg:text-[14px]">
            © {year} copyright all rights reserved.
          </p>
        </div>
      </PageMaxWidth>

      <PageMaxWidth className="flex-1 justify-end pt-6 lg:pt-0">
        <div>
          <LargeDaowakandaTextIcon className="w-full max-w-[280px] mx-auto lg:max-w-none" />
        </div>
      </PageMaxWidth>
    </footer>
  );
};
