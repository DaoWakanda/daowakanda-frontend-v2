'use client';

import { useState, useEffect } from 'react';
import { BackgroundOverlay } from '../background-overlay';
import classNames from 'classnames';
import { Link, X } from 'lucide-react';
import { DaowakandaIcon } from '@/assets/daowakanda.icon';
import { usePathname, useRouter } from 'next/navigation';
import { WalletIcon } from '@/assets/wallet.icon';
import { NavItemMobile } from './nav-item.mobile';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authAtom, ConnectWalletVisibleAtom } from '@/state';
import { useWallet } from '@txnlab/use-wallet';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: Props) {
  const [open, setOpen] = useState(false);
  const { push } = useRouter();
  const pathname = usePathname();
  const [_, setShowWalletConnect] = useRecoilState(ConnectWalletVisibleAtom);

  const auth = useRecoilValue(authAtom);
  const { activeAddress } = useWallet();

  const userIsLoggedin = !!auth && !!activeAddress;

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isOpen]);

  return (
    <BackgroundOverlay overlayStyle={{ background: 'none' }} visible={isOpen} onClose={handleClose}>
      <div
        className={classNames(
          'self-end fixed h-svh w-full bg-[#4D4D4D4D] backdrop-blur-[25px]',
          'transition-all flex duration-300 flex-col gap-[55px]',
        )}
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center justify-between gap-4 min-h-20 px-4">
          <DaowakandaIcon className="w-8 h-8 cursor-pointer" onClick={() => push('/')} />
          <button
            onClick={handleClose}
            className="inline-flex items-center justify-center rounded-md text-[#0F172A] dark:text-white"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <X className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="self-center flex flex-col gap-8 w-full max-w-[259px]">
          <div className="flex flex-col gap-4">
            <NavItemMobile
              label="Governance"
              link="#"
              isActive={pathname.includes('/governance')}
              subItems={[
                {
                  label: 'DAO Voting',
                  description: 'Participate in making decisions for the  community via DAO voting.',
                  link: '/governance',
                },
                {
                  label: 'Research forum',
                  description: 'Join forums to discuss ideas with community members.',
                  link: 'https://medium.com/@daowakanda',
                },
              ]}
              onClick={handleClose}
            />
            <NavItemMobile
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
                  description:
                    'Join our community on Discord for real-time discussions and support.',
                  link: 'https://discord.gg/daowakanda',
                },
                {
                  label: 'Telegram',
                  description: 'Join community.',
                  link: 'https://t.me/daowakanda',
                },
              ]}
              onClick={handleClose}
            />
            <NavItemMobile
              isActive={pathname.includes('/developers')}
              label="AlgoDev"
              link="/developers"
              onClick={handleClose}
            />
            <NavItemMobile isActive={pathname.includes('/about')} label="About" link="/about" onClick={handleClose} />
          </div>
          {!userIsLoggedin && (
            <button
              className={classNames(
                'flex items-center justify-center gap-4 py-2 px-4 rounded-[50px]',
                'border-[1px] border-white h-[60px] bg-[#2F3033]',
              )}
              onClick={() => {setShowWalletConnect(true); handleClose();}}
            >
              <WalletIcon />
              <span className="font-avenir text-sm font-[700] text-white">Connect wallet</span>
            </button>
          )}
        </div>
      </div>
    </BackgroundOverlay>
  );
}
