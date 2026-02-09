import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import { Icons } from './icons';

export const WhatWeDo = () => {
  return (
    <div className="bg-[#fafafa] min-h-svh py-8 flex flex-col justify-center lg:py-16">
      <PageMaxWidth>
        <div
          className={classNames(
            'flex flex-col bg-[#E2F0F1] rounded-2xl gap-8 px-4 pb-6 pt-12 lg:rounded-[32px] lg:pt-[200px] lg:px-6 lg:gap-12',
          )}
        >
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex justify-center">
              <Icons.WhatWeDo className="w-full max-w-[345px] lg:max-w-[542px]" />
            </div>
            <div className="flex justify-center">
              <Icons.WhatWeDoText className="w-full max-w-[345px] lg:max-w-[542px]" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            {whatWeDo.map((item) => (
              <WhatWeDoItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </PageMaxWidth>
    </div>
  );
};

interface WhatWeDoItemProps {
  title: string;
  description: string;
  image: string;
}

const WhatWeDoItem = ({ title, description, image }: WhatWeDoItemProps) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-4 justify-between p-4 bg-white rounded-[8px] flex-1 lg:gap-5 lg:p-5',
      )}
    >
      <div className="flex flex-col gap-1">
        <h4
          className={classNames(
            'text-black font-semibold font-degular text-[24px] leading-tight lg:text-[36px]',
          )}
        >
          {title}
        </h4>
        <p
          className={classNames(
            'text-[#8E8E93] font-[350] font-avenir text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
          )}
        >
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <img src={image} alt={title} className="w-full" />
      </div>
    </div>
  );
};

const whatWeDo: WhatWeDoItemProps[] = [
  {
    title: 'Build',
    description:
      'Daowakanda started as a community exploring decentralized coordination. We evolved because ideas alone don’t build sustainable ecosystems.',
    image:
      'https://res.cloudinary.com/dlinprg6k/image/upload/v1770555427/daowakanda/b58b0bbbd343665463e307a2aebd195b51a2a8ab_cw9z9s.png',
  },
  {
    title: 'Govern',
    description:
      'Decisions are made with complete transparency, thoroughly documented and enforced through well-structured processes led by the DAO.',
    image:
      'https://res.cloudinary.com/dlinprg6k/image/upload/v1770555428/daowakanda/3bc08ad84385d6172f0bd682f7b03967412dfb7c_ai39qj.png',
  },
  {
    title: 'Execute',
    description:
      'We focus on key milestones, timely delivery, accountability and measurable progress to ensure success',
    image:
      'https://res.cloudinary.com/dlinprg6k/image/upload/v1770555427/daowakanda/4f1a3abc7b8c250be88b47d125836a31375fc2f3_kokmte.png',
  },
];
