'use client';

import { DaowakandaIcon } from '@/assets/daowakanda.icon';
import { PageMaxWidth } from '../page-max-width';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { DaowakandaTextIcon } from '@/assets/daowakanda-text.icon';
import { useState } from 'react';
import { NavItemDesktop } from './nav-item.desktop';
import { usePathname } from 'next/navigation';
import { Button } from '../button';
import { MobileMenu } from './mobile-menu';
import { CiBellOn } from 'react-icons/ci';
import Notifications from '../notifications';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authAtom, ConnectWalletVisibleAtom } from '@/state';
import { WalletConnectModal } from '../wallet-connect-modal';
import { useWallet } from '@txnlab/use-wallet';
import classNames from 'classnames';
import { BackgroundOverlay } from '../background-overlay';
import { useAuthActions } from '@/actions/auth';
import { useNotify } from '@/hooks/useNotify';
import { PageLoader } from '../page-loader';
import { useProfileActions } from '@/actions/profile';
import { ProfileAtom } from '@/state/profile.atom';

import Modal from '@/features/profile-page/reusable-modal';
import EditProfile from '@/features/profile-page/profile-edit';


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showWalletConnect, setShowWalletConnect] = useRecoilState(ConnectWalletVisibleAtom);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showEditProfilePopup, setShowEditProfilePopup] = useState(false);
  const profile = useRecoilValue(ProfileAtom);
  const [loggingIn, setLoggingIn] = useState(false);
  const { logout, login, signAuthTransaction } = useAuthActions();
  const { getProfile } = useProfileActions();
  const auth = useRecoilValue(authAtom);
  const { notify } = useNotify();
  const { activeAddress } = useWallet();

  const pathname = usePathname();

  const userIsLoggedin = !!auth && !!activeAddress;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const onSignAuthTransaction = async () => {
    if (loggingIn || !activeAddress) return;

    setLoggingIn(true);
    const authTxnBase64 = await signAuthTransaction();

    if (!authTxnBase64) {
      logout();
    } else {
      const token = await login(authTxnBase64, activeAddress);

      if (!token) {
        logout();
      } else {
        notify.success('Logged in successfully!');
      }
    }

    setLoggingIn(false);
  };

  useEffect(() => {
    if (!!activeAddress && !auth) {
      onSignAuthTransaction();
    }

    if (!!activeAddress && !!auth) {
      getProfile();
    }
  }, [activeAddress, auth]);

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
              <div className="lg:hidden flex-1 flex justify-end gap-4 items-center">
                {!!activeAddress && (
                  <button
                    className={classNames(
                      'flex flex-col py-[8px] px-[25.5px] bg-[#FFF] rounded-lg',
                      'text-[#000000] font-[600] text-base leading-[24px]',
                    )}
                    onClick={() => setShowProfilePopup(!showProfilePopup)}
                  >
                    {activeAddress.slice(0, 6)}...{activeAddress.slice(activeAddress.length - 3)}
                  </button>
                )}

                {userIsLoggedin && (
                  <div className="flex lg:hidden">
                    <div
                      className="relative border border-[#c5ee4f] w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] rounded-full cursor-pointer flex items-center justify-center"
                      onClick={toggleNotifications}
                    >
                      <CiBellOn className="w-6 h-6 text-[#c5ee4f]" />
                    </div>
                  </div>
                )}

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
                      link: '/proposals',
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
              <div className="flex">
                <div className="hidden lg:flex justify-center items-center relative">
                  {!activeAddress && (
                    <Button onClick={() => setShowWalletConnect(true)}>Connect wallet</Button>
                  )}
                  {!!activeAddress && (
                    <button
                      className={classNames(
                        'flex flex-col py-[10px] px-[25.5px] bg-[#FFF] rounded-lg',
                        'text-[#000000] font-[600] text-base leading-[24px]',
                      )}
                      onClick={() => setShowProfilePopup(!showProfilePopup)}
                    >
                      {activeAddress.slice(0, 6)}...{activeAddress.slice(activeAddress.length - 3)}
                    </button>
                  )}
                </div>

                {userIsLoggedin && (
                  <div className="ml-5 hidden lg:flex">
                    <div
                      className="relative border border-[#c5ee4f] w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] rounded-full cursor-pointer flex items-center justify-center"
                      onClick={toggleNotifications}
                    >
                      <CiBellOn className="w-6 h-6 text-[#c5ee4f]" />
                    </div>
                  </div>
                )}
                {showNotifications && userIsLoggedin && (
                  <>
                    <div
                      className="fixed inset-0 bg-black bg-opacity-50 z-40"
                      onClick={() => setShowNotifications(false)}
                    />
                    <Notifications onClose={() => setShowNotifications(false)} />
                  </>
                )}
              </div>
            </div>
          </PageMaxWidth>
        </div>
      </nav>

      <BackgroundOverlay
        onClose={() => setShowProfilePopup(false)}
        visible={showProfilePopup && !!activeAddress}
        wrapperStyle={{
          top: 80,
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}
      >
        <PageMaxWidth>
          <div className={classNames('flex flex-row')}>
            <div onClick={() => setShowProfilePopup(false)} className="flex flex-1"></div>
            <div
              className={classNames(
                'bg-[#0F0D13] mt-8 max-w-[100vw] w-[389px] border-[2px] border-[#79747E]',
                'rounded-2xl py-4 px-8 flex flex-row items-center gap-4',
              )}
            >
              <img
                src={
                  profile?.image
                    ? profile?.image
                    : `https://ui-avatars.com/api/?name=${
                        profile ? `${profile.firstName} ${profile.lastName}` : activeAddress
                      }&background=random&font-size=0.35&rounded=true`
                }
                className={classNames('w-[100px] h-[100px] rounded-[100px]')}
              />
              <div className="flex flex-col gap-1 flex-1">
                <div
                  style={{ textAlign: profile ? 'center' : 'left' }}
                  className="text-[#E5E5EA] font-[500] text-sm leading-[24px]"
                >
                  {profile ? (
                    <>
                      {profile?.firstName} {profile?.lastName}
                    </>
                  ) : (
                    <>
                      {activeAddress?.slice(0, 6)}...
                      {activeAddress?.slice(activeAddress.length - 10)}
                    </>
                  )}
                </div>

                <button
                  className={classNames(
                    'flex flex-col py-[10px] px-[25.5px] bg-white rounded-lg',
                    'text-[#00484F] font-semibold text-sm leading-[24px] font-inter',
                  )}
                  onClick={() => {
                    if (profile) {
                      setShowEditProfilePopup(true);
                      setShowProfilePopup(false);
                    }
                  }}
                >
                  <Link href={profile ? '' : '/create-profile'} className="mt-2 block text-sm ">
                    {' '}
                    {profile ? 'Edit Profile' : 'Create Profile'}
                  </Link>
                </button>

                <button
                  className={classNames(
                    'flex flex-col rounded-lg',
                    'text-[#cc7d6f] font-[400] text-sm leading-[24px] font-inter',
                  )}
                  onClick={() => {
                    logout();
                    setShowProfilePopup(false);
                  }}
                >
                  Disconnect Wallet
                </button>
              </div>
            </div>
          </div>
        </PageMaxWidth>
      </BackgroundOverlay>

      {/* 🔽 Modal for editing profile */}
      <Modal isOpen={showEditProfilePopup} onClose={() => setShowEditProfilePopup(false)}>
        <EditProfile onClose={() => setShowEditProfilePopup(false)} />
      </Modal>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
      </div>

      {/* Loading Overlay */}
      <PageLoader visible={loggingIn} title="Logging In..." />

      {showWalletConnect && <WalletConnectModal onClose={() => setShowWalletConnect(false)} />}
    </>
  );
}
