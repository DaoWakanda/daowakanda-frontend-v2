import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  title: string;
  value: string;
  icon: ReactNode;
}

export const OverviewCard = (props: Props) => {
  return (
    <div
      className={classNames('flex flex-col p-5 bg-white border border-[#C6C5C5] rounded-xl flex-1')}
    >
      <div className="flex items-center gap-2">
        <div>{props.icon}</div>
        <p className="font-degularDisplay text-[#ABABAF] text-[20px]">{props.title}</p>
      </div>

      <p className="font-degularDisplay font-medium text-[32px] leading-[42px] text-black">
        {props.value}
      </p>
    </div>
  );
};
