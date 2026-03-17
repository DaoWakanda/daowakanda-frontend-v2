import { Input } from '@/components/input';
import { TextArea } from '@/components/textarea';
import classNames from 'classnames';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

interface Props {
  onContinue: () => void;
}

export const BasicInfo = ({ onContinue }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="font-degular font-semibold text-[#1F1F1F] text-[30px] text-center">
            Tell us about yourself
          </h2>
          <p className="font-degular font-medium text-[#2F3640] text-[16px] text-center">
            Let us know who you are.
          </p>
        </div>

        <Input label="Name" placeholder="What should we call you?" />

        <Input label="Professional Title" placeholder="What's your job?" />

        <Input label="Location" placeholder="Where are you located?" />

        <TextArea
          label="Bio"
          placeholder="Tell us about your experience and what drives you..."
          rows={5}
        />
      </div>

      <div className="flex items-center justify-between">
        <button className="flex items-center gap-1 text-[#919094] text-base font-degular font-semibold">
          <MdKeyboardArrowLeft />
          <span>Back</span>
        </button>

        <button
          className={classNames(
            'flex items-center gap-1 text-[#FFF] text-base font-degular font-semibold',
            'w-[150px] h-[50px] justify-center bg-[#000000] rounded-[1000px]',
          )}
        >
          <span>Continue</span>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};
