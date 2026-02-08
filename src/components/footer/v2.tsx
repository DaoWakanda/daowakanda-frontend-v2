'use client';

import Link from 'next/link';
import { PageMaxWidth } from '../page-max-width';
import { LargeDaowakandaTextIcon } from '@/assets/daowakanda.icon';

export const FooterV2 = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col bg-black pt-[76px] h-[363px] relative overflow-hidden">
      <PageMaxWidth>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[50px]">
            <Link
              href="#"
              className="text-white font-medium leading-[20px] text-[14px] font-plusJarkata"
            >
              Terms & Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-white font-medium leading-[20px] text-[14px] font-plusJarkata"
            >
              Twitter
            </Link>

            <Link
              href="#"
              className="text-white font-medium leading-[20px] text-[14px] font-plusJarkata"
            >
              Facebook
            </Link>

            <Link
              href="#"
              className="text-white font-medium leading-[20px] text-[14px] font-plusJarkata"
            >
              LinkedIn
            </Link>
          </div>

          <p className="text-[#868C98] font-[500] leading-[20px] text-[14px] font-plusJarkata">
            © {year} copyright all rights reserved.
          </p>
        </div>
      </PageMaxWidth>

      <PageMaxWidth className="flex-1 justify-end">
        <div>
          <LargeDaowakandaTextIcon className="w-full" />
        </div>
      </PageMaxWidth>
    </footer>
  );
};
