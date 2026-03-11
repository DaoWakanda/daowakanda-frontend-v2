import classNames from 'classnames';
import Link from 'next/link';
import { SearchInput } from '../components/search-input';
import { TabToggler } from '@/components/tab-toggler';
import { useState } from 'react';

export function Projects() {
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
  const projectTypes = ['All', 'Full-time', 'Part-time', 'Contract'];
  const [projectType, setProjectType] = useState('All');
  const [filter, setFilter] = useState('All');

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2
            className={classNames(
              'font-degularDisplay font-bold text-[32px] leading-[40px] text-[#00484F]',
            )}
          >
            Browse Projects
          </h2>
          <p
            className={classNames('font-degularDisplay text-[20px] leading-[40px] text-[#ABABAF]')}
          >
            Discover Web3 projects looking for your skills.
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

      <div className="flex gap-4">
        <SearchInput />

        <TabToggler
          options={projectTypes}
          onSelect={setProjectType}
          selectedOption={projectType}
          variant="2"
          randomId="project-types"
        />
      </div>

      <div>
        <TabToggler
          options={filters}
          onSelect={setFilter}
          selectedOption={filter}
          randomId="filters-x"
        />
      </div>
    </div>
  );
}
