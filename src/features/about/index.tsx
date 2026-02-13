'use client';

import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';

export function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-start pt-20 md:pt-[120px] lg:pt-[124px] bg-[#FAFAFA]">
      <div className="hidden sm:block w-full h-[150px] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1742832964/Frame_126_vwxe54.png')] bg-cover bg-center"></div>

      {/* Background */}
      <PageMaxWidth>
        <div className="flex flex-col py-8 lg:py-16">
          <div className="pt-0 w-full">
            <h1
              className={classNames(
                'text-[#00484F] font-bold font-degular',
                'text-[24px] leading-[1.2] md:text-[32px] lg:text-[48px] mt-10',
              )}
            >
              Background
            </h1>
            <p
              className={classNames(
                'text-[#8E8E93] font-[350] font-avenirLtsd',
                'text-[14px] leading-[22px] md:text-[16px] lg:text-[20px] lg:leading-[28px] mt-5',
              )}
            >
              In the evolving digital landscape, community engagement and participation have become
              crucial for the growth and sustainability of blockchain ecosystems. DAO Wakanda
              addresses the need for a more inclusive, participatory, and rewarding platform within
              Algorand Nigeria.
            </p>
          </div>

          <div className="flex w-full h-auto sm:h-[332px] mt-10 md:mt-20 gap-8 flex-col sm:flex-row">
            {/* Image Section - Comes first on small screens */}
            <div className="order-1 sm:order-2 flex-1 flex items-center justify-center sm:justify-end">
              <div className="w-full sm:w-[70%] h-[250px] sm:h-[300px] overflow-hidden rounded-lg">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1742832914/Frame_128_zqrebr.png"
                  alt="Frame"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section - Comes second on small screens */}
            <div className="order-2 sm:order-1 flex-1 flex flex-col justify-between">
              <div>
                <h1
                  className={classNames(
                    'text-[#00484F] font-semibold font-degular',
                    'text-[24px] leading-tight md:text-[32px] lg:text-[36px]',
                  )}
                >
                  Designed to revolutionize community engagement within the Algorand Nigeria
                  ecosystem.
                </h1>
                <p
                  className={classNames(
                    'text-[#8E8E93] font-[350] font-avenirLtsd',
                    'text-[14px] leading-[22px] sm:text-[16px] lg:text-[16px] lg:leading-[28px] mt-4',
                  )}
                >
                  Through innovative use of NFTs, developer incentives, task-based rewards, and
                  community rewards, DAO Wakanda aims to create a vibrant, incentivized environment
                  that empowers community members and amplifies their collective voice.
                </p>
              </div>

              {/* Button */}
              <div className="w-full sm:w-[278px] h-[40px] lg:h-[52px] bg-[#C5EE4F] hover:bg-[#C5EE4F]/80 rounded-[8px] lg:rounded-[1000px] flex items-center justify-center cursor-pointer mt-6 sm:mt-0 transition-colors">
                <p
                  className={classNames(
                    'flex items-center gap-1 text-black font-semibold font-degular',
                    'text-[14px] lg:text-[16px]',
                  )}
                >
                  Become a community member
                  <span className="text-sm">
                    <BsArrowUpRight />
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* about-cards */}
          <div className="flex justify-between w-full h-auto mt-10 mb-10 md:mt-20 md:mb-0 gap-4 flex-col sm:flex-row">
            <div className="w-full border border-[#8E8E93] rounded-lg p-4 lg:p-5 bg-white">
              <div className="flex flex-col w-full h-full">
                <h1
                  className={classNames(
                    'text-black font-semibold font-degular',
                    'text-[18px] lg:text-[24px]',
                  )}
                >
                  Vision and Goals
                </h1>
                <div className="w-full h-px bg-[#8E8E93] mt-2"></div>

                <p
                  className={classNames(
                    'text-[#8E8E93] font-[350] font-avenirLtsd',
                    'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px] pt-5',
                  )}
                >
                  DAO Wakanda's vision is to foster a dynamic and empowered community that actively
                  contributes to and benefits from the Algorand Nigeria ecosystem. Its goals include
                  enhancing developer engagement, facilitating community-driven decision-making, and
                  rewarding contributions through a comprehensive tokenomics model.
                </p>
              </div>
            </div>
            <div className="w-full border border-[#8E8E93] rounded-lg p-4 lg:p-5 bg-white">
              <div className="flex flex-col w-full h-full">
                <h1
                  className={classNames(
                    'text-black font-semibold font-degular',
                    'text-[18px] lg:text-[24px]',
                  )}
                >
                  Blockchain Foundation
                </h1>
                <div className="w-full h-px bg-[#8E8E93] mt-2"></div>

                <p
                  className={classNames(
                    'text-[#8E8E93] font-[350] font-avenirLtsd',
                    'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px] pt-5',
                  )}
                >
                  DAO Wakanda is built on the Algorand blockchain, known for its speed, security,
                  and scalability. This section will detail the technical architecture, smart
                  contracts, and how NFTs integrate with the DAO.
                </p>
              </div>
            </div>
            <div className="w-full border border-[#8E8E93] rounded-lg p-4 lg:p-5 bg-white">
              <div className="flex flex-col w-full h-full">
                <h1
                  className={classNames(
                    'text-black font-semibold font-degular',
                    'text-[18px] lg:text-[24px]',
                  )}
                >
                  Tokenomics
                </h1>
                <div className="w-full h-px bg-[#8E8E93] mt-2"></div>

                <div className="flex flex-col gap-4 pt-5">
                  <div>
                    <p
                      className={classNames(
                        'text-[#8E8E93] font-[350] font-avenirLtsd',
                        'text-[14px] lg:text-[16px]',
                      )}
                    >
                      $HRT Token Overview
                    </p>
                    <div className="w-full h-px bg-[#8E8E93] mt-2"></div>
                    <div className="w-full h-px bg-[#8E8E93] mt-2"></div>
                  </div>

                  <div>
                    <p
                      className={classNames(
                        'text-[#8E8E93] font-[350] font-avenirLtsd',
                        'text-[14px] lg:text-[16px]',
                      )}
                    >
                      Distribution
                    </p>
                    <div className="w-full h-px bg-[#8E8E93] mt-2"></div>
                    <div className="w-full h-px bg-[#8E8E93] mt-2"></div>
                  </div>

                  <div>
                    <p
                      className={classNames(
                        'text-[#8E8E93] font-[350] font-avenirLtsd',
                        'text-[14px] lg:text-[16px]',
                      )}
                    >
                      Governance
                    </p>
                    <div className="w-full h-px bg-[#8E8E93] mt-2"></div>
                    <div className="w-full h-px bg-[#8E8E93] mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageMaxWidth>
    </div>
  );
}
