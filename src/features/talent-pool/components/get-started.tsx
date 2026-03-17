'use client';

import { useRouter } from 'next/navigation';

export function GetStarted() {
  const { push } = useRouter();
  return (
    <div className="w-full flex justify-center mt-10 font-degularDisplay">
      <div className="w-full bg-[#1D3F2B] rounded-[24px] py-[60px] px-4 flex flex-col items-center text-center">
        <h2 className="text-[#1EC677] font-bold text-[52px]">Create a talent profile!</h2>

        <p className="text-white text-[24px] mt-3 px-20">
          Got any web3 skills? Set up an account and dive in to start earning and contributing to
          the community!
        </p>

        <button
          onClick={() => push('/talent-pool/set-up-profile')}
          className="mt-6 bg-[#2ED47A] text-black text-[17px] font-semibold px-6 py-2 rounded-full"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
