import classNames from 'classnames';
import { TalentProfileIcons } from './icons';

export const Reputation = () => {
  return (
    <div className="flex flex-col gap-3 p-5 bg-white border border-[#C6C5C5] rounded-2xl">
      <h4 className="text-sm font-degularDisplay font-medium text-[#231E15]">Reputation</h4>

      <div className="flex gap-1 items-center">
        <div>
          <TalentProfileIcons.OrangeStar />
        </div>
        <p className="font-degularDisplay font-medium text-xl text-[#231E15]">4.9/</p>
        <p className="font-degularDisplay font-medium text-[13px] text-[#231E15]">5.0</p>
      </div>

      <Progress label="On-time delivery" progress={96} />

      <Progress label="Client satisfaction" progress={98} />

      <Progress label="Job quality" progress={75} />
    </div>
  );
};

interface ProgressProps {
  label: string;
  progress: number;
}

export const Progress = (props: ProgressProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <h4 className="font-degularDisplay text-[15px] text-[#ABABAF]">{props.label}</h4>

        <h4 className={classNames('font-degularDisplay font-medium text-[15px] text-[#231E15]')}>
          {props.progress}%
        </h4>
      </div>

      <div className="flex bg-[#D9D9D9] overflow-hidden h-[15px] rounded-[100px] w-full">
        <div
          style={{
            width: `${props.progress}%`,
          }}
          className="h-full bg-[#FF9432]"
        ></div>
      </div>
    </div>
  );
};
