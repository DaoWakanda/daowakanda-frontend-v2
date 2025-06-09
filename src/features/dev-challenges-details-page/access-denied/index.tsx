import { Button } from '@/components/button';
import { ConnectWalletVisibleAtom } from '@/state';
import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  isConnected: boolean;
}
const AccessDeniedPage = ({ isConnected }: Props) => {
  const [showWalletConnect, setShowWalletConnect] = useRecoilState(ConnectWalletVisibleAtom);

  return (
    <div className="bg-[#1C1B1C] w-full min-h-screen rounded-[16px] p-6 md:p-10 ">
      <div className="w-[194px] aspect-square md:w-[349px] mx-auto my-8">
        <img
          src="https://res.cloudinary.com/dlinprg6k/image/upload/v1746203227/Frame_ihstiq.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-4 space-y-3">
        <h2 className="font-bold text-[32px]">Access denied</h2>
        <p className="text-[16px] md:text-[22px]">
          {isConnected
            ? ` Access to this task has been denied, update your profile to gain access.`
            : ` Access to this task has been denied, connect your wallet to gain access.`}
        </p>
        {isConnected ? (
          <Link className="text-[#C7F284] text-[16px]" href="/developers/signup">
            Proceed to update KYC
          </Link>
        ) : (
          <Button className="text-[#C7F284] text-[16px]"  onClick={() => setShowWalletConnect(true)}>
            Connect wallet
          </Button>
        )}
      </div>
    </div>
  );
};

export default AccessDeniedPage;
