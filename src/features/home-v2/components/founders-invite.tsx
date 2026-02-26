import { Button } from '@/components/button';
import { PageMaxWidth } from '@/components/page-max-width';
import React from 'react';

const FoundersInvite = () => {
  return (
    <div className=" py-[60px] md:py-[110px] bg-[#FAFAFA]">
      <PageMaxWidth>
        <div className="bg-[#1D3F2B] rounded-[20px] gap-4 flex flex-col justify-center items-center min-h-[382px] w-full font-degularDisplay">
          <h1 className="text-[#1EC677] font-bold text-3xl md:text-4xl lg:text-[60px]">
            AN INVITE TO FOUNDERS
          </h1>
          <p className="text-white text-[18px] md:text-[24px] font-medium md:max-w-[65%] text-center">
            Are you part of a startup? Got an exciting project or a cool idea brewing? If so, why
            not click here and let’s chat about it!
          </p>
          <Button className="!bg-[#1EC677] hover:!bg-[#1EC677]/80 !px-[29px] !rounded-full text-[#1D3F2B] font-semibold text-[16px]">
            Get Started
          </Button>
        </div>
      </PageMaxWidth>
    </div>
  );
};

export default FoundersInvite;
