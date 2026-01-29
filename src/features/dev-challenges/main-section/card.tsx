'use client';

import { ITrivia, TriviaDifficulty } from '@/interface/challenge.interface';
import { createSanitizedMarkup } from '@/utils';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import { ImStopwatch } from 'react-icons/im';
import Skeleton from 'react-loading-skeleton';

interface StatusStyles {
  text: string;
  bg: string;
}

const statusStylesMap: Record<TriviaDifficulty, StatusStyles> = {
  amateur: {
    text: 'text-[#FFCC00]',
    bg: 'bg-[#FFCC0033]',
  },
  pro: {
    text: 'text-[#FF3B30]',
    bg: 'bg-[#FF3B3033]',
  },
  novice: {
    text: 'text-[#34C759]',
    bg: 'bg-[#34C75933]',
  },
};

export function Card({
  id,
  title,
  duration,
  difficulty,
  prize,
  maxWinners,
  winnersCount,
  description,
  skill,
  createdAt,
  status,
  endTimeStamp,
}: ITrivia) {
  const statusClass = classNames(statusStylesMap[difficulty].text, statusStylesMap[difficulty].bg);

  const [timeLeft, setTimeLeft] = useState<string>('00:00:00:00');

  useEffect(() => {
    const updateTimer = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const difference = endTimeStamp / 1000 - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (60 * 60 * 24));
        const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((difference % 3600) / 60);
        const seconds = Math.floor(difference % 60);

        const formattedTime = `${String(days).padStart(2, '0')} days ${String(hours).padStart(
          2,
          '0',
        )} hrs ${String(minutes).padStart(2, '0')}mins ${String(seconds).padStart(2, '0')}secs`;
        setTimeLeft(formattedTime);
      } else {
        setTimeLeft('00:00:00');
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, [endTimeStamp]);

  const shortdesc = description?.length > 200 ? description?.slice(0, 200) : description;

  return (
    <Link
      className="w-full min-h-[300px] rounded-2xl bg-[#D1D1D6] flex flex-col"
      href={`/developers/${id}`}
    >
      <div className="w-full min-h-[40px] flex items-center justify-center text-[#46464A] text-[14px] font-bold">
        {skill}
      </div>

      <div className="flex flex-1 flex-col w-full min-h-[240px] gap-4 bg-[#211F26] rounded-2xl md:py-[10px] md:px-2 px-2">
        <div className="flex items-start justify-start text-[#F2F2F7] font-bold font-roboto text-[16px]">
          {title}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[2px] text-[#8E8E93] text-[14px] font-roboto font-semibold">
            <BsCalendar /> {new Date(createdAt).toDateString()}
          </div>
          <div className="flex items-center gap-[2px] text-[#8E8E93] text-[14px] font-roboto font-semibold">
            <ImStopwatch /> {status === 'expired' ? 'Ended' : timeLeft}
          </div>
          <div
            className={` rounded-lg px-2 text-sm font-semibold w-[71px] min-h-[24px] flex justify-center items-center ${statusClass}`}
          >
            {difficulty}{' '}
          </div>
        </div>

        <div
          className="flex text-[#D1D1D6] font-roboto font-normal text-[15px] leading-6"
          dangerouslySetInnerHTML={createSanitizedMarkup(shortdesc)}
        />

        <div className="flex items-center gap-2 w-full h-[40px] text-white font-roboto">
          <div className="flex items-center text-[16px] font-semibold gap-1">
            Prize: <span className="font-normal">{prize} Algos</span>
          </div>
          <div className="bg-[#D9D9D9] rounded-full w-[5px] h-[5px]"></div>
          <div className="flex items-center text-[16px] font-semibold gap-1">
            Max winners: <span className="font-normal">{maxWinners}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function CardLoader() {
  return (
    <div className="w-full min-h-[300px] rounded-2xl bg-[#D1D1D6] flex flex-col">
      <div className="w-full min-h-[40px] flex items-center justify-center text-[#46464A] text-[14px] font-bold">
        <Skeleton width={100} />
      </div>

      <div className="flex flex-1 flex-col w-full min-h-[240px] gap-4 bg-[#211F26] rounded-2xl md:py-[10px] md:px-5 px-2">
        <div className="flex items-start justify-start text-[#F2F2F7] font-bold font-roboto text-[24px]">
          <Skeleton width={100} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[2px] text-[#8E8E93] text-[14px] font-roboto font-semibold">
            <Skeleton baseColor="#202020" highlightColor="#444" width={50} />
          </div>
          <div className="flex items-center gap-[2px] text-[#8E8E93] text-[14px] font-roboto font-semibold">
            <Skeleton baseColor="#202020" highlightColor="#444" width={50} />
          </div>
          <div
            className={`rounded-lg px-2 text-sm font-semibold w-[71px] min-h-[24px] flex justify-center items-center`}
          >
            <Skeleton baseColor="#202020" highlightColor="#444" width={50} />
          </div>
        </div>

        <div className="flex text-[#D1D1D6] font-roboto font-normal text-[15px] leading-6">
          <Skeleton baseColor="#202020" highlightColor="#444" count={3} width={200} />
        </div>

        <div className="flex items-center gap-2 w-full h-[40px] text-white font-roboto">
          <div className="flex items-center text-[16px] font-semibold gap-1">
            <Skeleton baseColor="#202020" highlightColor="#444" width={20} />
          </div>
          <div className="bg-[#D9D9D9] rounded-full w-[5px] h-[5px]"></div>
          <div className="flex items-center text-[16px] font-semibold gap-1">
            <Skeleton baseColor="#202020" highlightColor="#444" width={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
