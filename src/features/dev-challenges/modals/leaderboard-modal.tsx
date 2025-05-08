'use client';

import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RiNumbersLine } from 'react-icons/ri';

interface DataProps {
  title: string;
  score: number;
}

interface Props{
  index: any;
  title: string;
  score: number;
}

interface ModalProps{
  onclose: any
}

export function LeaderBoardModal({onclose}: ModalProps) {
  

  const data: DataProps[] = [
    {
      title: 'John Doe',
      score: 530,
    },
    {
      title: 'Sylva Madu',
      score: 536,
    },
    {
      title: 'John Doe',
      score: 530,
    },
    {
      title: 'Sylva Madu',
      score: 536,
    },
    {
      title: 'John Doe',
      score: 530,
    },
    {
      title: 'Sylva Madu',
      score: 536,
    },
    {
      title: 'John Doe',
      score: 530,
    },
    {
      title: 'Sylva Madu',
      score: 536,
    },
    {
      title: 'John Doe',
      score: 530,
    },
    {
      title: 'Sylva Madu',
      score: 536,
    },
  ];
 

  return (
      <div className="flex md:hidden fixed bottom-0 right-0 left-0 flex-col bg-[#1F2431] w-full min-h-[378px] rounded-t-[32px] gap-4 px-2 font-roboto">
        <div className="flex p-4 w-full min-h-14 text-white border-b border-[#484646] items-center justify-between">
          <div className='flex min-h-14 items-center gap-[30px]'>
            <RiNumbersLine className="w-5 h-5" />
            <div className="font-bold text-sm">Leaderboard</div>
          </div>
          <div>
            <IoMdClose onClick={()=>onclose()}/>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-4 py-[8px] w-full">
          <div className="flex bg-[#2E2D3580] w-full min-h-9 rounded-lg p-2 items-center justify-between">
            <div className="text-[#8E8E93] font-normal text-sm">Rank</div>
            <div className="text-[#8E8E93] font-normal text-sm">Points</div>
          </div>
          <div className="w-full h-full px-2 flex flex-col gap-2">
            {data.map((item, index) => (
              <RowData title={item.title} score={item.score} index={index} />
            ))}
          </div>
        </div>
      </div>
  );
}




export const RowData = ({ index, title, score}: Props) =>{

  const stripImage =()=>{
    const [first, last] = title.trim().split(' ');
    const merged = first.split('')[0].toUpperCase() + last.split('')[0].toUpperCase();

    return merged;
  }

  return (
    <div className='w-full h-[25px] flex items-center font-roboto justify-between text-white'>
      <div className='flex items-center gap-2'>
        <div className='font-bold text-[12px] mr-1 w-2 min-h-2'>{index + 1}.</div>

        <div className='flex gap-1 items-center'>
          <div className='text-[12px] font-normal bg-black rounded-full p-1 text-white'>{stripImage()}</div>
          <div className='font-normal text-sm'>{title}</div>
        </div>
       
      </div>
      <div className='font-normal text-sm'>{score}</div>
    </div>
  );
};
