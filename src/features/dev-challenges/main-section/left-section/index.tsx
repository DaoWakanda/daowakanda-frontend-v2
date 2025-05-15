'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiNumbersLine } from 'react-icons/ri';
import { RowData } from './score-row';
import { FaSliders } from 'react-icons/fa6';
import { FetchTriviaDto, LeaderBoardItem, TriviaDifficulty } from '@/interface/challenge.interface';

interface DataProps {
  title: string;
  score: number;
}
interface OptionProps {
  optionName: string;
  index: number;
}

interface leaderboardProps {
  leaderboardItems: LeaderBoardItem[] | undefined;
  filter: any;
  setFilter: React.Dispatch<React.SetStateAction<FetchTriviaDto>>;
}
export function LeftSection({ leaderboardItems, filter, setFilter }: leaderboardProps) {
  const [selectedSkill, setSelectedSkill] = useState('All');

  // const DataOptions = ['Novice', 'Amateur', 'Pro'];

  const options: TriviaDifficulty[] = ['novice', 'amateur', 'pro'];
  const skills = [
    'All',
    'Full stack developement',
    'UI/UX design',
    'JavaScript',
    'Frontend Development',
    'Backend Development',
    'Python',
  ];
  const Option = ({ optionName, index }: OptionProps) => {
    return (
      <div
        className="flex gap-2 items-center min-h-6 w-full cursor-pointer"
        key={index}
        onClick={() => {
          setFilter({
            ...filter,
            filterBy: filter.filterBy === optionName ? undefined : optionName,
          });
        }}
      >
        <div
          className="w-6 h-6 rounded-[4px] border-[1.5px] border-[#D0D5DD]"
          style={{ background: optionName === filter?.filterBy ? 'black' : 'white' }}
        ></div>
        <div className="font-normal text-sm text-[#919094]">{optionName}</div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-full flex flex-col text-white bg-[#1C1B1C] rounded-[32px] p-4 gap-[30px]">
      {/* filter */}

      <div className="flex flex-col bg-[#211F26] w-full min-h-fit rounded-2xl gap-4 px-2 font-roboto">
        <div className="flex px-2 w-full min-h-14 text-white border-b border-[#484646] items-center gap-[30px]">
          <FaSliders className="w-5 h-5" />
          <div className="font-bold text-sm">Filters</div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-8 py-[8px] w-full">
          {/* difficulty level */}
          <div className="flex flex-col w-full min-h-[124px] gap-4">
            <div className="text-sm font-normal text-white">Difficulty Level</div>
            <div className="flex flex-col gap-2 w-full min-h-[88px]">
              {options?.map((item, index) => (
                <Option optionName={item} index={index}/>
              ))}
            </div>
          </div>
          {/* skill */}
          {/* <div className="flex flex-1 flex-col w-full min-h-[124px] gap-4">
            <div className="text-sm font-normal text-white">Skill</div>
            <div className="flex flex-wrap gap-2 w-full min-h-[208px]">
              {skills.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSkill(item)}
                  className="text-sm flex items-center justify-center font-normal cursor-pointer px-3 py-4 rounded-[32px] w-fit h-10"
                  style={{
                    color: item === selectedSkill ? '#30303D' : '#46464A',
                    background: item === selectedSkill ? '#939090' : '#1B1B1F',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="flex flex-col bg-[#211F26] w-full min-h-fit rounded-2xl gap-4 px-2 font-roboto">
        <div className="flex p-4 w-full min-h-14 text-white border-b border-[#484646] items-center gap-[30px]">
          <RiNumbersLine className="w-5 h-5" />
          <div className="font-bold text-sm">Leaderboard</div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-4 py-[8px] w-full">
          <div className="flex bg-[#2E2D3580] w-full min-h-9 rounded-lg p-2 items-center justify-between">
            <div className="text-[#8E8E93] font-normal text-sm">Rank</div>
            <div className="text-[#8E8E93] font-normal text-sm">Points</div>
          </div>
          <div className="w-full h-full px-2 flex flex-col gap-2">
            {leaderboardItems?.map((item, index) => (
              <RowData leaderboard={item} index={index} />
            ))}
          </div>
          <div className="text-[#C5EE4F] text-sm font-normal h-5 w-full flex items-center justify-center cursor-pointer">
            View full list
          </div>
        </div>
      </div>
    </div>
  );
}
