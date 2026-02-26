import React from 'react';
import classNames from 'classnames';
import { PageMaxWidth } from '@/components/page-max-width';
import Image from 'next/image';

const HeroAboutSection = () => {
  return (
    <div className="bg-[#FAFAFA] pt-[120px] min-h-svh md:pt-[150px] font-degularDisplay">
      <PageMaxWidth>
        <div className="flex flex-col text-center justify-center gap-4 items-center">
          <h2 className="font-bold text-2xl md:text-3xl text-[#00484F] ">Background</h2>
          <p className="md:max-w-[75%] text-[#ABABAF] text-[20px] tracking-[0.15px]">
            Daowakanda is a community-owned, on-chain coordination layer built on the Algorand
            network. Born from the belief that community is the backbone of Web3, Daowakanda exists
            to decentralize opportunity by giving contributors real ownership, real governance
            power, and real economic upside within the ecosystems they help build. What started as a
            local initiative within Algorand Nigeria has evolved into a global DAO infrastructure
            layer designed to align governance, security, and talent coordination under one
            framework.
          </p>
        </div>
        <div className=" mb-[70px] rounded-[20px] overflow-clip mt-[32px] w-full">
          <Image
            src={
              'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028124/cf3216c5e82bbe509eb91b3e28cf0d48e3eb290a_rpgcuv.jpg'
            }
            alt="about-background-image"
            width={1000}
            height={500}
            priority
            className="object-cover w-full h-[300px] md:h-full lg:h-[730px]"
          />
        </div>
      </PageMaxWidth>
    </div>
  );
};

export default HeroAboutSection;
