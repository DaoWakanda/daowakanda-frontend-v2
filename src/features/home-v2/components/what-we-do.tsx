import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import { Icons } from './icons';

export const WhatWeDo = () => {
  return (
    <div className="bg-[#fafafa] min-h-svh py-16 flex flex-col justify-center">
      <PageMaxWidth>
        <div
          className={classNames(
            'flex flex-col pt-[200px] pb-6 px-6 bg-[#E2F0F1] rounded-[32px]',
            'gap-12',
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <Icons.WhatWeDo />
            </div>
            <div>
              <Icons.WhatWeDoText />
            </div>
          </div>

          <div className="flex gap-6">
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
        'flex flex-col gap-5 justify-between p-5 bg-white rounded-[8px] flex-1',
      )}
    >
      <div className="flex flex-col gap-1">
        <h4 className={classNames('text-black font-semibold text-[36px] font-degular')}>{title}</h4>
        <p
          className={classNames('text-[#8E8E93] font-[350] text-[16px] leading-[28px] font-avenir')}
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
