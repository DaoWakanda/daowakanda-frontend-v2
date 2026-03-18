import { Slider } from '@/components/slider';
import classNames from 'classnames';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

interface Props {
  onContinue: () => void;
  onReturn: () => void;
}

export const WorkPreferences = ({ onContinue, onReturn }: Props) => {
  const availabilityOptions = ['Full-time', 'Part-time', 'Contract'];
  const [availability, setAvailability] = useState('Full-time');
  const [rate, setRate] = useState(50);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-1">
          <h2 className="font-degular font-semibold text-[#1F1F1F] text-[30px] text-center">
            Work Preferences
          </h2>
          <p className="font-degular font-medium text-[#2F3640] text-[16px] text-center">
            How do you want to work?
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h4 className="font-degular font-medium text-[14px] text-[#939393]">Availability</h4>

            <div className="flex gap-2">
              {availabilityOptions.map((option) => (
                <button
                  className={classNames(
                    'flex-1 h-10 flex justify-center items-center rounded-[4px]',
                    'font-degular font-medium text-sm transition-all duration-300',
                    option === availability
                      ? 'bg-[#171D26] text-white'
                      : 'border border-[#E4E4E4] bg-[#F4F4F3] text-[#171D26]',
                  )}
                  onClick={() => setAvailability(option)}
                  style={{
                    boxShadow: option === availability ? '0px 1px 4px 0px #BABABA40' : undefined,
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="font-degular font-medium text-[14px] text-[#939393]">
              Hourly Rate: <span className="text-[#13C264] font-semibold">${rate}/hr</span>
            </h4>

            <Slider
              unitPrefix="$"
              unitSuffix="/hr"
              currentValue={rate}
              minAmount={10}
              maxAmount={200}
              onChange={setRate}
            />
          </div>
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
