import classNames from 'classnames';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

interface Props {
  onContinue: () => void;
  onReturn: () => void;
}

export const YourSkills = ({ onContinue, onReturn }: Props) => {
  const skills = [
    'React',
    'Typescript',
    'Figma',
    'Solidity',
    'Go',
    'Algokit',
    'Tealscript',
    'Pyteal',
    'Java',
    'Python',
    'Ruby',
    'Swift',
    'C#',
    'Kotlin',
    'Dart',
    'PHP',
    'Elixir',
    'Rust',
    'React Native',
  ];
  const [selectedSkills, setSelectedSKills] = useState<string[]>([]);

  const onAddSkill = (skill: string) => {
    setSelectedSKills((old) => {
      const newSkills = new Set(old);
      newSkills.add(skill);

      return Array.from(newSkills);
    });
  };

  const onRemoveSkill = (skill: string) => {
    setSelectedSKills((old) => {
      const newSkills = new Set(old);
      newSkills.delete(skill);

      return Array.from(newSkills);
    });
  };

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-1">
          <h2 className="font-degular font-semibold text-[#1F1F1F] text-[30px] text-center">
            Your Skills
          </h2>
          <p className="font-degular font-medium text-[#2F3640] text-[16px] text-center">
            Select the skills you bring to projects.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {skills.map((skill) => {
            const isSelected = selectedSkills.includes(skill);

            return (
              <button
                className={classNames(
                  'p-2.5 border border-[#C6C5C5] transition-all duration-300',
                  'rounded-[50px] font-degular font-medium text-base',
                  isSelected ? 'bg-black text-white border-black' : 'text-[#939393]',
                  'hover:bg-black hover:text-white hover:border-black',
                )}
                onClick={() => (isSelected ? onRemoveSkill(skill) : onAddSkill(skill))}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="flex items-center gap-1 text-[#919094] text-base font-degular font-semibold"
          onClick={() => onReturn()}
        >
          <MdKeyboardArrowLeft />
          <span>Back</span>
        </button>

        <button
          className={classNames(
            'flex items-center gap-1 text-[#FFF] text-base font-degular font-semibold',
            'w-[150px] h-[50px] justify-center bg-[#000000] rounded-[1000px]',
          )}
          onClick={onContinue}
        >
          <span>Continue</span>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};
