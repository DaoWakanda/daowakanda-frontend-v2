import { PageMaxWidth } from '@/components/page-max-width';
import { LeaderBoardItem } from '@/interface/challenge.interface';
import React from 'react';

interface Props {
  data: LeaderBoardItem[] | undefined;
}

const TaskWinners = ({ data }: Props) => {
  function getInitials(fullName: string): string {
    const parts = fullName.trim().split(' ');

    if (parts.length < 2) {
      throw new Error('Full name must include at least a first and last name.');
    }

    const firstInitial = parts[0]?.[0]?.toUpperCase() || '';
    const lastInitial = parts[1]?.[0]?.toUpperCase() || '';

    return firstInitial + lastInitial;
  }
  const generatedColors = new Set<string>();

  function getUniqueBackgroundColor(): string {
    let color: string;

    do {
      color =
        '#' +
        Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padStart(6, '0');
    } while (generatedColors.has(color));

    generatedColors.add(color);
    return color;
  }

  return (
    <div className="bg-[#211F26] text-white rounded-[16px] py-4 px-4 w-[90%] md:w-[97%] mx-auto min-h-fit font-roboto">
      <div className="flex gap-8 p-4 border-b-2 mb-2 border-[#484646]">
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C12.9022 2 13.675 2.70814 14.5875 3.99725C15.4939 5.2777 15.9471 5.91793 15.6683 6.45896C15.3895 7 14.5733 7 12.9409 7H11.0591C9.42669 7 8.6105 7 8.33169 6.45896C8.05287 5.91793 8.50607 5.2777 9.41248 3.99725C10.325 2.70814 11.0978 2 12 2Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M5.82894 14H18.1711C18.9276 14 19.3059 14 19.4509 13.7508C19.5958 13.5017 19.4091 13.1765 19.0359 12.526C18.9358 12.3515 18.8353 12.1773 18.7346 12.0031C18.1692 11.0254 17.8866 10.5365 17.4209 10.2683C16.9552 10 16.3876 10 15.2523 10H8.74773C7.61242 10 7.04477 10 6.57911 10.2683C6.11344 10.5365 5.83076 11.0254 5.2654 12.0031C5.16471 12.1773 5.06424 12.3515 4.96412 12.526C4.59085 13.1765 4.40422 13.5017 4.54914 13.7508C4.69406 14 5.07236 14 5.82894 14Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M8.24328 22H15.7567C19.3099 22 21.0866 22 21.7671 20.8828C22.1944 20.1813 22.0132 19.3288 21.392 18.0487C21.1514 17.5529 21.0311 17.305 20.7877 17.1525C20.5442 17 20.2499 17 19.6613 17H4.33871C3.75012 17 3.45582 17 3.21234 17.1525C2.96886 17.305 2.84856 17.5529 2.60797 18.0487C1.98681 19.3288 1.80564 20.1813 2.23293 20.8828C2.91344 22 4.69006 22 8.24328 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <h2 className="text-lg font-bold">Task Winners</h2>
      </div>
      <div className="gap-2 py-2">
        <div className="flex justify-between items-center p-2 gap-16 rounded-lg bg-[#2E2D3580] text-[#8E8E93] text-sm">
          <span>Rank</span>
          <span>Points</span>
        </div>
        <div className="flex flex-col gap-1">
          {data?.map((item, index) => (
            <div className="flex gap-2 items-center p-2" key={index}>
              <span className="text-sm">{index + 1}</span>
              <div className="flex-1 flex items-center gap-2">
                <div className="w-[25px] aspect-square rounded-[50px] overflow-hidden">
                  <div
                    className="text-[12px] font-normal rounded-full p-1 text-white"
                    style={{ background: getUniqueBackgroundColor() }}
                  >
                    {getInitials(item?.name)}
                  </div>
                </div>
                <h3 className="capitalize font-normal text-[16px]">{item?.name}</h3>
              </div>
              <p className="text-sm">{item?.totalAlgos}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskWinners;
