'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Card } from './card';
import { LeftSection } from './left-section';
import { FaSliders } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface Props{
  active: boolean;
  onclick: any;
  showFilter: any;
}

export function MainSection({active, onclick, showFilter }: Props) {
  const[searchText, setSearchText] = useState('');
  return (
    <div className='w-full min-h-full flex flex-col'>
      {/* seach bar */} 
      <div className='w-full h-[40px] md:h-[60px] flex items-center justify-between'>
        <div className='relative p-3 text-[#8E8E93] flex items-center md:w-[910px] w-[100%] overflow-hidden mx-auto h-[40px] md:h-[60px] border border-[#8E8E93] bg-[#1B1B1F] rounded-[32px]'>
          <FaSearch className=''/>
          <input type="text"
            placeholder='Search by name, author or category...'
            value={searchText}
            className='w-full md:px-[50px] h-full outline-none bg-inherit ml-auto'
            onChange={(e:any)=> setSearchText(e.target.value)}
          />  
        </div>
        <div className='text-white w-10 h-10 md:hidden flex items-center justify-center cursor-pointer'
          onClick={()=>showFilter()}
        >
          <FaSliders className="w-[20px] h-[19px]" />
        </div>
      </div>
      
        {/* bottom section */}
      <div className='flex flex-row gap-6 w-full min-h-screen md:my-[77px] my-8'>
        {/* left section */}
        <div className='flex-col  md:sticky md:top-[120px] hidden md:flex  w-[280px] min-h-[600px] mt-16'>
          <LeftSection />
        </div>
        {/* right section */}
        <div className='flex flex-col gap-4 flex-1 w-full min-h-screen overflow-y-auto'>
          <div className='flex items-center justify-between'>
            <div className='text-white flex items-center font-roboto font-bold text-[28px]'>Tasks</div>
            <div className='md:hidden flex items-center text-sm font-normal text-[#C7C7CC] cursor-pointer h-[32px] rounded-2xl border border-[#8E8E93] py-1 px-2 gap-2 bg-[#000000]'
              onClick={()=>onclick()}
              >My Earnings: 
              <span className='font-bold'>514</span>
              {active ? <IoIosArrowUp className='' /> : <IoIosArrowDown />}
            </div>
          </div>
         
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 border-blue'>
            {
              [1,2,3,4,5,6,7,8,9].map((_, index)=> (
                <Card key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
    
  );
}
