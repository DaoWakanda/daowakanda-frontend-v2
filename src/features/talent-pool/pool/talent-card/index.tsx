import classNames from 'classnames';
import { SlLocationPin } from 'react-icons/sl';

type Talent = {
  initials: string;
  name: string;
  role: string;
  skills: string[];
  location: string;
  rating: string;
  projects: string;
  status: string;
};

export function TalentCard({ talent }: { talent: Talent }) {
  return (
    <div className="bg-white border font-degularDisplay border-[#E5E7EB] rounded-[16px] p-5 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-[42px] h-[42px] rounded-[6px] bg-black text-white flex items-center justify-center text-[20px] font-semibold">
            {talent.initials}
          </div>

          <div>
            <p className="font-semibold text-[17px]">{talent.name}</p>
            <p className="text-[13px] text-[#ABABAF]">{talent.role}</p>
          </div>
        </div>

        <span
          className={classNames(
            'text-[12px] p-1 rounded-[6px]',
            talent.status === 'Available'
              ? 'bg-green-100 text-green-600'
              : 'bg-yellow-100 text-yellow-600',
          )}
        >
          {talent.status}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {talent.skills.map((skill) => (
          <span
            key={skill}
            className="text-[12px] bg-[#F2F4F7] text-[#ABABAF] px-2 py-[2px] rounded-[6px]"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-[13px] text-[#ABABAF]">
        <SlLocationPin className="inline-block mr-1 text-lg " />
        {talent.location}
      </p>

      <div className="w-full h-[1px] bg-[#EAECF0]" />

      <div className="flex justify-between items-center text-[13px]">
        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded-full bg-[#F04438] flex items-center justify-center text-[10px] text-white">
            ⭐
          </div>

          <span className="text-[#ABABAF] text-[13px] font-medium">{talent.rating}</span>
        </div>

        <p className="text-[#667085]">{talent.projects} projects</p>
      </div>
    </div>
  );
}
