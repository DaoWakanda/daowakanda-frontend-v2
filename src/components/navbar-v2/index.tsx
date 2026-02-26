'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { DaowakandaIcon } from '@/assets/daowakanda.icon';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authAtom, ConnectWalletVisibleAtom } from '@/state';
import { useProfileActions } from '@/actions/profile';
import { ProfileAtom } from '@/state/profile.atom';
import { useAuthActions } from '@/actions/auth';
import { useNotify } from '@/hooks/useNotify';
import { useWallet } from '@txnlab/use-wallet';
import { useNotificationActions } from '@/actions/notifications';
import { UnclaimedBountiesAtom } from '@/state/trivia.atom';
import { Button } from '../button';
import { CiBellOn } from 'react-icons/ci';
import Notifications from '../notifications';
import { PageLoader } from '../page-loader';
import Modal from '@/features/profile-page/reusable-modal';
import EditProfile from '@/features/profile-page/profile-edit';
import { BackgroundOverlay } from '../background-overlay';
import { PageMaxWidth } from '../page-max-width';
import { Menu } from 'lucide-react';
import { MobileMenu } from './mobile-menu';

export function NavbarV2() {
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
  const { getUnclaimedBounties } = useNotificationActions();
  const unclaimedBounties = useRecoilValue(UnclaimedBountiesAtom);

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
      getUnclaimedBounties();
    }
  }, [activeAddress, auth]);

  return (
    <>
      <nav
        className={classNames(
          'fixed top-0 left-0 z-10 right-0 w-full flex flex-col lg:px-10 px-4',
          'lg:self-center top-5 lg:top-[30px] lg:left-auto lg:right-auto lg:max-w-7xl',
        )}
      >
        <div
          className={classNames(
            'flex items-center justify-between gap-4 px-4 lg:px-[30px] bg-white',
            'h-[64px] rounded-[100px]',
          )}
        >
          <Link href="/" className="flex items-center gap-4">
            <DaowakandaIcon />
          </Link>

          <div className="lg:hidden flex-1 flex justify-end gap-4 items-center">
            {!!activeAddress && (
              <button
                className={classNames(
                  'flex flex-col py-[8px] px-[16px] bg-[#FCD701] rounded-[60px]',
                  'text-[#000000] font-[600] text-sm leading-[24px]',
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
              className="inline-flex items-center justify-center rounded-md text-[#0F172A]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-[30px]">
            {[
              {
                label: 'Home',
                href: '/',
              },
              {
                label: 'About',
                href: '/about',
              },
              {
                label: 'Proposals',
                href: '/proposals',
              },
              // {
              //   label: 'Validator',
              //   href: '/validator',
              // },
              // {
              //   label: 'Talent Pool',
              //   href: '#',
              // },
            ].map((route) => {
              const isActive = route.href === pathname;

              return (
                <Link
                  className={classNames(
                    'font-degularDisplay text-[14px]',
                    isActive ? 'text-[#231E15] font-semibold' : 'text-[#8E8E93]',
                  )}
                  href={route.href}
                >
                  {route.label}
                </Link>
              );
            })}
          </div>

          <div className="flex">
            <div className="hidden lg:flex justify-center items-center relative">
              {!activeAddress && (
                <button
                  className={classNames(
                    'flex py-[9.5px] px-[29px] bg-[#FCD701] rounded-[50px]',
                    'text-black font-degularDisplay font-medium',
                  )}
                  onClick={() => setShowWalletConnect(true)}
                >
                  Connect wallet
                </button>
              )}
              {!!activeAddress && (
                <button
                  className={classNames(
                    'flex py-[9.5px] px-[29px] bg-[#FCD701] rounded-[50px]',
                    'text-black font-degularDisplay font-medium',
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
                  {unclaimedBounties && unclaimedBounties.length > 0 && (
                    <span className="absolute top-0 right-0 w-4 h-4 flex items-center justify-center bg-red-500 rounded-full text-white text-xs font-semibold">
                      {unclaimedBounties.length}
                    </span>
                  )}
                  <CiBellOn className="w-6 h-6 text-[#c5ee4f]" />
                </div>
              </div>
            )}
            {showNotifications && userIsLoggedin && (
              <>
                <Notifications onClose={() => setShowNotifications(false)} />
              </>
            )}
          </div>
        </div>
      </nav>

      <BackgroundOverlay
        onClose={() => setShowProfilePopup(false)}
        visible={showProfilePopup && !!activeAddress}
        wrapperStyle={{
          // top: 80,
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
                'rounded-2xl py-4 px-8 flex flex-row items-center gap-4 mt-[90px]',
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

      {/* Loading Overlay */}
      <PageLoader visible={loggingIn} title="Logging In..." />

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
      </div>
    </>
  );
}
