'use client';

import { OnboardingLevel } from '@/interface/profile.interface';
import classNames from 'classnames';
import { SetUpProfileIcons } from './icons';

interface Props {
  activeLevel: OnboardingLevel;
}

const levels: { level: OnboardingLevel; icon: React.ReactNode }[] = [
  {
    level: 'Basic Info',
    icon: <SetUpProfileIcons.BasicInfo />,
  },
  {
    level: 'Skills',
    icon: <SetUpProfileIcons.Skills />,
  },
  {
    level: 'Portfolio',
    icon: <SetUpProfileIcons.Portfolio />,
  },
  {
    level: 'Preference',
    icon: <SetUpProfileIcons.Preference />,
  },
];

export const Progress = ({ activeLevel }: Props) => {
  const activeIndex = levels.findIndex((l) => l.level === activeLevel);
  return (
    <div className="flex items-center">
      {levels.map((level, index) => {
        const hasLine = index > 0;
        const isActive = activeIndex >= index;

        return (
          <div className={classNames('flex items-start', hasLine ? 'flex-1' : '')}>
            {hasLine && <div className="flex-1 h-[1px] bg-[#E4E4E4] mt-[15.5px]" />}

            <div
              className={classNames(
                'flex flex-col items-center gap-2',
                level.level === 'Preference' ? 'w-[65px]' : 'w-[57px]',
                isActive ? 'text-[#2A2A2A]' : 'text-[#E4E4E4]',
              )}
            >
              <div
                className={classNames(
                  'flex items-center justify-center w-8 h-8 rounded-full',
                  isActive ? 'bg-[#2A2A2A]' : 'bg-[#E4E4E4]',
                )}
              >
                {level.icon}
              </div>

              <p className="font-degular font-medium text-[14px]">{level.level}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
