import classNames from 'classnames';
import Link from 'next/link';
import { SearchInput } from '../components/search-input';
import { TabToggler } from '@/components/tab-toggler';
import { useState, useEffect } from 'react';
import { talents } from './data/talentData';
import { TalentCard } from './talent-card';
import { TalentCardSkeleton } from './talent-card/talent-card-skeleton';
import { GetStarted } from '../components/get-started';

export function Pool() {
  const filters = [
    'All',
    'React',
    'Figma',
    'Solidity',
    'Node.js',
    'Python',
    'Java',
    'C++',
    'Go',
    'Rust',
    'Typescript',
  ];
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2
            className={classNames(
              'font-degularDisplay font-bold text-[32px] leading-[40px] text-[#00484F]',
            )}
          >
            Talent Pool
          </h2>
          <p
            className={classNames('font-degularDisplay text-[20px] leading-[40px] text-[#ABABAF]')}
          >
            Discover verified Web3 talent with transparent on-chain reputation and proven track
            records
          </p>
        </div>

        <Link
          href="#"
          className={classNames(
            'w-[200px] h-[50px] bg-[#000000] self-end rounded-[12px] text-[#FFFFFF]',
            'flex justify-center items-center font-degularDisplay font-medium text-[16px]',
          )}
        >
          Apply as Talent
        </Link>
      </div>

      <div className="flex">
        <SearchInput />
      </div>

      <div>
        <TabToggler
          options={filters}
          onSelect={setFilter}
          selectedOption={filter}
          randomId="filters-y"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <TalentCardSkeleton key={i} />)
          : talents.map((talent) => <TalentCard key={talent.name} talent={talent} />)}
      </div>

      {/* CTA */}
      <GetStarted />
    </div>
  );
}
