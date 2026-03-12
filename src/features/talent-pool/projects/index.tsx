import classNames from 'classnames';
import Link from 'next/link';
import { SearchInput } from '../components/search-input';
import { TabToggler } from '@/components/tab-toggler';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import ProjectCard from './project-card';
import SkeletonCard from './project-card/project-card-skeleton';
import { mockProjects } from '@/data/mockData';





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
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Filtering Logic
  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());

      const matchStack = filter === 'All' || project.stack.includes(filter);

      const matchType = projectType === 'All' || project.type === projectType;

      return matchSearch && matchStack && matchType;
    });
  }, [search, filter, projectType]);

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
        <SearchInput value={search} onChange={setSearch} />

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
        <div className="py-8">
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-gray-500">No projects found.</div>
          ) : (
            <div
              className="
        grid
        gap-6
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-2
      "
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}{' '}
        </div>
      </div>
    </div>
  );
}
