'use client';

import { DaowakandaIcon } from '@/assets/daowakanda.icon';
import { PageMaxWidth } from '../page-max-width';
import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { DaowakandaTextIcon } from '@/assets/daowakanda-text.icon';
import { useState } from 'react';
import { NavItemDesktop } from './nav-item.desktop';
import { usePathname } from 'next/navigation';
import { Button } from '../button';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 w-full flex flex-col">
        <div className="flex items-center min-h-20 bg-[#4D4D4D4D] backdrop-blur-[25px]">
          <PageMaxWidth>
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-4">
                <DaowakandaIcon />
                <DaowakandaTextIcon className="hidden lg:block" />
              </Link>
              <div className="lg:hidden flex-1 flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center rounded-md text-[#0F172A] dark:text-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex items-center gap-10">
                <NavItemDesktop
                  label="Governance"
                  link="#"
                  isActive={pathname.includes('/governance')}
                  subItems={[
                    {
                      label: 'DAO Voting',
                      description:
                        'Participate in making decisions for the  community via DAO voting.',
                      link: '/governance',
                    },
                    {
                      label: 'Research forum',
                      description: 'Join forums to discuss ideas with community members.',
                      link: 'https://medium.com/@daowakanda',
                    },
                  ]}
                />
                <NavItemDesktop
                  label="Communities"
                  link="#"
                  subItems={[
                    {
                      label: 'Twitter',
                      description: 'Follow us @DaoWakanda.',
                      link: 'https://twitter.com/DaoWakanda',
                    },
                    {
                      label: 'Discord',
                      description: 'Ask questions.',
                      link: 'https://discord.gg/daowakanda',
                    },
                    {
                      label: 'Telegram',
                      description: 'Join community.',
                      link: 'https://t.me/daowakanda',
                    },
                  ]}
                />
                <NavItemDesktop
                  isActive={pathname.includes('/developers')}
                  label="AlgoDev"
                  link="/developers"
                />
                <NavItemDesktop
                  isActive={pathname.includes('/about')}
                  label="About"
                  link="/about"
                />
              </div>
              <div className="hidden lg:flex">
                <Button>Connect wallet</Button>
              </div>
            </div>
          </PageMaxWidth>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
      </div>
    </>
  );
}
