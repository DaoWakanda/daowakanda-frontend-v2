'use client';

import React, { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import styles from './index.module.scss';
import { PageMaxWidth } from '@/components/page-max-width';
import { TopSection } from './top-section';
import { MainSection } from './main-section';
import { ShortListModal } from './modals/shortlist-modal';
import { LeaderBoardModal } from './modals/leaderboard-modal';
import { FilterListModal } from './modals/filterlist-modal';

export function DevChallengesPage() {
  const [showEarning, setShowEarning] = useState(false);
  const [leaderBoardActive, setLeaderBoardActive] = useState(false);
  const [filterListActive, setFilterListActive] = useState(false);

  const onClickEarning = () => {
    setShowEarning(!showEarning);
  };

  const showLeaderBoard = () => {
    setLeaderBoardActive(true);
    setShowEarning(false);
  };

  const closeLeaderBoard = () => {
    setLeaderBoardActive(false);
  };

  const showFilterList = () => {
    setFilterListActive(true);
  };

  const closeFilterList = () => {
    setFilterListActive(false);
  };

  return (
    <div className="w-full min-h-screen relative">
      <PageMaxWidth>
        <div className="flex flex-col gap-[77px] w-full min-h-screen">
          <TopSection />
          <MainSection onclick={onClickEarning} active={showEarning} showFilter={showFilterList} />
        </div>
      </PageMaxWidth>

      {showEarning && <ShortListModal onclick={showLeaderBoard} />}
      {leaderBoardActive && <LeaderBoardModal onclose={closeLeaderBoard} />}
      {filterListActive && <FilterListModal onclose={closeFilterList} />}
    </div>
  );
}
