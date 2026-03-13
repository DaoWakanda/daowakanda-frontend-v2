import { MockProjectProps } from '@/data/mockData';
import Image from 'next/image';
import React from 'react';


interface MockProjectPropsCard {
  project: MockProjectProps;
}

const ProjectCard = ({ project }: MockProjectPropsCard) => {
  return (
    <div
      key={project.id}
      className="bg-white border font-degularDisplay rounded-xl p-5 shadow-sm hover:shadow-md transition"
    >
      {/* Title */}
      <div className="mb-2">
        <h3 className="font-medium text-[24px] text-black">{project.title}</h3>
        <p className="text-[16px] text-[#ABABAF]">{project.category}</p>
      </div>

      {/* Description */}
      <p className="text-[16px] text-[#ABABAF] mb-4">{project.description}</p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, i) => (
          <span key={i} className="text-sm px-2 py-1 bg-[#F6F6F9] rounded-[4px] text-[#ABABAF]">
            {tech}
          </span>
        ))}
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap text-xs text-gray-500 gap-4 mb-4">
        <div className="flex gap-2 items-center">
          <Image
            src={
              'https://res.cloudinary.com/dk5mfu099/image/upload/v1773321761/stash_badge-dollar_fiiesn.svg'
            }
            alt="budget"
            width={20}
            height={20}
            className="object-cover w-5 h-5"
          />
          <span className="text-sm text-[#ABABAF]">{project.budget}</span>
        </div>{' '}
        <div className="flex gap-2 items-center">
          <Image
            src={
              'https://res.cloudinary.com/dk5mfu099/image/upload/v1773321762/hugeicons_time-04_nkwjbl.svg'
            }
            alt="budget"
            width={20}
            height={20}
            className="object-cover w-5 h-5"
          />
          <span className="text-sm text-[#ABABAF]">{project.duration}</span>
        </div>{' '}
        <div className="flex gap-2 items-center">
          <Image
            src={
              'https://res.cloudinary.com/dk5mfu099/image/upload/v1773321761/basil_location-outline_z2bemu.svg'
            }
            alt="location"
            width={20}
            height={20}
            className="object-cover w-5 h-5"
          />
          <span className="text-sm text-[#ABABAF]">{project.workType}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm">
        <div className="text-gray-500 flex items-center gap-2">
          <Image
            src={
              'https://res.cloudinary.com/dk5mfu099/image/upload/v1773321761/solar_users-group-rounded-linear_aucbva.svg'
            }
            alt="applicants"
            width={20}
            height={20}
            className="object-cover w-5 h-5"
          />
          <span className="text-[#ABABAF] text-[15px]">
            {' '}
            {project.applicants} applicants • {project.posted}
          </span>
        </div>

        <button className="text-green-600 font-medium hover:underline flex items-center gap-2">
          <span className="text-[15px] "> Apply</span>
          <Image
            src={'https://res.cloudinary.com/dk5mfu099/image/upload/v1773321762/Vector_g1hldh.svg'}
            alt="arrows"
            width={20}
            height={20}
            className="object-cover w-3 h-3"
          />{' '}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
