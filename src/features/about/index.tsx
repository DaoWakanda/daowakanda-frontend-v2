'use client';

import React, { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import styles from './index.module.scss';
import { PageMaxWidth } from '@/components/page-max-width';

export function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-start pt-20 md:pt-[120px]">
      <div className="hidden sm:block w-full h-[150px] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1742832964/Frame_126_vwxe54.png')] bg-cover bg-center"></div>

      {/* Background */}
      <PageMaxWidth>
        <div className="flex flex-col m-2 font-spaceGrotesk">
          <div className="pt-0 w-full">
            <h1 className="text-[24px] md:text-[32px] mt-10 text-[#CAFFBB] font-[700]">
              Background
            </h1>
            <p className="text-[14px] mt-5 md:text-[16px] font-[700] text-[#ABABAF]">
              In the evolving digital landscape, community engagement and participation have become
              crucial for the growth and sustainability of blockchain ecosystems. DAO Wakanda
              addresses the need for a more inclusive, participatory, and rewarding platform within
              Algorand Nigeria.
            </p>
          </div>

          <div className="flex w-full h-auto sm:h-[332px] mt-10 md:mt-20 gap-8 flex-col sm:flex-row">
            {/* Image Section - Comes first on small screens */}
            <div className="order-1 sm:order-2 flex-1 flex items-center justify-center sm:justify-end">
              <div className="w-full sm:w-[70%] h-[250px] sm:h-[300px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1742832914/Frame_128_zqrebr.png"
                  alt="Frame"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Text Section - Comes second on small screens */}
            <div className="order-2 sm:order-1 flex-1 flex flex-col justify-between">
              <div>
                <h1 className="text-[24px] md:text-[32px] text-[#FFF] font-[700]">
                  Designed to revolutionize community engagement within the Algorand Nigeria
                  ecosystem.
                </h1>
                <p className="text-[14px] sm:text-[16px] font-[700] font-avenir text-[#ABABAF] mt-4">
                  Through innovative use of NFTs, developer incentives, task-based rewards, and
                  community rewards, DAO Wakanda aims to create a vibrant, incentivized environment
                  that empowers community members and amplifies their collective voice.
                </p>
              </div>

              {/* Button */}
              <div className="w-[278px] h-[40px] bg-[#F2F0F4] rounded-[8px] flex items-center justify-center cursor-pointer mt-6 sm:mt-0">
                <p className="flex items-center gap-1">
                  Become a community member
                  <span className="text-sm">
                    <BsArrowUpRight />
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* about-cards */}

          <div className="flex justify-between text-white w-full h-auto mt-10 mb-10 md:mt-20 md:mb-0 gap-4 flex-col sm:flex-row">
            <div className="w-full  border border-[#fff] rounded-lg  p-[16px]">
              <div className="flex flex-col w-full h-full">
                <h1 className="text-lg">Vision and Goals</h1>
                <div className="w-full h-px bg-white mt-2"> </div>

                <p className="text-sm pt-5">
                  DAO Wakanda's vision is to foster a dynamic and empowered community that actively
                  contributes to and benefits from the Algorand Nigeria ecosystem. Its goals include
                  enhancing developer engagement, facilitating community-driven decision-making, and
                  rewarding contributions through a comprehensive tokenomics model.
                </p>
              </div>
            </div>
            <div className="w-full border border-[#fff] rounded-lg  p-[16px]">
              <div className="flex flex-col w-full h-full">
                <h1 className="text-lg">Blockchain Foundation</h1>
                <div className="w-full h-px bg-white mt-2"> </div>

                <p className="text-sm pt-5">
                  DAO Wakanda is built on the Algorand blockchain, known for its speed, security,
                  and scalability. This section will detail the technical architecture, smart
                  contracts, and how NFTs integrate with the DAO.
                </p>
              </div>
            </div>
            <div className="w-full border border-[#fff] rounded-lg  p-[16px]">
              <div className="flex flex-col w-full h-full">
                <h1 className="text-lg">Tokenomics</h1>
                <div className="w-full h-px bg-white mt-2"> </div>

                <p className="text-sm text-[#77777A] pt-5">$HRT Token Overview</p>
                <div className="w-full h-px bg-[#919094]  mt-2"> </div>
                <div className="w-full h-px bg-[#919094]  mt-2"> </div>

                <p className="text-sm text-[#77777A] pt-5">Distribution</p>
                <div className="w-full h-px bg-[#919094] mt-2"> </div>
                <div className="w-full h-px bg-[#919094]  mt-2"> </div>

                <p className="text-sm text-[#77777A] pt-5">Governance</p>
                <div className="w-full h-px bg-[#919094]  mt-2"> </div>
                <div className="w-full h-px bg-[#919094] mt-2"> </div>
              </div>
            </div>
          </div>
        </div>
      </PageMaxWidth>
    </div>
  );
}
