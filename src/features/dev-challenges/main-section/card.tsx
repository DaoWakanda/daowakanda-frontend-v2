'use client';

import classNames from 'classnames';
import React, { useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import { ImStopwatch } from 'react-icons/im';

type Status = 'amateur' | 'pro' | 'elite';

interface StatusStyles {
  text: string;
  bg: string;
}

const statusStylesMap: Record<Status, StatusStyles> = {
  amateur: {
    text: 'text-[#FFCC00]',
    bg: 'bg-[#FFCC0033]',
  },
  pro: {
    text: 'text-[#FF3B30]',
    bg: 'bg-[#FF3B3033]',
  },
  elite: {
    text: 'text-[#34C759]',
    bg: 'bg-[#34C75933]',
  },
};


export function Card() {
  const[status, setStatus] = useState<Status>('amateur');

  const statusClass = classNames(
    statusStylesMap[status].text,
    statusStylesMap[status].bg
  );

  return (
    <div className='w-full min-h-[300px] rounded-2xl bg-[#D1D1D6] flex flex-col'>
      <div className='w-full min-h-[40px] flex items-center justify-center text-[#46464A] text-[14px] font-bold'>
        Full stack Development
      </div>

      <div className='flex flex-1 flex-col w-full min-h-[240px] gap-4 bg-[#211F26] rounded-2xl md:py-[10px] md:px-5 px-2'>
        <div className='flex items-start justify-start text-[#F2F2F7] font-bold font-roboto text-[24px]'>Build a Web3 Wallet</div>

        <div className='flex items-center gap-1'>
          <div className='flex items-center gap-[2px] text-[#8E8E93] text-[14px] font-roboto font-semibold'><BsCalendar /> 01 Oct, 2024</div>
          <div className='flex items-center gap-[2px] text-[#8E8E93] text-[14px] font-roboto font-semibold'><ImStopwatch /> 48:00:00</div>
          <div className={` rounded-lg px-2 text-sm font-semibold w-[71px] min-h-[24px] flex justify-center items-center ${statusClass}`}>{status} </div>
        </div>

        <div className='flex text-[#D1D1D6] font-roboto font-normal text-[15px] leading-6'>
          Using whatever tool at your disposal, build a web3 wallet that
          allows user send and receive tokens on different blockchains. 
        </div>

        <div className='flex items-center gap-2 w-full h-[40px] text-white font-roboto'>
          <div className='flex items-center text-[16px] font-semibold gap-1'>Prize: <span className='font-normal'>50 Algos</span></div>
          <div className='bg-[#D9D9D9] rounded-full w-[5px] h-[5px]'></div>
          <div className='flex items-center text-[16px] font-semibold gap-1'>Max winners: <span className='font-normal'>10</span></div>
        </div>
        
      </div>
    </div>
    
  );
}
