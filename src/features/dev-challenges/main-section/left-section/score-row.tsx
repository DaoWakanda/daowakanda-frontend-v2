import React from 'react';

interface Props{
  index: any;
  title: string;
  score: number;
}

export const RowData = ({ index, title, score}: Props) =>{

  const stripImage =()=>{
    const [first, last] = title.trim().split(' ');
    const merged = first.split('')[0].toUpperCase() + last.split('')[0].toUpperCase();

    return merged;
  }

  return (
    <div className='w-full h-[25px] flex items-center font-roboto justify-between'>
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
