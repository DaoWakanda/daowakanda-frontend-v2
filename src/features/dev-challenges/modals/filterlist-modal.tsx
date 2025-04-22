'use client';

import React, { useState } from 'react';
import { FaSliders } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { RiNumbersLine } from 'react-icons/ri';

interface OptionProps {
  optionName: string;
  index: number;
  setLevel : any;
  selected: string;
}

interface ModalProps{
  onclose: any
}

export function FilterListModal({onclose}: ModalProps) {
  const [level, setLevel] = useState('');
  const [selectedSkill, setSelectedSkill]= useState('All');
 
  const DataOptions = ['Novice', 'Amateur','Pro'];
  const skills = ['All', 'Full stack developement', 'UI/UX design', 'JavaScript', 'Frontend Development', 'Backend Development', 'Python'];
  const Option = ({optionName, index, setLevel, selected}: OptionProps)=>{
    return(
      <div className='flex gap-2 items-center min-h-6 w-full cursor-pointer' key={index} onClick={()=>setLevel(optionName)}>
        <div className='w-6 h-6 rounded-[4px] border-[1.5px] border-[#D0D5DD]' 
          style={{background: optionName === selected ? 'black': 'white' }}
        ></div>
        <div className='font-normal text-sm text-[#919094]'>{optionName}</div>
      </div>
    );
  }


  return (
      <div className="flex md:hidden fixed bottom-0 right-0 left-0 flex-col bg-[#211F26] w-full min-h-[454px] rounded-t-2xl gap-4 px-2 font-roboto">
        <div className="flex flex-col bg-[#211F26] w-full min-h-[498px] gap-4 px-2 font-roboto">
          <div className="flex px-2 w-full min-h-14 text-white border-b border-[#484646] items-center justify-between">
            <div className='flex min-h-14 items-center gap-[30px]'>
              <FaSliders className="w-5 h-5" />
              <div className="font-bold text-sm">Filters</div>
            </div>
            <div>
              <IoMdClose onClick={()=>onclose()}/>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-8 py-[8px] w-full">
            {/* difficulty level */}
            <div className="flex items-center justify-between w-full min-h-[124px] gap-1">
              <div className="flex text-sm font-normal text-white">Difficulty Level</div>
              <div className="flex items-center gap-2 w-[70%] min-h-[88px]">
                {
                  DataOptions.map((item, index)=> (
                    <Option optionName={item} index={index} setLevel={setLevel} selected={level}/>
                  ))
                }
              </div>
            </div>
            {/* skill */}
            <div className='flex flex-1 flex-col w-full min-h-[124px] gap-4'>
              <div className="flex items-center justify-center text-sm font-normal text-white">Skill</div>
              <div className='flex flex-wrap items-center justify-center gap-2 w-full min-h-[208px]'>
                  {
                    skills.map((item, index)=> (
                      <div key={index} 
                        onClick={()=> setSelectedSkill(item)}
                        className='text-sm flex items-center justify-center font-normal cursor-pointer px-3 py-4 rounded-[32px] w-fit h-10'
                        style={{color: item === selectedSkill ? '#30303D' :'#46464A', 
                          background: item === selectedSkill? '#939090': '#1B1B1F',}}
                      >
                        {item}
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
