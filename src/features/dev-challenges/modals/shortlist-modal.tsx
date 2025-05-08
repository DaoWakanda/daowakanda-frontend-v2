'use client';

import React, { useState } from 'react';

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
  onclick: any
}

export function ShortListModal({onclick}: ModalProps) {
  

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
    
  ];
 

  return (
    <div className="md:hidden flex absolute right-4 top-[500px] flex-col bg-[#211F26] w-[280px] border border-[#8E8E93] min-h-[185px] rounded-2xl gap-2 px-2 font-roboto">
      <div className="flex flex-1 flex-col justify-between gap-8 py-[2px] w-full">
        <div className="w-full h-full px-2 flex flex-col gap-2">
          {data.map((item, index) => (
            <RowData title={item.title} score={item.score} index={index} />
          ))}
        </div>
        <div className="text-[#C5EE4F] text-sm font-normal h-5 w-full flex items-center justify-center cursor-pointer"
            onClick={()=>onclick()}
          >
          View full list
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
