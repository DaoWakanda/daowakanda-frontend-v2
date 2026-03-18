import { DropZone } from '@/components/drop-zone';
import { Input } from '@/components/input';
import classNames from 'classnames';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

interface Props {
  onContinue: () => void;
  onReturn: () => void;
}

export const YourPortfolio = ({ onContinue, onReturn }: Props) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-1">
          <h2 className="font-degular font-semibold text-[#1F1F1F] text-[30px] text-center">
            Your Portfolio
          </h2>
          <p className="font-degular font-medium text-[#2F3640] text-[16px] text-center">
            Showcase your best work.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col flex-1">
              <Input label="GitHub" placeholder="github.com/username" />
            </div>

            <div className="flex flex-col flex-1">
              <Input label="Behance" placeholder="behance.net/username" />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col flex-1">
              <Input label="Dribbble" placeholder="dribbble.com/username" />
            </div>

            <div className="flex flex-col flex-1">
              <Input label="Website" placeholder="yoursite.com" />
            </div>
          </div>

          <DropZone title="Upload your CV" description="PDF, DOC up to 10MB" />
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
