'use client';

import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Card, CardLoader } from './card';
import { LeftSection } from './left-section';
import { FaSliders } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useDebounce } from '@/hooks/use-debounce';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TriviasAtom, TriviaSearchTerm } from '@/state/trivia.atom';
import { FetchTriviaDto, LeaderBoardItem } from '@/interface/challenge.interface';
import { useDeveloperActions } from '@/actions/developers/developer.action';

interface Props {
  active: boolean;
  onclick: any;
  showFilter: any;
}

export function MainSection({ active, onclick, showFilter }: Props) {
  // const [searchText, setSearchText] = useState('');
  const { getAllTrivia, fetchLeaderboard } = useDeveloperActions();
  const [leaderboardItems, setLeaderboardItems] = useState<LeaderBoardItem[]>();
  const trivias = useRecoilValue(TriviasAtom);
  const [filter, setFilter] = useState<FetchTriviaDto>({
    numOfItemsPerPage: 40,
  });
  const [searchTerm, setSearchTerm] = useRecoilState(TriviaSearchTerm);
  const { debounce } = useDebounce();

  const triviaSize = trivias?.data?.length || 0;

  const debounceSearch = debounce((term: string) => {
    setFilter((old) => ({
      ...old,
      searchTerm: term,
    }));
  });

  const getLeaderboard = async () => {
    const res = await fetchLeaderboard();

    if (res) {
      setLeaderboardItems(res);
    }
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  useEffect(() => {
    getAllTrivia(filter);
  }, [filter]);

  useEffect(() => {
    debounceSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="w-full min-h-full flex flex-col">
      {/* seach bar */}
      <div className="w-full h-[40px] md:h-[60px] flex items-center justify-between">
        <div className="relative p-3 text-[#8E8E93] flex items-center md:w-[910px] w-[100%] overflow-hidden mx-auto h-[40px] md:h-[60px] border border-[#8E8E93] bg-[#1B1B1F] rounded-[32px]">
          <FaSearch className="" />
          <input
            type="text"
            placeholder="Search by name, author or category..."
            value={searchTerm}
            className="w-full md:px-[50px] h-full outline-none bg-inherit ml-auto"
            onChange={(e: any) => setSearchTerm(e.target.value)}
          />
        </div>
        <div
          className="text-white w-10 h-10 md:hidden flex items-center justify-center cursor-pointer"
          onClick={() => showFilter()}
        >
          <FaSliders className="w-[20px] h-[19px]" />
        </div>
      </div>

      {/* bottom section */}
      <div className="flex flex-row gap-6 w-full min-h-screen md:my-[77px] my-8 relative items-start">
        {/* left section */}
        <div className="flex-col  md:sticky md:top-[120px] hidden lg:flex  w-[280px] min-h-[600px] mt-16">
          <LeftSection leaderboardItems={leaderboardItems} filter={filter} setFilter={setFilter} />
        </div>
        {/* right section */}
        <div className="flex flex-col gap-4 flex-1 w-full min-h-screen overflow-y-auto">
          <div className="flex items-center justify-between">
            <div className="text-white flex items-center font-roboto font-bold text-[28px]">
              Tasks
            </div>
            <div
              className="md:hidden flex items-center text-sm font-normal text-[#C7C7CC] cursor-pointer h-[32px] rounded-2xl border border-[#8E8E93] py-1 px-2 gap-2 bg-[#000000]"
              onClick={() => onclick()}
            >
              My Earnings:
              <span className="font-bold">514</span>
              {active ? <IoIosArrowUp className="" /> : <IoIosArrowDown />}
            </div>
          </div>

          <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
            {triviaSize > 0 &&
              trivias?.data.map((trivia, index) => <Card key={index} {...trivia} />)}
            {triviaSize <= 0 && [1, 2, 3, 4, 5, 6].map((_, index) => <CardLoader />)}
          </div>
        </div>
      </div>
    </div>
  );
}
